import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RealLifeStories = () => {
  const navigate = useNavigate();

  const handleNewsClick = () => {
    navigate("/vijesti");
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Priče iz stvarnosti: nevrijeme i šteta
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* First story */}
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-foreground mb-2">
              Štete nakon velikih oluja u srpnju
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Jutarnji.hr
            </p>
            <p className="text-sm text-foreground">
              „Nakon velikih oluja u srpnju, koje su pogodile gotovo sve hrvatske krajeve, samo u Zagrebu je prijavljeno 6.285 materijalnih šteta, a uključivale su štetu na građevinama, poljoprivrednim površinama i – <strong>osobnim vozilima.</strong>"
            </p>
          </div>

          {/* Second story */}
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-foreground mb-2">
              „Oluja u Zagrebu rušila stabla, prevrnuo se katamaran kod Šibenika."
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Al Jazeera Balkans, 7. srpnja 2025.
            </p>
            <p className="text-sm text-foreground">
              „Snažno olujno nevrijeme pogodilo je dijelove Hrvatske … U prijepodnevnim satima uslijed oluje u Zagrebu stablo se <strong>srušilo na četiri automobila …</strong>"
            </p>
          </div>

          {/* Third story */}
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-foreground mb-2">
              „Stigla promjena vremena, dijelove Hrvatske pogodila tuča: Auti pod ledom."
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Dnevnik.hr, 17. kolovoza 2025.
            </p>
            <p className="text-sm text-foreground">
              „Dijelove Slavonije jutros je pogodilo nevrijeme ‐ uz pljuskove, krenula je i tuča. … Gornje Vrbe i Tomice savile su se pod težinom leda, a dijelovi polja su se zabijeljeli."
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={handleNewsClick} size="lg">
            Pročitajte više o vremenskim nepogodbama
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealLifeStories;