import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garaza.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moderna montažna garaža"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Prilagodljive montažne <br />
          <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
            garaže, hale i bungalovi
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Kvalitetna rješenja za vaše potrebe s brzom montažom i trajnim konstrukcijama
        </p>
        
        <Button 
          size="lg" 
          className="hero-gradient text-white hover:scale-105 smooth-transition hero-shadow text-lg px-8 py-6 rounded-full"
        >
          Zatraži besplatnu ponudu
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;