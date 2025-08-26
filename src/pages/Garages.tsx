import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import all garage images
import garage1 from "@/assets/garage-1.jpg";
import garage2 from "@/assets/garage-2.jpg";
import garage3 from "@/assets/garage-3.jpg";
import garage4 from "@/assets/garage-4.jpg";
import garage5 from "@/assets/garage-5.jpg";
import garage6 from "@/assets/garage-6.jpg";
import garage7 from "@/assets/garage-7.jpg";
import garage8 from "@/assets/garage-8.jpg";
import garage9 from "@/assets/garage-9.jpg";
import garage10 from "@/assets/garage-10.jpg";
import garage11 from "@/assets/garage-11.jpg";
import garage12 from "@/assets/garage-12.jpg";
import garage13 from "@/assets/garage-13.jpg";
import garage14 from "@/assets/garage-14.jpg";
import garage15 from "@/assets/garage-15.jpg";
import garage16 from "@/assets/garage-16.jpg";
import garage17 from "@/assets/garage-17.jpg";
import garage18 from "@/assets/garage-18.jpg";
import garage19 from "@/assets/garage-19.jpg";
import garage20 from "@/assets/garage-20.jpg";
import garage21 from "@/assets/garage-21.jpg";

const Garages = () => {
  const images: { src: string; alt: string; title: string }[] = [
    { src: garage1, alt: "Garaža 1", title: "Garaža 1" },
    { src: garage2, alt: "Garaža 2", title: "Garaža 2" },
    { src: garage3, alt: "Garaža 3", title: "Garaža 3" },
    { src: garage4, alt: "Garaža 4", title: "Garaža 4" },
    { src: garage5, alt: "Garaža 5", title: "Garaža 5" },
    { src: garage6, alt: "Garaža 6", title: "Garaža 6" },
    { src: garage7, alt: "Garaža 7", title: "Garaža 7" },
    { src: garage8, alt: "Garaža 8", title: "Garaža 8" },
    { src: garage9, alt: "Garaža 9", title: "Garaža 9" },
    { src: garage10, alt: "Garaža 10", title: "Garaža 10" },
    { src: garage11, alt: "Garaža 11", title: "Garaža 11" },
    { src: garage12, alt: "Garaža 12", title: "Garaža 12" },
    { src: garage13, alt: "Garaža 13", title: "Garaža 13" },
    { src: garage14, alt: "Garaža 14", title: "Garaža 14" },
    { src: garage15, alt: "Garaža 15", title: "Garaža 15" },
    { src: garage16, alt: "Garaža 16", title: "Garaža 16" },
    { src: garage17, alt: "Garaža 17", title: "Garaža 17" },
    { src: garage18, alt: "Garaža 18", title: "Garaža 18" },
    { src: garage19, alt: "Garaža 19", title: "Garaža 19" },
    { src: garage20, alt: "Garaža 20", title: "Garaža 20" },
    { src: garage21, alt: "Garaža 21", title: "Garaža 21" }
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