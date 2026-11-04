import { useState } from "react";
import { Menu, X, Smartphone } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Réparations", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Diagnostic IA", href: "#diagnostic" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navigation principale">
        <a href="#accueil" className="brand" aria-label="EURISS GSM, accueil">
          <span className="brand-mark"><Smartphone size={21} strokeWidth={2.4} /></span>
          <span>EURISS<span className="brand-light">GSM</span><small>RÉPARATION & TECHNOLOGIE</small></span>
        </a>
        <div className="desktop-nav">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-cta" href="https://wa.me/2290141675784" target="_blank" rel="noreferrer">Prendre rendez-vous <span>↗</span></a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="mobile-nav">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="https://wa.me/2290141675784" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Prendre rendez-vous ↗</a></div>}
    </header>
  );
};

export default Navbar;
