import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Koliko traje izrada objekta i montaža?",
      answer: "Odgovor će biti dodan uskoro."
    },
    {
      question: "Trebam li građevinsku dozvolu?",
      answer: "Odgovor će biti dodan uskoro."
    },
    {
      question: "Kolika je cijena i što je uključeno?",
      answer: "Odgovor će biti dodan uskoro."
    },
    {
      question: "Je li objekt izoliran i koliko traje/koja je garancija?",
      answer: "Odgovor će biti dodan uskoro."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#003d82]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Često postavljena pitanja
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
                className="w-full text-left p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 smooth-transition flex justify-between items-center border border-white/20"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary smooth-transition ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6 pt-4 text-white/90 leading-relaxed animate-fade-in">
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