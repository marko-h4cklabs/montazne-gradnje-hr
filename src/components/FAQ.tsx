import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Koliko traje izrada objekta i montaža?",
      answer: "Rok isporuke je do 20 dana a montaža ovisi o veličini objekta: od 1 do 5 dana!"
    },
    {
      question: "Trebam li građevinsku dozvolu?",
      answer: "Prema pravilniku o jednostavnim građevinama, bez građevinske dozvole, a u skladu s glavnim projektom, mogu se graditi pomoćne zgrade površine do 50 m2."
    },
    {
      question: "Kolika je cijena i što je uključeno?",
      answer: "Cijena je od 200-300€/m2 i uključuje pocinčanu konstrukciju s termopanelima i montažom."
    },
    {
      question: "Je li objekt izoliran i koliko traje/koja je garancija?",
      answer: "Objekti su izolirani od 30-80mm i imaju bezuvjetnu garanciju do 5 godina."
    }
  ];

  return (
    <section id="faq" className="relative py-12 pb-6 bg-[hsl(var(--beriko-blue))]">
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
              className="mb-3 rounded-lg overflow-hidden bg-white border border-gray-200"
            >
              <button
                className="w-full text-left p-4 hover:bg-gray-50 smooth-transition flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[hsl(var(--beriko-yellow))] smooth-transition flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-4 pb-4 pt-2 text-gray-700 text-sm leading-relaxed animate-fade-in bg-gray-50 border-t border-gray-200">
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