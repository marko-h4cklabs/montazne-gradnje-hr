import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
