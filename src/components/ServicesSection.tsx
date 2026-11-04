import { BatteryCharging, Camera, Laptop, ShieldCheck, Smartphone, Usb, Waves } from "lucide-react";

const services = [
  { icon: Smartphone, number: "01", title: "Écran & affichage", desc: "Remplacement d’écrans cassés, tactiles défectueux et problèmes d’affichage." },
  { icon: BatteryCharging, number: "02", title: "Batterie & autonomie", desc: "Diagnostic de batterie, remplacement et problèmes de décharge rapide." },
  { icon: Usb, number: "03", title: "Charge & connectique", desc: "Ports de charge, connecteurs, faux contacts et problèmes d’alimentation." },
  { icon: Camera, number: "04", title: "Caméra & composants", desc: "Dépannage des caméras, haut-parleurs, micros et boutons." },
  { icon: Waves, number: "05", title: "Dégâts des liquides", desc: "Évaluation et prise en charge des appareils exposés à l’eau." },
  { icon: Laptop, number: "06", title: "Ordinateurs & PC", desc: "Diagnostic matériel, dépannage logiciel et entretien informatique." },
];

const ServicesSection = () => (
  <section id="services" className="section services-section">
    <div className="section-heading">
      <div><div className="eyebrow">CE QUE NOUS FAISONS</div><h2>Une solution pour<br /><span>chaque panne.</span></h2></div>
      <p>Du simple remplacement de composant au diagnostic plus poussé, nous prenons le temps de comprendre le problème avant d’intervenir.</p>
    </div>
    <div className="services-grid">
      {services.map(({ icon: Icon, number, title, desc }) => (
        <article className="service-card" key={number}>
          <div className="service-card-top"><span>{number}</span><Icon size={25} strokeWidth={1.7} /></div>
          <h3>{title}</h3><p>{desc}</p>
          <a href="https://wa.me/2290141675784?text=Bonjour%20EURISS%20GSM%2C%20je%20souhaite%20des%20informations%20sur%20une%20r%C3%A9paration." aria-label={`Demander des informations sur ${title}`}>En savoir plus <span>↗</span></a>
        </article>
      ))}
    </div>
    <div className="service-photo-gallery" aria-label="Photos de réparations réalisées en atelier">
      <figure className="service-photo service-photo-phone">
        <img src="https://images.pexels.com/photos/37688152/pexels-photo-37688152/free-photo-of-technician-fixing-smartphone-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Réparation minutieuse d’un smartphone" loading="lazy" />
        <figcaption><strong>Réparation smartphone</strong><span>Précision & soin</span></figcaption>
      </figure>
      <figure className="service-photo service-photo-pc">
        <img src="https://images.pexels.com/photos/33531806/pexels-photo-33531806/free-photo-of-technician-repairing-laptop-in-workshop.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Technicien effectuant un diagnostic sur un ordinateur portable" loading="lazy" />
        <figcaption><strong>Maintenance informatique</strong><span>Diagnostic & dépannage PC</span></figcaption>
      </figure>
    </div>
    <div className="service-note"><ShieldCheck size={19} /><span>Chaque appareil est examiné avant toute intervention. Le devis est communiqué avant la réparation.</span></div>
  </section>
);

export default ServicesSection;
