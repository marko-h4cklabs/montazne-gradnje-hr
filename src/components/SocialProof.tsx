import { Shield, Users, Award, HeadphonesIcon } from "lucide-react";

const SocialProof = () => {
  const proofs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Više od 2000 završenih montaža",
      subtitle: "širom Hrvatske i inozemstva"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5 godina garancije",
      subtitle: "na konstrukciju"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Naši majstori ne odlaze",
      subtitle: "dok ne kažeš: \"To je to.\""
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Podrška nakon ugradnje",
      subtitle: "ne bježimo kad platite"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Bez rizika. Samo konkretan rezultat.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proofs.map((proof, index) => (
            <div 
              key={index}
              className="text-center text-primary-foreground animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
                {proof.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                ✔️ {proof.title}
              </h3>
              <p className="text-primary-foreground/80">
                {proof.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;