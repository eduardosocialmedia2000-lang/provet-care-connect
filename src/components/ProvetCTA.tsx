import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

const ProvetCTA = () => (
  <section className="bg-primary py-16 md:py-20">
    <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
        Precisa de orientação veterinária?
      </h2>
      <p className="text-primary-foreground/90 text-lg">
        Nossa equipe pode orientar você sobre o melhor atendimento para o seu pet.
      </p>
      <Button variant="cta" size="lg" asChild>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
          <MessageCircle className="h-5 w-5" /> Falar com a clínica agora
        </a>
      </Button>
      <p className="text-primary-foreground/70 text-sm">Resposta rápida pelo WhatsApp.</p>
    </div>
  </section>
);

export default ProvetCTA;
