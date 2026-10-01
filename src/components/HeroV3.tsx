import React from 'react';
import './HeroV3.css';

interface HeroV3Props {
  onExploreServices?: () => void;
}

export default function HeroV3({ onExploreServices }: HeroV3Props) {
  const scrollToServices = () => {
    if (onExploreServices) {
      onExploreServices();
    } else {
      const el = document.getElementById('servizi');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero-v3" className="hero-v3" aria-label="Benvenuti a Folli Folletti">
      {/* 1. SLIDE RETTANGOLARE CLASSICA CON BOSCO E FOLLETTA SUL DONDOLO */}
      <div className="hero-v3__slide-stage">
        <img
          src="/slidefollettadondolo.jpg"
          alt="Folli Folletti - Bosco Incantato con Folletta sul Dondolo"
          className="hero-v3__slide-img"
          fetchPriority="high"
          decoding="async"
        />
        {/* Maggior illuminazione dorata solare in alto che sfuma con il buio in basso */}
        <div className="hero-v3__slide-overlay" aria-hidden="true" />

        {/* PIÙ IN BASSO NELLA SLIDE: TITOLO E RIGA SINTETICA DI SOTTOTITOLO */}
        <div className="hero-v3__slide-bottom">
          <h1 className="hero-v3__slide-title">
            Educazione, Gioco e Supporto alle Famiglie
          </h1>
          <p className="hero-v3__slide-subtitle">
            Cooperativa Sociale a Napoli per l’infanzia, l’adolescenza e la serenità dei genitori
          </p>
        </div>

        {/* ONDULAZIONE DEL LATO INFERIORE CHE SFUMA ARMONIOSAMENTE NEL BIANCO DEL SITO */}
        <div className="hero-v3__wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className="hero-v3__wave-svg">
            <path
              d="M0,35 C320,85 640,10 960,60 C1200,95 1360,40 1440,25 L1440,90 L0,90 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* 2. IL RESTO SCRITTO SOTTO LA SLIDE HERO PRIMA DEI SERVIZI (FONDO BIANCO) */}
      <div className="hero-v3__intro-section">
        <div className="hero-v3__intro-container">
          <p className="hero-v3__intro-lead">
            <strong>Folli Folletti</strong> è la cooperativa sociale a Napoli che unisce pedagogia qualificata, laboratori espressivi e benessere emotivo. Uno spazio protetto e sicuro per crescere con gioia.
          </p>

          <div className="hero-v3__cta-group">
            <button
              type="button"
              className="hero-v3__btn hero-v3__btn--primary"
              onClick={scrollToServices}
              title="Vai subito ai 5 servizi specialistici"
            >
              <span>Esplora i 5 Servizi</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>

            <a
              href="https://wa.me/390815921176?text=Salve,%20vorrei%20informazioni%20sulle%20attivit%C3%A0%20della%20cooperativa%20Folli%20Folletti."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-v3__btn hero-v3__btn--secondary"
              title="Scrivici direttamente su WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Scrivici su WhatsApp</span>
            </a>
          </div>

          <div className="hero-v3__trust-pills">
            <span className="hero-v3__trust-pill">
              <strong>✓</strong> Ludoteca Comunale Autorizzata
            </span>
            <span className="hero-v3__trust-pill">
              <strong>✓</strong> Équipe Multidisciplinare
            </span>
            <span className="hero-v3__trust-pill">
              <strong>✓</strong> Servizi dai 3 ai 18 Anni
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
