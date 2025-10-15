import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home, Phone, Mail } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track conversion event for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17494249772/YOUR_CONVERSION_LABEL', // Replace YOUR_CONVERSION_LABEL with actual label from Google Ads
        'value': 1.0,
        'currency': 'EUR'
      });
    }

    // Meta Pixel example:
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Inquiry Form Submission'
      });
    }

    // Custom dataLayer push for Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submission',
        'form_type': 'inquiry',
        'form_name': 'contact_inquiry'
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900/20 p-6">
                  <CheckCircle className="w-16 h-16 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Hvala vam!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Vaš upit je uspješno poslan. Kontaktirati ćemo vas u najkraćem mogućem roku.
              </p>

              <div className="bg-muted/30 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Šta slijedi?
                </h2>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pregledati ćemo vaš upit i pripremiti prilagođenu ponudu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Kontaktirati ćemo vas telefonom ili email-om u roku od 24 sata</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Odgovoriti ćemo vam na sva vaša pitanja i pomoći vam pri odabiru</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6 mb-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Trebate li hitnu pomoć? Kontaktirajte nas direktno:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+385986462260"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">+385 98 646 260</span>
                  </a>
                  <a 
                    href="mailto:beriko@beriko.com"
                    className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-semibold">beriko@beriko.com</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/")}
                  size="lg"
                  className="gap-2"
                >
                  <Home className="w-4 h-4" />
                  Povratak na početnu
                </Button>
                <Button
                  onClick={() => navigate("/galerija")}
                  variant="outline"
                  size="lg"
                >
                  Pregledajte galeriju
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
