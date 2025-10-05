import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const GarageInquiry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Nazad na početnu
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Zatražite ponudu za montažne garaže
              </h1>
              <p className="text-center text-muted-foreground mb-8">
                Popunite formu i dobijte besplatnu ponudu za vašu garažu
              </p>
              
              <ContactForm 
                onClose={() => navigate("/")}
                selectedService="garaze"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GarageInquiry;
