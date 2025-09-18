import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Vijesti</h1>
          <div className="text-center text-muted-foreground">
            <p>Ova stranica će biti uskoro dopunjena s najnovijim vijestima.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;