import { Bird, Bug, Rabbit } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const animals = [
  { icon: Bird, name: "Aves" },
  { icon: Bug, name: "Répteis" },
  { icon: Rabbit, name: "Pequenos mamíferos" },
];

const ProvetExoticAnimals = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Atendimento para Animais Exóticos
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="text-muted-foreground text-lg leading-relaxed space-y-4 mb-10">
          <p>Além de cães e gatos, alguns animais exóticos também necessitam de acompanhamento veterinário especializado.</p>
          <p>A ProVet realiza orientações e avaliações para determinados tipos de animais não convencionais, sempre com foco na saúde, bem-estar e manejo adequado.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <p className="font-heading font-semibold text-foreground mb-6">Exemplos de animais que podem necessitar atendimento:</p>
        <div className="flex flex-wrap justify-center gap-6">
          {animals.map((animal, i) => (
            <div key={i} className="flex flex-col items-center gap-3 bg-card border border-border rounded-xl p-6 w-40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-full">
                <animal.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-heading font-semibold text-foreground">{animal.name}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-6 italic">* O atendimento depende de avaliação prévia.</p>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetExoticAnimals;
