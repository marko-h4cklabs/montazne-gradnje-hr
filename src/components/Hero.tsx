import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroGaraza from "@/assets/hero-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";
import galerijaBungalov from "@/assets/galerija-bungalov.jpg";

const Hero = () => {
  const images = [
    { src: heroGaraza, alt: "Moderna montažna garaža" },
    { src: galerijaHala, alt: "Montažna hala" },
    { src: galerijaBungalov, alt: "Montažni bungalov" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scrolling Background Images Timeline */}
      <div className="absolute inset-0 z-0">
        <div 
          className="flex w-[300%] h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * (100 / 3)}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/3 h-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
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
        <svg 
          className="w-12 h-12 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;