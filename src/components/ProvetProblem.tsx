import { AlertTriangle } from "lucide-react";

const ProvetProblem = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <div className="flex justify-center">
        <div className="bg-primary/10 p-3 rounded-full">
          <AlertTriangle className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        Quando um pet passa mal, o tutor precisa agir rápido.
      </h2>
      <div className="text-muted-foreground text-lg leading-relaxed space-y-4 text-left">
        <p>Quando um animal começa a apresentar sintomas, o tutor naturalmente fica preocupado.</p>
        <p>É comum surgirem dúvidas como:</p>
        <ul className="space-y-2 pl-4">
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Será que é algo grave?</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Qual clínica veterinária posso confiar?</li>
          <li className="flex items-start gap-2"><span className="text-primary font-bold">•</span> Será que vão conseguir ajudar meu pet?</li>
        </ul>
        <p>Muitas pessoas abrem o Google tentando encontrar uma clínica veterinária confiável em Maringá.</p>
        <p>Mas nem todas as clínicas possuem estrutura para lidar com casos mais delicados.</p>
        <p className="font-semibold text-foreground">Por isso escolher uma clínica preparada faz toda diferença.</p>
      </div>
    </div>
  </section>
);

export default ProvetProblem;
