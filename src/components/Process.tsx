import { Phone, Ruler, Factory, Truck, Key } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Phone className="w-10 h-10" />,
      number: "01",
      title: "Kontaktiraj nas",
      description: "Pošalji upit, mi odgovaramo u roku od 24h"
    },
    {
      icon: <Ruler className="w-10 h-10" />,
      number: "02", 
      title: "Plan + Ponuda",
      description: "Šaljemo ti prijedlog rješenja i jasnu ponudu bez skrivenih stavki"
    },
    {
      icon: <Factory className="w-10 h-10" />,
      number: "03",
      title: "Proizvodnja",
      description: "Kad kažeš \"idemo\", kreće izrada u hali"
    },
    {
      icon: <Truck className="w-10 h-10" />,
      number: "04",
      title: "Montaža na licu mjesta",
      description: "Dolazimo, montiramo, završavamo"
    },
    {
      icon: <Key className="w-10 h-10" />,
      number: "05",
      title: "Ključ u ruke",
      description: "Gotovo. Radi. Izgleda odlično."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary-foreground">
            Od javljanja do ključa – <br />
            evo kako to kod nas ide:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full mb-4">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-secondary-foreground">
                {step.title}
              </h3>
              <p className="text-secondary-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;