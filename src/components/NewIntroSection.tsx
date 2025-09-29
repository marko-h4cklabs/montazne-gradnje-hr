import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NewIntroSection = () => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/detaljne-informacije");
  };

  return (
    <section className="pt-16 pb-2 bg-background">
      <div className="container mx-auto px-4">
        {/* Opening text */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
            <strong>Dragi graditelju montažnog objekta,</strong>
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            dajemo svakom vlasniku dodatnu vrijednost njegovom automobilu i dva poklon bonusa ako se odazovete na niže navedenu ponudu.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Svake godine, posebno u zimskoj sezoni, u hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
          </p>
          
          <div className="text-center">
            <Button onClick={handleDetailsClick} size="lg">
              Pročitajte više
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewIntroSection;