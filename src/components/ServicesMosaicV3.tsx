import React, { useState, useEffect } from 'react';
import './ServicesMosaicV3.css';

export interface ServiceModule {
  title: string;
  badge?: string;
  description: string;
  points?: string[];
}

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
  schedule: string;
  tags: string[];
  highlights: string[];
  modules: ServiceModule[];
  image: string;
  whatsappText: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    "id": 1,
    "slug": "ludoteca",
    "category": "Spazio, Gioco & Potenziamento",
    "badge": "Autorizzata Comune di Napoli",
    "title": "Ludoteca",
    "subtitle": "Gioco Strutturato, Laboratori di Potenziamento e Social Skill",
    "shortDesc": "Spazio accreditato con laboratori di potenziamento cognitivo, gioco e social skill.",
    "fullDesc": "La nostra ludoteca, ufficialmente autorizzata dal Comune di Napoli, è un ambiente colorato, igienizzato e protetto dove ogni bambino trova stimoli su misura per la propria crescita. Oltre al gioco libero e strutturato con educatori qualificati, la struttura integra laboratori specialistici di potenziamento cognitivo per lettura, scrittura e calcolo, percorsi di Social Skill Training e servizi di animazione per feste ed eventi privati.",
    "ageGroup": "Bambini e ragazzi dai 3 ai 12 anni",
    "keyFeature": "Struttura autorizzata & Laboratori di Potenziamento",
    "schedule": "Lunedì – Venerdì: 08:30 – 19:30 | Sabato per eventi su prenotazione",
    "tags": [
      "Laboratori Potenziamento",
      "Social Skill Training",
      "Feste & Animazione",
      "Gioco Guidato"
    ],
    "highlights": [
      "Struttura autorizzata dal Comune di Napoli nel rispetto dei più alti standard di sicurezza",
      "Laboratori di Potenziamento Didattico e Cognitivo (lettura, calcolo, memoria e attenzione)",
      "Social Skill Training: percorsi di gruppo per la gestione emotiva e l'inclusione tra pari",
      "Educatrici e animatori professionisti costantemente presenti in sala",
      "Feste di compleanno a tema ed eventi privati con animazione dinamica, magia e balloon art"
    ],
    "modules": [
      {
        "title": "Laboratori di Potenziamento Didattico e Cognitivo",
        "badge": "Sezione Integrata",
        "description": "Esercizi e percorsi ludico-educativi progettati per stimolare e potenziare lettura, scrittura, calcolo numerico, comprensione del testo, memoria di lavoro e attenzione focalizzata. Le attività si svolgono senza l'ansia del voto, rendendo l'apprendimento un'esperienza piacevole e gratificante.",
        "points": [
          "Potenziamento delle funzioni esecutive, memoria e concentrazione",
          "Attività mirate su prerequisiti scolastici, lettura e calcolo rapido",
          "Metodologia attiva ed esperienziale che valorizza i progressi individuali"
        ]
      },
      {
        "title": "Social Skill Training & Regolazione Emotiva",
        "badge": "Competenze Relazionali",
        "description": "Piccoli gruppi guidati da specialisti dell'età evolutiva per favorire la socializzazione positiva, l'ascolto reciproco, la conversazione, l'assertività e la gestione costruttiva delle frustrazioni e dei conflitti tra compagni.",
        "points": [
          "Sviluppo dell'empatia, della cooperazione e del rispetto dei turni",
          "Strategie per superare timidezza, chiusura o impulsività",
          "Attività guidate in un clima di fiducia e inclusione totale"
        ]
      },
      {
        "title": "Feste di Compleanno ed Eventi Privati",
        "badge": "Animazione Professionale",
        "description": "Uno spazio accogliente e sicuro a disposizione esclusiva delle famiglie per festeggiare ricorrenze speciali, con animazione dinamica o statica su misura, spettacoli di micromagia, giochi a squadre, balloon art, allestimenti a tema e sweet table curati nei minimi dettagli.",
        "points": [
          "Allestimenti personalizzati secondo i gusti del festeggiato",
          "Animatori qualificati con esperienza pluriennale",
          "Spazi ampi, igienizzati e a norma per il massimo comfort dei genitori"
        ]
      }
    ],
    "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    "whatsappText": "Salve, vorrei maggiori informazioni sulle attività della Ludoteca e sui Laboratori di Potenziamento di Folli Folletti."
  },
  {
    "id": 2,
    "slug": "educativa",
    "category": "Supporto Scolastico & Crescita",
    "badge": "Percorsi 6-18 Anni",
    "title": "Educativa Territoriale",
    "subtitle": "Doposcuola Specialistico, Recupero Debiti e Formazione",
    "shortDesc": "Doposcuola specialistico medie e superiori e corsi di recupero debiti estivi.",
    "fullDesc": "L’Educativa Territoriale è il nostro fiore all’occhiello per l’accompagnamento allo studio e alla crescita dei ragazzi dai 6 ai 18 anni. Combina un doposcuola specialistico quotidiano su tutte le materie per studenti di scuola media e superiore, percorsi estivi intensivi per il recupero dei debiti scolastici e preparazione agli esami di Stato, oltre all'esclusivo corso formativo di metodo \"L'Apprendimento su Misura\".",
    "ageGroup": "Ragazzi dai 6 ai 18 anni (Primaria, Medie e Superiori)",
    "keyFeature": "Piani Educativi Individualizzati (PEI) & Raccordo Scuola-Famiglia",
    "schedule": "Lunedì – Venerdì: 13:30 – 19:30 / 20:00",
    "tags": [
      "Doposcuola Medie & Superiori",
      "Recupero Debiti Estivo",
      "Prep. Esami Licenza & Maturità",
      "Corso Metodo su Misura"
    ],
    "highlights": [
      "Doposcuola specialistico su tutte le materie (umanistiche, scientifiche e linguistiche)",
      "Orario prolungato dal lunedì al venerdì dalle 13:30 alle 19:30/20:00",
      "Corsi estivi di recupero debiti scolastici e potenziamento da giugno a settembre",
      "Preparazione specifica e simulazioni d'esame per Terza Media e Maturità",
      "Corso formativo esclusivo \"L'Apprendimento su Misura\" (8 incontri da 3 ore)",
      "Costante raccordo con i docenti di classe e supporto ai genitori"
    ],
    "modules": [
      {
        "title": "Doposcuola Specialistico Pomeridiano (Medie e Superiori)",
        "badge": "Tutte le Materie",
        "description": "Attivo tutti i pomeriggi feriali dalle 13:30 alle 19:30/20:00. In piccoli gruppi omogenei, educatori dedicati guidano gli studenti nell'organizzazione autonoma dei compiti, nell'acquisizione di un metodo di studio solido e nella preparazione di verifiche scritte e interrogazioni orali.",
        "points": [
          "Supporto completo su materie letterarie, matematiche e lingue straniere",
          "Pianificazione settimanale dei carichi di studio per evitare accumuli",
          "Clima sereno e collaborativo che favorisce concentrazione e autostima"
        ]
      },
      {
        "title": "Potenziamento Estivo e Recupero Debiti Formativi",
        "badge": "Giugno – Settembre",
        "description": "Percorsi intensivi nei mesi estivi per colmare tempestivamente lacune disciplinari, preparare al meglio le prove di recupero dei debiti scolastici delle scuole superiori e accompagnare i ragazzi verso la maturità e l'esame di terza media con sicurezza e metodo.",
        "points": [
          "Ripasso mirato sui programmi ministeriali e sui punti critici",
          "Simulazioni di prove scritte e colloqui orali con feedback costruttivo",
          "Consolidamento delle competenze di base prima del nuovo anno scolastico"
        ]
      },
      {
        "title": "Corso Formativo \"L'Apprendimento su Misura\"",
        "badge": "8 Incontri da 3 Ore",
        "description": "Un percorso pratico ed esperienziale pensato per fornire agli studenti gli strumenti concreti per studiare meglio in meno tempo: imparare a gestire il tempo, selezionare le informazioni essenziali, usare schemi efficaci, potenziare la memoria a lungo termine ed esporre con chiarezza.",
        "points": [
          "Gestione autonoma e pianificazione strategica dello studio",
          "Tecniche di lettura rapida, selezione delle parole-chiave e schematizzazione",
          "Strategie per potenziare attenzione, memoria ed esposizione verbale"
        ]
      }
    ],
    "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    "whatsappText": "Salve, vorrei informazioni sul Doposcuola Specialistico e sui percorsi di Educativa Territoriale di Folli Folletti."
  },
  {
    "id": 3,
    "slug": "campus",
    "category": "Esperienze, Natura & Viaggi",
    "badge": "Estate & Inverno",
    "title": "Campus Estivi e Invernali",
    "subtitle": "Natura, Sport, Acquapark e Sezione Speciale Viaggi Culturali",
    "shortDesc": "Vacanze scolastiche tra natura, sport, acquapark e viaggi on the road.",
    "fullDesc": "I nostri Campus trasformano ogni pausa scolastica in un'avventura educativa memorabile. Attivi durante l'estate (da giugno a settembre), a Natale e a Pasqua per bambini e ragazzi dai 3 ai 16 anni, uniscono sport, gite in acquapark e laboratori creativi all'esclusiva sezione dei \"Viaggi Culturali On the Road\", pensata per sviluppare autonomia e maturità attraverso viaggi residenziali di più giorni.",
    "ageGroup": "Bambini e ragazzi dai 3 ai 16 anni (fasce 3-10 e 11+ anni)",
    "keyFeature": "Attività all'aria aperta, Acquapark & Viaggi Culturali On the Road",
    "schedule": "Lunedì – Venerdì: 08:00 – 16:00 (con ingresso anticipato e posticipato)",
    "tags": [
      "Campus Estivo & Invernale",
      "Viaggi Culturali On the Road",
      "Acquapark & Mare",
      "Sport & Laboratori"
    ],
    "highlights": [
      "Attivo durante tutte le chiusure scolastiche: estate, vacanze natalizie e pasquali",
      "Uscite settimanali entusiasmanti: acquapark, piscina, mare, canoa, snorkeling e gite in barca",
      "Sezione speciale dedicata ai Viaggi Culturali \"On the Road\" per ragazzi",
      "Gruppi suddivisi per fasce d'età omogenee (3-10 anni e 11+ anni)",
      "Laboratori creativi, teatrali, scientifici, ecologici e tornei sportivi all'aperto",
      "Pranzo sano, merende bilanciate e massima flessibilità oraria per i genitori"
    ],
    "modules": [
      {
        "title": "Campus Estivo & Invernale in Sede e all'Aperto",
        "badge": "Fasce 3-10 e 11+ Anni",
        "description": "Un programma ricco ed equilibrato dal lunedì al venerdì (08:00 - 16:00). Le giornate alternano laboratori tematici in sede (teatro, scienze, musica, arte) a magnifiche giornate all'aperto con uscite in parchi acquatici, piscina, escursioni naturalistiche e visite guidate alla scoperta della città.",
        "points": [
          "Acquapark e attività sportive all'aria aperta in totale sicurezza",
          "Educatori qualificati con rapporto educatore/bambino ottimale",
          "Flessibilità d'orario con ingressi anticipati e prolungamenti pomeridiani"
        ]
      },
      {
        "title": "Sezione Speciale: Viaggi Culturali (\"Campus on the Road\")",
        "badge": "Integrazione Esclusiva",
        "description": "Viaggi ed esperienze residenziali di più giorni in Italia e all'estero per bambini e ragazzi. Attraverso la metodologia \"on the road\", il programma e le attività vengono costruite insieme ai partecipanti giorno per giorno, trasformando il viaggio in una potente palestra di vita.",
        "points": [
          "Sviluppo dell'autonomia affettiva e della responsabilità personale lontano da casa",
          "Educazione alla cooperazione, allo spirito di gruppo e all'adattamento",
          "Itinerari culturali, artistici e naturalistici di altissimo valore formativo"
        ]
      }
    ],
    "image": "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1200&q=80",
    "whatsappText": "Salve, vorrei dettagli su programmi, periodi, costi dei Campus e sui Viaggi Culturali di Folli Folletti."
  },
  {
    "id": 4,
    "slug": "tutoraggio",
    "category": "Apprendimento & Metodo",
    "badge": "Specialistico BES & DSA",
    "title": "Tutoraggio BES e DSA",
    "subtitle": "Metodo di Studio, Strumenti Compensativi e Screening DSA",
    "shortDesc": "Metodo di studio, strumenti compensativi digitali e screening precoce.",
    "fullDesc": "Un servizio ad alta specializzazione dedicato agli studenti con Disturbi Specifici dell’Apprendimento e Bisogni Educativi Speciali. Guidati da tutor qualificati con master in psicopatologia dell’apprendimento, i ragazzi imparano a utilizzare software compensativi digitali, mappe multimediali e strategie metacognitive. Il servizio integra inoltre lo Screening DSA per l'individuazione precoce dei segnali di difficoltà.",
    "ageGroup": "Studenti di Scuola Primaria e Secondaria (I e II grado)",
    "keyFeature": "Tutor con Master DSA, Strumenti Compensativi & Screening Precoce",
    "schedule": "Pomeriggi dal Lunedì al Venerdì su appuntamento personalizzato",
    "tags": [
      "Screening DSA Precoce",
      "Strumenti Compensativi Digitali",
      "Supporto PDP Docenti",
      "Metodo Metacognitivo"
    ],
    "highlights": [
      "Tutor specialisti con formazione accreditata in psicopatologia dell’apprendimento",
      "Utilizzo guidato di software didattici, sintesi vocale e mappe concettuali interattive",
      "Servizio specialistico integrato di Screening DSA per l'identificazione precoce",
      "Incontri di raccordo costante con i docenti di classe per la stesura e verifica del PDP",
      "Sviluppo del senso di autoefficacia, autostima e autonomia scolastica",
      "Colloqui periodici di monitoraggio e orientamento per le famiglie"
    ],
    "modules": [
      {
        "title": "Tutoraggio Specialistico & Strumenti Compensativi",
        "badge": "Metodo & Autonomia",
        "description": "Intervento individuale o in piccolissimo gruppo mirato per dislessia, discalculia, disortografia e disgrafia. Lo studente viene guidato all'utilizzo autonomo di software compensativi, sintesi vocale e mappe concettuali, dimezzando i tempi di svolgimento dei compiti e azzerando la frustrazione.",
        "points": [
          "Apprendimento strategico con strumenti digitali e sintesi vocale",
          "Costruzione guidata di mappe concettuali per interrogazioni e verifiche",
          "Collaborazione attiva con gli insegnanti di classe per l'applicazione del PDP"
        ]
      },
      {
        "title": "Servizio Specialistico: Screening DSA",
        "badge": "Identificazione Precoce",
        "description": "Un servizio fondamentale per l'individuazione precoce di indicatori di rischio legati ai DSA (lettura, scrittura, calcolo). Tramite la somministrazione di test standardizzati, i nostri professionisti rilevano tempestivamente punti di forza e aree di fragilità, programmando subito percorsi di potenziamento mirati.",
        "points": [
          "Rilevazione tempestiva dei campanelli d'allarme nei primi anni di scuola",
          "Relazione tecnica chiara e condivisa con la famiglia e con la scuola",
          "Pianificazione immediata di cicli di potenziamento e orientamento diagnostico"
        ]
      }
    ],
    "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    "whatsappText": "Salve, vorrei informazioni sul Tutoraggio Specialistico BES/DSA o prenotare uno Screening DSA presso Folli Folletti."
  },
  {
    "id": 5,
    "slug": "psicologia",
    "category": "Benessere, Ascolto & Famiglie",
    "badge": "Spazio Ascolto & Consulenze",
    "title": "Spazio Ascolto e Consulenze Pedagogiche",
    "subtitle": "Ascolto, Consulenza e Condivisione con la Pedagogista",
    "shortDesc": "Spazio protetto di ascolto e sostegno per genitori, ragazzi e scuola.",
    "fullDesc": "Uno spazio protetto di ascolto, consulenza e condivisione nel quale trovare accoglienza e ricevere indicazioni utili su eventuali difficoltà scolastiche, relazionali e affettive dei bambini e ragazzi. Un luogo per confrontarsi su preoccupazioni, dubbi o difficoltà delle figure educative di riferimento o per ricevere informazioni sui principali servizi e risorse presenti sul territorio. La consulenza offre la possibilità di riflettere sull’azione educativa in un tempo stabilito: il qui ed ora.",
    "ageGroup": "Genitori, Bambini e Ragazzi",
    "keyFeature": "Ascolto Protetto, Consulenza Pedagogica & Supporto BES",
    "schedule": "Su appuntamento (Lunedì – Sabato)",
    "tags": [
      "Spazio Ascolto",
      "Consulenze Pedagogiche",
      "Supporto Genitori & Docenti",
      "Orientamento BES"
    ],
    "highlights": [
      "Spazio protetto di ascolto, consulenza e condivisione per bambini, ragazzi e genitori",
      "Accoglienza e indicazioni utili su difficoltà scolastiche, relazionali e affettive",
      "Confronto su dubbi e preoccupazioni delle figure educative di riferimento",
      "Orientamento sui principali servizi e risorse specialistiche presenti sul territorio",
      "Riflessione mirata sull’azione educativa in un tempo stabilito: il qui ed ora",
      "Colloqui dedicati su appuntamento in sede e online"
    ],
    "modules": [
      {
        "title": "Quando chiedere un consulto con la pedagogista:",
        "badge": "Ambiti di Consulenza",
        "description": "La consulenza pedagogica offre un orientamento concreto e personalizzato nelle diverse situazioni educative ed evolutive:",
        "points": [
          "Difficoltà con figli adolescenti (regole, conflitti, autonomia, uso del cellulare)",
          "Problemi a scuola, metodo di studio, motivazione e orientamento",
          "Supporto a genitori e insegnanti per strategie educative condivise",
          "Dubbio sulla necessità di intraprendere o meno un percorso diagnostico, sostegno nella fase successiva alla restituzione della diagnosi e supporto sul \"che fare\" a casa, a scuola e nella vita quotidiana per sostenere ed aiutare un ragazzo BES",
          "Momenti di cambiamento: nascita di un fratellino, separazioni, trasloco, ecc."
        ]
      },
      {
        "title": "A chi si rivolge e modalità di accesso",
        "badge": "Destinatari",
        "description": "Il servizio accoglie Genitori, Bambini e Ragazzi con percorsi mirati nel massimo rispetto della riservatezza.",
        "points": [
          "A chi si rivolge: Genitori, Bambini e Ragazzi",
          "Colloqui individuali in sede a Napoli e consulenze online",
          "Per prenotare o richiedere informazioni usa i pulsanti di collegamento rapido qui sotto o il modulo contatti del sito"
        ]
      }
    ],
    "image": "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80",
    "whatsappText": "Salve, vorrei fissare un appuntamento per lo Spazio Ascolto e Consulenze Pedagogiche."
  }
];

