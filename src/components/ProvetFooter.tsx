import { Phone, Instagram } from "lucide-react";
import logoProvet from "@/assets/logo-provet.jpg";

const ProvetFooter = () => (
  <footer className="bg-secondary py-12">
    <div className="container mx-auto px-4 text-center space-y-4">
      <img src={logoProvet} alt="ProVet" className="h-16 w-16 rounded-full object-cover mx-auto" />
      <h3 className="font-heading font-bold text-xl text-secondary-foreground">ProVet Clínica Veterinária</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-secondary-foreground/90 text-sm">
        <a href="tel:+5544991232555" className="flex items-center gap-2 hover:text-secondary-foreground transition-colors">
          <Phone className="h-4 w-4" /> (44) 99123-2555
        </a>
        <a href="https://instagram.com/provet_clinica.veterinaria" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary-foreground transition-colors">
          <Instagram className="h-4 w-4" /> @provet_clinica.veterinaria
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 text-secondary-foreground/80 text-sm">
        <MapPin className="h-4 w-4" />
        <span>Av. Carlos Correa Borges — Maringá, PR, 87060-331</span>
      </div>
      <p className="text-secondary-foreground/60 text-xs pt-4">© {new Date().getFullYear()} ProVet Clínica Veterinária — Maringá, PR</p>
    </div>
  </footer>
);

export default ProvetFooter;
