import Navigation from "./Navigation";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import ProductCategories from "./ProductCategories";
import Gallery from "./Gallery";
import References from "./References";
import SocialProof from "./SocialProof";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="o-nama">
        <WhyChooseUs />
      </div>
      <div id="proces">
        <Process />
      </div>
      <div id="proizvodi">
        <ProductCategories />
      </div>
      <div id="galerija">
        <Gallery />
      </div>
      <References />
      <SocialProof />
      <FinalCTA />
      <div id="kontakt">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;