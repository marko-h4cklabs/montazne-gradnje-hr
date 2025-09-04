import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";


interface ContactFormProps {
  onClose: () => void;
  selectedService?: string;
}

const ContactForm = ({ onClose, selectedService }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
    contactPreference: "email",
    // Optional detailed fields
    address: "",
    location: "",
    width: "",
    length: "",
    height: "",
    roofType: "",
    roofCovering: "",
    wallIsolation: "",
    wallColor: "",
    garageDoors: "",
    doorWidth: "",
    doorHeight: "",
    pvcWindowsDimensions: "",
    pvcWindowsNumber: "",
    pvcDoorDimensions: "",
    pvcDoorNumber: "",
    ventilation: "",
    electricalInstallations: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }
      
      toast({
        title: "Upit uspješno poslan!",
        description: "Hvala na upitu. Kontaktiraćemo vas u najkraćem mogućem roku.",
        variant: "default",
      });
      onClose();
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Greška",
        description: "Došlo je do greške prilikom slanja. Molimo pokušajte ponovo.",
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

      {selectedService && (
        <>
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Dodatne informacije (opcionalno)</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="address">Adresa</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="location">Lokacija gradilišta</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Adresa ili Google lokacija"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label className="text-base font-semibold">Mjere u cm</Label>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div>
                <Label htmlFor="width">Širina</Label>
                <Input
                  id="width"
                  value={formData.width}
                  onChange={(e) => handleInputChange("width", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="length">Dubina</Label>
                <Input
                  id="length"
                  value={formData.length}
                  onChange={(e) => handleInputChange("length", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="height">Visina</Label>
                <Input
                  id="height"
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  placeholder="Ostale mjere (nadstrešnice ako je ima i sl.)"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="roofType">Vrsta krova i padina</Label>
              <select
                id="roofType"
                value={formData.roofType}
                onChange={(e) => handleInputChange("roofType", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Vrsta krova i padina</option>
                <option value="jednosmerni">Jednosmerni</option>
                <option value="dvosmerni">Dvosmerni</option>
              </select>
            </div>
            <div>
              <Label htmlFor="roofCovering">Pokrov</Label>
              <select
                id="roofCovering"
                value={formData.roofCovering}
                onChange={(e) => handleInputChange("roofCovering", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Pokrov</option>
                <option value="trapezni-lim">Trapezni lim</option>
                <option value="crijep">Crijep</option>
                <option value="ostalo">Ostalo</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="wallIsolation">Zidna izolacija</Label>
              <select
                id="wallIsolation"
                value={formData.wallIsolation}
                onChange={(e) => handleInputChange("wallIsolation", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Ukrasni limovi</option>
                <option value="da">Da</option>
                <option value="ne">Ne</option>
              </select>
            </div>
            <div>
              <Label htmlFor="wallColor">Krovni oluk</Label>
              <select
                id="wallColor"
                value={formData.wallColor}
                onChange={(e) => handleInputChange("wallColor", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Krovni oluk</option>
                <option value="da">Da</option>
                <option value="ne">Ne</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="garageDoors">Garažna sekcijska vrata</Label>
              <select
                id="garageDoors"
                value={formData.garageDoors}
                onChange={(e) => handleInputChange("garageDoors", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Boja</option>
                <option value="bijela">Bijela</option>
                <option value="siva">Siva</option>
                <option value="smedja">Smeđa</option>
                <option value="zelena">Zelena</option>
              </select>
            </div>
            <div>
              <Label htmlFor="doorWidth">Širina x visina</Label>
              <Input
                id="doorWidth"
                value={formData.doorWidth}
                onChange={(e) => handleInputChange("doorWidth", e.target.value)}
                placeholder="Upiši širinu i visinu"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pvcWindowsDimensions">PVC vrata (dimenzije)</Label>
              <select
                id="pvcWindowsDimensions"
                value={formData.pvcWindowsDimensions}
                onChange={(e) => handleInputChange("pvcWindowsDimensions", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Dimenzije</option>
                <option value="80x200">80x200</option>
                <option value="90x200">90x200</option>
                <option value="custom">Prilagođeno</option>
              </select>
            </div>
            <div>
              <Label htmlFor="pvcWindowsNumber">PVC vrata (komada)</Label>
              <Input
                id="pvcWindowsNumber"
                value={formData.pvcWindowsNumber}
                onChange={(e) => handleInputChange("pvcWindowsNumber", e.target.value)}
                placeholder="Upiši broj komada"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="pvcDoorDimensions">PVC prozor (dimenzije)</Label>
              <select
                id="pvcDoorDimensions"
                value={formData.pvcDoorDimensions}
                onChange={(e) => handleInputChange("pvcDoorDimensions", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Dimenzije</option>
                <option value="60x60">60x60</option>
                <option value="80x80">80x80</option>
                <option value="custom">Prilagođeno</option>
              </select>
            </div>
            <div>
              <Label htmlFor="pvcDoorNumber">PVC prozor (komada)</Label>
              <Input
                id="pvcDoorNumber"
                value={formData.pvcDoorNumber}
                onChange={(e) => handleInputChange("pvcDoorNumber", e.target.value)}
                placeholder="Upiši broj komada"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ventilation">Ventilacija</Label>
              <select
                id="ventilation"
                value={formData.ventilation}
                onChange={(e) => handleInputChange("ventilation", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Ventilacija</option>
                <option value="da">Da</option>
                <option value="ne">Ne</option>
              </select>
            </div>
            <div>
              <Label htmlFor="electricalInstallations">Električne instalacije</Label>
              <select
                id="electricalInstallations"
                value={formData.electricalInstallations}
                onChange={(e) => handleInputChange("electricalInstallations", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="">Električne instalacije</option>
                <option value="da">Da</option>
                <option value="ne">Ne</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="additionalInfo">Dodatne informacije</Label>
            <Textarea
              id="additionalInfo"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Dodatne informacije"
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">
              * Polja označena zvjezdicom su obavezna
            </p>
          </div>
        </>
      )}

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