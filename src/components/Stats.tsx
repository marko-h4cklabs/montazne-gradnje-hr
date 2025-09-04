const Stats = () => {
  const stats = [
    {
      number: "17+",
      label: "Godina iskustva",
      description: "u montažnim konstrukcijama"
    },
    {
      number: "500+",
      label: "Postavljenih objekata",
      description: "diljem Hrvatske"
    },
    {
      number: "98%",
      label: "Zadovoljnih kupaca",
      description: "preporučuje nas dalje"
    },
    {
      number: "30",
      label: "Dana garancije",
      description: "za povrat novca"
    }
  ];

  return (
    <section className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center text-white animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;