import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section contact-section">
    <div className="contact-panel">
      <div className="contact-copy">
        <div className="eyebrow">PARLONS DE VOTRE APPAREIL</div>
        <h2>Prêt à lui donner<br /><span>une seconde vie ?</span></h2>
        <p>Expliquez-nous votre problème. Nous vous répondrons pour vous orienter et préparer un devis adapté.</p>
        <a className="button-primary" href="https://wa.me/2290141675784?text=Bonjour%20EURISS%20GSM%2C%20j'aimerais%20un%20renseignement."><MessageCircle size={18} /> Écrire sur WhatsApp <ArrowUpRight size={17} /></a>
      </div>
      <div className="contact-details">
        <div><span className="contact-icon"><Phone size={18} /></span><p><small>TÉLÉPHONE / WHATSAPP</small><a href="tel:+2290141675784">+229 01 41 67 57 84</a></p></div>
        <div><span className="contact-icon"><Mail size={18} /></span><p><small>EMAIL</small><a href="mailto:fanoueuriss@gmail.com">fanoueuriss@gmail.com</a></p></div>
        <div><span className="contact-icon"><MapPin size={18} /></span><p><small>ZONE DE SERVICE</small><strong>Abomey-Calavi, Bénin</strong></p></div>
        <div><span className="contact-icon"><Clock3 size={18} /></span><p><small>DISPONIBILITÉ</small><strong>Contactez-nous pour convenir d’un horaire</strong></p></div>
      </div>
    </div>
  </section>
);

export default ContactSection;
