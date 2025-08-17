import Hero from "./Hero";
import Gallery from "./Gallery";
import Benefits from "./Benefits";
import References from "./References";
import Stats from "./Stats";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Benefits />
      <References />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;