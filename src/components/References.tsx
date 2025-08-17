import { Star } from "lucide-react";
import referenca1 from "@/assets/referenca1.jpg";
import referenca2 from "@/assets/referenca2.jpg";
import referenca3 from "@/assets/referenca3.jpg";

const References = () => {
  const reviews = [
    {
      image: referenca1,
      name: "Marko Petrović",
      location: "Zagreb",
      rating: 5,
      comment: "Odličan odnos cijene i kvalitete! Garaža je montirana u jednom danu i izgleda savršeno. Preporučujem svima!"
    },
    {
      image: referenca2,
      name: "Ana Kovač",
      location: "Split",
      rating: 5,
      comment: "Naš novi bungalov je prekrasan! Tim je bio vrlo profesionalan i sve je završeno u dogovorenom roku."
    },
    {
      image: referenca3,
      name: "Petar Horvat",
      location: "Rijeka",
      rating: 5,
      comment: "Hala za moju tvornicu je savršena. Kvaliteta konstrukcije je vrhunska, a cijena vrlo konkurentna."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Što kažu naši kupci
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zadovoljstvo naših kupaca je naš najveći uspjeh
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl card-shadow p-6 animate-slide-up hover:scale-105 smooth-transition"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;