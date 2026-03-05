import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20meu%20pet%20está%20com%20sintomas%20e%20preciso%20de%20orientação.";

const signs = [
  "Convulsões",
  "Vômitos frequentes",
  "Dor abdominal",
  "Falta de apetite",
  "Dificuldade para andar",
  "Secreções anormais",
  "Comportamento diferente",
];

const ProvetAlertSigns = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        Seu pet apresenta algum desses sinais?
      </h2>
      <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
        {signs.map((sign) => (
          <div key={sign} className="flex items-center gap-3 bg-destructive/5 rounded-lg p-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
            <span className="text-foreground font-medium">{sign}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-lg">
        Se você perceber qualquer alteração no comportamento ou na saúde do seu pet, procure orientação veterinária.
      </p>
      <Button variant="hero" asChild>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
          <MessageCircle className="h-5 w-5" /> Falar com a ProVet
        </a>
      </Button>
    </div>
  </section>
);

export default ProvetAlertSigns;
