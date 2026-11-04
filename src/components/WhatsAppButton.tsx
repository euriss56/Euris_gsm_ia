import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a href="https://wa.me/2290141675784?text=Bonjour%20EURISS%20GSM" target="_blank" rel="noopener noreferrer" aria-label="Contacter EURISS GSM sur WhatsApp" className="whatsapp-float">
    <MessageCircle size={23} /><span>Besoin d’aide ?</span>
  </a>
);

export default WhatsAppButton;
