import { ArrowUpRight, Smartphone } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <a href="#accueil" className="brand footer-brand"><span className="brand-mark"><Smartphone size={20} /></span><span>EURISS<span className="brand-light">GSM</span><small>RÉPARATION & TECHNOLOGIE</small></span></a>
      <p>La technologie mérite une seconde vie.<br />Nous sommes là pour y contribuer.</p>
      <a className="footer-top" href="#accueil">Retour en haut <ArrowUpRight size={16} /></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} EURISS GSM. Tous droits réservés.</span><span>Fait avec soin au Bénin.</span></div>
  </footer>
);

export default Footer;
