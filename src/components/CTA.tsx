import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const CTA = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-8">
            <p className="text-destructive font-semibold text-lg mb-2">
              ⚠️ Zbog velike potražnje, ostalo samo 4 garaže po trenutnoj cijeni. Sljedeća serija ide 23% skuplje. Rezerviraj prije nego istekne timer.
            </p>
            <CountdownTimer />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Spreman za svoj novi objekt?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas za besplatnu konsultaciju i ponudu. 
            Naš tim stručnjaka spremno je pomoći vam realizirati vaš projekt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="hero-gradient text-white hover:scale-105 smooth-transition hero-shadow px-8 py-6 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Nazovi nas
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white smooth-transition px-8 py-6 rounded-full text-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Pošalji upit
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>📞 <strong>+385 91 234 5678</strong> | ✉️ <strong>info@montazne-garaze.hr</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;