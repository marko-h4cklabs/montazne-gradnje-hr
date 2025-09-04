import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ContactForm from "./ContactForm";
import ServiceSelection from "./ServiceSelection";

const FinalCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleCloseDialog = () => {
    setIsContactFormOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary-foreground">
            Garaža sa kojom ćete biti zadovoljni
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 leading-relaxed">
            Dosta ti je kiše po autu i ideja koje se nikad ne ostvare?
          </p>
          
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-xl px-12 py-6 rounded-full font-bold"
            onClick={() => setIsContactFormOpen(true)}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            <span className="hidden md:inline">Pošalji upit – Rješenje stiže brzo kao i naši majstori</span>
            <span className="block md:hidden text-center">
              Pošalji upit
            </span>
          </Button>
          
          <CountdownTimer 
            endDate={new Date('2025-09-30T23:59:59')}
            urgentText="🔥 JESENSKA PONUDA - SAMO OVAJ MJESEC!"
            discountText="BESPLATNA MONTAŽA"
            variant="light"
          />
        </div>
      </div>

      <Dialog open={isContactFormOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {!selectedService ? "Zatražite ponudu za:" : "Pošaljite nam upit"}
            </DialogTitle>
          </DialogHeader>
          {!selectedService ? (
            <ServiceSelection onServiceSelect={handleServiceSelect} />
          ) : (
            <ContactForm 
              onClose={handleCloseDialog} 
              selectedService={selectedService}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCTA;