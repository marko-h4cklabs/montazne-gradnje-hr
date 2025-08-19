import reviewDanijela from "@/assets/review-danijela.png";
import reviewDiana from "@/assets/review-diana.png";
import reviewBranko from "@/assets/review-branko.png";

const References = () => {
  const reviewImages = [
    reviewDanijela,
    reviewDiana,
    reviewBranko
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Što kažu naši kupci
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Ljudi više ni ne pitaju "radite li dobro" – nego "imate li još garaža?"
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Zadovoljstvo naših kupaca je naš najveći uspjeh
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewImages.map((reviewImage, index) => (
            <div 
              key={index}
              className="animate-slide-up hover:scale-105 smooth-transition"
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
      </div>
    </section>
  );
};

export default References;