import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
    contactPreference: "email"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://kqvpjdhlwktaokzksasl.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxdnBqZGhsd2t0YW9remtzYXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNzMxOTMsImV4cCI6MjA1MDY0OTE5M30.O7WfRcVCnHsYcQKdQWJ3IZHQq1Nzc-_9VhlgQqd_4KI',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Uspješno poslano!",
          description: "Vaš upit je uspješno poslan. Uskoro ćemo vas kontaktirati.",
        });
        onClose();
      } else {
        const errorText = await response.text();
        console.error('Response error:', response.status, errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Greška",
        description: "Došlo je do greške prilikom slanja upita. Molimo pokušajte ponovno.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
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

      <div>
        <Label htmlFor="description">Opis usluge koju trebate *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Opišite detaljno što trebate (garaža, bungalov, hala, dimenzije, lokacija...)"
          required
          className="mt-1 min-h-[100px]"
        />
      </div>

      <div>
        <Label>Kako biste željeli da vas kontaktiramo? *</Label>
        <RadioGroup
          value={formData.contactPreference}
          onValueChange={(value) => handleInputChange("contactPreference", value)}
          className="mt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone-contact" />
            <Label htmlFor="phone-contact">Telefon</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email-contact" />
            <Label htmlFor="email-contact">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="both-contact" />
            <Label htmlFor="both-contact">I telefon i email</Label>
          </div>
        </RadioGroup>
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