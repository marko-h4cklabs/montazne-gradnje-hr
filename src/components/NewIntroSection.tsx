import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NewIntroSection = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/detaljne-informacije");
  };

  return (
    <section className="relative bg-[hsl(220,60%,30%)] text-white">
      {/* Wave cut design */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 Q300,60 600,30 T1200,0 L1200,60 L0,60 Z" 
            fill="hsl(220,60%,30%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Opening text */}
        <div className="max-w-4xl mx-auto mb-1 px-4">
          <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-center">
            <strong>Dragi graditelju montažnog objekta,</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            dajemo svakom vlasniku dodatnu vrijednost njegovom automobilu i dva poklon bonusa ako se odazovete na niže navedenu ponudu.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-justify">
            Svake godine, posebno u zimskoj sezoni, u hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
          </p>
          
          <div className="text-center">
            <Button onClick={handleDetailsClick} size="lg" className="bg-white text-[hsl(220,60%,30%)] hover:bg-white/90">
              Pročitajte više
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewIntroSection;