import { Button } from "@/components/ui/button";
import { Clock, Calculator, Puzzle, Sparkles, Home } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Brzina izgradnje",
      description: "Uselite se za nedelju dana, ne za šest meseci."
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Fiksna cena", 
      description: "Nema dodatnih troškova. Nema \"joj, zaboravili smo\"."
    },
    {
      icon: <Puzzle className="w-8 h-8" />,
      title: "Modularno i fleksibilno",
      description: "Možeš kasnije da dogradiš, pomeriš, nadogradiš."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Manje prljavštine, manji haos",
      description: "Zaboravi na šut i cement u dvorištu."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Estetika + funkcionalnost",
      description: "Ne izgleda kao baraka. Izgleda kao dom."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Zašto ljudi biraju montažnu <br />
            izgradnju preko klasične?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl card-shadow bg-card hover:scale-105 smooth-transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                🛠️ {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 rounded-full font-semibold"
          >
            🎯 Zatraži ponudu sad
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;