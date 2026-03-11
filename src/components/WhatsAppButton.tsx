import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5544991232555?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20atendimento%20na%20ProVet.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/85 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 animate-bounce"
    style={{ animationDuration: "2s", animationIterationCount: "3" }}
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
