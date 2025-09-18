import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 min-h-[70vh]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Vijesti</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pratite najnovije vijesti o vremenskim nepogodbama i kako zaštititi svoju imovinu
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm border text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Uskoro dostupno
              </h2>
              <p className="text-muted-foreground mb-6">
                Ova stranica će biti uskoro dopunjena s najnovijim vijestima o vremenskim nepogodbama, 
                štetetama od oluja i tuče, te savjetima za zaštitu vaše imovine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Vremenske prognoze</h3>
                <p className="text-sm text-muted-foreground">Najnovije informacije o vremenskim uvjetima</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Štete od oluja</h3>
                <p className="text-sm text-muted-foreground">Izvještaji o materijalnim štetama</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Savjeti za zaštitu</h3>
                <p className="text-sm text-muted-foreground">Kako zaštititi svoju imovinu</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;