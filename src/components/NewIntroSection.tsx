import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const NewIntroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isPonudaDialogOpen, setIsPonudaDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleDetailsClick = () => {
    navigate("/detaljne-informacije");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Greška",
        description: "Molimo popunite sva obavezna polja",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send to your backend/supabase
    console.log("Form submitted:", formData);
    
    toast({
      title: "Uspješno poslano!",
      description: "Kontaktirat ćemo vas uskoro.",
    });

    setIsPonudaDialogOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="relative bg-[hsl(220,60%,30%)] text-white">
      {/* Wave cut design */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 Q300,60 600,30 T1200,0 L1200,60 L0,60 Z" 
            fill="hsl(220,60%,30%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Opening text */}
        <div className="max-w-4xl mx-auto mb-1 px-4">
          <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            <strong>Dragi graditelju montažnog objekta,</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            dajemo svakom vlasniku dodatnu vrijednost njegovom automobilu i dva poklon bonusa ako se odazovete na niže navedenu ponudu.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            Svake godine, posebno u zimskoj sezoni, u hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
          </p>
          
          <div className="text-center flex gap-4 justify-center flex-wrap">
            <Button onClick={handleDetailsClick} size="lg" className="bg-white text-[hsl(220,60%,30%)] hover:bg-white/90">
              Pročitajte više
            </Button>
            <Button onClick={() => setIsPonudaDialogOpen(true)} size="lg" className="bg-[hsl(var(--beriko-yellow))] text-[hsl(220,60%,30%)] hover:bg-[hsl(var(--beriko-yellow))]/90">
              Ponuda
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isPonudaDialogOpen} onOpenChange={setIsPonudaDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Zatražite ponudu</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ime i prezime *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Poruka (opcionalno)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-[hsl(var(--beriko-yellow))] text-[hsl(220,60%,30%)] hover:bg-[hsl(var(--beriko-yellow))]/90">
              Pošalji zahtjev
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewIntroSection;