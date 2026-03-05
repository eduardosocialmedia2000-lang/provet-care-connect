import { Building2, Scissors, Stethoscope, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  { icon: Building2, title: "Estrutura clínica preparada", desc: "Ambiente adequado para avaliação clínica e acompanhamento veterinário." },
  { icon: Scissors, title: "Centro cirúrgico completo", desc: "Estrutura preparada para realizar procedimentos cirúrgicos quando necessário." },
  { icon: Stethoscope, title: "Diagnóstico cuidadoso", desc: "Cada atendimento começa com avaliação detalhada da saúde do animal." },
  { icon: HandHeart, title: "Atendimento humano", desc: "Tratamos cada pet com atenção e respeito." },
];

const ProvetDifferentials = () => (
  <section id="servicos" className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Por que escolher a ProVet?
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} animation="fade-up" delay={i * 100}>
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProvetDifferentials;
