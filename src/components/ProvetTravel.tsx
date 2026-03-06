import { Plane, Syringe, ClipboardCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20gostaria%20de%20informações%20sobre%20viagem%20com%20meu%20pet.";

const items = [
  { icon: ClipboardCheck, text: "Avaliação clínica antes da viagem" },
  { icon: Syringe, text: "Atualização da carteira de vacinação" },
  { icon: ShieldCheck, text: "Orientação sobre transporte seguro do animal" },
];

const ProvetTravel = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal animation="zoom-in">
        <div className="flex justify-center mb-6">
          <div className="bg-secondary/10 p-3 rounded-full">
            <Plane className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
          Viagem com seu Pet
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4 text-center mb-8">
          <p>Vai viajar com seu animal de estimação?</p>
          <p>Alguns destinos exigem cuidados veterinários específicos antes da viagem, como vacinação atualizada, atestado de saúde ou identificação por microchip.</p>
          <p>Na ProVet orientamos os tutores sobre os cuidados necessários para viagens com pets, garantindo que o animal esteja saudável e preparado para o deslocamento.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={300}>
        <p className="font-heading font-semibold text-foreground text-center mb-6">Podemos auxiliar com:</p>
        <div className="space-y-4 max-w-md mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-2 rounded-full">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={400}>
        <div className="text-center mt-8">
          <Button variant="hero" asChild className="transition-transform hover:scale-105 active:scale-95">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" /> Falar sobre viagem com pet
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetTravel;
