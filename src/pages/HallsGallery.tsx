import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import galerijaHala from "@/assets/galerija-hala.jpg";

const HallsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const title = "Montažne Hale - Galerija | Beriko";
    const description = "Galerija montažnih hala Beriko – primjeri naših rješenja.";
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = window.location.href;
  }, []);

  const images = [galerijaHala];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Montažne hale - galerija',
    url: typeof window !== 'undefined' ? window.location.href : '',
    hasPart: images.map((src) => ({ '@type': 'ImageObject', contentUrl: src, name: 'Montažne hale - primjer' })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-32 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Montažne hale — galerija</h1>
            <p className="text-muted-foreground">Primjeri naših montažnih hala</p>
          </header>

          <section aria-label="Galerija montažnih hala">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Montažne hale - slika ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg card-shadow cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </section>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Montažne hale - puna veličina"
                  className="w-full h-auto"
                />
              )}
            </DialogContent>
          </Dialog>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HallsGallery;
