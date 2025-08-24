import heroGaraza from "@/assets/hero-garaza.jpg";
import galerijaHala from "@/assets/galerija-hala.jpg";
import galerijaBungalov from "@/assets/galerija-bungalov.jpg";

const ProductCategories = () => {
  const products = [
    {
      icon: "🅿️",
      title: "Montažne Garaže",
      description: "Zaštitite svoje vozilo ili alat — kvalitet, sigurnost i brzo rešenje, bez dozvola u mnogim opštinama.",
      image: heroGaraza
    },
    {
      icon: "🛖",
      title: "Bungalovi & Vikendice", 
      description: "Savršeno za odmor, izdavanje ili dodatni prostor na imanju. Sve urađeno po meri.",
      image: galerijaBungalov
    },
    {
      icon: "🏢",
      title: "Montažne Hale i Magacini",
      description: "Industrijska rešenja, čelične konstrukcije, energetska efikasnost. Sve prema vašim dimenzijama.",
      image: galerijaHala
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Šta sve radimo?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:scale-105 smooth-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 smooth-transition"></div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;