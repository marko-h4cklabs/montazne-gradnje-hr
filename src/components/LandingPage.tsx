import Navigation from "./Navigation";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import Gallery from "./Gallery";
import References from "./References";
import FinalCTA from "./FinalCTA";
import RealLifeStories from "./RealLifeStories";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import NewIntroSection from "./NewIntroSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <NewIntroSection />
      <div id="proizvodi">
        <ProductCategories />
      </div>
      <div id="galerija">
        <Gallery />
      </div>
      <References />
      <RealLifeStories />
      <div id="kontakt">
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