import FOMOBanner from "./FOMOBanner";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Benefits from "./Benefits";
import References from "./References";
import Stats from "./Stats";
import FAQ from "./FAQ";
import CTA from "./CTA";
import AdditionalCTA from "./AdditionalCTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <FOMOBanner />
      <Hero />
      <Gallery />
      <Benefits />
      <References />
      <Stats />
      <FAQ />
      <CTA />
      <AdditionalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;