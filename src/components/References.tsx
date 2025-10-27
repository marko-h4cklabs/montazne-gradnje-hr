import reviewDanijela from "@/assets/review-danijela.png";
import reviewDiana from "@/assets/review-diana.png";
import reviewBranko from "@/assets/review-branko.png";
import { Link } from "react-router-dom";

const References = () => {
  const reviewImages = [
    reviewDanijela,
    reviewDiana,
    reviewBranko
  ];

  return (
    <section className="pt-4 pb-16 bg-[hsl(var(--ivory))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Zadovoljstvo naših kupaca je naš najveći uspjeh
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviewImages.map((reviewImage, index) => (
            <div 
              key={index}
              className={`animate-slide-up hover:scale-105 smooth-transition ${index === 2 ? 'hidden md:block' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={reviewImage}
                alt={`Recenzija kupca ${index + 1}`}
                className="w-full rounded-xl card-shadow object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            to="/recenzije"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold smooth-transition hover:scale-105"
          >
            Pregledajte sve recenzije
          </Link>
        </div>
      </div>
    </section>
  );
};

export default References;