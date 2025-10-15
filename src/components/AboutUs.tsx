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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-gradient-to-br from-primary/5 to-transparent border-l-4 border-primary p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full mb-4 animate-fade-in">
                <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              </div>
              <h3 className="text-4xl font-bold text-foreground text-center mb-2">
                Naša Misija
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-justify text-lg">
              Naša misija je da pružimo kvalitetne, pouzdane i estetski privlačne montažne objekte koji će služiti našim 
              klijentima desetljećima. Kombiniramo tradicionalna znanja sa modernim tehnologijama kako bismo uvijek bili u koraku sa trendovima i zadovoljili želje i potrebe svakog kupca.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3 hover:translate-x-2 smooth-transition">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">23 godina iskustva</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 smooth-transition">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Kompletna rješenja "ključ u ruke"</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 smooth-transition">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Garantirana kvaliteta i dogovoreni rokovi</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 smooth-transition">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Više od 2000 projekata</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-2 smooth-transition">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">4 zemalja</span>
              </div>
            </div>
          </div>

            <div id="kontakt" className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-beriko-blue">
                Kontakt Informacije
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-beriko-blue mt-1" />
                  <div>
                    <p className="font-semibold text-beriko-blue">Adresa:</p>
                    <p className="text-muted-foreground">HR-48362 KLOŠTAR PODRAVSKI</p>
                    <p className="text-muted-foreground">Stjepana Radića 2</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-beriko-blue" />
                  <div>
                    <p className="font-semibold text-beriko-blue">Telefon:</p>
                    <p className="text-muted-foreground">098 64 62 60 - Bernard Domović</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-beriko-blue" />
                  <div>
                    <p className="font-semibold text-beriko-blue">Email:</p>
                    <p className="text-muted-foreground">beriko@beriko.com</p>
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
                  <a href="https://web.facebook.com/profile.php?id=61556832431837" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/beriko.buildings/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">
                    <Instagram className="w-5 h-5" />
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