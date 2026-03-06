import { Microchip, ShieldCheck, MapPin, Zap, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20gostaria%20de%20informações%20sobre%20implantação%20de%20microchip.";

const benefits = [
  { icon: CheckCircle, text: "Identificação permanente" },
  { icon: ShieldCheck, text: "Mais segurança para o pet" },
  { icon: MapPin, text: "Facilita localização em caso de perda" },
  { icon: Zap, text: "Procedimento rápido e seguro" },
];

const ProvetMicrochip = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal animation="zoom-in">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 p-3 rounded-full">
            <Microchip className="h-8 w-8 text-primary" />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-6">
          Implantação de Microchip para Pets
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4 text-center mb-10">
          <p>O microchip é uma forma segura de identificação permanente para cães e gatos.</p>
          <p>O dispositivo é implantado sob a pele do animal e contém um número único que pode ser lido por leitores específicos.</p>
          <p>Essa identificação ajuda na localização do tutor em casos de perda do animal.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={300}>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <b.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
      <ScrollReveal animation="zoom-in" delay={400}>
        <div className="text-center">
          <Button variant="hero" asChild className="transition-transform hover:scale-105 active:scale-95">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-5 w-5" /> Falar com a clínica sobre microchip
            </a>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetMicrochip;
