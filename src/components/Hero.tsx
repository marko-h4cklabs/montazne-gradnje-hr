import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ServiceSelection from "./ServiceSelection";
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
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
  };

  const handleCloseDialog = () => {
    setIsServiceDialogOpen(false);
    setSelectedService(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5700);

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
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
          
        </div>
        
        {/* Headline below slider */}
        <div className="px-4 py-6 bg-background text-center">
          <h1 className="text-3xl font-bold leading-tight mb-4 text-[hsl(var(--beriko-blue))]">
            Montažne Hale, Montažne Garaže<br />i Montažne Kuće
          </h1>
          <p className="text-lg text-foreground leading-relaxed">
            Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
          </p>
        </div>
        
        {/* Button below slider */}
        <div className="text-center py-6 bg-background">
          <Button 
            size="lg" 
            onClick={() => {
              (window as any).gtag_report_conversion();
              setIsServiceDialogOpen(true);
            }}
            className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow px-6 py-4 rounded-full font-semibold"
          >
            📧 Pošaljite upit
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <section className="hidden md:flex relative h-[65vh] items-center justify-center overflow-hidden bg-background">
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
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Headline below desktop slider */}
      <div className="hidden md:block px-4 py-8 bg-background text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[hsl(var(--beriko-blue))]">
          Montažne Hale, Montažne Garaže<br />i Montažne Kuće
        </h1>
        <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
          Kvalitetne montažne konstrukcije - postavljene za par dana, bez stresa bez čekanja i <strong>bez dodatnih troškova.</strong>
        </p>
      </div>
      
      {/* Desktop Button below hero */}
      <div className="hidden md:block text-center py-8 bg-background">
        <Button 
          size="lg" 
          onClick={() => {
            (window as any).gtag_report_conversion();
            setIsServiceDialogOpen(true);
          }}
          className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-base px-6 py-4 rounded-full font-semibold"
        >
          ➡️ Pošaljite nam upit – odgovaramo u roku od 24h
        </Button>
      </div>

      <Dialog open={isServiceDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Zatražite ponudu za:
            </DialogTitle>
          </DialogHeader>
          <ServiceSelection onServiceSelect={handleServiceSelect} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;