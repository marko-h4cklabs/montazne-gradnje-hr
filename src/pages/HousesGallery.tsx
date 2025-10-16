import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import house1 from "@/assets/house-1.png";
import house2 from "@/assets/house-2.png";
import house3 from "@/assets/house-3.png";
import house4 from "@/assets/house-4.png";
import house5 from "@/assets/house-5.png";
import house6 from "@/assets/house-6.png";

const HousesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const title = "Montažne Kuće - Galerija | Beriko";
    const description = "Galerija montažnih kuća, bungalova i vikendica Beriko – inspirirajte se!";
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

  const images = [house1, house2, house3, house4, house5, house6];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Montažne kuće - galerija',
    url: typeof window !== 'undefined' ? window.location.href : '',
    hasPart: images.map((src) => ({ '@type': 'ImageObject', contentUrl: src, name: 'Montažne kuće - primjer' })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PromoBanner />
      <main className="flex-grow pt-[164px] pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Natrag
          </Button>
          
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Montažne kuće — galerija</h1>
            <p className="text-muted-foreground">Ideje i reference za bungalove i vikendice</p>
          </header>

          <section aria-label="Galerija montažnih kuća">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 [&>*:last-child:nth-child(3n+1)]:md:col-start-2">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Montažne kuće - slika ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg card-shadow cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </section>

          <section className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Pridružite se zadovoljnim kupcima
            </h2>
            <Button
              onClick={() => navigate('/kuce-upit')}
              size="lg"
              className="text-lg"
            >
              Pošaljite upit
            </Button>
          </section>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Montažne kuće - puna veličina"
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

export default HousesGallery;
