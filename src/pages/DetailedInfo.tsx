import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import vijest2 from "@/assets/vijest2.png";
import vijest4 from "@/assets/vijest4.png";

const DetailedInfo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Back Arrow */}
      <div className="fixed top-28 left-4 z-10">
        <Link to="/">
          <Button size="sm" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Povratak
          </Button>
        </Link>
      </div>
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Recent Weather Events 2025 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Nedavni vremenski događaji - 2025.</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-6 rounded-lg shadow-sm border flex flex-col text-center">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Oluja u Zagrebu rušila stabla na automobile"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Al Jazeera Balkans, 7. srpnja 2025.
                </p>
                <p className="text-foreground mb-4 flex-grow">
                  "Snažno olujno nevrijeme pogodilo je dijelove Hrvatske. U prijepodnevnim satima uslijed oluje u Zagrebu stablo se <strong>srušilo na četiri automobila</strong>..."
                </p>
                <img 
                  src={vijest2} 
                  alt="Oluja u Zagrebu rušila stabla" 
                  className="w-full aspect-[16/9] object-cover rounded-md"
                  loading="lazy"
                />
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Dijelove Hrvatske pogodila tuča: Auti pod ledom"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dnevnik.hr, 17. kolovoza 2025.
                </p>
                <p className="text-foreground mb-4">
                  "Dijelove Slavonije jutros je pogodilo nevrijeme ‐ uz pljuskove, krenula je i tuča. Mreže u voćnjacima Gornje Vrbe i Tomice savile su se pod težinom leda, a dijelovi polja su se zabijeljeli."
                </p>
                <img
                  src={vijest4}
                  alt="Tuča pogodila Slavoniju – voćnjaci pod ledom"
                  className="w-full aspect-[16/9] object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* What You Need to Know - New Comprehensive Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">ŠTO TREBATE ZNATI PRIJE NEGO KUPITE NOVU GARAŽU</h2>
            
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Vjerujemo da će se obitelji s početka priče nakon popravka automobila zakleti da više NIKAD neće izložiti svoju imovinu nepotrebnom riziku izlaganja vremenskim nepogodama. Nažalost, potrebna je tragedija da nas se trgne. Nemoj je čekati.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Beriko osigurava KVALITETAN sustav malih objekata i pogodni su za vaše potrebe kao što su: garažiranje automobila, motocikala, sktera, bicikala, spremanje plovila zimi, spremanje poljoprivrednih strojeva, stvari i opreme, skladištenje, radionice i servisi i mnoge druge svrhe.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Prednosti su velike, nema samo automobil koristi od ovog komfornog prostora; ukućanima može poslužiti kao dodatni prostor za odlaganje ili kao mala radionica.
              </p>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Lokacija:</h3>
                <p className="text-foreground leading-relaxed">
                  Mjesta za postavljanje objekta mogu biti razna i uključivati većinu vaših želja a nije potrebna građevinska dozvola: uz kuće i okućnice, uz stambene zgrade i kuće u nizu, na privatnim parkiralištima, uz restorane, pokraj tvornica, radiona i servisa, kraj vikendica i kleti, u kampanjama, maslinicima i voćnjacima,...
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Zaštita:</h3>
                <p className="text-foreground leading-relaxed">
                  U izradi se koristi višegodišnja švedska proizvodna iskustva, prema promišljenoj koncepciji koja obuhvaća svaki detalj, a namjensko i servisno osoblje stoji vam na raspolaganju da dopremi i montira objekte na vašu željenu lokaciju. Montažna garaža pruža zaštitu od leda, kiše, snijega, sunca, oluja, životinja, UV zraka i vrućine.
              </p>
              </div>
            </div>
          </section>

          {/* Business and Hobby Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">AKO STE PODUZETNIK ILI IMATE HOBI - ODABERITE RADIONICU, SKLADIŠTE ILI GARAŽU</h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Objekt može poslužiti kao garaža, skladište ili radionica a isto tako i za sakupljanje vode u voćnjaku ili masliniku. Automobilske gume, skuteri i alat tradicionalno se smještaju u garažni prostor.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Ako je garaža duža od automobila, na njezinom kraju može se izgraditi mala radna ploha. Nadstrešnica služi za zaštitu automobila i brzo sušenje mokrog automobila. Zimi se stakla ne lede, a ljeti automobil ostaje u hladu.
              </p>
            </div>
          </section>

          {/* Value Preservation Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">OTKRIJTE TAJNU KAKO OČUVATI VRIJEDNOST</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Automobil duže vrijeme ostaje nov:</h3>
                  <p className="text-foreground">Garažiran automobil ima veću vrijednost kod prodaje.</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Prije dođete na posao:</h3>
                  <p className="text-foreground">Ujutro nema čišćenja vjetrobranskih stakala i ne kasnite na radno mjesto.</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Dulji vijek akomulatora:</h3>
                  <p className="text-foreground">Zatvoreni prostor je i topliji te se automobil lakše pali a akomulator dulje traje.</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Zaštita od drugih vozila:</h3>
                  <p className="text-foreground">Kod otvaranja vrata ali i mimoilaženja drugih vozila automobili se oštećuju na otvorenome.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Neprocijenjiva vrijednost ulaganja:</h3>
                <p className="text-foreground leading-relaxed">
                  Zbog svega navedenog za vas je investicija u garažu neprocjenjiva a ostaje vam i za drugi automobil. Investicija se vraća u roku od 5 godina kroz očuvaniji automobil a kod spriječavanja vandalizma vraća se trenutno.
                </p>
              </div>
            </div>
          </section>

          {/* Time and Money Savings Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">KAKO UŠTEDJETI VRIJEME I NOVAC</h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Pronalazak građevinske firme, nabava materijala, zidanje, višednevni nered u dvorištu glavni su razlog zašto većina ljudi ne dolazi lako do svoje garaže. Tako gubite dragocijeno vrijeme i novac.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Za razliku od ostalih garaža, naše ukrašavaju vaš prostor jer su modernog dizajna. Ušteda na vremenu i novcu se postiže zato što je pocinčana konstrukcija i bojani pokrov te ih se zbog toga ne treba održavati kroz dugi niz godina.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Naš sustav garaže može biti dovršen u 1/5 vremena u odnosu na većinu drugih proizvođača. Pobijediti ćemo i bilo koju cijenu konkurenata. Dostavite nam svoje dimenzije a mi ćemo ispuniti vašu želju.
              </p>
            </div>
          </section>

          {/* Design Details Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">MALE SITNICE KOJE ČINE VELIKE STVARI</h2>
            
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Objekti ugodni za oko:</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  S obzirom na dizajn svojih sastavnih elemenata, objekti su tehnicki precizan i lijep proizvod. Nudimo tri vrste vrata:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
                    <h4 className="font-semibold text-foreground mb-2">1. Sekcijska vrata</h4>
                    <p className="text-foreground text-sm">s motorom i daljinskim otvaraju se i u udobnosti automobila.</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
                    <h4 className="font-semibold text-foreground mb-2">2. Kip vrata na opruge</h4>
                    <p className="text-foreground text-sm">su lijepa a otvaraju se u jednom pokretu ruke i</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg shadow-sm border text-center">
                    <h4 className="font-semibold text-foreground mb-2">3. Dvokrilna vrata</h4>
                    <p className="text-foreground text-sm">s bravom i ključem koja se lagano otvaraju,</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Dug vijek trajanja a bez održavanja:</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Nemate nikakvih briga oko održavanje objekta jer se obloge zasnivaju na kvalitetnim čeličnim, obostrano pocinčanim i bojanim profiliranim neizoliranim pločama ili izoliranim TERMOPANELIMA, a pocinčani profili čine rešetkastu konstrukciju objekta.
                </p>
                <p className="text-foreground leading-relaxed">
                  Obloge su učvršćene pocinčanim samourezujućim vijcima a u dodatnu opremu za oblaganje krova ubrajamo samourezujuće pocinčane vijke s brtvom i filc protiv kondenzacije!
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <p className="text-foreground leading-relaxed">
                  Čelična i pocinčana konstrukcija izvedena je radi antikorozivne zaštite prema uvjetima za zaštitu čeličnih konstrukcija od korozije. Zbog toga su objekti pogodni za montiranje u priobalju i na otocima.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Nema kapanja kondenzata:</h3>
                  <p className="text-foreground">Sloj filca uprešan na pokrovu sprečava kondenziranje pare i kapanje u unutrašnjosti objekta.</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Ugodna klima:</h3>
                  <p className="text-foreground">Ispod ploča je manja temperatura u ljeti a viša u zimi što stvara ugodnu klimu u objektima.</p>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed">
                Krov može imati i oblik valovitog crijepa mediterana raznih boja koji se prvenstveno koristi zbog estetskog izgleda montažnih kućica. Montažna garaža može imati krovište koje je jednostrešno ili dvostrešno.
              </p>
            </div>
          </section>

          {/* Best Solution Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">NAJBOLJE RJEŠENJE ZA VAŠE PROBLEME</h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Dobra vijest glasi da baš Vi možete u potpunosti riješiti svoj radni, skladišni ili garažni prostor - i sve to pomoću jednostavnog načina kojeg ćemo Vam mi osigurati.
                Da bi ste kupili montažni objekt, trebate se javiti telefonski. Ali sada to isto možete uraditi i putem interneta brže i jeftinije.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Za sakupiti sve informacije, razne ponude i izvoditelje koji bi vam riješili potrebu za dodatnim prostorom trebali bi potrošiti vremena i živaca, a da sve to ne bude dovoljno.
                Ali sada, sve što trebate kako bi eliminirali manjak prostora i dobili baš onakav objekt kakav vam treba, ostvarit ćete kada naručite montažni objekt u firmi Beriko.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Mi već desetu godinu proizvodimo za vas montažne objekte. Zbog toga smo ponosni da vam možemo ponuditi montažne objekte koji imaju tolike prednosti i upotrebljivosti koje samo možete poželjeti.
              </p>
            </div>
          </section>

          {/* Free Bonuses Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-700 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">BESPLATNI bonus #1:</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-3">pocinčana konstrukcija</h4>
                  <p className="text-foreground">
                    Kada naručite montažni objekt, dobit ćete i besplatno pocinčane konstrukcije. Biti ćete zadovoljni jer nećete imati brige oko održavanja.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">BESPLATNI bonus #2:</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-3">montaža objekta</h4>
                  <p className="text-foreground">
                    To nije sve. Ako naručite odmah dobiti ćete potpuno besplatno i drugi poklon. To je montaža samog objekta na vašoj lokaciji.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg border-2 border-primary/20">
                <h2 className="text-3xl font-bold mb-6 text-foreground text-center">100% BEZUVJETNA GARANCIJA</h2>
                
                <p className="text-lg text-foreground leading-relaxed mb-6 text-center">
                  Moja vjera u efikasnost i vaše zadovoljstvo je tolika da objekt dolazi sa bezuvjetnom petgodišnjom 100% garancijom. I to nije sve: oba vrijedna bonusa ne naplaćujemo po povratu kao zahvalu što ste imali povjerenja u nas. Tako ne riskirate ništa, a dobivate sve!
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6 text-center">
                  Potreba za vaš dodatni prostor je jasna i neposredna. Zato nemojte čekati da bude vaša imovina na otvorenome nego odmah naručite montažni objekt. Kvalitetan je. Bez rizika je. Promijenit će vam život!
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6 text-center">
                  Montažni objekt i oba poklona dostavljamo sa stručnom ekipom montažera već isti tjedan ili najkasnije idućeg tjedna!
                </p>
                
                <p className="text-lg text-foreground leading-relaxed text-center">
                  Nakon toga ćemo postaviti objekt na vaše mjesto pripremljeno za montažu. U međuvremenu vi se udobno smjestite, a za to vrijeme vaš će objekat biti spreman za uporabu.
                </p>
              </div>
            </div>
          </section>

          {/* Damage Statistics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Statistike šteta</h2>
            
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg border max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-4 text-xl">
                    Štete nakon srpanjskih oluja
                  </h3>
                  <p className="text-foreground mb-4">
                    "Nakon velikih oluja u srpnju, koje su pogodile gotovo sve hrvatske krajeve, samo u Zagrebu je prijavljeno <strong>6.285 materijalnih šteta</strong>, a uključivale su štetu na građevinama, poljoprivrednim površinama i – <strong>osobnim vozilima</strong>."
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-4 text-xl">
                    Vandaliziranje vozila u Osijeku
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Priopćenje PU Osječko-baranjske od 4. lipanj 2010.
                  </p>
                  <p className="text-foreground">
                    "U vremenskom razdoblju od 1. do 3. lipnja na više lokacija u Osijeku i okolici nepoznata osoba ili više njih oštetili su parkirane automobile. Automobili su oštećeni grebanjem oštrim predmetima, skakanjem po njima, te lomljenjem brisača i razbijanjem svjetlosne signalizacije. <strong>Ukupna šteta iznosi oko 20.000 kuna.</strong>"
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Call to Action */}
          <section className="text-center bg-card p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Zaštitite svoju imovinu od vremenskih nepogoda
            </h2>
            <p className="text-muted-foreground mb-6">
              Montažne garaže i bungalovi pružaju sigurnu zaštitu za vaša vozila i vrijednu imovinu
            </p>
            <Link to="/garaze">
              <Button size="lg" className="px-8 py-3">
                Pregled ponude
              </Button>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailedInfo;