import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NewIntroSection = () => {
  const navigate = useNavigate();

  const handleNewsClick = () => {
    navigate("/vijesti");
  };

  return (
    <section className="py-16 bg-background">
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
            Svake godine, posebno u zimskoj sezoni, u Hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
          </p>
        </div>

        {/* News stories section */}
        <div className="mb-16">
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Priče iz stvarnosti:
          </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* First story (was Third) */}
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

            {/* Second story (unchanged) */}
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

            {/* Third story (was First) */}
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

          <div className="text-center mb-16">
            <Button onClick={handleNewsClick} size="lg">
              Pročitajte više o vremenskim nepogodbama
            </Button>
          </div>
        </div>

        {/* Closing text */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            ŠTO TREBATE ZNATI PRIJE NEGO KUPITE NOVU GARAŽU
          </h3>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            Vjerujemo da će se obitelji s početka priče nakon popravka automobila zakleti da više NIKAD neće izložiti svoju imovinu nepotrebnom riziku izlaganja vremenskim nepogodama. Nažalost, potrebna je tragedija da nas se trgne. Nemoj je čekati.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            U izradi se koristi višegodišnja švedska proizvodna iskustva, prema promišljenoj koncepciji koja obuhvaća svaki detalj, a namjensko i servisno osoblje stoji vam na raspolaganju da dopremi i montira objekte na vašu željenu lokaciju. Montažna garaža pruža zaštitu od leda, kiše, snijega, sunca, oluja, životinja, UV zraka i vrućine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewIntroSection;