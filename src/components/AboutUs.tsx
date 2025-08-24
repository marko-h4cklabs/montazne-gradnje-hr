import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const AboutUs = () => {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/BERIKO+d.o.o.+montažni+objekti/@45.9848412,17.1389723,17z/data=!4m8!3m7!1s0x4767ce19c0cfff0b:0x689e5a358d483b43!8m2!3d45.9848412!4d17.1415472!9m1!1b1!16s%2Fg%2F119tkwc60?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              O Nama
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              BERIKO d.o.o. je kompanija koja se specijalizira za proizvodnju i montažu kvalitetnih montažnih objekata. 
              Sa dugogodišnjim iskustvom u području (+15 godina), pružamo kompletna rješenja za vaše potrebe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Naša Misija
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Naša misija je da pružimo kvalitetne, pouzdane i estetski privlačne montažne objekte koji će služiti našim 
                klijentima decenijama. Kombinujemo tradicionalno znanje sa modernim tehnologijama kako bismo isporučili 
                najbolja rešenja na tržištu.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Preko 10 godina iskustva</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Kompletna rešenja "ključ u ruke"</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Garantovano kvalitet i rokovi</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Kontakt Informacije
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-card-foreground">Adresa:</p>
                    <p className="text-muted-foreground">BERIKO d.o.o. montažni objekti</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">Telefon:</p>
                    <p className="text-muted-foreground">+387 XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">Email:</p>
                    <p className="text-muted-foreground">info@beriko.ba</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleMapClick}
                className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Pogledaj na Google Maps
              </Button>

              <div className="mt-6">
                <p className="font-semibold mb-3 text-card-foreground">Pratite nas:</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Linkedin className="w-5 h-5" />
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