interface ServicesMosaicV3Props {
  onOpenContactForm?: (serviceSlug?: string) => void;
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
            Dalla ludoteca autorizzata dal Comune di Napoli al supporto scolastico, screening DSA, campus e consulenze.
          </p>
        </div>

                {/* 1. VERSIONE DESKTOP: MOSAICO SIMMETRICO E ORDINATO A 5 BOX */}
        <div className="services-mosaic-v3__desktop-grid" role="region" aria-label="Mosaico Servizi Desktop">
          
          {/* RIGA 1 (2 Box Grandi Panoramici - 50% ciascuno) */}
          {/* 1. LUDOTECA */}
          <article
            id="service-item-ludoteca"
            className="mosaic-card mosaic-card--wide mosaic-card--wide-1"
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

            {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">
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
              {/* 2. SOTTO AL BANNER IN VERDE CHIARO: Breve frase accreditamento e fasce d'età */}
              <span className="mosaic-card__green-phrase">
                {ludoteca.badge} &bull; {ludoteca.ageGroup}
              </span>

              {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
              <h3 className="mosaic-card__title">
                {ludoteca.title}
              </h3>

              {/* 4. SOTTOTITOLO */}
              <span className="mosaic-card__subtitle">
                {ludoteca.subtitle}
              </span>

              {/* 6. PULSANTE LINK PAGINA: Ben visibile, più in alto e vicino al testo */}
              <div className="mosaic-card__footer-cta">
                <span>Scopri orari e dettagli</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          {/* 2. EDUCATIVA TERRITORIALE */}
          <article
            id="service-item-educativa"
            className="mosaic-card mosaic-card--wide mosaic-card--wide-2"
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
              loading="eager"
            />
            <div className="mosaic-card__overlay mosaic-card__overlay--hero" />

            {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">
                {educativa.category}
              </span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              {/* 2. SOTTO AL BANNER IN VERDE CHIARO */}
              <span className="mosaic-card__green-phrase">
                {educativa.badge} &bull; {educativa.ageGroup}
              </span>

              {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
              <h3 className="mosaic-card__title">
                {educativa.title}
              </h3>

              {/* 4. SOTTOTITOLO */}
              <span className="mosaic-card__subtitle">
                {educativa.subtitle}
              </span>

              {/* 6. PULSANTE LINK PAGINA: Ben visibile, più in alto e vicino al testo */}
              <div className="mosaic-card__footer-cta">
                <span>Dettagli doposcuola e corsi</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          {/* RIGA 2 (3 Box Compatti Simmetrici - 33.3% ciascuno) */}
          {/* 3. CAMPUS ESTIVI E INVERNALI */}
          <article
            id="service-item-campus"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-1"
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

            {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">
                {campus.category}
              </span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              {/* 2. SOTTO AL BANNER IN VERDE CHIARO */}
              <span className="mosaic-card__green-phrase">
                {campus.badge} &bull; {campus.ageGroup}
              </span>

              {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
              <h3 className="mosaic-card__title">
                {campus.title}
              </h3>

              {/* 4. SOTTOTITOLO */}
              <span className="mosaic-card__subtitle">
                {campus.subtitle}
              </span>

              {/* 6. PULSANTE LINK PAGINA: Ben visibile, più in alto e vicino al testo */}
              <div className="mosaic-card__footer-cta">
                <span>Scopri programmi e viaggi</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          {/* 4. TUTORAGGIO BES E DSA */}
          <article
            id="service-item-tutoraggio"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-2"
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

            {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">
                {tutoraggio.category}
              </span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              {/* 2. SOTTO AL BANNER IN VERDE CHIARO */}
              <span className="mosaic-card__green-phrase">
                {tutoraggio.badge} &bull; {tutoraggio.ageGroup}
              </span>

              {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
              <h3 className="mosaic-card__title">
                {tutoraggio.title}
              </h3>

              {/* 4. SOTTOTITOLO */}
              <span className="mosaic-card__subtitle">
                {tutoraggio.subtitle}
              </span>

              {/* 6. PULSANTE LINK PAGINA: Ben visibile, più in alto e vicino al testo */}
              <div className="mosaic-card__footer-cta">
                <span>Dettagli e screening DSA</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          {/* 5. CONSULENZE PEDAGOGICHE */}
          <article
            id="service-item-psicologia"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-3"
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

            {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">
                {psicologia.category}
              </span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <div className="mosaic-card__bottom">
              {/* 2. SOTTO AL BANNER IN VERDE CHIARO */}
              <span className="mosaic-card__green-phrase">
                {psicologia.badge} &bull; {psicologia.ageGroup}
              </span>

              {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
              <h3 className="mosaic-card__title">
                {psicologia.title}
              </h3>

              {/* 4. SOTTOTITOLO */}
              <span className="mosaic-card__subtitle">
                {psicologia.subtitle}
              </span>

              {/* 6. PULSANTE LINK PAGINA: Ben visibile, più in alto e vicino al testo */}
              <div className="mosaic-card__footer-cta">
                <span>Dettagli e spazio ascolto</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

        </div>

                {/* 2. VERSIONE MOBILE: BANNER ACCATTIVANTI AD ALTO IMPATTO (Visibile < 960px) */}
        <div className="services-mosaic-v3__mobile-stack" role="region" aria-label="Elenco Servizi Mobile">
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

              {/* 1. IN ALTO AL BOX: Banner Trasparente Opaco Verde con il Tema */}
              <div className="mobile-service-banner__top">
                <span className="mobile-service-banner__theme-badge">
                  {service.category}
                </span>

                <div className="mobile-service-banner__arrow-wrap" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* CONTENUTO */}
              <div className="mobile-service-banner__bottom">
                {/* 2. SOTTO AL BANNER IN VERDE CHIARO COME IL BANNER */}
                <span className="mobile-service-banner__green-phrase">
                  {service.badge} &bull; {service.ageGroup}
                </span>

                {/* 3. TITOLO DEL SERVIZIO IN BIANCO */}
                <h3 className="mobile-service-banner__title">
                  {service.title}
                </h3>

                {/* 4. SOTTOTITOLO */}
                <span className="mobile-service-banner__subtitle">
                  {service.subtitle}
                </span>

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
            {/* Pulsante di Chiusura Primario Flottante Sempre in Primo Piano */}
            <button
              type="button"
              className="service-modal__close-btn"
              onClick={closeServiceModal}
              aria-label="Chiudi finestra"
              title="Chiudi finestra"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

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
              </div>

              <div className="service-modal__header-bottom">
                <span className="service-modal__eyebrow">{selectedService.subtitle}</span>
                <h3 id="modal-service-title" className="service-modal__title">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="service-modal__body">
              {/* Meta strip informativo con Orari e Destinatari */}
              <div className="service-modal__meta-strip">
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Destinatari</span>
                  <strong className="service-modal__meta-value">{selectedService.ageGroup}</strong>
                </div>
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Orari & Giorni</span>
                  <strong className="service-modal__meta-value">{selectedService.schedule}</strong>
                </div>
                <div className="service-modal__meta-item">
                  <span className="service-modal__meta-label">Caratteristica Chiave</span>
                  <strong className="service-modal__meta-value">{selectedService.keyFeature}</strong>
                </div>
              </div>

              {/* Descrizione Generale */}
              <div className="service-modal__desc-block">
                <h4 className="service-modal__subheading">Presentazione del Servizio</h4>
                <p className="service-modal__text">{selectedService.fullDesc}</p>
              </div>

              {/* Sezione Speciale: Moduli Integrati dal Vecchio Sito */}
              {selectedService.modules && selectedService.modules.length > 0 && (
                <div className="service-modal__modules-section">
                  <h4 className="service-modal__subheading">Aree e Moduli di Intervento</h4>
                  <div className="service-modal__modules-grid">
                    {selectedService.modules.map((mod, idx) => (
                      <div key={idx} className="service-modal__module-card">
                        <div className="service-modal__module-header">
                          <h5 className="service-modal__module-title">{mod.title}</h5>
                          {mod.badge && <span className="service-modal__module-badge">{mod.badge}</span>}
                        </div>
                        <p className="service-modal__module-desc">{mod.description}</p>
                        {mod.points && mod.points.length > 0 && (
                          <ul className="service-modal__module-points">
                            {mod.points.map((pt, pIdx) => (
                              <li key={pIdx}>
                                <span className="service-modal__check-bullet" aria-hidden="true">&#10003;</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Punti di Forza e Attività */}
              <div className="service-modal__highlights-block">
                <h4 className="service-modal__subheading">Punti di Forza ed Elementi Distintivi</h4>
                <ul className="service-modal__list">
                  {selectedService.highlights.map((h, i) => (
                    <li key={i} className="service-modal__list-item">
                      <span className="service-modal__check-bullet" aria-hidden="true">&#10003;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pulsanti Azione e Contatto */}
              <div className="service-modal__actions">
                {/* Collegamenti Rapidi di Chiamata */}
                <div className="service-modal__quick-call-row">
                  <span className="service-modal__quick-call-label">Collegamenti Rapidi:</span>
                  <div className="service-modal__call-links-group">
                    {selectedService.slug === 'psicologia' ? (
                    <>
                      <a href="tel:3455964494" className="service-modal__call-link" title="Chiama la Pedagogista">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>Chiama Cellulare</span>
                      </a>
                      <a href="tel:0815921176" className="service-modal__call-link" title="Chiama la Sede">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>Chiama Sede</span>
                      </a>
                    </>
                  ) : (
                    <a href="tel:0815921176" className="service-modal__call-link" title="Chiama la Sede">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      <span>Chiama Sede</span>
                    </a>
                  )}
                  </div>
                </div>

                <div className="service-modal__actions-row">
                  <a
                    href={'https://wa.me/' + (selectedService.slug === 'psicologia' ? '393455964494' : '390815921176') + '?text=' + encodeURIComponent(selectedService.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-modal__btn service-modal__btn--wa"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>Contatta su WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    className="service-modal__btn service-modal__btn--secondary"
                    onClick={() => {
                      const serviceToPass = selectedService.slug;
                      closeServiceModal();
                      if (onOpenContactForm) {
                        onOpenContactForm(serviceToPass);
                      } else {
                        const el = document.getElementById('contatti');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span>Prenota Colloquio / Richiedi Info</span>
                  </button>

                  <button
                    type="button"
                    className="service-modal__btn service-modal__btn--close"
                    onClick={closeServiceModal}
                    title="Chiudi questa finestra"
                  >
                    <span>Chiudi Scheda</span>
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
