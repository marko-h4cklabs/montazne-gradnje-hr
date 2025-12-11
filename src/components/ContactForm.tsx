import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    // Dimenzije objekta (m)
    width: "",
    length: "",
    height: "",
    // Sekcijska vrata
    gateWidth: "",
    gateHeight: "",
    // Krov
    roofType: "",
    // Boje
    roofColor: "",
    wallColor: "",
    gateColor: "",
    // PVC opcije
    pvcDoor: "",
    pvcWindow: "",
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
        length: formData.length,
        height: formData.height,
        gateWidth: formData.gateWidth,
        gateHeight: formData.gateHeight,
        roofType: formData.roofType,
        roofColor: formData.roofColor,
        wallColor: formData.wallColor,
        gateColor: formData.gateColor,
        pvcDoor: formData.pvcDoor,
        pvcWindow: formData.pvcWindow,
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

  const colorOptions = [
    { value: "bijela", label: "Bijela" },
    { value: "antracit", label: "Antracit" },
    { value: "crvena", label: "Crvena" },
  ];

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
        <Label htmlFor="mjestoPrebivalidta">Grad, ulica i broj *</Label>
        <Input
          id="mjestoPrebivalidta"
          value={formData.mjestoPrebivalidta}
          onChange={(e) => handleInputChange("mjestoPrebivalidta", e.target.value)}
          required
          className="mt-1"
        />
      </div>

      {/* Dimenzije objekta */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Dimenzije objekta</h3>
        <p className="text-sm text-muted-foreground mb-4">*mjere u m</p>
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
          <Label htmlFor="length">Duljina *</Label>
          <Input
            id="length"
            value={formData.length}
            onChange={(e) => handleInputChange("length", e.target.value)}
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

      {/* Sekcijska vrata */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Sekcijska vrata</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="gateWidth">Širina (m) *</Label>
          <Input
            id="gateWidth"
            value={formData.gateWidth}
            onChange={(e) => handleInputChange("gateWidth", e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="gateHeight">Visina (m) *</Label>
          <Input
            id="gateHeight"
            value={formData.gateHeight}
            onChange={(e) => handleInputChange("gateHeight", e.target.value)}
            className="mt-1"
            required
          />
        </div>
      </div>

      {/* Krov */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Krov *</h3>
        <RadioGroup
          value={formData.roofType}
          onValueChange={(value) => handleInputChange("roofType", value)}
          className="flex gap-6"
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1-voda" id="roof-1" />
            <Label htmlFor="roof-1" className="cursor-pointer">1 voda</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2-vode" id="roof-2" />
            <Label htmlFor="roof-2" className="cursor-pointer">2 vode</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Boje */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Boja</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="roofColor">Krova *</Label>
          <Select
            value={formData.roofColor}
            onValueChange={(value) => handleInputChange("roofColor", value)}
            required
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju" />
            </SelectTrigger>
            <SelectContent>
              {colorOptions.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="wallColor">Zida *</Label>
          <Select
            value={formData.wallColor}
            onValueChange={(value) => handleInputChange("wallColor", value)}
            required
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju" />
            </SelectTrigger>
            <SelectContent>
              {colorOptions.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="gateColor">Sekcijskih vrata *</Label>
          <Select
            value={formData.gateColor}
            onValueChange={(value) => handleInputChange("gateColor", value)}
            required
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju" />
            </SelectTrigger>
            <SelectContent>
              {colorOptions.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* PVC opcije */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Dodatne opcije</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label className="mb-3 block">PVC vrata jednokrilna? *</Label>
          <RadioGroup
            value={formData.pvcDoor}
            onValueChange={(value) => handleInputChange("pvcDoor", value)}
            className="flex gap-6"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="da" id="pvc-door-da" />
              <Label htmlFor="pvc-door-da" className="cursor-pointer">DA</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ne" id="pvc-door-ne" />
              <Label htmlFor="pvc-door-ne" className="cursor-pointer">NE</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-3 block">PVC prozor? *</Label>
          <RadioGroup
            value={formData.pvcWindow}
            onValueChange={(value) => handleInputChange("pvcWindow", value)}
            className="flex gap-6"
            required
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="da" id="pvc-window-da" />
              <Label htmlFor="pvc-window-da" className="cursor-pointer">DA</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ne" id="pvc-window-ne" />
              <Label htmlFor="pvc-window-ne" className="cursor-pointer">NE</Label>
            </div>
          </RadioGroup>
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
