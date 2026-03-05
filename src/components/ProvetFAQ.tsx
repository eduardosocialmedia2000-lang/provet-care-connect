import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Vocês atendem urgências?", a: "Sim, a ProVet está preparada para atender casos de urgência. Entre em contato pelo WhatsApp para orientação imediata." },
  { q: "A clínica realiza cirurgias?", a: "Sim. Contamos com centro cirúrgico completo para realizar procedimentos quando necessário." },
  { q: "Precisa agendar consulta?", a: "Recomendamos o agendamento para garantir o melhor atendimento, mas também atendemos demandas urgentes." },
  { q: "Atendem cães e gatos?", a: "Sim, a ProVet oferece atendimento clínico e cirúrgico para cães e gatos." },
];

const ProvetFAQ = () => (
  <section id="contato" className="bg-background py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
        Perguntas frequentes
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 overflow-hidden">
            <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ProvetFAQ;
