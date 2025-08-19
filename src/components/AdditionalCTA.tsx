import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AdditionalCTA = () => {
  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent-foreground">
            ⚡️ Još nisi rezervirao garažu? Klikni sada i osiguraj staru cijenu, besplatnu izmjeru i montažu za 7 dana.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="hero-gradient text-white hover:scale-105 smooth-transition hero-shadow px-8 py-6 rounded-full text-lg"
            >
              ✅ Zatraži ponudu
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white smooth-transition px-8 py-6 rounded-full text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 Nazovi odmah
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalCTA;