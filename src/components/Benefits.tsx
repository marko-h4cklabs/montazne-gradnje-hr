import { Clock, Shield, Palette, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Brza montaža",
      description: "Objekti se montiraju u roku od 1-3 dana, ovisno o veličini i kompleksnosti."
    },
    {
      icon: Shield,
      title: "Trajne konstrukcije",
      description: "Koristimo visokokvalitetne materijale koji garantiraju dugotrajnost."
    },
    {
      icon: Palette,
      title: "Prilagođeni dizajn",
      description: "Svaki objekt prilagođavamo vašim specifičnim potrebama i željama."
    },
    {
      icon: Users,
      title: "Lokalna podrška",
      description: "Tim stručnjaka na vašoj strani od planiranja do završetka projekta."
    },
    {
      icon: null,
      title: "Pametna investicija",
      description: "Garaža se isplati već prve zime",
      emoji: "🧠"
    }
  ];

  return (
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nudimo kompletno rješenje s fokusom na kvalitetu i zadovoljstvo kupaca
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full hero-gradient mb-6 group-hover:scale-110 smooth-transition">
                {benefit.emoji ? (
                  <span className="text-3xl">{benefit.emoji}</span>
                ) : (
                  <benefit.icon className="w-8 h-8 text-white" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;