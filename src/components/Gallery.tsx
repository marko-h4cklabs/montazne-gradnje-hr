import garazaImage from "@/assets/galerija-garaza.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
  const project = {
    image: garazaImage,
    title: "Realizirani projekti",
    description: "Pogledajte našu galeriju završenih projekata"
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Galerija dovršenih projekata
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pogledajte samo dio naših uspješno napravljenih objekata
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/galerija"
            className="group animate-slide-up cursor-pointer block max-w-md"
          >
            <div className="relative overflow-hidden rounded-xl card-shadow hover:scale-105 smooth-transition">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 smooth-transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 smooth-transition">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-white/80">{project.description}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;