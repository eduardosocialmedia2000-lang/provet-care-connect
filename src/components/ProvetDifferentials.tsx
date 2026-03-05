import { Building2, Scissors, Stethoscope, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: Building2, title: "Estrutura clínica preparada", desc: "Ambiente adequado para avaliação clínica e acompanhamento veterinário." },
  { icon: Scissors, title: "Centro cirúrgico completo", desc: "Estrutura preparada para realizar procedimentos cirúrgicos quando necessário." },
  { icon: Stethoscope, title: "Diagnóstico cuidadoso", desc: "Cada atendimento começa com avaliação detalhada da saúde do animal." },
  { icon: HandHeart, title: "Atendimento humano", desc: "Tratamos cada pet com atenção e respeito." },
];

const ProvetDifferentials = () => (
  <section id="servicos" className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        Por que escolher a ProVet?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.title} className="bg-card border-border hover:shadow-lg transition-shadow duration-300 group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProvetDifferentials;
