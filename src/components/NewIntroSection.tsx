import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Warehouse, Car } from "lucide-react";
import stormZagrebImage from "@/assets/storm-zagreb-real.png";
import hailCroatiaImage from "@/assets/hail-croatia-final.png";

const NewIntroSection = () => {
  const navigate = useNavigate();
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false);

  const handleDetailsClick = () => {
    navigate("/detaljne-informacije");
  };

  const services = [
    {
      title: "Garaže",
      icon: Car,
      path: "/garaze-upit",
      description: "Zatražite ponudu za garažu"
    },
    {
      title: "Kuće i Bungalovi",
      icon: Home,
      path: "/kuce-upit",
      description: "Zatražite ponudu za kuću"
    },
    {
      title: "Hale",
      icon: Warehouse,
      path: "/hale-upit",
      description: "Zatražite ponudu za halu"
    }
  ];

  return (
    <section className="relative bg-[hsl(220,60%,30%)] text-white">
      {/* Wave cut design */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background overflow-hidden">
        <svg 
          className="absolute bottom-[-1px] w-full h-16 block" 
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
        <div className="max-w-5xl mx-auto px-4">
          {/* Main intro */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-center">
              <strong className="text-[hsl(var(--primary))]">Dragi graditelju montažnog objekta,</strong>
            </p>
            <p className="text-lg leading-relaxed text-justify mt-6">
              dajemo svakom vlasniku dodatnu vrijednost njegovom automobilu i dva poklon bonusa ako se odazovete na niže navedenu ponudu.
            </p>
            <p className="text-lg leading-relaxed text-justify mt-4">
              Svake godine, posebno u zimskoj sezoni, u Hrvatskoj nastrada od leda, snijega i olujnog nevremena sve više automobila. Praksa je nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i imovinu.
            </p>
          </div>

          {/* Weather Events Section */}
          <div className="my-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#1e3a8a]">
              Nedavni vremenski događaji - 2025.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 - Zagreb Storm */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-center">
                  "Oluja u Zagrebu rušila stabla na automobile"
                </h3>
                <p className="text-sm text-white/80 mb-4 text-center">
                  Al Jazeera Balkans, 7. srpnja 2025.
                </p>
                <p className="text-base leading-relaxed mb-4 text-justify">
                  "Snažno olujno nevrijeme pogodilo je dijelove Hrvatske. U prijepodnevnim satima uslijed oluje u Zagrebu stablo se <strong>srušilo na četiri automobila</strong>..."
                </p>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={stormZagrebImage} 
                    alt="Oluja u Zagrebu - stablo palo na automobile" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Card 2 - Hail Damage */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-center">
                  "Dijelove Hrvatske pogodila tuča: Auti pod ledom"
                </h3>
                <p className="text-sm text-white/80 mb-4 text-center">
                  Dnevnik.hr, 17. kolovoza 2025.
                </p>
                <p className="text-base leading-relaxed mb-4 text-justify">
                  "Dijelove Slavonije jutros je pogodilo nevrijeme - uz pljuskove, krenula je i tuča. Mreže u voćnjacima Gornje Vrbe i Tomice savile su se pod težinom leda, a dijelovi polja su se zabijelieli."
                </p>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={hailCroatiaImage} 
                    alt="Tuča u Hrvatskoj - automobili pod ledom" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-400">
            ŠTO TREBATE ZNATI PRIJE NEGO KUPITE NOVU GARAŽU
          </h2>

          <div className="space-y-10 text-lg leading-relaxed">
            <p className="text-justify">
              Vjerujemo da će se obitelji s početka priče nakon popravka automobila zakleti da više NIKAD neće izložiti svoju imovinu nepotrebnom riziku izlaganja vremenskim nepogodama. Nažalost, potrebna je tragedija da nas se trgne. Nemoj je čekati.
            </p>

            <p className="text-justify">
              Beriko osigurava KVALITETAN sustav malih objekata i pogodni su za vaše potrebe kao što su: garažiranje automobila, motocikala, sktera, bicikala, spremanje plovila zimi, spremanje poljoprivrednih strojeva, stvari i opreme, skladištenje, radionice i servisi i mnoge druge svrhe.
            </p>

            <p className="text-justify">
              Prednosti su velike, nema samo automobil koristi od ovog komfornog prostora; ukućanima može poslužiti kao dodatni prostor za odlaganje ili kao mala radionica.
            </p>

            <div className="my-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Lokacija:</h3>
              <p className="text-justify">
                Mjesta za postavljanje objekta mogu biti razna i uključivati većinu vaših želja a nije potrebna građevinska dozvola: uz kuće i okućnice, uz stambene zgrade i kuće u nizu, na privatnim parkiralištima, uz restorane, pokraj tvornica, radiona i servisa, kraj vikendica i kleti, u kampanjama, maslinicima i voćnjacima,...
              </p>
            </div>

            <div className="my-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Zaštita:</h3>
              <p className="text-justify">
                U izradi se koristi višegodišnja švedska proizvodna iskustva, prema promišljenoj koncepciji koja obuhvaća svaki detalj, a namjensko i servisno osoblje stoji vam na raspolaganju da dopremi i montira objekte na vašu željenu lokaciju. Montažna garaža pruža zaštitu od leda, kiše, snijega, sunca, oluja, životinja, UV zraka i vrućine.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              AKO STE PODUZETNIK ILI IMATE HOBI - ODABERITE RADIONICU, SKLADIŠTE ILI GARAŽU
            </h2>

            <p className="text-justify">
              Objekt može poslužiti kao garaža, skladište ili radionica a isto tako i za sakupljanje vode u voćnjaku ili masliniku. Automobilske gume, skuteri i alat tradicionalno se smještaju u garažni prostor.
            </p>

            <p className="text-justify">
              Ako je garaža duža od automobila, na njezinom kraju može se izgraditi mala radna ploha. Nadstrešnica služi za zaštitu automobila i brzo sušenje mokrog automobila. Zimi se stakla ne lede, a ljeti automobil ostaje u hladu.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              OTKRIJTE TAJNU KAKO OČUVATI VRIJEDNOST
            </h2>

            <div className="space-y-6 pl-4 border-l-4 border-yellow-400">
              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Automobil duže vrijeme ostaje nov:</h4>
                <p>Garažiran automobil ima veću vrijednost kod prodaje.</p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Prije dođete na posao:</h4>
                <p>Ujutro nema čišćenja vjetrobranskih stakala i ne kasnite na radno mjesto.</p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Dulji vijek akumulatora:</h4>
                <p>Zatvoreni prostor je i topliji te se automobil lakše pali a akumulator dulje traje.</p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Zaštita od drugih vozila:</h4>
                <p>Kod otvaranja vrata ali i mimoilaženja drugih vozila automobili se oštećuju na otvorenom.</p>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-2 text-white">Neprocijenjiva vrijednost ulaganja:</h4>
                <p>Zbog svega navedenog za vas je investicija u garažu neprocjenjiva a ostaje vam i za drugi automobil. Investicija se vraća u roku od 5 godina kroz očuvaniji automobil a kod spriječavanja vandalizma vraća se trenutno.</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              KAKO UŠTEDJETI VRIJEME I NOVAC
            </h2>

            <p className="text-justify">
              Pronalazak građevinske firme, nabava materijala, zidanje, višednevni nered u dvorištu glavni su razlog zašto većina ljudi ne dolazi lako do svoje garaže. Tako gubite dragocijeno vrijeme i novac.
            </p>

            <p className="text-justify">
              Za razliku od ostalih garaža, naše ukrašavaju vaš prostor jer su modernog dizajna. Ušteda na vremenu i novcu se postiže zato što je pocinčana konstrukcija i bojani pokrov te ih se zbog toga ne treba održavati kroz dugi niz godina.
            </p>

            <p className="text-justify">
              Naš sustav garaže može biti dovršen u 1/5 vremena u odnosu na većinu drugih proizvođača. Pobijediti ćemo i bilo koju cijenu konkurenata. Dostavite nam svoje dimenzije a mi ćemo ispuniti vašu želju.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              MALE SITNICE KOJE ČINE VELIKE STVARI
            </h2>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Objekti ugodni za oko:</h3>
              <p className="text-justify mb-4">
                S obzirom na dizajn svojih sastavnih elemenata, objekti su tehnički precizan i lijep proizvod. Nudimo tri vrste vrata:
              </p>
              <ol className="list-decimal list-inside space-y-3 pl-4">
                <li>sekcijska vrata s motorom i daljinskim otvaraju se i u udobnosti automobila.</li>
                <li>kip vrata na opruge su lijepa a otvaraju se u jednom pokretu ruke i</li>
                <li>dvokrilna vrata s bravom i ključem koja se lagano otvaraju.</li>
              </ol>
            </div>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Dug vijek trajanja a bez održavanja:</h3>
              <p className="text-justify">
                Nemate nikakvih briga oko održavanje objekta jer se obloge zasnivaju na kvalitetnim čeličnim, obostrano pocinčanim i bojanim profiliranim neizoliranim pločama ili izoliranim TERMOPANELIMA, a pocinčani profili čine rešetkastu konstrukciju objekta. Obloge su učvršćene pocinčanim samourezujućim vijcima.
              </p>
              <p className="text-justify mt-4">
                Čelična i pocinčana konstrukcija izvedena je radi antikorozivne zaštite prema uvjetima za zaštitu čeličnih konstrukcija od korozije. Zbog toga su objekti pogodni za montiranje u priobalju i na otocima.
              </p>
            </div>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Nema kapanja kondenzata po automobilu i stvarima:</h3>
              <p className="text-justify">
                Termopanel spriječava kondenziranje pare i kapanje u unutrašnjosti objekta. Krov može imati i oblik valovitog crijepa mediterana raznih boja koji se prvenstveno koristi zbog estetskog izgleda montažnih kućica. Montažna garaža može imati krovište koje je jednostrešno ili dvostrešno.
              </p>
            </div>

            <div className="my-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Ugodna klima:</h3>
              <p className="text-justify">
                Ispod ploča je manja temperatura u ljeti a viša u zimi što stvara ugodnu klimu u objektima.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              NAJBOLJE RJEŠENJE ZA VAŠE PROBLEME
            </h2>

            <p className="text-justify">
              Dobra vijest glasi da baš Vi možete u potpunosti riješiti svoj radni, skladišni ili garažni prostor - i sve to pomoću jednostavnog načina kojeg ćemo Vam mi osigurati. Da bi ste kupili montažni objekt, trebate se javiti telefonski. Ali sada to isto možete uraditi i putem interneta brže i jeftinije.
            </p>

            <p className="text-justify">
              Za sakupiti sve informacije, razne ponude i izvoditelje koji bi vam riješili potrebu za dodatnim prostorom trebali bi potrošiti vremena i živaca, a da sve to ne bude dovoljno. Ali sada, sve što trebate kako bi eliminirali manjak prostora i dobili baš onakav objekt kakav vam treba, ostvarit ćete kada naručite montažni objekt u firmi Beriko.
            </p>

            <p className="text-justify">
              Mi već desetu godinu proizvodimo za vas montažne objekte. Zbog toga smo ponosni da vam možemo ponuditi montažne objekte koji imaju tolike prednosti i upotrebljivosti koje samo možete poželjeti.
            </p>

            <div className="bg-white/10 p-8 rounded-lg my-10 border-2 border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">BESPLATNI bonus #1:</h3>
              <h4 className="text-xl font-semibold mb-2">pocinčana konstrukcija</h4>
              <p>Kada naručite montažni objekt, dobit ćete i besplatno činčane konstrukcije. Biti ćete zadovoljni jer nećete imati brige oko održavanja.</p>
            </div>

            <div className="bg-white/10 p-8 rounded-lg my-10 border-2 border-yellow-400">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">BESPLATNI bonus #2:</h3>
              <h4 className="text-xl font-semibold mb-2">montaža objekta</h4>
              <p>To nije sve. Ako naručite odmah dobiti ćete potpuno besplatno i drugi poklon. To je montaža samog objekta na vašoj lokaciji.</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold my-10 text-center text-yellow-400">
              100% BEZUVJETNA GARANCIJA
            </h2>

            <p className="text-justify">
              Moja vjera u efikasnost i vaše zadovoljstvo je tolika da objekt dolazi sa bezuvjetnom petgodišnjom 100% garancijom. I to nije sve: oba vrijedna bonusa ne naplaćujemo po povratu kao zahvalu što ste imali povjerenja u nas. Tako ne riskirate ništa, a dobivate sve!
            </p>

            <p className="text-justify">
              Potreba za vaš dodatni prostor je jasna i neposredna. Zato nemojte čekati da bude vaša imovina na otvorenome nego odmah naručite montažni objekt. Kvalitetan je. Bez rizika je. Promijenit će vam život!
            </p>

            <p className="text-justify font-bold">
              Montažni objekt i oba poklona dostavljamo sa stručnom ekipom montažera već isti tjedan ili najkasnije idućeg tjedna!
            </p>

            <p className="text-justify">
              Nakon toga ćemo postaviti objekt na vaše mjesto pripremljeno za montažu. U međuvremenu vi se udobno smjestite, a za to vrijeme vaš će objekt biti spreman za uporabu.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => setIsServiceDialogOpen(true)} size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark font-semibold">
              Besplatna ponuda
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isServiceDialogOpen} onOpenChange={setIsServiceDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center mb-4">
              Izaberite tip objekta
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            {services.map((service) => (
              <button
                key={service.path}
                onClick={() => {
                  setIsServiceDialogOpen(false);
                  navigate(service.path);
                }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewIntroSection;