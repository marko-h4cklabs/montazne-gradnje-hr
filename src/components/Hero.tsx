import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroGarazaAlt from "@/assets/hero-garaza-alt.jpg";
import heroBungalovModern from "@/assets/hero-bungalov-modern.jpg";
import heroBungalovAlt from "@/assets/hero-bungalov-alt.jpg";
import galerijaBungalov from "@/assets/galerija-bungalov.jpg";
import galerijaGaraza from "@/assets/galerija-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";

const Hero = () => {
  const images = [
    { src: "/lovable-uploads/fcc31405-5071-46a1-ac40-b422991656a3.png", alt: "Moderna montažna kuća" },
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
    }, 6500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden mt-20">
        {/* Headlines Section */}
        <div className="bg-gradient-to-b from-primary/5 to-white px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4 leading-tight text-foreground">
            <span className="text-primary font-bold">Montažne hale, garaže i montažne kuće</span>
          </h1>
        </div>

        {/* Scrolling Images with Static Button */}
        <div className="relative h-[50vh] overflow-hidden">
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
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
            <p className="text-white text-base text-center mb-6 leading-relaxed max-w-lg drop-shadow-lg">
              Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
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
              className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow px-6 py-4 rounded-full font-semibold"
            >
              📧 Pošaljite upit
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <section className="hidden md:flex relative h-[65vh] items-center justify-center overflow-hidden mt-20">
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white/90">
            <span className="text-primary font-bold">Montažne hale, garaže i montažne kuće</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
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
            ➡️ Pošaljite nam upit – odgovaramo u roku od 24h
          </Button>
        </div>
      </section>
    </>
  );
};

export default Hero;