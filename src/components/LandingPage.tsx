import Navigation from "./Navigation";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import Gallery from "./Gallery";
import References from "./References";
import FinalCTA from "./FinalCTA";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import NewIntroSection from "./NewIntroSection";
import PromoBanner from "./PromoBanner";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Navigation />
      <Hero />
      <NewIntroSection />
      <div id="proizvodi">
        <ProductCategories />
      </div>
      <div id="recenzije">
        <References />
      </div>
      <div id="posalji-upit">
        <FinalCTA />
      </div>
      <div id="o-nama">
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;