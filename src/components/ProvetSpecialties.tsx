import { Bone, Eye, Scissors, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const specialties = [
  { icon: Bone, title: "Ortopedia veterinária", desc: "Diagnóstico e tratamento de problemas ósseos e articulares." },
  { icon: Eye, title: "Oftalmologia veterinária", desc: "Avaliação e tratamento de condições oculares." },
  { icon: Scissors, title: "Cirurgia geral veterinária", desc: "Procedimentos cirúrgicos com estrutura adequada." },
  { icon: Activity, title: "Oncologia veterinária", desc: "Acompanhamento e tratamento de casos oncológicos." },
];

const ProvetSpecialties = () => (
  <section className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Atendimento com Especialistas
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Além do atendimento clínico geral, a ProVet conta com profissionais especializados parceiros que realizam atendimentos específicos conforme a necessidade do paciente.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Isso permite que o tutor tenha acesso a avaliações mais aprofundadas e tratamentos especializados dentro da própria clínica.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specialties.map((item, i) => (
          <ScrollReveal key={item.title} animation="fade-up" delay={i * 100}>
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 h-full">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-7 w-7 text-secondary" />
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

export default ProvetSpecialties;
