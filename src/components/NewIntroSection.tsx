import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Warehouse, Car } from "lucide-react";

const NewIntroSection = () => {
  const navigate = useNavigate();
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);

  const handleDetailsClick = () => {
    navigate("/detaljne-informacije");
  };

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

  return (
    <section className="relative bg-[hsl(220,60%,30%)] text-white">
      {/* Wave cut design */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 Q300,60 600,30 T1200,0 L1200,60 L0,60 Z" 
            fill="hsl(220,60%,30%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Opening text */}
        <div className="max-w-4xl mx-auto mb-1 px-4">
          <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            <strong>Dragi graditelju montažnog objekta,</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            Svake godine, posebno u zimskoj sezoni, u hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            Zato dajemo svakom vlasniku <strong>dodatnu vrijednost</strong> njegovom automobilu i <strong>dva poklon bonusa</strong> ako se odazovete na niže navedenu ponudu.
          </p>
          
          <div className="text-center flex gap-4 justify-center flex-wrap">
            <Button onClick={handleDetailsClick} size="lg" className="bg-white text-[hsl(220,60%,30%)] hover:bg-white/90">
              Pročitajte više
            </Button>
            <Button onClick={() => setIsServiceDialogOpen(true)} size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 font-semibold">
              Ponuda
            </Button>
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
                onClick={() => {
                  setIsServiceDialogOpen(false);
                  navigate(service.path);
                }}
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
    </section>
  );
};

export default NewIntroSection;