import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import blogHalaImage from "@/assets/blog-hala.png";
import blogHouseImage from "@/assets/blog-house.png";
import blogMontaznaHalaImage from "@/assets/blog-montazna-hala.png";

const blogPostsData = {
  "1": {
    title: "Prednosti montažnih garaža u 2025. godini",
    image: "/lovable-uploads/fcc31405-5071-46a1-ac40-b422991656a3.png",
    date: "15. siječnja 2024",
    author: "Beriko Tim",
    category: "Garaže",
    content: `
      <h2>Zašto odabrati montažnu garažu?</h2>
      <p>Montažne garaže postale su iznimno popularan izbor među vlasnicima nekretnina, i to s dobrim razlogom. U ovom članku istražujemo ključne prednosti koje čine montažne garaže idealnim rješenjem za suvremene potrebe.</p>
      
      <h3>Brza montaža</h3>
      <p>Jedna od najvećih prednosti montažnih garaža je brzina izgradnje. Za razliku od tradicionalnih garaža koje mogu zahtijevati tjedne ili čak mjesece rada, montažne garaže mogu biti postavljene u roku od nekoliko dana. Ovo ne samo da štedi vrijeme, već i smanjuje neugodnosti koje mogu nastati tijekom građevinskih radova.</p>
      
      <h3>Ekonomična cijena</h3>
      <p>Montažne garaže nude izvrsnu vrijednost za novac. Troškovi materijala i rada značajno su niži u usporedbi s tradicionalnom gradnjom, što ih čini pristupačnim rješenjem za širok raspon budžeta. Dodatno, predvidivi troškovi omogućavaju bolje financijsko planiranje.</p>
      
      <h3>Visoka kvaliteta materijala</h3>
      <p>Moderni materijali korišteni u montažnim garažama nude izvrsnu izdržljivost i otpornost na vremenske uvjete. Paneli izrađeni od kvalitetnih materijala osiguravaju dugotrajnost i minimalnu potrebu za održavanjem.</p>
      
      <h3>Fleksibilnost dizajna</h3>
      <p>Montažne garaže dostupne su u raznim veličinama i stilovima, omogućavajući prilagodbu specifičnim potrebama i estetskim preferencijama. Bilo da vam treba jednostavna garaža za jedan automobil ili veća struktura, postoji rješenje za vas.</p>
      
      <h2>Zaključak</h2>
      <p>S obzirom na sve prednosti - od brzine montaže i ekonomičnosti do kvalitete i fleksibilnosti - nije čudo što su montažne garaže sve popularniji izbor u 2024. godini. Ako razmišljate o novoj garaži, montažna opcija definitivno zaslužuje vašu pažnju.</p>
    `
  },
  "2": {
    title: "Kako odabrati idealnu montažnu kuću za svoju obitelj",
    image: blogHouseImage,
    date: "10. siječnja 2024",
    author: "Beriko Tim",
    category: "Kuće",
    content: `
      <h2>Vodič kroz odabir montažne kuće</h2>
      <p>Odabir idealne montažne kuće za vašu obitelj važna je odluka koja zahtijeva pažljivo razmatranje brojnih faktora. U ovom vodiču donosimo vam ključne korake i savjete.</p>
      
      <h3>1. Definiranje potreba obitelji</h3>
      <p>Prvi korak je jasno definiranje potreba vaše obitelji. Razmislite o broju članova obitelji, njihovim potrebama za prostorom, te o životnom stilu. Potreban vam je otvoreni koncept ili više zatvorenih prostorija? Planirate li širenje obitelji?</p>
      
      <h3>2. Razmatranje lokacije</h3>
      <p>Lokacija igra ključnu ulogu u odabiru tipa montažne kuće. Klimatski uvjeti, konfiguracija terena, i lokalni propisi utječu na izbor materijala i dizajna. Važno je odabrati kuću koja je prilagođena specifičnostima vaše lokacije.</p>
      
      <h3>3. Planiranje budžeta</h3>
      <p>Realno planiranje budžeta ključno je za uspješan projekt. Osim cijene same kuće, uključite troškove pripreme terena, infrastrukture, i dodatne opreme. Ostavite i prostor za nepredviđene troškove.</p>
      
      <h3>4. Odabir dizajna</h3>
      <p>Estetika i funkcionalnost trebaju ići ruku pod ruku. Razgledajte različite modele, razmislite o budućim potrebama, i ne bojte se prilagoditi standardne modele svojim željama. Dobar dizajn omogućit će ugodan život na dugi rok.</p>
      
      <h3>5. Provjera certifikata i jamstava</h3>
      <p>Uvijek provjerite ima li proizvođač potrebne certifikate i kakva jamstva nudi. Kvalitetni proizvođači poput Beriko d.o.o. pružaju detaljna jamstva i podršku nakon kupnje.</p>
      
      <h2>Zaključak</h2>
      <p>Odabir montažne kuće ne mora biti stresan proces. S pravim pristupom i stručnom podrškom, možete pronaći savršenu kuću za svoju obitelj koja će pružiti udobnost, kvalitetu i vrijednost kroz godine.</p>
    `
  },
  "3": {
    title: "Održavanje montažnih hala: Savjeti stručnjaka",
    image: blogHalaImage,
    date: "5. siječnja 2024",
    author: "Beriko Tim",
    category: "Hale",
    content: `
      <h2>Osnove održavanja industrijskih montažnih hala</h2>
      <p>Pravilno održavanje montažnih hala ključno je za njihovu dugotrajnost i funkcionalnost. U nastavku donosimo stručne savjete za očuvanje vaše investicije.</p>
      
      <h3>Redoviti pregledi konstrukcije</h3>
      <p>Preporučujemo kvartalne preglede konstrukcije kako bi se na vrijeme otkrili potencijalni problemi. Posebnu pažnju posvetite spojevima, pričvršćivačima i zavarivanjima. Bilo kakve znakove korozije ili oštećenja treba odmah adresirati.</p>
      
      <h3>Održavanje krova</h3>
      <p>Krov je najizloženiji dio hale i zahtijeva redovitu pažnju. Čistite odvodnju od lišća i drugih naslaga, provjeravajte tesnjenje, i osigurajte da nema propuštanja. Nakon jakih vremenskih nepogoda, uvijek izvršite pregled.</p>
      
      <h3>Vanjska zaštita</h3>
      <p>Vanjski paneli trebaju povremeno čišćenje i zaštitu. Korištenje odgovarajućih zaštitnih prevlaka može značajno produžiti životni vijek materijala. Obratite posebnu pažnju na dijelove izložene direktnom suncu ili vlazi.</p>
      
      <h3>Unutarnja održavanje</h3>
      <p>Redovito čišćenje unutrašnjosti, adekvatna ventilacija, i kontrola vlažnosti sprječavaju nastanak problema poput plijesni i korozije. U industrijskim halama, također je važno redovito provjeravati sigurnosne sustave.</p>
      
      <h3>Dokumentacija i planiranje</h3>
      <p>Vodite detaljnu dokumentaciju svih obavljenih održavanja i popravaka. Ovo ne samo da pomaže u planiranju budućih intervencija, već i povećava vrijednost objekta.</p>
      
      <h2>Zaključak</h2>
      <p>Ulaganje u redovito održavanje vaše montažne hale isplativo je dugoročno. Preventivne mjere uvijek su ekonomičnije od popravaka nastalih zanemarivanjem. Beriko d.o.o. nudi podršku i savjetovanje za sve aspekte održavanja montažnih hala.</p>
    `
  },
  "4": {
    title: "Montažna ili klasična gradnja hale?",
    image: blogMontaznaHalaImage,
    date: "20. siječnja 2024",
    author: "Beriko Tim",
    category: "Hale",
    content: `
      <h2><span class="text-3xl font-bold">1.</span> Usporedba troškova</h2>
      
      <h3>Montažna hala (čelik + sendvič paneli):</h3>
      <p>U pravilu 15–30 % jeftinija od klasične zidane za istu površinu i visinu.</p>
      <p>Manje betona, manje zidanja, manje radnih sati na gradilištu.</p>
      <p>Najveća stavka: čelična konstrukcija + paneli, ali to je i dalje povoljnije od kompletne zidane ovojnice.</p>

      <h3>Zidana/klasična hala (beton + cigla/blok + fasada):</h3>
      <p>Više radne snage, više slojeva (zid – izolacija – fasada).</p>
      <p>Temelji često masivniji zbog veće težine.</p>
      <p>Trošak po m² je veći, a gradnja sporija (što opet košta – najam opreme, nadzor itd.).</p>

      <p><strong>Ukratko:</strong> ako pričamo o standardnoj proizvodno-skladišnoj hali, montažna će skoro uvijek biti jeftinija i u izgradnji i u vremenu do "useljivosti".</p>

      <h2><span class="text-3xl font-bold">2.</span> Detaljne prednosti montažnih hala</h2>

      <h3>Prednosti</h3>
      
      <h4>Brzina gradnje</h4>
      <p>Većina posla se obavi u tvornici (rezanje, bušenje, bojanje).</p>
      <p>Na terenu se radi montaža – često je riječ o tjednima, ne mjesecima.</p>

      <h4>Fleksibilnost</h4>
      <p>Lako se doda novi raspon (proširenje hale).</p>
      <p>Unutarnje pregrade nisu konstruktivne – lako se mijenja raspored.</p>
      <p>Moguće i djelomično demontirati i preseliti konstrukciju.</p>

      <h4>Lakši temelji</h4>
      <p>Čelična konstrukcija je laganija od betonsko-zidane.</p>
      <p>Manje betona u temeljima = niži trošak i brži radovi.</p>

      <h4>Dobra toplinska izolacija</h4>
      <p>Sendvič paneli s PUR/PIR ili mineralnom vunom.</p>
      <p>Brzo se zatvara objekt, manji toplinski mostovi ako je dobro projektirano.</p>

      <h4>Manje mokrih procesa</h4>
      <p>Manje ovisnosti o vremenu (kiša, niske temp.) jer je manje žbuke, estriha i sl.</p>

      <h4>Čisto gradilište</h4>
      <p>Manje otpada, manje šute i logističkih problema.</p>

      <h3>Nedostaci</h3>

      <h4>Ograničena "osjećaj" masivnosti</h4>
      <p>Za uredske/prodajne prostore neki više vole klasičan "zidani" osjećaj.</p>

      <h4>Zvučna izolacija</h4>
      <p>Paneli znaju lošije prigušivati zvuk od masivnih zidova (rješivo dodanim slojevima, ali to košta).</p>

      <h4>Korozija / održavanje</h4>
      <p>Čelik treba kvalitetnu zaštitu (pocinčavanje, boje).</p>
      <p>Na agresivnim lokacijama (more, kemijska industrija) treba posebno paziti.</p>

      <h2><span class="text-3xl font-bold">3.</span> Prednosti klasičnih zidanih hala</h2>

      <h3>Prednosti</h3>

      <h4>Masivnost i trajnost</h4>
      <p>Veći osjećaj "čvrstoće".</p>
      <p>Kod nekih namjena (npr. vrlo visoke temperature, udarci, vandalizam) zid može biti otporniji.</p>

      <h4>Zvučna masa</h4>
      <p>Zidani zid bolje zaustavlja bukom opterećene prostore (radionice, strojevi, glazbeni prostori itd.).</p>

      <h4>Otpornost na vatru</h4>
      <p>Betonske i zidane konstrukcije često imaju prirodno veću požarnu otpornost (R/REI klase je lakše postići bez dodatne zaštite na čeliku).</p>

      <h3>Nedostaci</h3>

      <h4>Sporija gradnja</h4>
      <p>Više faza, više timova (armirači, tesari, zidari, fasaderi...).</p>
      <p>Veća šansa za kašnjenja.</p>

      <h4>Skuplja gradnja</h4>
      <p>Više materijala i više radnih sati.</p>
      <p>Detalji toplinskih mostova i fasade traže više rada i kontrole.</p>

      <h4>Manja fleksibilnost</h4>
      <p>Proširenje je kompliciranije (rušenje dijela zidova, novi temelji, spoj na postojeće).</p>
      <p>Teže je kasnije "otvarati" velike otvore.</p>

      <h2><span class="text-3xl font-bold">4.</span> Primjeri kada odabrati što</h2>

      <h3>Montažna hala – bolji izbor kad:</h3>
      <p>Radi se o skladištu, logističkom centru, proizvodnji, poljoprivrednoj hali.</p>
      <p>Planiraš moguće proširenje kroz par godina.</p>
      <p>Bitni su ti brzina, cijena i velika raspona bez stupova.</p>
      <p>Trebaš visinu za regale, mostnu dizalicu, viljuškare itd.</p>

      <h3>Zidana hala – bolji izbor kad:</h3>
      <p>Objekt ima puno ureda, trgovinu ili javni sadržaj gdje dojam igra veliku ulogu.</p>
      <p>Imaš specifične zahtjeve: visoke temperature, buka, vandalizam, eksplozivna okolina.</p>
      <p>Želiš arhitektonski složeniju fasadu s puno otvora i "teškim" izgledom.</p>

      <h2><span class="text-3xl font-bold">5.</span> Kratki sažetak za odluku</h2>
      <p>Ako misliš na tipičnu industrijsku/poslovnu halu (skladište + malo ureda):</p>
      <p><strong>👉 Montažna čelična hala s panelima je u 90% slučajeva racionalniji izbor (brže, jeftinije, fleksibilnije).</strong></p>
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPostsData[id as keyof typeof blogPostsData];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-[100px] pb-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Članak nije pronađen</h1>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Povratak na blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-[100px] pb-12 bg-gradient-to-b from-background to-muted/20">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/blog")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Povratak na blog
          </Button>

          {/* Hero Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                {post.category}
              </span>
            </div>
          </div>

          {/* Post Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Zainteresirani ste za naše proizvode?
            </h3>
            <p className="text-muted-foreground mb-6">
              Kontaktirajte nas za besplatnu ponudu i stručno savjetovanje.
            </p>
            <Button 
              onClick={() => navigate("/")}
              className="bg-primary hover:bg-primary/90"
            >
              Zatražite ponudu
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
