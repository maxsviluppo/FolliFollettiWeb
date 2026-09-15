import { useState, useEffect } from 'react';
import './ServicesCarouselV2.css';

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

export default function ServicesCarouselV2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ascolta l'evento custom da Navbar (es. click su un servizio specifico dal menu a discesa)
  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ serviceId: number }>;
      const serviceId = customEvent.detail?.serviceId;
      if (!serviceId) return;

      const idx = CARDS.findIndex((c) => c.id === serviceId);
      if (idx !== -1) {
        setCurrentIndex(idx);
        const sectionEl = document.getElementById('info');
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('folli:select-service', handleServiceSelect);
    return () => window.removeEventListener('folli:select-service', handleServiceSelect);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : CARDS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < CARDS.length - 1 ? prev + 1 : 0));
  };

  const currentCard = CARDS[currentIndex];

  return (
    <section id="info" className="services-v2" aria-labelledby="services-v2-heading">
      <div className="services-v2__container">
        {/* LATO SINISTRO (DESKTOP): Illustrazione folliappesi.png nella sua colonna */}
        <div className="services-v2__left-art">
          <div className="services-v2__art-wrapper">
            <img
              src="/folliappesi-cropped.png"
              alt="Folletti Appesi Folli Folletti"
              className="services-v2__art-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Filigrana in trasparenza SOLO per Mobile sotto al testo */}
        <div className="services-v2__watermark" aria-hidden="true">
          <img
            src="/folliappesi-cropped.png"
            alt=""
            className="services-v2__watermark-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* LATO DESTRO SU DESKTOP / PRINCIPALE SU MOBILE: Titolo, Testo e Carosello */}
        <div className="services-v2__main-content">
          {/* Header con stesso font e testo della Bozza 1 */}
          <div className="services-v2__header">
            <span className="services-v2__eyebrow">Esperienze & Servizi</span>
            <h2 id="services-v2-heading" className="services-v2__title">
              I Nostri Servizi
            </h2>
            <p className="services-v2__desc">
              Nata dall’unione tra <strong>pedagogia ed esperienza ludica</strong>, la nostra cooperativa offre <strong>servizi integrati per la crescita</strong> di bambini e ragazzi e il <strong>supporto alle famiglie</strong>. Con uno <strong>staff multidisciplinare</strong> di insegnanti, psicologi, educatori specializzati BES/DSA e animatori, gestiamo una <strong>ludoteca autorizzata dal Comune di Napoli</strong>, <strong>prima infanzia</strong>, eventi ed <strong>educative territoriali dai 6 ai 18 anni</strong>.
            </p>
          </div>

          {/* BOX SINGOLO CON PULSANTI FRECCE AVANTI / INDIETRO */}
          <div className="services-v2__carousel-stage">
            <div className="services-v2__card-wrapper">
              <article
                key={currentCard.id}
                id={`service-${currentCard.id}`}
                className="services-v2__card"
              >
                <div className="services-v2__card-top">
                  <span className="services-v2__card-badge">{currentCard.category}</span>
                  <span className="services-v2__card-counter">
                    {currentIndex + 1} / {CARDS.length}
                  </span>
                </div>

                <div className="services-v2__card-body">
                  <h3 className="services-v2__card-title">{currentCard.title}</h3>
                  <p className="services-v2__card-text">{currentCard.description}</p>

                  <ul className="services-v2__card-highlights">
                    {currentCard.highlights.map((h, i) => (
                      <li key={i} className="services-v2__card-highlight-item">
                        <span className="services-v2__card-bullet" aria-hidden="true">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="services-v2__card-footer">
                  <a href="#home" className="services-v2__card-action">
                    <span>{currentCard.actionText}</span>
                    <span className="services-v2__card-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>

            {/* BARRA CONTROLLI CON ICONE FRECCE AVANTI / INDIETRO */}
            <div className="services-v2__controls-bar">
              <div className="services-v2__indicators">
                {CARDS.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`services-v2__indicator-dot ${
                      i === currentIndex ? 'is-active' : ''
                    }`}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Vai al servizio ${c.title}`}
                  />
                ))}
              </div>

              <div className="services-v2__nav-btns">
                <button
                  type="button"
                  className="services-v2__nav-btn"
                  onClick={handlePrev}
                  aria-label="Servizio precedente"
                  title="Servizio precedente"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="services-v2__nav-btn"
                  onClick={handleNext}
                  aria-label="Servizio successivo"
                  title="Servizio successivo"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
