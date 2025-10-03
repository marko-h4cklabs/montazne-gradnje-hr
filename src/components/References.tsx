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
            Pročitajte što kažu naši kupci - recenzije
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            preko 115 zadovoljnih klijenata koji nas ocjenjuju sa "5" zvijezdica
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Zadovoljstvo naših kupaca je naš najveći uspjeh
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        
        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/BERIKO+d.o.o.+montažni+objekti/@45.9848412,17.1389723,17z/data=!4m8!3m7!1s0x4767ce19c0cfff0b:0x689e5a358d483b43!8m2!3d45.9848412!4d17.1415472!9m1!1b1!16s%2Fg%2F119tkwc60?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D#:~:text=Recenzije"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full font-semibold smooth-transition hover:scale-105"
          >
            Pregledajte sve recenzije
          </a>
        </div>
      </div>
    </section>
  );
};

export default References;