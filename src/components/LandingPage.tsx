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
      <WhyChooseUs />
      <Process />
      <ProductCategories />
      <Gallery />
      <References />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;