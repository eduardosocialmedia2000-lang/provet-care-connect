import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroVet from "@/assets/hero-vet.jpeg";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";
const PHONE_URL = "tel:+5544991232555";

const ProvetHero = () => (
  <section id="inicio" className="bg-background py-16 md:py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <ScrollReveal animation="fade-right">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Seu pet está passando mal?{" "}
            <span className="text-primary">Escolher a clínica certa pode fazer toda diferença.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Na ProVet, seu pet recebe atendimento veterinário com diagnóstico responsável, estrutura clínica completa e capacidade para procedimentos cirúrgicos quando necessário.
          </p>
          <p className="text-sm text-muted-foreground">
            Atendimento veterinário em Maringá com foco na saúde e segurança do seu pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="hero" asChild className="transition-transform hover:scale-105 active:scale-95">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5" /> Falar com a clínica no WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" asChild className="transition-transform hover:scale-105 active:scale-95">
              <a href={PHONE_URL} className="gap-2">
                <Phone className="h-5 w-5" /> Ligar (44) 99123-2555
              </a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-left" delay={200}>
        <div className="flex justify-center">
          <img
            src={heroVet}
            alt="Dr. Ulisses - Veterinário da ProVet Clínica Veterinária em Maringá"
            className="rounded-2xl shadow-2xl w-full max-w-lg object-cover aspect-square transition-transform duration-500 hover:scale-[1.02]"
            loading="eager"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetHero;
