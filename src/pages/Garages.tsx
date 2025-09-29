import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Static imports for instant loading
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
import garage22 from "@/assets/garage-22.jpg";
import garage23 from "@/assets/garage-23.jpg";
import garage24 from "@/assets/garage-24.jpg";
import garage25 from "@/assets/garage-25.jpg";
import garage26 from "@/assets/garage-26.jpg";
import garage27 from "@/assets/garage-27.jpg";
import garage28 from "@/assets/garage-28.jpg";
import garage29 from "@/assets/garage-29.jpg";
import garage30 from "@/assets/garage-30.jpg";
import garage31 from "@/assets/garage-31.jpg";
import garage32 from "@/assets/garage-32.jpg";
import garage33 from "@/assets/garage-33.jpg";
import garage34 from "@/assets/garage-34.jpg";
import garage35 from "@/assets/garage-35.jpg";
import garage36 from "@/assets/garage-36.jpg";
import garage37 from "@/assets/garage-37.jpg";
import garage38 from "@/assets/garage-38.jpg";
import garage39 from "@/assets/garage-39.jpg";
import garage40 from "@/assets/garage-40.jpg";
import garage41 from "@/assets/garage-41.jpg";
import garage42 from "@/assets/garage-42.jpg";
import garage44 from "@/assets/garage-44.jpg";
import garage45 from "@/assets/garage-45.jpg";
import garage46 from "@/assets/garage-46.jpg";
import garage47 from "@/assets/garage-47.jpg";
import garage48 from "@/assets/garage-48.jpg";
import garage49 from "@/assets/garage-49.jpg";
import garage50 from "@/assets/garage-50.jpg";
import garage51 from "@/assets/garage-51.jpg";
import garage52 from "@/assets/garage-52.jpg";
import garage53 from "@/assets/garage-53.jpg";
import garage54 from "@/assets/garage-54.jpg";
import garage55 from "@/assets/garage-55.jpg";
import garage56 from "@/assets/garage-56.jpg";
import garage57 from "@/assets/garage-57.jpg";
import garage58 from "@/assets/garage-58.jpg";
import garage59 from "@/assets/garage-59.jpg";

// Static images array for instant loading
const images = [
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
  { src: garage21, alt: "Garaža 21", title: "Garaža 21" },
  { src: garage22, alt: "Garaža 22", title: "Garaža 22" },
  { src: garage23, alt: "Garaža 23", title: "Garaža 23" },
  { src: garage24, alt: "Garaža 24", title: "Garaža 24" },
  { src: garage25, alt: "Garaža 25", title: "Garaža 25" },
  { src: garage26, alt: "Garaža 26", title: "Garaža 26" },
  { src: garage27, alt: "Garaža 27", title: "Garaža 27" },
  { src: garage28, alt: "Garaža 28", title: "Garaža 28" },
  { src: garage29, alt: "Garaža 29", title: "Garaža 29" },
  { src: garage30, alt: "Garaža 30", title: "Garaža 30" },
  { src: garage31, alt: "Garaža 31", title: "Garaža 31" },
  { src: garage32, alt: "Garaža 32", title: "Garaža 32" },
  { src: garage33, alt: "Garaža 33", title: "Garaža 33" },
  { src: garage34, alt: "Garaža 34", title: "Garaža 34" },
  { src: garage35, alt: "Garaža 35", title: "Garaža 35" },
  { src: garage36, alt: "Garaža 36", title: "Garaža 36" },
  { src: garage37, alt: "Garaža 37", title: "Garaža 37" },
  { src: garage38, alt: "Garaža 38", title: "Garaža 38" },
  { src: garage39, alt: "Garaža 39", title: "Garaža 39" },
  { src: garage40, alt: "Garaža 40", title: "Garaža 40" },
  { src: garage41, alt: "Garaža 41", title: "Garaža 41" },
  { src: garage42, alt: "Garaža 42", title: "Garaža 42" },
  { src: garage44, alt: "Garaža 44", title: "Garaža 44" },
  { src: garage45, alt: "Garaža 45", title: "Garaža 45" },
  { src: garage46, alt: "Garaža 46", title: "Garaža 46" },
  { src: garage47, alt: "Garaža 47", title: "Garaža 47" },
  { src: garage48, alt: "Garaža 48", title: "Garaža 48" },
  { src: garage49, alt: "Garaža 49", title: "Garaža 49" },
  { src: garage50, alt: "Garaža 50", title: "Garaža 50" },
  { src: garage51, alt: "Garaža 51", title: "Garaža 51" },
  { src: garage52, alt: "Garaža 52", title: "Garaža 52" },
  { src: garage53, alt: "Garaža 53", title: "Garaža 53" },
  { src: garage54, alt: "Garaža 54", title: "Garaža 54" },
  { src: garage55, alt: "Garaža 55", title: "Garaža 55" },
  { src: garage56, alt: "Garaža 56", title: "Garaža 56" },
  { src: garage57, alt: "Garaža 57", title: "Garaža 57" },
  { src: garage58, alt: "Garaža 58", title: "Garaža 58" },
  { src: garage59, alt: "Garaža 59", title: "Garaža 59" },
];

const Garages = () => {

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