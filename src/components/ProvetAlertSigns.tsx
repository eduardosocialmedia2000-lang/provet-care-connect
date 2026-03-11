import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

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
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Seu pet apresenta algum desses sinais?
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
        {signs.map((sign, i) => (
          <ScrollReveal key={sign} animation="fade-up" delay={i * 80}>
            <div className="flex items-center gap-3 bg-destructive/5 rounded-lg p-3 transition-all duration-300 hover:bg-destructive/10 hover:scale-[1.02] cursor-default">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0" />
              <span className="text-foreground font-medium">{sign}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal animation="fade-up" delay={600}>
        <p className="text-muted-foreground text-lg">
          Se você perceber qualquer alteração no comportamento ou na saúde do seu pet, procure orientação veterinária.
        </p>
        <div className="pt-4">
          <Button variant="hero" asChild className="transition-transform hover:scale-105 active:scale-95">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" /> Falar com a ProVet
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetAlertSigns;
