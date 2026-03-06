import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

const ProvetFinalCTA = () => (
  <section className="bg-primary py-16 md:py-20">
    <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
          Seu pet precisa de atendimento veterinário?
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <p className="text-primary-foreground/90 text-lg">
          A equipe da ProVet está pronta para orientar você e avaliar a saúde do seu animal.
        </p>
      </ScrollReveal>
      <ScrollReveal animation="zoom-in" delay={200}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="cta" size="lg" asChild className="transition-transform hover:scale-105 active:scale-95">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" /> Falar com a clínica no WhatsApp
            </a>
          </Button>
        </div>
        <a href="tel:+5544991232555" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mt-4 transition-colors">
          <Phone className="h-4 w-4" /> (44) 99123-2555
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetFinalCTA;
