import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Home, Warehouse, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FAQ from "./FAQ";

const FinalCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPageElement",
            "@id": "#posalji-upit",
            "name": "Pošalji upit",
            "description": "Kontaktirajte nas za montažne objekte",
            "url": window.location.origin + "/#posalji-upit"
          })
        }}
      />
      <FAQ />
      
      <section id="posalji-upit" className="py-6 bg-[hsl(var(--ivory))]">
        <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          <Button 
            className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition px-8 py-3 rounded-full font-semibold"
            onClick={() => {
              (window as any).gtag_report_conversion();
              setIsContactFormOpen(true);
            }}
          >
            Besplatna ponuda
          </Button>
        </div>
      </div>

      <Dialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen}>
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
      </section>
    </>
  );
};

export default FinalCTA;