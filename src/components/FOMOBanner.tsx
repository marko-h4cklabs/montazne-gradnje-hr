import { Button } from "@/components/ui/button";

const FOMOBanner = () => {
  return (
    <section className="bg-destructive text-destructive-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-medium mb-3">
            <span>🛑 Ostavi auto još jednu zimu na ulici i možeš se pozdraviti s limarijom.</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-medium mb-3">
            <span>🔥 Montažna garaža na tvojoj adresi – već za 7 dana.</span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm md:text-base font-medium mb-4">
            <span>🏁 Ostalo još samo 4 po staroj cijeni.</span>
          </div>
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-destructive hover:bg-white/90 hover:text-destructive/90 smooth-transition px-8 py-3 rounded-full font-semibold"
          >
            Zatraži ponudu – Zaključaj cijenu odmah
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FOMOBanner;