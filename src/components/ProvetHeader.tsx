import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import logoProvet from "@/assets/logo-provet.jpg";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a clínica", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const ProvetHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logoProvet} alt="ProVet Clínica Veterinária" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg text-foreground hidden sm:block">ProVet</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 text-muted-foreground hover:text-primary font-medium border-b border-border last:border-0">
              {item.label}
            </a>
          ))}
          <Button variant="hero" className="w-full mt-3" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default ProvetHeader;
