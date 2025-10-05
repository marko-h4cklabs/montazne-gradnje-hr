import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Home, Warehouse, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      <section id="posalji-upit" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-secondary-foreground">
            Montažni objekti sa kojima ćete biti zadovoljni
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 leading-relaxed">
            Dosta vam je kiše, leda po autu i ideja koje nikako da se ostvare?
          </p>
          
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 smooth-transition hero-shadow text-xl px-12 py-6 rounded-full font-bold"
            onClick={() => {
              (window as any).gtag_report_conversion();
              setIsContactFormOpen(true);
            }}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            <span className="hidden md:inline">Pošaljite upit – Rješenje stiže brzo kao i naši majstori</span>
            <span className="block md:hidden text-center">
              Pošaljite upit
            </span>
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