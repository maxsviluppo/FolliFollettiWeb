import React, { useState, useEffect } from 'react';
import HeroV3 from './HeroV3';
import ServicesMosaicV3 from './ServicesMosaicV3';
import Footer from './Footer';
import './HomeV3.css';

interface HomeV3Props {
  onNavigate?: (page: 'home' | 'privacy' | 'cookies', hash?: string) => void;
}

const SERVICE_CATEGORIES = [
  { slug: 'ludoteca', name: 'Ludoteca' },
  { slug: 'educativa', name: 'Educativa' },
  { slug: 'campus', name: 'Campus' },
  { slug: 'tutoraggio', name: 'Tutoraggio' },
  { slug: 'psicologia', name: 'Consulenze' },
];

export default function HomeV3({ onNavigate }: HomeV3Props) {
  const [showCategoriesBar, setShowCategoriesBar] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    servizio: 'Ludoteca',
    messaggio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    let lastY = window.pageYOffset || document.documentElement.scrollTop;
    let upDistance = 0;
    let downDistance = 0;

    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const diff = y - lastY;

      // Navbar trasparente in cima, opaca/frosted glass quando si scende
      setIsNavbarScrolled(y > 30);

      // In cima alla pagina (< 80px), nascondi sempre la barra
      if (y < 80) {
        setShowCategoriesBar(false);
        upDistance = 0;
        downDistance = 0;
      } else if (diff > 0) {
        // Movimento verso il basso (SCROLL IN BASSO) -> MOSTRA LA BARRA
        upDistance = 0;
        downDistance += diff;
        if (downDistance >= 8) {
          setShowCategoriesBar(true);
        }
      } else if (diff < 0) {
        // Movimento verso l'alto (SCROLL IN ALTO) -> NASCONDI LA BARRA
        downDistance = 0;
        upDistance += Math.abs(diff);
        if (upDistance >= 10) {
          setShowCategoriesBar(false);
        }
      }

      lastY = y <= 0 ? 0 : y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCategoryClick = (slug: string) => {
    // Normalizza slug tra consulenze e psicologia
    const targetSlug = slug === 'consulenze' ? 'psicologia' : slug;

    // 1. Apri direttamente il modale di dettaglio del servizio richiesto
    window.dispatchEvent(new CustomEvent('folli:open-service-modal', { detail: { slug: targetSlug } }));

    // 2. Opzionale: scrolla delicatamente verso la sezione del servizio in background
    const mobileTarget = document.getElementById('service-item-mobile-' + slug);
    const desktopTarget = document.getElementById('service-item-' + slug);
    const target = (mobileTarget && mobileTarget.offsetParent !== null) ? mobileTarget : desktopTarget;

    if (target) {
      const headerOffset = 135;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });

      target.classList.add('service-card--highlighted');
      setTimeout(() => {
        target?.classList.remove('service-card--highlighted');
      }, 1600);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v3-root">
      
      {/* NAVBAR TOP: TRASPARENTE IN CIMA, OPACA TRASPARENTE ALLO SCROLL */}
      <header
        className={`home-v3__navbar ${isNavbarScrolled ? 'home-v3__navbar--scrolled' : 'home-v3__navbar--transparent'}`}
        role="banner"
      >
        <div className="home-v3__navbar-container">
          
          {/* Logo e Titolo */}
          <a
            href="#home"
            className="home-v3__nav-logo-link"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/logo-folli-folletti-quadrifoglio.png"
              alt="Folli Folletti Cooperativa Sociale"
              className="home-v3__nav-logo-img"
              width={160}
              height={50}
            />
          </a>

          {/* Voci di Menu */}
          <nav className="home-v3__nav-links" aria-label="Menu Principale">
            <button
              type="button"
              className="home-v3__nav-link home-v3__nav-link--highlight"
              onClick={() => scrollToSection('servizi')}
            >
              I Nostri 5 Servizi
            </button>
            <button
              type="button"
              className="home-v3__nav-link"
              onClick={() => scrollToSection('perche-noi')}
            >
              Chi Siamo
            </button>
            <button
              type="button"
              className="home-v3__nav-link"
              onClick={() => scrollToSection('contatti')}
            >
              Contatti
            </button>
          </nav>

          {/* Azione Rapida Telefono / WhatsApp */}
          <div className="home-v3__nav-actions">
            <a
              href="tel:0815921176"
              className="home-v3__nav-call-btn"
              title="Chiama Folli Folletti"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>081 5921176</span>
            </a>

            <button
              type="button"
              className="home-v3__nav-cta-btn"
              onClick={() => scrollToSection('contatti')}
            >
              Richiedi Info
            </button>
          </div>

        </div>

        {/* SUB-BARRA 5 SERVIZI: APPARE ALLO SCROLL IN BASSO SENZA LABEL */}
        <div
          className={`home-v3__categories-bar ${showCategoriesBar ? 'home-v3__categories-bar--visible' : ''}`}
          role="navigation"
          aria-label="Categorie Servizi"
        >
          <div className="home-v3__categories-container">
            <div className="home-v3__categories-nav">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  className="home-v3__category-btn"
                  onClick={() => handleCategoryClick(cat.slug)}
                  title={`Vai al servizio ${cat.name}`}
                >
                  <span className="home-v3__cat-text">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 1. HERO SLIDE: BOSCO CARTOON CON FOLLETTI */}
      <HeroV3 onExploreServices={() => scrollToSection('servizi')} />

      {/* 2. VETRINA SERVIZI: MOSAICO DESKTOP & BANNER VINCENT MOBILE */}
      <ServicesMosaicV3 onOpenContactForm={() => scrollToSection('contatti')} />

      {/* 3. SEZIONE "PERCHÉ FOLLI FOLLETTI" (PULITA SU FONDO BIANCO) */}
      <section id="perche-noi" className="home-v3__values-section" aria-labelledby="values-heading">
        <div className="home-v3__section-container">
          <div className="home-v3__section-header">
            <span className="home-v3__eyebrow">IL NOSTRO APPROCCIO</span>
            <h2 id="values-heading" className="home-v3__section-title">
              Educazione, Passione e Professionalità
            </h2>
            <p className="home-v3__section-desc">
              Accompagniamo la crescita dei bambini e dei ragazzi valorizzando l’unicità di ciascuno in un contesto caloroso e accogliente.
            </p>
          </div>

          <div className="home-v3__values-grid">
            <div className="home-v3__val-card">
              <div className="home-v3__val-icon-wrap" aria-hidden="true">
                <span className="home-v3__val-icon">✦</span>
              </div>
              <h3 className="home-v3__val-title">Pedagogia & Gioco</h3>
              <p className="home-v3__val-text">
                Crediamo che il gioco sia la forma più alta di apprendimento. Ogni nostra attività stimola creatività, curiosità e sana cooperazione.
              </p>
            </div>

            <div className="home-v3__val-card">
              <div className="home-v3__val-icon-wrap" aria-hidden="true">
                <span className="home-v3__val-icon">✦</span>
              </div>
              <h3 className="home-v3__val-title">Équipe Multidisciplinare</h3>
              <p className="home-v3__val-text">
                Uno staff affiatato e costantemente aggiornato di educatori, pedagogisti, psicologi e tutor specializzati in BES e DSA.
              </p>
            </div>

            <div className="home-v3__val-card">
              <div className="home-v3__val-icon-wrap" aria-hidden="true">
                <span className="home-v3__val-icon">✦</span>
              </div>
              <h3 className="home-v3__val-title">Qualità & Autorizzazioni</h3>
              <p className="home-v3__val-text">
                Ludoteca autorizzata dal Comune di Napoli, ambienti igienizzati e sicuri nel pieno rispetto delle normative igienico-sanitarie vigenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEZIONE CONTATTI & RICHIESTA INFORMAZIONI */}
      <section id="contatti" className="home-v3__contact-section" aria-labelledby="contact-heading">
        <div className="home-v3__section-container">
          <div className="home-v3__contact-box">
            
            <div className="home-v3__contact-info">
              <span className="home-v3__eyebrow">PARLA CON NOI</span>
              <h2 id="contact-heading" className="home-v3__contact-title">
                Siamo Qui per Te e per la Tua Famiglia
              </h2>
              <p className="home-v3__contact-desc">
                Desideri maggiori informazioni sui nostri 5 servizi, sulle disponibilità o per visitare i nostri spazi a Napoli? Contattaci con fiducia.
              </p>

              <div className="home-v3__contact-details">
                <div className="home-v3__c-item">
                  <div className="home-v3__c-bullet" aria-hidden="true">📍</div>
                  <div>
                    <strong>Sede & Ludoteca:</strong>
                    <p>Via Saverio Gatto, 21 — 80131 Napoli (NA)</p>
                  </div>
                </div>

                <div className="home-v3__c-item">
                  <div className="home-v3__c-bullet" aria-hidden="true">📞</div>
                  <div>
                    <strong>Telefono:</strong>
                    <p><a href="tel:0815921176">081 5921176</a></p>
                  </div>
                </div>

                <div className="home-v3__c-item">
                  <div className="home-v3__c-bullet" aria-hidden="true">⏰</div>
                  <div>
                    <strong>Orari di Apertura:</strong>
                    <p>Lunedì – Venerdì: 08:30 – 19:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modulo Rapido */}
            <div className="home-v3__contact-form-wrap">
              {formSubmitted ? (
                <div className="home-v3__form-success">
                  <div className="home-v3__success-icon">✓</div>
                  <h3>Richiesta Inviata con Successo!</h3>
                  <p>Grazie per averci contattato. Una nostra educatrice ti risponderà al più presto.</p>
                  <button
                    type="button"
                    className="home-v3__form-btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Invia un altro messaggio
                  </button>
                </div>
              ) : (
                <form className="home-v3__form" onSubmit={handleSubmit}>
                  <h3 className="home-v3__form-title">Richiedi Informazioni</h3>

                  <div className="home-v3__field-group">
                    <label htmlFor="v3-nome">Nome e Cognome *</label>
                    <input
                      id="v3-nome"
                      type="text"
                      required
                      placeholder="Es. Maria Rossi"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                  </div>

                  <div className="home-v3__fields-row">
                    <div className="home-v3__field-group">
                      <label htmlFor="v3-tel">Telefono *</label>
                      <input
                        id="v3-tel"
                        type="tel"
                        required
                        placeholder="Es. 333 1234567"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      />
                    </div>

                    <div className="home-v3__field-group">
                      <label htmlFor="v3-servizio">Servizio di Interesse</label>
                      <select
                        id="v3-servizio"
                        value={formData.servizio}
                        onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
                      >
                        <option value="Ludoteca">1. Ludoteca (Spazio & Gioco)</option>
                        <option value="Educativa">2. Educativa Territoriale (6-18 anni)</option>
                        <option value="Campus">3. Campus Estivi e Invernali</option>
                        <option value="Tutoraggio">4. Tutoraggio BES e DSA</option>
                        <option value="Psicologia">5. Consulenze Psicologiche</option>
                      </select>
                    </div>
                  </div>

                  <div className="home-v3__field-group">
                    <label htmlFor="v3-msg">Messaggio o Note</label>
                    <textarea
                      id="v3-msg"
                      rows={3}
                      placeholder="Raccontaci brevemente di cosa hai bisogno..."
                      value={formData.messaggio}
                      onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="home-v3__form-btn">
                    <span>Invia Richiesta</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER UFFICIALE */}
      <Footer
        onNavigate={(page) => onNavigate && onNavigate(page)}
        onOpenCookieSettings={() => {
          window.dispatchEvent(new CustomEvent('folli:open-cookie-settings'));
        }}
      />

    </div>
  );
}
