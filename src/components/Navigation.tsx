import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Simple scroll detection - when we're near the top (hero section), use white text
      const isOverHero = window.scrollY < 200;
      setIsScrolled(!isOverHero);
    };

    window.addEventListener('scroll', handleScroll);
    // Call initially to set correct state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "NAŠI PROIZVODI", href: "#proizvodi" },
    { name: "O NAMA", href: "#o-nama" },
    { name: "GALERIJA", href: "#galerija" },
    { name: "KONTAKT", href: "#kontakt" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    // If we're not on the main page, navigate to it first
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    
    // If we're on the main page, scroll to the section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    // If we're not on the main page, navigate to it first
    if (location.pathname !== '/') {
      navigate('/#kontakt');
      return;
    }
    
    // If we're on the main page, scroll to contact section
    const targetElement = document.getElementById('kontakt');
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-border shadow-sm safe-inset-top">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="hidden md:flex items-center space-x-3">
            <img 
              src="/lovable-uploads/624af0ec-f1aa-481d-bae5-9b3145b561c5.png" 
              alt="Beriko d.o.o. logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-foreground hover:text-primary/80 smooth-transition font-medium text-sm tracking-wide drop-shadow-lg`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-2 font-semibold"
            >
              KONTAKTIRAJTE NAS
            </Button>
          </div>

          {/* Mobile Beriko logo */}
          <div className="md:hidden">
            <img 
              src="/lovable-uploads/624af0ec-f1aa-481d-bae5-9b3145b561c5.png" 
              alt="Beriko d.o.o. logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground drop-shadow-sm" />
            ) : (
              <Menu className="h-6 w-6 text-foreground drop-shadow-sm" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-foreground hover:text-primary smooth-transition font-medium"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold"
                >
                  KONTAKTIRAJTE NAS
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;