import Navigation from "./Navigation";
import FOMOBanner from "./FOMOBanner";
import Hero from "./Hero";
import Gallery from "./Gallery";
import References from "./References";
import Stats from "./Stats";
import FAQ from "./FAQ";
import CTA from "./CTA";
import AdditionalCTA from "./AdditionalCTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FOMOBanner />
      <Hero />
      <Gallery />
      <References />
      <CTA />
      <FAQ />
      <Stats />
      <AdditionalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;