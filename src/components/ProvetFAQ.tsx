import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "Qual o horário de funcionamento da ProVet?", a: "A ProVet atende de segunda a sexta-feira, das 8h às 18h. Aos sábados e domingos a clínica fica fechada. Recomendamos agendar previamente pelo WhatsApp (44) 99123-2555." },
  { q: "Vocês atendem urgências dentro do horário comercial?", a: "Sim, dentro do horário de funcionamento atendemos casos de urgência. Entre em contato pelo WhatsApp ou ligue (44) 99123-2555 para orientação imediata." },
  { q: "Onde fica a ProVet em Maringá?", a: "A ProVet fica na Av. Carlos Correa Borges, Maringá, PR — CEP 87060-331. O endereço completo e o trajeto estão no Google Maps na seção de localização." },
  { q: "Quanto custa uma consulta veterinária na ProVet?", a: "O valor varia conforme o tipo de avaliação e os exames complementares necessários. Para um orçamento sob medida, fale com a recepção pelo WhatsApp (44) 99123-2555." },
  { q: "Quais formas de pagamento a ProVet aceita?", a: "Aceitamos dinheiro, cartão de crédito, cartão de débito e Pix. Para consultas sobre parcelamento, entre em contato pelo WhatsApp." },
  { q: "A ProVet realiza cirurgias e exames de imagem?", a: "Sim. Contamos com centro cirúrgico completo para procedimentos cirúrgicos, além de ultrassonografia e radiografia veterinária para diagnóstico por imagem." },
  { q: "Vocês atendem aos fins de semana?", a: "Atualmente a clínica não atende aos sábados e domingos. Para urgências fora do horário comercial, recomendamos buscar um hospital veterinário de plantão 24h em Maringá." },
];

const ProvetFAQ = () => (
  <section id="contato" className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-2xl">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
          Perguntas frequentes
        </h2>
      </ScrollReveal>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
            <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden transition-shadow duration-300 hover:shadow-md">
              <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ProvetFAQ;
