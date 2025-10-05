import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Warehouse, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroGarazaAlt from "@/assets/hero-garaza-alt.jpg";
import heroBungalovModern from "@/assets/hero-bungalov-modern.jpg";
import heroBungalovAlt from "@/assets/hero-bungalov-alt.jpg";
import galerijaBungalov from "@/assets/galerija-bungalov.jpg";
import galerijaGaraza from "@/assets/galerija-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";

const Hero = () => {
  const images = [
    { src: galerijaHala, alt: "Industrijske hale" },
    { src: heroGarazaAlt, alt: "Industrijska garaža" },
    { src: heroBungalovModern, alt: "Moderni montažni bungalov" },
    { src: heroBungalovAlt, alt: "Savremeni bungalov" },
    { src: galerijaBungalov, alt: "Galerija bungalova" },
    { src: galerijaGaraza, alt: "Galerija garaža" },
    { src: "/lovable-uploads/fcc31405-5071-46a1-ac40-b422991656a3.png", alt: "Moderna montažna kuća" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Garaže",
      icon: Car,
      path: "/garaze-upit",
      description: "Zatražite ponudu za garažu"
    },
    {
      title: "Kuće i Bungalovi",
      icon: Home,
      path: "/kuce-upit",
      description: "Zatražite ponudu za kuću"
    },
    {
      title: "Hale",
      icon: Warehouse,
      path: "/hale-upit",
      description: "Zatražite ponudu za halu"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5200);

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

      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-4">
              Izaberite tip objekta
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {services.map((service) => (
              <button
                key={service.path}
                onClick={() => navigate(service.path)}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;