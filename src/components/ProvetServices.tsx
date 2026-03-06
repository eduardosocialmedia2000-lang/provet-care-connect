import { Stethoscope, Syringe, Scissors, Building2, ScanLine, Radio, Microchip } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { icon: Stethoscope, title: "Consultas veterinárias", desc: "Avaliação clínica completa para cães e gatos." },
  { icon: Syringe, title: "Vacinação para cães e gatos", desc: "Protocolos de vacinação atualizados e seguros." },
  { icon: Scissors, title: "Cirurgia veterinária", desc: "Centro cirúrgico completo para procedimentos seguros." },
  { icon: Building2, title: "Internamento veterinário", desc: "Acompanhamento contínuo para casos que necessitam de observação." },
  { icon: ScanLine, title: "Ultrassonografia veterinária", desc: "Exames de imagem para diagnóstico preciso." },
  { icon: Radio, title: "Radiografia veterinária", desc: "Avaliação por imagem para diversas condições de saúde." },
  { icon: Microchip, title: "Implantação de microchip", desc: "Identificação permanente e segura para seu pet." },
];

const ProvetServices = () => (
  <section id="servicos" className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Serviços da ProVet
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Na ProVet Clínica Veterinária oferecemos uma estrutura completa para cuidar da saúde do seu pet, desde consultas de rotina até exames e procedimentos cirúrgicos.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa equipe trabalha com responsabilidade, diagnóstico cuidadoso e foco no bem-estar dos animais.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((item, i) => (
          <ScrollReveal key={item.title} animation="fade-up" delay={i * 80}>
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

export default ProvetServices;
