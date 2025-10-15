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
    <section id="faq" className="relative py-12 bg-[#003d82]">
      {/* Transition wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Često postavljena pitanja
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto">
            Brzi odgovori na vaša pitanja
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-3"
            >
              <button
                className="w-full text-left p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 smooth-transition flex justify-between items-center border border-white/20"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-white pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-primary smooth-transition flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-4 pb-4 pt-3 text-white/80 text-sm leading-relaxed animate-fade-in">
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