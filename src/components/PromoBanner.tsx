const PromoBanner = () => {
  return (
    <div className="fixed top-0 w-full bg-[#1e40af] text-white z-[60] safe-inset-top">
      <div className="container mx-auto px-4 py-2 text-center">
        <p className="text-sm md:text-base font-medium">
          Sezonska ponuda - <span className="text-yellow-400 font-bold">10% popusta</span> na vaš montažni objekt
        </p>
      </div>
    </div>
  );
};

export default PromoBanner;
