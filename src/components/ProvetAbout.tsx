import { Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const ProvetAbout = () => (
  <section id="sobre" className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <ScrollReveal animation="zoom-in">
        <div className="flex justify-center">
          <div className="bg-secondary/10 p-3 rounded-full">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          ProVet Clínica Veterinária em Maringá
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
          <p>A ProVet oferece atendimento clínico e cirúrgico para cães e gatos, com foco em diagnóstico responsável e cuidado verdadeiro com o animal.</p>
          <p>Cada caso é avaliado com atenção para identificar o problema e definir o melhor tratamento possível.</p>
          <p className="font-semibold text-foreground">Nosso compromisso é oferecer segurança para o tutor e bem-estar para o pet.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={300}>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mt-8">
          <AnimatedCounter end={10} suffix="+" label="Anos de experiência" />
          <AnimatedCounter end={5000} suffix="+" label="Pets atendidos" />
          <AnimatedCounter end={98} suffix="%" label="Satisfação dos tutores" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetAbout;
