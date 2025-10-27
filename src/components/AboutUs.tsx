import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Heart, CreditCard } from "lucide-react";
import berikoFacility from "@/assets/beriko-facility.png";
import berikoTeam from "@/assets/beriko-team.png";
import berikoGathering from "@/assets/beriko-gathering.png";
import berikoTeamWork from "@/assets/beriko-team-work.png";
import berikoCertificate from "@/assets/beriko-certificate.png";

const AboutUs = () => {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/BERIKO+d.o.o.+montažni+objekti/@45.9848449,17.1389723,17z/data=!3m1!4b1!4m6!3m5!1s0x4767ce19c0cfff0b:0x689e5a358d483b43!8m2!3d45.9848412!4d17.1415472!16s%2Fg%2F119tkwc60?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="py-8 bg-[hsl(var(--beriko-blue))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="relative bg-[hsl(var(--beriko-blue))]/90 border-l-2 border-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-col items-center mb-4">
                <h2 className="text-3xl font-bold text-white text-center">
                  O nama
                </h2>
              </div>
              
              <div className="space-y-3 text-white leading-relaxed text-base">
                <p>
                  Iz želje da ljudima pruži kvalitetna, dugotrajna i brzo izvediva montažna rješenja, Bernard Domović početkom 2000-ih pokreće obiteljski obrt Beriko koji kasnije 2019. g. prerasta u Beriko d.o.o.
                </p>
                <img 
                  src={berikoCertificate} 
                  alt="Beriko business registration certificate" 
                  className="w-1/3 mx-auto h-auto rounded-lg shadow-sm my-3"
                />
                
                <p>
                  Ono što je započelo kao mala radionica, danas je preraslo u vodeći brend montažnih garaža i spremišta u regiji – prepoznat po pouzdanosti, preciznosti i osobnom pristupu svakom kupcu.
                </p>

                <div className="mt-4">
                  <img 
                    src={berikoFacility} 
                    alt="Beriko facility with forklift and prefabricated buildings" 
                    className="w-3/4 mx-auto h-auto rounded-lg shadow-sm mb-2"
                  />
                  <h4 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">Naša priča</h4>
                  <p className="mb-2">
                    Od prvog dana, Beriko spaja obiteljske vrijednosti i profesionalan pristup. Naš tim, koji i danas čine članovi iste obitelji, vodi se jednostavnim načelom: "Svaki objekt izrađujemo kao da ga gradimo za svoj dom."
                  </p>
                  <img 
                    src={berikoTeam} 
                    alt="Beriko family team" 
                    className="w-3/4 mx-auto h-auto rounded-lg shadow-sm mb-2"
                  />
                  <p>
                    Upravo ta filozofija razlikuje nas od drugih i donijela nam je povjerenje više od preko 3000 zadovoljnih kupaca diljem Hrvatske i susjednih zemalja.
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-xl font-bold text-[hsl(var(--primary))] mb-1">Naša kvaliteta</h4>
                  <p>
                    Tijekom više od dva desetljeća rada postali smo lider na tržištu montažnih objekata, s preko 3000 uspješno realiziranih projekata i stotinama pozitivnih recenzija na društvenim mrežama i Googleu. Svaka naša garaža izrađena je s pažnjom, stručnošću i odgovornošću, uz korištenje vrhunskih materijala i provjerenih konstrukcijskih rješenja.
                  </p>
                </div>

                <div className="mt-4">
                  <img 
                    src={berikoGathering} 
                    alt="Beriko team gathering" 
                    className="w-3/4 mx-auto h-auto rounded-lg shadow-sm mb-2"
                  />
                  <h4 className="text-xl font-bold text-[hsl(var(--primary))] mb-2">Zašto odabrati Beriko</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span>Obiteljska tradicija i povjerenje koje traje više od 20 godina</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span>Brza i precizna montaža bez kompromisa u kvaliteti</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span>Individualan pristup svakom projektu</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span>Dugotrajna konstrukcija otporna na vremenske uvjete</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                      <span>Stotine zadovoljnih kupaca koji preporučuju naš rad</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-white font-semibold text-base">
                  Ako tražite trajnu, funkcionalnu i estetski usklađenu montažnu garažu, odaberite sigurnost Beriko kvalitete. Jer iza svakog našeg proizvoda stoji iskustvo, odgovornost i obiteljska predanost koja traje više od dva desetljeća.
                </p>
                <img 
                  src={berikoTeamWork} 
                  alt="Beriko team at work" 
                  className="w-3/4 mx-auto h-auto rounded-lg shadow-sm mt-3"
                />
              </div>
            </div>

            {/* Contact Information - Full Width */}
            <div id="kontakt" className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-3 text-[hsl(var(--beriko-blue))] text-center">
                Kontakt Informacije
              </h3>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center space-y-1">
                  <MapPin className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--beriko-blue))] mb-0.5 text-sm">Adresa:</p>
                    <p className="text-gray-700 text-xs">Beriko Obrt, 48362 Kloštar Pod.,S.Radića 2</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-1">
                  <Phone className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--beriko-blue))] mb-0.5 text-sm">Telefon:</p>
                    <p className="text-gray-700 text-xs">+385 98 64 62 60</p>
                    <p className="text-gray-700 text-xs">Bernard Domović</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-1">
                  <Mail className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--beriko-blue))] mb-0.5 text-sm">Email:</p>
                    <p className="text-gray-700 text-xs">beriko@beriko.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <CreditCard className="w-5 h-5 text-[hsl(var(--beriko-blue))]" />
                  <div>
                    <p className="font-semibold text-[hsl(var(--beriko-blue))] mb-0.5 text-sm">IBAN:</p>
                    <p className="text-gray-700 text-xs">HR58 2360 0001 1025 4817 7</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <div className="w-5 h-5 text-[hsl(var(--beriko-blue))] flex items-center justify-center font-bold text-sm">
                    ⇄
                  </div>
                  <div>
                    <p className="font-semibold text-[hsl(var(--beriko-blue))] mb-0.5 text-sm">SWIFT:</p>
                    <p className="text-gray-700 text-xs">ZABAHR2X</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-4">
                <Button 
                  onClick={handleMapClick}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Pogledaj na Google Maps
                </Button>

                <div className="flex items-center space-x-4">
                  <p className="font-semibold text-gray-900">Pratite nas:</p>
                  <a href="https://web.facebook.com/profile.php?id=61556832431837" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[hsl(var(--beriko-blue))] smooth-transition">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/beriko.buildings/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[hsl(var(--beriko-blue))] smooth-transition">
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
