import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Recenzije i Preporuke
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Pročitajte iskustva naših zadovoljnih klijenata i njihove priče o saradnji sa Beriko d.o.o.
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Želite da podelite svoje iskustvo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vaše mišljenje je važno za nas i pomaže budućim klijentima da donesu pravu odluku.
            </p>
            <a 
              href="/#kontakt"
              className="inline-block bg-primary hover:bg-primary-dark text-primary-foreground rounded-full px-8 py-3 font-semibold transition-colors"
            >
              Kontaktirajte Nas
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
