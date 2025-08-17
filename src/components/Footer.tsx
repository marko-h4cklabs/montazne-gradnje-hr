import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Montažne Garaže Plus</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Vaš pouzdani partner za kvalitetne montažne garaže, hale i bungalove. 
              15 godina iskustva u izgradnji trajnih konstrukcija.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white/60 hover:text-accent cursor-pointer smooth-transition" />
              <Instagram className="w-6 h-6 text-white/60 hover:text-accent cursor-pointer smooth-transition" />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+385 91 234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>info@montazne-garaze.hr</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent mt-1" />
                <div>
                  <p>Industrijska zona bb</p>
                  <p>10000 Zagreb, Hrvatska</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Naše usluge</h3>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-accent cursor-pointer smooth-transition">Montažne garaže</li>
              <li className="hover:text-accent cursor-pointer smooth-transition">Industrijske hale</li>
              <li className="hover:text-accent cursor-pointer smooth-transition">Stambeni bungalovi</li>
              <li className="hover:text-accent cursor-pointer smooth-transition">Prilagođeni projekti</li>
              <li className="hover:text-accent cursor-pointer smooth-transition">Održavanje objekata</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="text-center text-white/60">
          <p>&copy; 2024 Montažne Garaže Plus. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;