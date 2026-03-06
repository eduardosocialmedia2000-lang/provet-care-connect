import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ProvetMap = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal animation="fade-up">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Localização
        </h2>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={100}>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-5 w-5 text-primary" />
          <p className="text-lg">Av. Carlos Correa Borges — Maringá, PR, 87060-331</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="fade-up" delay={200}>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-border max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5!2d-51.94!3d-23.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzEyLjAiUyA1McKwNTYnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da ProVet Clínica Veterinária em Maringá"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://share.google/cype9W0KmwYe7qJji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
          >
            Ver no Google Maps →
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProvetMap;
