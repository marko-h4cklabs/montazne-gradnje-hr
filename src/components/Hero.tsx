import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroGaraza from "@/assets/hero-garaza.jpg";
import heroGarazaAlt from "@/assets/hero-garaza-alt.jpg";
import heroBungalovModern from "@/assets/hero-bungalov-modern.jpg";
import heroBungalovAlt from "@/assets/hero-bungalov-alt.jpg";
import galerijaBungalov from "@/assets/galerija-bungalov.jpg";
import galerijaGaraza from "@/assets/galerija-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";

const Hero = () => {
  const images = [
    { src: heroGaraza, alt: "Montažna garaža" },
    { src: heroGarazaAlt, alt: "Industrijska garaža" },
    { src: heroBungalovModern, alt: "Moderni montažni bungalov" },
    { src: heroBungalovAlt, alt: "Savremeni bungalov" },
    { src: galerijaBungalov, alt: "Galerija bungalova" },
    { src: galerijaGaraza, alt: "Galerija garaža" },
    { src: galerijaHala, alt: "Industrijske hale" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ 
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` 
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-full flex-shrink-0" style={{ width: `${100 / images.length}%` }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-primary">Montažne garaže</span><span className="hidden md:inline"> – povoljne i kvalitetne garaže od lima</span> <br className="hidden md:block" />
          <span className="block md:hidden text-primary">bungalovi i hale</span>
          <span className="block md:hidden text-lg">– povoljne i kvalitetne garaže od lima</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed hidden md:block">
          <span className="text-primary font-bold">Montažne garaže, bungalovi i hale</span> — postavljene za par dana, bez stresa <br />
          <strong>bez muljanja, bez dodatnih troškova.</strong>
        </p>
        
        <Button 
          size="lg" 
          onClick={() => {
            const targetElement = document.getElementById('kontakt');
            if (targetElement) {
              const offset = 80;
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
          }}
          className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-base px-6 py-4 rounded-full font-semibold"
        >
          ➡️ Pošalji upit – odgovaramo u roku od 24h
        </Button>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => {
            window.scrollTo({ 
              top: window.innerHeight, 
              behavior: 'smooth' 
            });
          }}
          className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 animate-[bounce_3s_infinite]"
          aria-label="Scroll down"
        >
          <ChevronDown size={40} className="md:w-8 md:h-8" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
};

export default Hero;