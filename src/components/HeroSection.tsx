import { ArrowRight, ShieldCheck, Clock3, Wrench } from "lucide-react";

const HeroSection = () => (
  <section id="accueil" className="hero-section">
    <div className="hero-glow" />
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> ATELIER DE RÉPARATION · BÉNIN</div>
        <h1>Votre technologie.<br /><span>Notre expertise.</span></h1>
        <p className="hero-lead">Smartphones et ordinateurs entre de bonnes mains. EURISS GSM vous accompagne avec des réparations soignées, des conseils clairs et un service de proximité.</p>
        <div className="hero-actions">
          <a className="button-primary" href="https://wa.me/2290141675784?text=Bonjour%20EURISS%20GSM%2C%20je%20souhaite%20un%20devis.">Demander un devis <ArrowRight size={18} /></a>
          <a className="button-quiet" href="#services">Découvrir nos services</a>
        </div>
        <div className="hero-proof">
          <span><ShieldCheck size={17} /> Diagnostic avant réparation</span>
          <span><Wrench size={17} /> Travail soigné</span>
          <span><Clock3 size={17} /> Réponse rapide</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1100&q=85" alt="Smartphone moderne dans un atelier de réparation" />
          <div className="image-shade" />
          <div className="floating-note"><span className="note-icon"><Wrench size={18} /></span><span><strong>Un appareil en panne ?</strong><small>On vous aide à trouver la solution.</small></span></div>
          <div className="image-index">01 <i /> EURISS GSM</div>
        </div>
        <div className="hero-orbit" />
      </div>
    </div>
    <div className="hero-bottom"><span>RÉPARATION SMARTPHONE & PC</span><span>ABOMEY-CALAVI · BÉNIN</span></div>
  </section>
);

export default HeroSection;
