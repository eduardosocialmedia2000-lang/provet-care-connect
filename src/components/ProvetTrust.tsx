import { ShieldCheck } from "lucide-react";

const ProvetTrust = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <div className="flex justify-center">
        <div className="bg-primary/10 p-3 rounded-full">
          <ShieldCheck className="h-8 w-8 text-primary" />
        </div>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        Seu pet merece cuidado profissional.
      </h2>
      <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
        <p>Na ProVet, buscamos oferecer um atendimento responsável, com estrutura adequada e profissionais comprometidos com a saúde do animal.</p>
        <p className="font-semibold text-foreground">Nosso objetivo é cuidar do seu pet com segurança e atenção.</p>
      </div>
    </div>
  </section>
);

export default ProvetTrust;
