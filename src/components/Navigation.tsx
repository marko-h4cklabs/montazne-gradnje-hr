import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Menu, X, Home, Warehouse, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPonudaOpen, setIsPonudaOpen] = useState(false);
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
    { name: "O NAMA", href: "/o-nama" },
    { name: "FAQ", href: "/faq" },
    { name: "RECENZIJE", href: "/recenzije" }
  ];

  const services = [
    {
      icon: Building2,
      title: "Montažne Garaže",
      path: "/garaze-upit"
    },
    {
      icon: Home,
      title: "Montažne Kuće",
      path: "/kuce-upit"
    },
    {
      icon: Warehouse,
      title: "Montažne Hale",
      path: "/hale-upit"
    }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if it's a full route (not a hash link)
    if (href.startsWith('/')) {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }
    
    const targetId = href.substring(1);
    
    // If we're not on the main page, navigate to it first
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    
    // If we're on the main page, scroll to the section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Special handling for specific sections
      let offset = 80; // Account for fixed navbar height
      if (targetId === 'posalji-upit') {
        offset = 150; // Show more content for offer section
      }
      
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleServiceClick = (path: string) => {
    navigate(path);
    setIsPonudaOpen(false);
    setIsMenuOpen(false);
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
              onClick={() => setIsPonudaOpen(true)}
              className="bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-2 font-semibold"
            >
              ZATRAŽITE PONUDU
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
          <div className="lg:hidden border-t border-border bg-gradient-to-b from-background to-blue-50/40 shadow-lg">
            <div className="px-4 py-6 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-center text-foreground hover:text-primary hover:bg-accent/50 smooth-transition font-semibold rounded-lg border border-border/50"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  onClick={() => setIsPonudaOpen(true)}
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full font-semibold py-3"
                >
                  ZATRAŽITE PONUDU
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Ponuda Dialog */}
      <Dialog open={isPonudaOpen} onOpenChange={setIsPonudaOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Odaberite uslugu</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {services.map((service) => (
              <button
                key={service.path}
                onClick={() => handleServiceClick(service.path)}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all group"
              >
                <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold">{service.title}</span>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;