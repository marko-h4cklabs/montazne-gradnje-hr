import { Button } from "@/components/ui/button";

interface ServiceSelectionProps {
  onServiceSelect: (service: string) => void;
}

const ServiceSelection = ({ onServiceSelect }: ServiceSelectionProps) => {
  const services = [
    {
      id: "garaze",
      title: "MONTAŽNE GARAŽE",
      description: "Kvalitetne montažne garaže po mjeri"
    },
    {
      id: "bungalovi", 
      title: "BUNGALOVI ILI VIKENDICE",
      description: "Moderni bungalovi i vikendice"
    },
    {
      id: "hale",
      title: "HALE", 
      description: "Industrijske i komercijalne hale"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-8">
        Zatražite ponudu za:
      </h3>
      
      <div className="space-y-4">
        {services.map((service) => (
          <Button
            key={service.id}
            variant="outline"
            className="w-full h-auto py-6 px-8 text-left bg-muted/50 hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300"
            onClick={() => onServiceSelect(service.id)}
          >
            <div>
              <div className="font-bold text-lg mb-2">{service.title}</div>
              <div className="text-sm opacity-80">{service.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;