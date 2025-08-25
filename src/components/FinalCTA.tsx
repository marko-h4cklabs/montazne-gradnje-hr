import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ContactForm from "./ContactForm";

const FinalCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary-foreground">
            Garaža na koju će susjedi biti ljubomorni
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 leading-relaxed">
            Već ti je dosta kiše po autu i ideja koje nikako da se realiziraju?
          </p>
          
          <p className="text-lg mb-12 text-secondary-foreground/80">
            Ako ti treba garaža, bungalov ili hala — <strong>sad je najjeftinije i najbrže što će ikada biti.</strong>
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-xl px-12 py-6 rounded-full font-bold"
            onClick={() => setIsContactFormOpen(true)}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Pošalji upit – Rješenje stiže brzo kao i naši majstori
          </Button>
          
          <CountdownTimer 
            initialDays={7}
            urgentText="⚡ OGRANIČENA PONUDA - SAMO 7 DANA!"
            discountText="🔥 10% POPUST NA SVE PROIZVODE"
            variant="light"
          />
        </div>
      </div>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Pošaljite nam upit
            </DialogTitle>
          </DialogHeader>
          <ContactForm onClose={() => setIsContactFormOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FinalCTA;