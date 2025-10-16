import Navigation from "@/components/Navigation";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Home, Warehouse, Car } from "lucide-react";
import reviewDianaJustic from "@/assets/review-diana-justic.png";
import reviewNickFrehner from "@/assets/review-nick-frehner.png";
import reviewBellySwt from "@/assets/review-belly-swt.png";
import reviewMatijaSimunovic from "@/assets/review-matija-simunovic.png";
import reviewStjepanHofer from "@/assets/review-stjepan-hofer.png";
import reviewMateCustic from "@/assets/review-mate-custic.png";
import reviewMuratKaya from "@/assets/review-murat-kaya.png";
import reviewPavoHandabaka from "@/assets/review-pavo-handabaka.png";
import reviewNikolaTurkalj from "@/assets/review-nikola-turkalj.png";
import reviewFilipAgnic from "@/assets/review-filip-agnic.png";
import reviewElvijaPernar from "@/assets/review-elvija-pernar.png";
import reviewPetarMuzar from "@/assets/review-petar-muzar.png";
import reviewMarkoNovko from "@/assets/review-marko-novko.png";
import reviewBrankoCvetnic from "@/assets/review-branko-cvetnic.png";
import reviewSlavko from "@/assets/review-slavko.png";

const Reviews = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Garaže",
      icon: Car,
      path: "/garaze-upit",
      description: "Zatražite ponudu za garažu"
    },
    {
      title: "Kuće i Bungalovi",
      icon: Home,
      path: "/kuce-upit",
      description: "Zatražite ponudu za kuću"
    },
    {
      title: "Hale",
      icon: Warehouse,
      path: "/hale-upit",
      description: "Zatražite ponudu za halu"
    }
  ];

  const reviewImages = [
    { src: reviewDianaJustic, alt: "Recenzija - Diana Justic" },
    { src: reviewNickFrehner, alt: "Recenzija - Nick Frehner" },
    { src: reviewBellySwt, alt: "Recenzija - Belly-SWT" },
    { src: reviewMatijaSimunovic, alt: "Recenzija - Matija Šimunović" },
    { src: reviewStjepanHofer, alt: "Recenzija - Stjepan Hofer" },
    { src: reviewMateCustic, alt: "Recenzija - mate custic" },
    { src: reviewMuratKaya, alt: "Recenzija - Murat Kaya" },
    { src: reviewPavoHandabaka, alt: "Recenzija - Pavo Handabaka" },
    { src: reviewNikolaTurkalj, alt: "Recenzija - Nikola Turkalj" },
    { src: reviewFilipAgnic, alt: "Recenzija - Filip Agnič" },
    { src: reviewElvijaPernar, alt: "Recenzija - Elvija Pernar Ivezić" },
    { src: reviewPetarMuzar, alt: "Recenzija - Petar Mužar" },
    { src: reviewMarkoNovko, alt: "Recenzija - Marko Novko" },
    { src: reviewBrankoCvetnic, alt: "Recenzija - Branko Cvetnić" },
    { src: reviewSlavko, alt: "Recenzija - Slavko" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Navigation />
      <main className="pt-30">
        <section className="pt-16 pb-4 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Recenzije i Preporuke
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-4">
              Pročitajte iskustva naših zadovoljnih klijenata i njihove priče o saradnji sa Beriko d.o.o.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-0">
              {reviewImages.map((review, index) => (
                <div 
                  key={index}
                  className="break-inside-avoid mb-0"
                >
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ako se želite pridružiti listi zadovoljnih kupaca pošaljite nam upit i započnimo dogovor
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto invisible">
              Hidden text
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="rounded-full px-12 py-6 text-lg font-semibold h-auto">
                  Pošaljite nam upit
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center mb-4">
                    Izaberite tip objekta
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  {services.map((service) => (
                    <button
                      key={service.path}
                      onClick={() => navigate(service.path)}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
