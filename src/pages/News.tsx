import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-4">Vijesti</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Kronologija vremenskih nepogoda i njihovih posljedica u Hrvatskoj
          </p>

          {/* Recent Weather Events 2025 */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Nedavni vremenski događaji - 2025.</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Najavljivana nevera stigla je u Hrvatsku"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Slobodna Dalmacija, 20. kolovoza 2025.
                </p>
                <p className="text-foreground mb-4">
                  "Promjena vremena je stigla u Hrvatsku. U srijedu u večernjim satima snažno nevrijeme je pogodilo dijelove Istre, a po trenutnim informacijama, na snažnom udaru je bio Umag u kojem je pao led i jaka kiša, a ulice su potpuno završile pod vodom."
                </p>
                {/* Space for image */}
                <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                  [Prostor za sliku poplavljenih ulica]
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Dijelove Hrvatske pogodila tuča: Voćnjaci pod ledom"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Dnevnik.hr, 17. kolovoza 2025.
                </p>
                <p className="text-foreground mb-4">
                  "Dijelove Slavonije jutros je pogodilo nevrijeme ‐ uz pljuskove, krenula je i tuča. Mreže u voćnjacima Gornje Vrbe i Tomice savile su se pod težinom leda, a dijelovi polja su se zabijeljeli."
                </p>
                {/* Space for image */}
                <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                  [Prostor za sliku oštećenih voćnjaka]
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Oluja u Zagrebu rušila stabla"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Al Jazeera Balkans, 7. srpnja 2025.
                </p>
                <p className="text-foreground mb-4">
                  "Snažno olujno nevrijeme pogodilo je dijelove Hrvatske. U prijepodnevnim satima uslijed oluje u Zagrebu stablo se <strong>srušilo na četiri automobila</strong>..."
                </p>
                {/* Space for image */}
                <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                  [Prostor za sliku srušenih stabala na automobilima]
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  "Dvije osobe u Splitu teško ozlijeđene"
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Tportal.hr, 8. srpnja 2025.
                </p>
                <p className="text-foreground mb-4">
                  "Nad područjem Hrvatske formirala se snažna ciklona koja je donijela ekstremne vremenske uvjete, uz značajna oštećenja u više regija. Katastrofalno nevrijeme, krupa i olujni vjetar pogodili su Split i okolicu..."
                </p>
                {/* Space for image */}
                <div className="h-48 bg-muted/30 rounded-md flex items-center justify-center text-muted-foreground text-sm">
                  [Prostor za sliku šteta od oluje]
                </div>
              </div>
            </div>
          </section>

          {/* Historical Weather Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Povijesni vremenski događaji</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  Snježne nepogode na jugu Hrvatske
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Dalmacijanews</p>
                <p className="text-foreground">
                  "Snijeg je pao na Pelješcu, Splitu i Šibeniku. U Orebiću ima više od 10 centimetara snijega, a on je padao i u Trpnju. Prvi snijeg ove sezone pao je i na području Ploča. U Vrgorcu je u nedjelju oko 22 sata bilo 20 centimetara snijega, a do 30 cm u zaleđu grada."
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  Nevjerojatne scene u Istri
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Večernji list, 26.7.2017.</p>
                <p className="text-foreground">
                  "Neviđene scene u Istri, zbog tuče na cesti i ralica: Jako nevrijeme s tučom je oko 14 sati zahvatilo dijelove istočne Istre. Gotovo nevjerojatne scene dolaze iz istočnih dijelova Istre gdje je tuča potpuno prekrila ceste, a na terenu je čak i ralica. Ovako nešto na autocesti nitko nije očekivao."
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-foreground mb-3 text-xl">
                  Olujno nevrijeme u Zagrebu i Zagorju
                </h3>
                <p className="text-sm text-muted-foreground mb-3">24 SATA.hr, 21. lipanj 2017.</p>
                <p className="text-foreground">
                  "Kiša, tuča, grmljavina! Jako nevrijeme u srijedu pogodilo je dijelove Krapinsko-zagorske županije, Zagrebačke te dijelove grada Zagreba. Zbog tuče se na pojedinim dionicama prometovalo otežano, a očekuju se informacije o eventualnim štetama."
                </p>
              </div>
            </div>
          </section>

          {/* Damage Statistics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Statistike šteta</h2>
            
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 text-xl">
                    Štete nakon srpanjskih oluja
                  </h3>
                  <p className="text-foreground mb-4">
                    "Nakon velikih oluja u srpnju, koje su pogodile gotovo sve hrvatske krajeve, samo u Zagrebu je prijavljeno <strong>6.285 materijalnih šteta</strong>, a uključivale su štetu na građevinama, poljoprivrednim površinama i – <strong>osobnim vozilima</strong>."
                  </p>
                </div>
                
                <div>
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
            <div className="h-32 bg-muted/30 rounded-md flex items-center justify-center text-muted-foreground text-sm mb-6">
              [Prostor za sliku zaštićenog vozila u garaži]
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;