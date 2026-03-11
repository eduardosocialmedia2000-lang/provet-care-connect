import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

const ProvetCTA = () => (
  <section className="bg-primary py-16 md:py-20">
    <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          Precisa de orientação veterinária?
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <p className="text-primary-foreground/90 text-lg">
          Nossa equipe pode orientar você sobre o melhor atendimento para o seu pet.
        </p>
      </ScrollReveal>
      <ScrollReveal animation="zoom-in" delay={200}>
        <Button variant="cta" size="lg" asChild className="transition-transform hover:scale-105 active:scale-95">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
            <MessageCircle className="h-5 w-5" /> Falar com a clínica agora
          </a>
        </Button>
        <p className="text-primary-foreground/70 text-sm mt-4">Resposta rápida pelo WhatsApp.</p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetCTA;
