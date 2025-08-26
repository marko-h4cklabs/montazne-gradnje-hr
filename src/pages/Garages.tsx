import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Garages = () => {
  const images: { src: string; alt: string; title: string }[] = [
    // Add your images here when ready
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
            Garaže - Naši Projekti
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Pregledajte našu kolekciju kvalitetno izvedenih garaža različitih stilova i veličina
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-xl card-shadow hover:scale-105 smooth-transition">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 smooth-transition">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
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
          <Link to="/#kontakt">
            <Button size="lg" className="text-lg px-8 py-6">
              Zatražite ponudu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Garages;