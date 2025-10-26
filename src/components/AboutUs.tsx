import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from "lucide-react";

const AboutUs = () => {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/BERIKO+d.o.o.+montažni+objekti/@45.9848449,17.1389723,17z/data=!3m1!4b1!4m6!3m5!1s0x4767ce19c0cfff0b:0x689e5a358d483b43!8m2!3d45.9848412!4d17.1415472!16s%2Fg%2F119tkwc60?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="relative bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-primary p-8 rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-8">
                <h2 className="text-4xl font-bold text-beriko-blue text-center">
                  Vaša garaža. Naša briga.
                </h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Iz želje da ljudima pruži kvalitetna, dugotrajna i brzo izvediva montažna rješenja, Bernard Domović početkom 2000-ih pokreće obiteljski obrt Beriko koji kasnije 2019. g. prerasta u{" "}
                  <a 
                    href="https://sudreg.pravosudje.hr/ords/r/esudreg/public/podaci-o-poslovnom-subjektu-ispis?p29_sbt_mbs=10114713&clear=29&cs=348vizioLNRO-2ct6WGCjrxUgYThMCD4RG3HUZTXll4dn2-MICdON1VTyUGuHGp9p_lx_qOrA6Xf43eH_L0fArQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Beriko d.o.o.
                  </a>
                </p>
                
                <p>
                  Ono što je započelo kao mala radionica, danas je preraslo u vodeći brend montažnih garaža i spremišta u regiji – prepoznat po pouzdanosti, preciznosti i osobnom pristupu svakom kupcu.
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-foreground mb-3">Naša priča</h4>
                  <p className="mb-4">
                    Od prvog dana, Beriko spaja obiteljske vrijednosti i profesionalan pristup. Naš tim, koji i danas čine članovi iste obitelji, vodi se jednostavnim načelom: "Svaki objekt izrađujemo kao da ga gradimo za svoj dom."
                  </p>
                  <p>
                    Upravo ta filozofija razlikuje nas od drugih i donijela nam je povjerenje više od preko 3000 zadovoljnih kupaca diljem Hrvatske i susjednih zemalja.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-foreground mb-3">Naša kvaliteta</h4>
                  <p>
                    Tijekom više od dva desetljeća rada postali smo lider na tržištu montažnih objekata, s preko 3000 uspješno realiziranih projekata i stotinama pozitivnih recenzija na društvenim mrežama i Googleu. Svaka naša garaža izrađena je s pažnjom, stručnošću i odgovornošću, uz korištenje vrhunskih materijala i provjerenih konstrukcijskih rješenja.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-foreground mb-4">Zašto odabrati Beriko</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Obiteljska tradicija i povjerenje koje traje više od 20 godina</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Brza i precizna montaža bez kompromisa u kvaliteti</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Individualan pristup svakom projektu</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Dugotrajna konstrukcija otporna na vremenske uvjete</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span>Stotine zadovoljnih kupaca koji preporučuju naš rad</span>
                    </div>
                  </div>
                </div>

                <p className="mt-8 text-foreground font-semibold text-lg">
                  Ako tražite trajnu, funkcionalnu i estetski usklađenu montažnu garažu, odaberite sigurnost Beriko kvalitete. Jer iza svakog našeg proizvoda stoji iskustvo, odgovornost i obiteljska predanost koja traje više od dva desetljeća.
                </p>
              </div>
            </div>

            {/* Contact Information - Full Width */}
            <div id="kontakt" className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-beriko-blue text-center">
                Kontakt Informacije
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-3">
                  <MapPin className="w-8 h-8 text-beriko-blue" />
                  <div>
                    <p className="font-semibold text-beriko-blue mb-2">Adresa:</p>
                    <p className="text-muted-foreground">HR-48362 KLOŠTAR PODRAVSKI</p>
                    <p className="text-muted-foreground">Stjepana Radića 2</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <Phone className="w-8 h-8 text-beriko-blue" />
                  <div>
                    <p className="font-semibold text-beriko-blue mb-2">Telefon:</p>
                    <p className="text-muted-foreground">098 64 62 60 - Bernard Domović</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <Mail className="w-8 h-8 text-beriko-blue" />
                  <div>
                    <p className="font-semibold text-beriko-blue mb-2">Email:</p>
                    <p className="text-muted-foreground">beriko@beriko.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button 
                  onClick={handleMapClick}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Pogledaj na Google Maps
                </Button>

                <div className="flex items-center space-x-4">
                  <p className="font-semibold text-card-foreground">Pratite nas:</p>
                  <a href="https://web.facebook.com/profile.php?id=61556832431837" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/beriko.buildings/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
