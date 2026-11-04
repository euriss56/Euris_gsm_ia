import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Smartphone, Laptop } from "lucide-react";

const Index = () => (
  <div className="site-page">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <section id="tarifs" className="section pricing-section">
        <div className="section-heading pricing-heading">
          <div><div className="eyebrow">DES PRIX CLAIRS</div><h2>Un premier repère<br /><span>pour votre budget.</span></h2></div>
          <p>Le prix final dépend du modèle, de la disponibilité des pièces et de la nature exacte de la panne. Demandez toujours un devis personnalisé.</p>
        </div>
        <div className="price-grid">
          <article className="price-card"><div className="price-icon"><Smartphone size={22} /></div><p>SMARTPHONES ANDROID</p><h3>À partir de <strong>10 000 F</strong></h3><span>Remplacement d’écran · selon modèle</span><a href="https://wa.me/2290141675784?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20un%20%C3%A9cran%20Android.">Obtenir un devis <ArrowRight size={16} /></a></article>
          <article className="price-card price-card-featured"><div className="price-icon"><Smartphone size={22} /></div><p>IPHONE</p><h3>À partir de <strong>20 000 F</strong></h3><span>Remplacement d’écran · selon modèle</span><a href="https://wa.me/2290141675784?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20un%20%C3%A9cran%20iPhone.">Obtenir un devis <ArrowRight size={16} /></a></article>
          <article className="price-card"><div className="price-icon"><Laptop size={22} /></div><p>ORDINATEURS & AUTRES PANNES</p><h3><strong>Sur devis</strong></h3><span>Diagnostic selon le problème rencontré</span><a href="https://wa.me/2290141675784?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20ordinateur.">Décrire mon problème <ArrowRight size={16} /></a></article>
        </div>
        <p className="price-disclaimer"><Check size={15} /> Aucun tarif définitif sans vérification du modèle et de la panne.</p>
      </section>
      <section className="trust-strip"><div><strong>01</strong><span>Écoute de votre besoin</span></div><div><strong>02</strong><span>Diagnostic de l’appareil</span></div><div><strong>03</strong><span>Devis avant intervention</span></div><div><strong>04</strong><span>Réparation & conseils</span></div></section>
      <DiagnosticSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
