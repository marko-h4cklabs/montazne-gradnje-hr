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
      <div className="md:hidden">

        {/* Scrolling Images */}
        <div className="relative h-[43vh] overflow-hidden">
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
          
          {/* Mobile Headline Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-2xl font-medium leading-tight text-foreground">
                <div className="text-primary">Montažne <span className="font-black">hale</span>, montažne <span className="font-black">garaže</span> i</div>
                <div className="text-primary">montažne <span className="font-black">kuće</span></div>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Text below slider */}
        <div className="px-4 py-4 bg-background text-center">
          <p className="text-lg text-foreground leading-relaxed">
            Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
          </p>
        </div>
        
        {/* Button below slider */}
        <div className="text-center py-6 bg-background">
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

      {/* Desktop Layout */}
      <section className="hidden md:flex relative h-[65vh] items-center justify-center overflow-hidden">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary font-bold">Montažne hale, montažne garaže i montažne kuće</span>
          </h1>
        </div>
      </section>
      
      {/* Text below desktop slider */}
      <div className="hidden md:block px-4 py-6 bg-background text-center">
        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
          Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
        </p>
      </div>
      
      {/* Desktop Button below hero */}
      <div className="hidden md:block text-center py-8 bg-background">
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
    </>
  );
};

export default Hero;