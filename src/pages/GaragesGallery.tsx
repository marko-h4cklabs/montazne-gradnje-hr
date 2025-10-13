import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GaragesGallery = () => {
  useEffect(() => {
    const title = "Montažne Garaže - Galerija | Beriko";
    const description = "Galerija montažnih garaža Beriko – pogledajte naše realizacije.";
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

  const images = (Object.values(
    import.meta.glob('/src/assets/garage-*.jpg', { eager: true, import: 'default' })
  ) as string[]).sort();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Montažne garaže - galerija',
    url: typeof window !== 'undefined' ? window.location.href : '',
    hasPart: images.slice(0, 20).map((src) => ({
      '@type': 'ImageObject',
      contentUrl: src,
      name: 'Montažne garaže - primjer',
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Montažne garaže — galerija</h1>
            <p className="text-muted-foreground">Pogledajte dio naših uspješno realiziranih garaža</p>
          </header>

          <section aria-label="Galerija montažnih garaža">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Montažne garaže - slika ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-lg card-shadow"
                />
              ))}
            </div>
          </section>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GaragesGallery;
