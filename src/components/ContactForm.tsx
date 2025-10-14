import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormProps {
  onClose: () => void;
  selectedService?: string;
}

const ContactForm = ({ onClose, selectedService }: ContactFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    mjestoPrebivalidta: "",
    // Mjere objekta
    width: "",
    depth: "",
    height: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        selectedService,
        mjestoPrebivalidta: formData.mjestoPrebivalidta,
        width: formData.width,
        depth: formData.depth,
        height: formData.height,
        message: formData.message,
      };

      console.log("Submitting contact form...", { selectedService });

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: emailData
      });

      if (error) {
        console.error("Edge function error:", error);
        throw error;
      }

      console.log("Form submitted successfully, redirecting to /hvala");
      
      // Success - redirect to thank you page for conversion tracking
      window.location.href = "/hvala";
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Greška",
        description: "Došlo je do greške prilikom slanja. Molimo pokušajte ponovo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">Ime *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="lastName">Prezime *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Telefon *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email adresa *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="mjestoPrebivalidta">Mjesto, ulica i broj *</Label>
        <Input
          id="mjestoPrebivalidta"
          value={formData.mjestoPrebivalidta}
          onChange={(e) => handleInputChange("mjestoPrebivalidta", e.target.value)}
          required
          className="mt-1"
        />
      </div>

      {/* Podaci I mjere objekta */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Podaci i mjere objekta</h3>
        <p className="text-sm text-muted-foreground mb-4">*mjere u cm</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="width">Širina *</Label>
          <Input
            id="width"
            value={formData.width}
            onChange={(e) => handleInputChange("width", e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="depth">Dubina *</Label>
          <Input
            id="depth"
            value={formData.depth}
            onChange={(e) => handleInputChange("depth", e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="height">Visina *</Label>
          <Input
            id="height"
            value={formData.height}
            onChange={(e) => handleInputChange("height", e.target.value)}
            className="mt-1"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Dodatna poruka</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Unesite dodatne informacije ili pitanja..."
          className="mt-1 min-h-[100px]"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1"
        >
          Odustani
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Šalje se...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Pošalji upit
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;