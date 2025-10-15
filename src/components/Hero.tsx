import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Warehouse, Car, Truck, Ruler, Key, Star, ZoomIn, ZoomOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import heroSlider1 from "@/assets/hero-slider-1.png";
import heroSlider2 from "@/assets/hero-slider-2.png";
import heroSlider3 from "@/assets/hero-slider-3.png";
import heroSlider4 from "@/assets/hero-slider-4.png";
import heroSlider5 from "@/assets/hero-slider-5.png";
import heroSlider6 from "@/assets/hero-slider-6.png";

const Hero = () => {
  const images = [
    { src: heroSlider1, alt: "Montažna garaža s četvoro vrata" },
    { src: heroSlider2, alt: "Moderna bijela garaža" },
    { src: heroSlider3, alt: "Industrijska montažna hala" },
    { src: heroSlider4, alt: "Garaža s klasičnom fasadom" },
    { src: heroSlider5, alt: "Moderna crna garaža" },
    { src: heroSlider6, alt: "Crna montažna garaža sa sivim krovom" }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
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
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentImageIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
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
      <div className="md:hidden pt-20">
        {/* Headline above slider */}
        <div className="px-4 py-8 bg-background text-center">
          <h1 className="text-3xl font-bold leading-tight text-[hsl(var(--beriko-blue))]">
            Kvalitetne Montažne Konstrukcije
          </h1>
        </div>

        {/* Scrolling Images with Embla */}
        <div className="relative h-[43vh] overflow-hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 h-[43vh] flex items-center justify-center bg-background"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain transition-transform duration-300"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2 z-10">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2}
              className="p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-[hsl(var(--beriko-yellow))] w-6"
                    : "bg-white/60"
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
      <div className="hidden md:block px-4 py-12 pt-24 bg-background text-center">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-[hsl(var(--beriko-blue))]">
          Kvalitetne Montažne Konstrukcije
        </h1>
      </div>

      <section className="hidden md:flex relative h-[52vh] items-center justify-center overflow-hidden bg-background">
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Zoom Controls - Desktop */}
        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 1}
            className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-6 h-6 text-[hsl(var(--beriko-blue))]" />
          </button>
          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 2}
            className="p-3 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-6 h-6 text-[hsl(var(--beriko-blue))]" />
          </button>
        </div>

        {/* Slide Indicators - Desktop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-[hsl(var(--beriko-yellow))] w-8"
                  : "bg-white/60"
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
