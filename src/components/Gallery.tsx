import halaImage from "@/assets/galerija-hala.jpg";
import bungalovImage from "@/assets/galerija-bungalov.jpg";
import garazaImage from "@/assets/galerija-garaza.jpg";

const Gallery = () => {
  const projects = [
    {
      image: garazaImage,
      title: "Dvostruka garaža",
      description: "Prostorna garaža za dva vozila"
    },
    {
      image: bungalovImage,
      title: "Moderni bungalov",
      description: "Udoban stambeni objekt"
    },
    {
      image: halaImage,
      title: "Industrijska hala",
      description: "Velika hala za proizvodnju"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Naši realizirani projekti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pogledajte samo dio naših uspješno završenih projekata
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group animate-slide-up ${index === 0 ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              {...(index === 0 && {
                onClick: () => window.open('/garaze', '_blank')
              })}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;