import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Warehouse, Car, Truck, Ruler, Key, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import heroSlider1 from "@/assets/hero-slider-new-1.png";
import heroSlider2 from "@/assets/hero-slider-2.png";
import heroSlider3 from "@/assets/hero-slider-3.png";
import heroSlider4 from "@/assets/hero-slider-new-4.png";
import heroSlider5 from "@/assets/hero-slider-5.png";
import heroSlider6 from "@/assets/hero-slider-6.png";

const Hero = () => {
  const images = [
    { src: heroSlider4, alt: "Moderna garaža s bijelom fasadom" },
    { src: heroSlider2, alt: "Moderna bijela garaža" },
    { src: heroSlider3, alt: "Industrijska montažna hala" },
    { src: heroSlider1, alt: "Industrijska montažna hala" },
    { src: heroSlider5, alt: "Moderna crna garaža" },
    { src: heroSlider6, alt: "Crna montažna garaža sa sivim krovom" }
  ];

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({ loop: true, dragFree: false });
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({ loop: true, dragFree: false });
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [currentDesktopIndex, setCurrentDesktopIndex] = useState(0);
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);
  const [mobileIntervalId, setMobileIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [desktopIntervalId, setDesktopIntervalId] = useState<NodeJS.Timeout | null>(null);
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

  // Mobile carousel auto-scroll
  useEffect(() => {
    if (!emblaApiMobile) return;

    const onSelect = () => {
      setCurrentMobileIndex(emblaApiMobile.selectedScrollSnap());
    };

    emblaApiMobile.on("select", onSelect);
    onSelect();

    const startInterval = () => {
      const interval = setInterval(() => {
        emblaApiMobile.scrollNext();
      }, 5000);
      setMobileIntervalId(interval);
      return interval;
    };

    const interval = startInterval();

    return () => {
      clearInterval(interval);
      emblaApiMobile.off("select", onSelect);
    };
  }, [emblaApiMobile]);

  // Desktop carousel auto-scroll
  useEffect(() => {
    if (!emblaApiDesktop) return;

    const onSelect = () => {
      setCurrentDesktopIndex(emblaApiDesktop.selectedScrollSnap());
    };

    emblaApiDesktop.on("select", onSelect);
    onSelect();

    const startInterval = () => {
      const interval = setInterval(() => {
        emblaApiDesktop.scrollNext();
      }, 5000);
      setDesktopIntervalId(interval);
      return interval;
    };

    const interval = startInterval();

    return () => {
      clearInterval(interval);
      emblaApiDesktop.off("select", onSelect);
    };
  }, [emblaApiDesktop]);

  const handleMobileDotClick = (index: number) => {
    emblaApiMobile?.scrollTo(index);
    // Reset interval
    if (mobileIntervalId) {
      clearInterval(mobileIntervalId);
    }
    const newInterval = setInterval(() => {
      emblaApiMobile?.scrollNext();
    }, 5000);
    setMobileIntervalId(newInterval);
  };

  const handleDesktopDotClick = (index: number) => {
    emblaApiDesktop?.scrollTo(index);
    // Reset interval
    if (desktopIntervalId) {
      clearInterval(desktopIntervalId);
    }
    const newInterval = setInterval(() => {
      emblaApiDesktop?.scrollNext();
    }, 5000);
    setDesktopIntervalId(newInterval);
  };

  const FeatureIcon = ({ Icon, filled = false }: { Icon: any, filled?: boolean }) => (
    <div className="w-16 h-16 md:w-16 md:h-16 mb-3 md:mb-3 rounded-full bg-[hsl(var(--beriko-blue))]/10 flex items-center justify-center">
      <Icon 
        className="w-9 h-9 md:w-9 md:h-9 text-[hsl(var(--beriko-blue))]" 
        strokeWidth={2.5} 
        fill={filled ? "hsl(var(--beriko-blue))" : "none"}
      />
    </div>
  );

  return (
    <>
      {/* Mobile Layout */}
      <div className="md:hidden pt-[140px]">
        {/* Headline above slider */}
        <div className="px-4 py-4 pb-2 bg-background text-center">
          <h1 className="text-3xl font-bold leading-tight text-[hsl(var(--beriko-blue))]">
            Kvalitetne Montažne Konstrukcije
          </h1>
        </div>

        {/* Scrolling Images with Embla */}
        <div className="relative overflow-hidden">
          <div className="h-[43vh]">
            <div className="overflow-hidden" ref={emblaRefMobile}>
              <div className="flex">
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 h-[43vh] flex items-center justify-center bg-background"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide Indicators - Below Image */}
          <div className="py-2 bg-background flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleMobileDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentMobileIndex
                    ? "bg-black w-6"
                    : "bg-black/40 w-2"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Features 2x2 grid - Mobile */}
        <div className="px-4 py-6 bg-background">
          <div className="max-w-xl mx-auto">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              {/* First row */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-2 rounded-full bg-[hsl(var(--beriko-blue))]/10 flex items-center justify-center">
                  <Key className="w-7 h-7 text-[hsl(var(--beriko-blue))]" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">Ključ u ruke i garancija</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-2 rounded-full bg-[hsl(var(--beriko-blue))]/10 flex items-center justify-center">
                  <Ruler className="w-7 h-7 text-[hsl(var(--beriko-blue))]" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">Prilagođeno vašoj mjeri</p>
              </div>
              {/* Second row */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-2 rounded-full bg-[hsl(var(--beriko-blue))]/10 flex items-center justify-center">
                  <Star className="w-7 h-7 text-[hsl(var(--beriko-blue))]" strokeWidth={2.5} fill="hsl(var(--beriko-blue))" />
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">119 recenzija, 4.9 ocjena</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-2 rounded-full bg-[hsl(var(--beriko-blue))]/10 flex items-center justify-center">
                  <Truck className="w-7 h-7 text-[hsl(var(--beriko-blue))]" strokeWidth={2.5} />
                </div>
                <p className="text-sm font-medium text-foreground leading-tight">Izrada u nekoliko dana</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      {/* Headline above desktop slider */}
      <div className="hidden md:block px-4 py-12 pt-[140px] bg-background text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[hsl(var(--beriko-blue))]">
          Kvalitetne Montažne Konstrukcije
        </h1>
      </div>

      <section className="hidden md:flex relative flex-col items-center justify-center overflow-hidden bg-background">
        <div className="h-[52vh] w-full">
          <div className="overflow-hidden w-full h-full" ref={emblaRefDesktop}>
            <div className="flex h-full">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators - Below Image Desktop */}
        <div className="py-6 bg-background flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDesktopDotClick(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentDesktopIndex
                  ? "bg-black w-8"
                  : "bg-black/40 w-3"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Features static section - Desktop */}
      <div className="hidden md:block px-4 py-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 justify-center items-center px-8">
            <div className="flex flex-col items-center text-center flex-1">
              <FeatureIcon Icon={Truck} />
              <p className="text-lg font-medium text-foreground leading-tight">Izrada u nekoliko dana</p>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <FeatureIcon Icon={Ruler} />
              <p className="text-lg font-medium text-foreground leading-tight">Prilagođeno vašoj mjeri</p>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <FeatureIcon Icon={Key} />
              <p className="text-lg font-medium text-foreground leading-tight">Ključ u ruke i garancija</p>
            </div>
            <div className="flex flex-col items-center text-center flex-1">
              <FeatureIcon Icon={Star} filled />
              <p className="text-lg font-medium text-foreground leading-tight">119 recenzija, 4.9 ocjena</p>
            </div>
          </div>
        </div>
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
