import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Car, Home, Warehouse } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Static imports for instant loading
import garage1 from "@/assets/garage-1.png";
import garage2 from "@/assets/garage-2.png";
import garage3 from "@/assets/garage-3.png";
import garage4 from "@/assets/garage-4.png";
import garage5 from "@/assets/garage-5.png";
import garage6 from "@/assets/garage-6.png";
import garage7 from "@/assets/garage-7.png";
import garage8 from "@/assets/garage-8.png";
import garage9 from "@/assets/garage-9.png";

// Static images array for instant loading
const images = [
  { src: garage1, alt: "Montažna garaža - moderna bijela garaža s tamnim vratima", title: "Garaža 1" },
  { src: garage2, alt: "Montažna garaža - velika siva garaža u prirodi", title: "Garaža 2" },
  { src: garage3, alt: "Montažna garaža - bijelo-siva garaža s modernim vratima", title: "Garaža 3" },
  { src: garage4, alt: "Montažna garaža - svijetla garaža s elegantnim dizajnom", title: "Garaža 4" },
  { src: garage5, alt: "Montažna garaža - moderna garaža s nadstrešnicom", title: "Garaža 5" },
  { src: garage6, alt: "Montažna garaža - tamna garaža s bijelim prozorima", title: "Garaža 6" },
  { src: garage7, alt: "Montažna garaža - svijetla garaža s nadstrešnicom", title: "Garaža 7" },
  { src: garage8, alt: "Montažna garaža - moderna bijela garaža", title: "Garaža 8" },
  { src: garage9, alt: "Montažna garaža - tamna garaža sa srebrnim krovom", title: "Garaža 9" },
];

const Garages = () => {
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/90 to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-6 text-white border-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Nazad na početnu
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Montažni Objekti
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Pregledajte dovršene montažne hale, montažne garaže i montažne kuće 
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl card-shadow hover:scale-105 smooth-transition">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover group-hover:scale-110 smooth-transition"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Trebate garažu po vašoj mjeri?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kontaktirajte nas za besplatnu procjenu i ponudu prilagođenu vašim potrebama
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => setIsContactFormOpen(true)}
          >
            Zatražite ponudu
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
    </div>
  );
};

export default Garages;