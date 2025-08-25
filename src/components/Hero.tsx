import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroGaraza from "@/assets/hero-garaza.jpg";
import heroGarazaAlt from "@/assets/hero-garaza-alt.jpg";
import heroBungalovModern from "@/assets/hero-bungalov-modern.jpg";
import heroBungalovAlt from "@/assets/hero-bungalov-alt.jpg";

const Hero = () => {
  const images = [
    { src: heroGaraza, alt: "Montažna garaža" },
    { src: heroGarazaAlt, alt: "Industrijska garaža" },
    { src: heroBungalovModern, alt: "Moderni montažni bungalov" },
    { src: heroBungalovAlt, alt: "Savremeni bungalov" }
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
          Kvalitetno, Brzo, Isplativo <br />
          <span className="text-primary text-2xl md:text-4xl lg:text-5xl">Riješenja za one koji traže kvalitetnu uslugu</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Montažne garaže, bungalovi i hale — postavljene za par dana, bez stresa <br />
          <strong>bez muljanja, bez dodatnih troškova.</strong>
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-lg px-10 py-6 rounded-full font-semibold"
        >
          ➡️ Pošalji upit – odgovaramo u roku od 24h
        </Button>
      </div>
    </section>
  );
};

export default Hero;