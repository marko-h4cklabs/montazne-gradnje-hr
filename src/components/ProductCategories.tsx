import heroGaraza from "@/assets/hero-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";
import galerijaVikendice from "@/assets/galerija-vikendice-bungalovi.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  const products = [
    {
      icon: "",
      title: "Montažne Hale",
      description: "Industrijska rješenja, čelične konstrukcije, energetska efikasnost. Sve prema vašim dimenzijama.",
      image: galerijaHala,
      path: "/montazne-hale-galerija",
    },
    {
      icon: "",
      title: "Montažne Garaže",
      description: "Zaštitite svoje vozilo ili alat — kvalitetno, sigurno i brzo rješenje, bez dozvola u većini situacija.",
      image: heroGaraza,
      path: "/montazne-garaze-galerija",
    },
    {
      icon: "",
      title: "Montažne kuće", 
      description: "Savršeno za odmor, izdavanje ili dodatni prostor na zemljištu. Sve napravljeno po mjeri.",
      image: galerijaVikendice,
      path: "/montazne-kuce-galerija",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Čime se sve bavimo?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={index}
              to={product.path}
              className="block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:scale-105 smooth-transition"
              >
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute top-4 left-4 text-4xl">
                    {product.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;