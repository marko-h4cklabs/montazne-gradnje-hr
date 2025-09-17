import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    mjestoPrebivalidta: "",
    // Mjere objekta
    width: "",
    depth: "",
    height: "",
    // Dropdown fields
    roofType: "",
    roofMaterial: "",
    roofColor: "",
    wallMaterial: "",
    wallColor: "",
    drainage: "",
    garageDoorColor: "",
    garageDoorSize: "",
    pvcDoorType: "",
    pvcDoorColor: "",
    pvcWindowSize: "",
    pvcWindowColor: "",
    additionalInfo: "",
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
        // Format all the form data
        mjestoPrebivalidta: formData.mjestoPrebivalidta,
        width: formData.width,
        depth: formData.depth,
        height: formData.height,
        roofType: formData.roofType,
        roofMaterial: formData.roofMaterial,
        roofColor: formData.roofColor,
        wallMaterial: formData.wallMaterial,
        wallColor: formData.wallColor,
        drainage: formData.drainage,
        garageDoorColor: formData.garageDoorColor,
        garageDoorSize: formData.garageDoorSize,
        pvcDoorType: formData.pvcDoorType,
        pvcDoorColor: formData.pvcDoorColor,
        pvcWindowSize: formData.pvcWindowSize,
        pvcWindowColor: formData.pvcWindowColor,
        additionalInfo: formData.additionalInfo,
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: emailData
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
        <Label htmlFor="mjestoPrebivalidta">Mjesto Prebivališta *</Label>
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
        <h3 className="text-lg font-semibold mb-4">Podaci I mjere objekta</h3>
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

      {/* Dropdown Fields */}
      <div>
        <Label>Vrsta krovova i padina *</Label>
        <Select value={formData.roofType} onValueChange={(value) => handleInputChange("roofType", value)} required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Odaberite vrstu krova" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jednovodni-krov">jednovodni krov</SelectItem>
            <SelectItem value="dvovodni-krov">dvovodni krov</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Krov *</Label>
          <Select value={formData.roofMaterial} onValueChange={(value) => handleInputChange("roofMaterial", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite materijal krova" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="termonapel-30mm">termonapel 30mm</SelectItem>
              <SelectItem value="termopanel-50mm">termopanel 50mm</SelectItem>
              <SelectItem value="imitacija-crijepa">Imitacija crijepa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Boja Krova *</Label>
          <Select value={formData.roofColor} onValueChange={(value) => handleInputChange("roofColor", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju krova" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bijeli">bijeli</SelectItem>
              <SelectItem value="crveni">crveni</SelectItem>
              <SelectItem value="antracit">antracit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Zid *</Label>
          <Select value={formData.wallMaterial} onValueChange={(value) => handleInputChange("wallMaterial", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite materijal zida" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="termopanel-30mm">termopanel 30mm</SelectItem>
              <SelectItem value="termopanel-50mm">termopanel 50mm</SelectItem>
              <SelectItem value="termopanel-80mm">termopanel 80mm</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Boja Zida *</Label>
          <Select value={formData.wallColor} onValueChange={(value) => handleInputChange("wallColor", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju zida" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bijela">bijela</SelectItem>
              <SelectItem value="antracit">antracit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label>Odvodnja krovne vode *</Label>
        <Select value={formData.drainage} onValueChange={(value) => handleInputChange("drainage", value)} required>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Odaberite opciju" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="da">da</SelectItem>
            <SelectItem value="ne">ne</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Only show garage door fields for garages and halls, not for bungalows */}
      {selectedService !== "bungalovi" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Garažna sekcijska vrata *</Label>
            <Select value={formData.garageDoorColor} onValueChange={(value) => handleInputChange("garageDoorColor", value)} required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Odaberite boju vrata" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bijela">bijela</SelectItem>
                <SelectItem value="antracit">antracit</SelectItem>
                <SelectItem value="zlatni-hrast">zlatni hrast</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="garageDoorSize">Garažna sekcijska vrata - Sirina x Visina *</Label>
            <Input
              id="garageDoorSize"
              value={formData.garageDoorSize}
              onChange={(e) => handleInputChange("garageDoorSize", e.target.value)}
              placeholder="npr. 240x210"
              className="mt-1"
              required
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>PVC vrata vrsta *</Label>
          <Select value={formData.pvcDoorType} onValueChange={(value) => handleInputChange("pvcDoorType", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite vrstu PVC vrata" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jednokrilna">jednokrilna</SelectItem>
              <SelectItem value="dvokrilna">dvokrilna</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>PVC vrata boja *</Label>
          <Select value={formData.pvcDoorColor} onValueChange={(value) => handleInputChange("pvcDoorColor", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju PVC vrata" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="antracit">antracit</SelectItem>
              <SelectItem value="bijela">bijela</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>PVC prozor dimenzije *</Label>
          <Select value={formData.pvcWindowSize} onValueChange={(value) => handleInputChange("pvcWindowSize", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite dimenzije prozora" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="60x60">60x60</SelectItem>
              <SelectItem value="100x100">100x100</SelectItem>
              <SelectItem value="prilagođeno">Prilagođeno</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>PVC prozor boja *</Label>
          <Select value={formData.pvcWindowColor} onValueChange={(value) => handleInputChange("pvcWindowColor", value)} required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Odaberite boju prozora" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bijela">bijela</SelectItem>
              <SelectItem value="antracit">antracit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="additionalInfo">Dodatne informacije</Label>
        <Textarea
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
          placeholder="Unesite dodatne informacije..."
          className="mt-1"
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