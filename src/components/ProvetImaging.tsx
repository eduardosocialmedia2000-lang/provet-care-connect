import { ScanLine, Radio } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const exams = [
  { icon: ScanLine, title: "Ultrassonografia veterinária", desc: "Avaliação por imagem não invasiva para diagnóstico de condições abdominais, cardíacas e outras." },
  { icon: Radio, title: "Radiografia veterinária", desc: "Exame rápido para avaliação de estruturas ósseas, torácicas e abdominais." },
];

const ProvetImaging = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Exames Veterinários
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <p className="text-muted-foreground text-lg text-center leading-relaxed mb-10">
          Os exames de imagem ajudam no diagnóstico de diversas condições de saúde, permitindo uma avaliação mais precisa do animal.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {exams.map((exam, i) => (
          <ScrollReveal key={exam.title} animation="fade-up" delay={i * 100 + 200}>
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <exam.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{exam.title}</h3>
                <p className="text-muted-foreground text-sm">{exam.desc}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProvetImaging;
