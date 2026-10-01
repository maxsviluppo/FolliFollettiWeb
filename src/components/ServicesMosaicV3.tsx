import React, { useState, useEffect } from 'react';
import './ServicesMosaicV3.css';

export interface ServiceDetail {
  id: number;
  slug: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  ageGroup: string;
  keyFeature: string;
  highlights: string[];
  image: string;
  whatsappText: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 1,
    slug: 'ludoteca',
    category: 'Spazio & Gioco',
    badge: 'Fiore all’Occhiello',
    title: 'Ludoteca',
    subtitle: 'Autorizzata dal Comune di Napoli',
    shortDesc: 'Spazio stimolante e sicuro dedicato al gioco libero e strutturato, laboratori creativi e socializzazione per ogni fascia d’età.',
    fullDesc: 'La nostra ludoteca, autorizzata dal Comune di Napoli, è un luogo protetto, colorato e ricco di stimoli dove ogni bambino può esplorare la propria creatività. Con laboratori manuali, giochi di società, psicomotricità e animazione qualificata, favoriamo la cooperazione e lo sviluppo armonico in totale serenità.',
    ageGroup: 'Bambini dai 3 ai 12 anni',
    keyFeature: 'Struttura autorizzata e certificata',
    highlights: [
      'Laboratori artistici, manuali ed espressivi quotidiani',
      'Area giochi sicura e igienizzata secondo gli standard più rigorosi',
      'Presenza costante di educatrici e animatori qualificati',
      'Feste di compleanno a tema ed eventi per famiglie',
    ],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80',
    whatsappText: 'Salve, vorrei ricevere maggiori informazioni sulle attività e iscrizioni della Ludoteca Folli Folletti.',
  },
  {
    id: 2,
    slug: 'educativa',
    category: 'Crescita & Sviluppo',
    badge: 'Percorsi 6-18 Anni',
    title: 'Educativa Territoriale',
    subtitle: 'Supporto per Minori e Adolescenti',
    shortDesc: 'Percorsi educativi personalizzati volti a sostenere l’autonomia, le relazioni e lo sviluppo emotivo dei ragazzi.',
    fullDesc: 'L’Educativa Territoriale accompagna bambini e adolescenti nel loro cammino di crescita personale e scolastica. Attraverso progetti personalizzati e il lavoro di rete tra scuola, famiglia ed équipe multidisciplinare, costruiamo autostima, contrastiamo la dispersione e facilitiamo la socializzazione costruttiva.',
    ageGroup: 'Ragazzi dai 6 ai 18 anni',
    keyFeature: 'Piani educativi individualizzati (PEI)',
    highlights: [
      'Educatori professionali qualificati e tutor dedicati',
      'Potenziamento delle competenze relazionali ed emotive',
      'Costante raccordo con docenti e servizi del territorio',
      'Attività laboratoriali di gruppo per favorire l’inclusione',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    whatsappText: 'Salve, vorrei informazioni sui percorsi di Educativa Territoriale dai 6 ai 18 anni.',
  },
  {
    id: 3,
    slug: 'campus',
    category: 'Esperienze & Vacanze',
    badge: 'Estate & Inverno',
    title: 'Campus Estivi e Invernali',
    subtitle: 'Natura, Sport e Avventura',
    shortDesc: 'Esperienze ricche di laboratori, natura, sport e gite durante le pause scolastiche per crescere in gruppo.',
    fullDesc: 'Durante le vacanze estive e invernali, i nostri Campus trasformano ogni giornata in un’avventura indimenticabile. Tra giochi all’aperto, sport, laboratori naturalistici e teatrali, i giovani riscoprono il piacere dello svago attivo e condiviso, offrendo una soluzione flessibile e affidabile alle famiglie lavoratrici.',
    ageGroup: 'Bambini e ragazzi dai 4 ai 14 anni',
    keyFeature: 'Flessibilità oraria e attività all’aperto',
    highlights: [
      'Sport, piscina e giochi motori guidati all’aria aperta',
      'Laboratori tematici (ecologia, cucina, scienze e teatro)',
      'Flessibilità d’ingresso anticipato e uscita posticipata',
      'Pranzo genuino e merende selezionate con massima cura',
    ],
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80',
    whatsappText: 'Salve, vorrei dettagli su programmi, periodi e costi dei Campus Folli Folletti.',
  },
  {
    id: 4,
    slug: 'tutoraggio',
    category: 'Apprendimento & Metodo',
    badge: 'Specialistico BES & DSA',
    title: 'Tutoraggio BES e DSA',
    subtitle: 'Metodo di Studio Personalizzato',
    shortDesc: 'Supporto specialistico allo studio per valorizzare i punti di forza e promuovere la piena autonomia.',
    fullDesc: 'Intervento specialistico mirato per allievi con Bisogni Educativi Speciali e Disturbi Specifici dell’Apprendimento (dislessia, discalculia, disortografia, disgrafia). Attraverso strategie metacognitive e software compensativi digitali, aiutiamo ogni studente a sviluppare un metodo di studio efficace, sereno e motivante.',
    ageGroup: 'Studenti di Scuola Primaria e Secondaria',
    keyFeature: 'Strumenti compensativi e metodo metacognitivo',
    highlights: [
      'Tutor esperti con master in psicopatologia dell’apprendimento',
      'Utilizzo guidato di software didattici e mappe concettuali',
      'Sviluppo dell’autonomia e dell’autoefficacia scolastica',
      'Incontri di raccordo con gli insegnanti per PDP/PEI',
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    whatsappText: 'Salve, vorrei prenotare un colloquio per il Tutoraggio specialistico BES e DSA.',
  },
  {
    id: 5,
    slug: 'psicologia',
    category: 'Benessere & Ascolto',
    badge: 'Supporto Famiglie',
    title: 'Consulenze Psicologiche',
    subtitle: 'Spazio Protetto per Minori e Genitori',
    shortDesc: 'Spazio di ascolto professionale e orientamento per affrontare ogni fase di crescita con serenità.',
    fullDesc: 'Un ambiente protetto, accogliente e confidenziale dove accogliere dubbi, fatiche relazionali o momenti di transizione della vita familiare. I nostri psicologi dell’età evolutiva offrono percorsi di sostegno mirati al benessere del minore e alla valorizzazione delle risorse educative dei genitori.',
    ageGroup: 'Minori, Genitori e Nuclei Familiari',
    keyFeature: 'Massima riservatezza ed équipe iscritta all’Albo',
    highlights: [
      'Colloqui clinici di consulenza psicologica individuale e familiare',
      'Sostegno alla genitorialità e gestione dei cambiamenti evolutivi',
      'Orientamento e supporto emotivo per ansia o difficoltà relazionali',
      'Totale riservatezza, etica e rispetto della privacy',
    ],
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80',
    whatsappText: 'Salve, vorrei informazioni e fissare un primo colloquio per una consulenza psicologica.',
  },
];

interface ServicesMosaicV3Props {
  onOpenContactForm?: () => void;
}

export default function ServicesMosaicV3({ onOpenContactForm }: ServicesMosaicV3Props) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const openServiceModal = (service: ServiceDetail) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  // Blocco rigoroso dello scroll di sfondo (html + body + touchmove + ESC key)
  useEffect(() => {
    if (selectedService) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      const preventTouchScroll = (e: TouchEvent) => {
        const target = e.target as HTMLElement | null;
        if (target && !target.closest('.service-modal')) {
          e.preventDefault();
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeServiceModal();
        }
      };

      document.addEventListener('touchmove', preventTouchScroll, { passive: false });
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.removeEventListener('touchmove', preventTouchScroll);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedService]);

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const ce = e as CustomEvent<{ slug: string }>;
      const rawSlug = ce.detail?.slug?.toLowerCase();
      if (rawSlug) {
        const slug = rawSlug === 'consulenze' ? 'psicologia' : rawSlug;
        const found = SERVICES_DATA.find((s) => s.slug === slug || (slug === 'psicologia' && s.id === 5));
        if (found) {
          openServiceModal(found);
        }
      }
    };

    window.addEventListener('folli:open-service-modal', handleOpenEvent);
    return () => window.removeEventListener('folli:open-service-modal', handleOpenEvent);
  }, []);

  const ludoteca = SERVICES_DATA[0];
  const educativa = SERVICES_DATA[1];
  const campus = SERVICES_DATA[2];
  const tutoraggio = SERVICES_DATA[3];
  const psicologia = SERVICES_DATA[4];

  return (
    <section id="servizi" className="services-mosaic-v3" aria-labelledby="mosaic-heading">
      <div className="services-mosaic-v3__container">
        
        {/* Header Sezione: Moderno, Chiaro e Pulito */}
        <div className="services-mosaic-v3__header">
          <div className="services-mosaic-v3__header-tag">
            <span className="services-mosaic-v3__tag-dot" aria-hidden="true" />
            <span className="services-mosaic-v3__tag-text">SERVIZI INTEGRATI PER L’INFANZIA E LA FAMIGLIA</span>
          </div>

          <h2 id="mosaic-heading" className="services-mosaic-v3__title">
            I Nostri 5 Servizi Specialistici
          </h2>

          <p className="services-mosaic-v3__subtitle">
            Dalla ludoteca autorizzata dal Comune di Napoli al supporto scolastico e psicologico.
            <span className="services-mosaic-v3__subtitle-hint"> Clicca o tocca ciascun servizio per scoprirne dettagli e orari.</span>
          </p>
        </div>

        {/* 1. VERSIONE DESKTOP: MOSAICO A 5 BOX AD INCASTRO (Visibile >= 960px) */}
        <div className="services-mosaic-v3__desktop-grid" role="region" aria-label="Mosaico Servizi Desktop">
          
          {/* 1. LUDOTECA - Box Hero a Sinistra a Tutta Altezza */}
          <article
            id="service-item-ludoteca"
            className="mosaic-card mosaic-card--hero"
            onClick={() => openServiceModal(ludoteca)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(ludoteca);
              }
            }}
            aria-label={'Dettagli ' + ludoteca.title}
          >
            <img
              src={ludoteca.image}
              alt={ludoteca.title}
              className="mosaic-card__bg-img"
              loading="eager"
            />
            <div className="mosaic-card__overlay mosaic-card__overlay--hero" />

            <div className="mosaic-card__top">
              <span className="mosaic-card__badge mosaic-card__badge--accent">
                {ludoteca.category}
              </span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              <span className="mosaic-card__eyebrow">{ludoteca.subtitle}</span>
              <h3 className="mosaic-card__title mosaic-card__title--large">{ludoteca.title}</h3>
              <p className="mosaic-card__desc">{ludoteca.shortDesc}</p>
              
              <div className="mosaic-card__highlights-row">
                <span className="mosaic-card__chip">&#10003; Dai 3 ai 12 anni</span>
                <span className="mosaic-card__chip">&#10003; Laboratori & Feste</span>
              </div>

              <div className="mosaic-card__cta-btn">
                <span>Scopri il servizio</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          {/* 2. EDUCATIVA TERRITORIALE */}
          <article
            id="service-item-educativa"
            className="mosaic-card mosaic-card--compact"
            onClick={() => openServiceModal(educativa)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(educativa);
              }
            }}
            aria-label={'Dettagli ' + educativa.title}
          >
            <img
              src={educativa.image}
              alt={educativa.title}
              className="mosaic-card__bg-img"
              loading="lazy"
            />
            <div className="mosaic-card__overlay" />

            <div className="mosaic-card__top">
              <span className="mosaic-card__badge">{educativa.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              <span className="mosaic-card__eyebrow">{educativa.badge}</span>
              <h3 className="mosaic-card__title">{educativa.title}</h3>
              <p className="mosaic-card__desc-compact">{educativa.subtitle}</p>
            </div>
          </article>

          {/* 3. CAMPUS ESTIVI & INVERNALI */}
          <article
            id="service-item-campus"
            className="mosaic-card mosaic-card--compact"
            onClick={() => openServiceModal(campus)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(campus);
              }
            }}
            aria-label={'Dettagli ' + campus.title}
          >
            <img
              src={campus.image}
              alt={campus.title}
              className="mosaic-card__bg-img"
              loading="lazy"
            />
            <div className="mosaic-card__overlay" />

            <div className="mosaic-card__top">
              <span className="mosaic-card__badge">{campus.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              <span className="mosaic-card__eyebrow">{campus.badge}</span>
              <h3 className="mosaic-card__title">{campus.title}</h3>
              <p className="mosaic-card__desc-compact">{campus.subtitle}</p>
            </div>
          </article>

          {/* 4. TUTORAGGIO BES E DSA */}
          <article
            id="service-item-tutoraggio"
            className="mosaic-card mosaic-card--compact"
            onClick={() => openServiceModal(tutoraggio)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(tutoraggio);
              }
            }}
            aria-label={'Dettagli ' + tutoraggio.title}
          >
            <img
              src={tutoraggio.image}
              alt={tutoraggio.title}
              className="mosaic-card__bg-img"
              loading="lazy"
            />
            <div className="mosaic-card__overlay" />

            <div className="mosaic-card__top">
              <span className="mosaic-card__badge">{tutoraggio.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              <span className="mosaic-card__eyebrow">{tutoraggio.badge}</span>
              <h3 className="mosaic-card__title">{tutoraggio.title}</h3>
              <p className="mosaic-card__desc-compact">{tutoraggio.subtitle}</p>
            </div>
          </article>

          {/* 5. CONSULENZE PSICOLOGICHE */}
          <article
            id="service-item-psicologia"
            className="mosaic-card mosaic-card--compact"
            onClick={() => openServiceModal(psicologia)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceModal(psicologia);
              }
            }}
            aria-label={'Dettagli ' + psicologia.title}
          >
            <img
              src={psicologia.image}
              alt={psicologia.title}
              className="mosaic-card__bg-img"
              loading="lazy"
            />
            <div className="mosaic-card__overlay" />

            <div className="mosaic-card__top">
              <span className="mosaic-card__badge">{psicologia.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              <span className="mosaic-card__eyebrow">{psicologia.badge}</span>
              <h3 className="mosaic-card__title">{psicologia.title}</h3>
              <p className="mosaic-card__desc-compact">{psicologia.subtitle}</p>
            </div>
          </article>

        </div>

        {/* 2. VERSIONE MOBILE: BANNER ORIZZONTALI SOVRAPPOSTI (STILE VINCENT STORE) */}
        <div className="services-mosaic-v3__mobile-banners" role="region" aria-label="Banner Servizi Mobile">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              id={`service-item-mobile-${service.slug}`}
              className="mobile-service-banner"
              onClick={() => openServiceModal(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openServiceModal(service);
                }
              }}
              aria-label={'Apri dettagli ' + service.title}
            >
              <img
                src={service.image}
                alt={service.title}
                className="mobile-service-banner__img"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="mobile-service-banner__gradient" />

              <div className="mobile-service-banner__top">
                <span className="mobile-service-banner__badge">
                  {service.category}
                </span>

                <div className="mobile-service-banner__arrow-wrap" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              <div className="mobile-service-banner__bottom">
                <span className="mobile-service-banner__eyebrow">
                  {service.badge} &bull; {service.ageGroup}
                </span>
                <h3 className="mobile-service-banner__title">
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* MODALE DETTAGLIO SERVIZIO AL CLICK (Sia Desktop che Mobile) */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeServiceModal} role="dialog" aria-modal="true" aria-labelledby="modal-service-title">
          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="service-modal__header">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="service-modal__header-img"
              />
              <div className="service-modal__header-gradient" />
              
              <div className="service-modal__header-top">
                <span className="service-modal__tag">
                  {selectedService.category}
                </span>

                <button
                  type="button"
                  className="service-modal__close-btn"
                  onClick={closeServiceModal}
                  aria-label="Chiudi finestra"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="service-modal__header-bottom">
                <span className="service-modal__eyebrow">{selectedService.subtitle}</span>
                <h3 id="modal-service-title" className="service-modal__title">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="service-modal__body">
              <div className="service-modal__meta-strip">
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Destinatari</span>
                  <strong className="service-modal__meta-value">{selectedService.ageGroup}</strong>
                </div>
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Caratteristica chiave</span>
                  <strong className="service-modal__meta-value">{selectedService.keyFeature}</strong>
                </div>
              </div>

              <div className="service-modal__desc-block">
                <h4 className="service-modal__subheading">Descrizione del Servizio</h4>
                <p className="service-modal__text">{selectedService.fullDesc}</p>
              </div>

              <div className="service-modal__highlights-block">
                <h4 className="service-modal__subheading">Caratteristiche e Attività</h4>
                <ul className="service-modal__list">
                  {selectedService.highlights.map((h, i) => (
                    <li key={i} className="service-modal__list-item">
                      <span className="service-modal__check-bullet" aria-hidden="true">&#10003;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal__actions">
                <button
                  type="button"
                  className="service-modal__btn service-modal__btn--primary"
                  onClick={() => {
                    closeServiceModal();
                    // Indirizza alla futura pagina dedicata del servizio
                    window.location.hash = `#servizio-${selectedService.slug}`;
                  }}
                  title={`Scopri di più su ${selectedService.title}`}
                >
                  <span>Scopri di più</span>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <div className="service-modal__actions-row">
                  <a
                    href={'https://wa.me/390815921176?text=' + encodeURIComponent(selectedService.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-modal__btn service-modal__btn--wa"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    className="service-modal__btn service-modal__btn--secondary"
                    onClick={() => {
                      closeServiceModal();
                      if (onOpenContactForm) {
                        onOpenContactForm();
                      } else {
                        const el = document.getElementById('contatti');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span>Invia Richiesta</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
