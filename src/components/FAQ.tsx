import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Kako naručiti montažnu garažu ili halu?",
      answer: "Postupak je jednostavan: kontaktirajte nas putem telefona ili e-maila, dogovorit ćemo besplatni pregled lokacije i izradu ponude. Nakon prihvaćanja ponude, pristupamo planiranju i realizaciji projekta."
    },
    {
      question: "Koliko dugo traje montaža?",
      answer: "Ovisno o veličini i složenosti objekta, montaža traje od 1 do 5 dana. Jednostavne garaže montiraju se u jednom danu, dok veće hale mogu zahtijevati nekoliko dana rada!"
    },
    {
      question: "Koje dozvole su potrebne?",
      answer: "Za većinu objekata potrebna je građevinska dozvola. Pomažemo vam u pribavljanju svih potrebnih dozvola i dokumentacije kroz naše partnere."
    },
    {
      question: "Kakva je garancija na objekte?",
      answer: "Nudimo 10 godina garancije na konstrukciju i 5 godina garancije na pokrivače. Također imate 30 dana garancije povrata novca ako niste zadovoljni."
    },
    {
      question: "Mogu li prilagoditi dizajn objekta?",
      answer: "Apsolutno! Svi naši objekti mogu se prilagoditi vašim specifičnim potrebama - veličina, boja, dodatna vrata, prozori, izolacija i drugi detalji."
    }
  ];

  return (
    <section className="py-16 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Često postavljena pitanja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o našim uslugama
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full text-left p-6 bg-card rounded-xl card-shadow hover:bg-secondary/50 smooth-transition flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary smooth-transition ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;