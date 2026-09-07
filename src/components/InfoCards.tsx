import { useRef, useState, useEffect } from 'react';
import './InfoCards.css';

interface CardItem {
  id: number;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  actionText: string;
}

const CARDS: CardItem[] = [
  {
    id: 1,
    category: 'Spazio & Gioco',
    title: 'Ludoteca',
    description: 'Uno spazio stimolante e sicuro dedicato al gioco libero e strutturato, alla creatività e alla socializzazione per bambini di ogni fascia d’età.',
    highlights: ['Attività ludiche e creative', 'Spazio sicuro e attrezzato', 'Socializzazione guidata'],
    actionText: 'Scopri',
  },
  {
    id: 2,
    category: 'Crescita & Sviluppo',
    title: 'Educativa',
    description: 'Percorsi educativi personalizzati volti a sostenere la crescita armonica, l’autonomia e lo sviluppo delle competenze relazionali ed emotive.',
    highlights: ['Educatori qualificati', 'Piani educativi individuali', 'Sostegno all’autonomia'],
    actionText: 'Scopri',
  },
  {
    id: 3,
    category: 'Esperienze & Vacanze',
    title: 'Campus (estivi e invernali)',
    description: 'Esperienze ricche di avventura, laboratori, natura e sport durante le pause scolastiche, per continuare a crescere e divertirsi in gruppo.',
    highlights: ['Attività all’aperto e sport', 'Laboratori tematici ed espressivi', 'Flessibilità oraria per le famiglie'],
    actionText: 'Scopri',
  },
  {
    id: 4,
    category: 'Apprendimento & Metodo',
    title: 'Tutoraggio Bes e DSA',
    description: 'Supporto specialistico allo studio e costruzione di un metodo di apprendimento personalizzato, valorizzando i punti di forza e l’autoefficacia.',
    highlights: ['Strumenti compensativi e metodo', 'Potenziamento cognitivo', 'Raccordo scuola-famiglia'],
    actionText: 'Scopri',
  },
  {
    id: 5,
    category: 'Benessere & Ascolto',
    title: 'Consulenze psicologiche',
    description: 'Spazio di ascolto professionale, orientamento e supporto psicologico per minori, genitori e famiglie per affrontare ogni fase con serenità.',
    highlights: ['Colloqui di consulenza e ascolto', 'Supporto alla genitorialità', 'Massima riservatezza e cura'],
    actionText: 'Scopri',
  },
];

export default function InfoCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId: number }>;
      const serviceId = customEvent.detail?.serviceId;
      if (!serviceId || !scrollRef.current) return;

      const cardEl = document.getElementById(`service-${serviceId}`);
      if (cardEl) {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (!scrollRef.current || !cardEl) return;
          const containerLeft = scrollRef.current.getBoundingClientRect().left;
          const cardLeft = cardEl.getBoundingClientRect().left;
          const currentScroll = scrollRef.current.scrollLeft;
          const targetScroll = currentScroll + (cardLeft - containerLeft) - 32;
          scrollRef.current.scrollTo({
            left: Math.max(0, targetScroll),
            behavior: 'smooth',
          });
          cardEl.focus?.({ preventScroll: true });
        }, 180);
      }
    };

    window.addEventListener('folli:select-service', handleServiceSelect);
    return () => window.removeEventListener('folli:select-service', handleServiceSelect);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="info"
      ref={sectionRef}
      className="info-section"
      aria-labelledby="info-heading"
    >
      {/* Header with generous spacing and horizontal scroll controls */}
      <div className="info-section__header-container">
        <div className="info-section__header">
          <div className="info-section__title-group">
            <span className="info-section__eyebrow">Esperienze & Servizi</span>
            <h2 id="info-heading" className="info-section__title">
              I Nostri Servizi
            </h2>
            <p className="info-section__desc">
              Nata dall’unione tra <strong>pedagogia ed esperienza ludica</strong>, la nostra cooperativa offre <strong>servizi integrati per la crescita</strong> di bambini e ragazzi e il <strong>supporto alle famiglie</strong>. Con uno <strong>staff multidisciplinare</strong> di insegnanti, psicologi, educatori specializzati BES/DSA e animatori, gestiamo una <strong>ludoteca autorizzata dal Comune di Napoli</strong>, <strong>prima infanzia</strong>, eventi ed <strong>educative territoriali dai 6 ai 18 anni</strong>.
            </p>
          </div>

          <div className="info-section__controls-wrapper">
            {/* Foglia decorativa tridimensionale visibile solo nella versione desktop */}
            <div className="info-section__leaf-decor" aria-hidden="true">
              <img
                src="/foglia1.png"
                alt=""
                className="info-section__leaf-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="info-section__controls" aria-label="Navigazione schede">
              <button
                type="button"
                className="info-section__nav-btn"
                onClick={() => handleScroll('left')}
                aria-label="Scorri a sinistra"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="info-section__nav-btn"
                onClick={() => handleScroll('right')}
                aria-label="Scorri a destra"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width edge-to-edge scroll track without visible scrollbars */}
      <div
        ref={scrollRef}
        className="info-scroll"
        tabIndex={0}
        role="region"
        aria-label="Box informativi scorrevoli"
      >
        <div className="info-scroll__track">
          {CARDS.map((card, index) => (
            <article
              key={card.id}
              id={`service-${card.id}`}
              className={`info-card ${isVisible ? 'info-card--visible' : ''}`}
              style={{
                transitionDelay: `${index * 130}ms`,
              }}
            >
              <div className="info-card__top">
                <span className="info-card__badge">{card.category}</span>
              </div>

              <div className="info-card__body">
                <h3 className="info-card__title">{card.title}</h3>
                <p className="info-card__text">{card.description}</p>

                <ul className="info-card__highlights">
                  {card.highlights.map((h, i) => (
                    <li key={i} className="info-card__highlight-item">
                      <span className="info-card__bullet" aria-hidden="true">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card__footer">
                <a href="#home" className="info-card__action">
                  <span>{card.actionText}</span>
                  <span className="info-card__arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
