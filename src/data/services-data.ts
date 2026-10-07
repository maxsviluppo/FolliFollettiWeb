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
    "badge": "Autorizzato Comune di Napoli",
    "title": "Centro Infanzia & Ludoteca",
    "subtitle": "Gioco Strutturato, Laboratori di Potenziamento e Social Skill",
    "shortDesc": "Spazio accreditato con laboratori di potenziamento cognitivo, gioco e social skill.",
    "fullDesc": "Il nostro centro infanzia e ludoteca, ufficialmente autorizzato dal Comune di Napoli, è un ambiente colorato, igienizzato e protetto dove ogni bambino trova stimoli su misura per la propria crescita. Oltre al gioco libero e strutturato con educatori qualificati, la struttura integra laboratori specialistici di potenziamento cognitivo per lettura, scrittura e calcolo, percorsi di Social Skill Training e servizi di animazione per feste ed eventi privati.",
    "ageGroup": "Bambini e ragazzi dai 3 ai 12 anni",
    "keyFeature": "Centro infanzia autorizzato & Laboratori di Potenziamento",
    "schedule": "Lunedì – Venerdì: 08:30 – 19:30 | Sabato per eventi su prenotazione",
    "tags": [
      "Laboratori Potenziamento",
      "Social Skill Training",
      "Feste & Animazione",
      "Gioco Guidato"
    ],
    "highlights": [
      "Centro infanzia autorizzato dal Comune di Napoli nel rispetto dei più alti standard di sicurezza",
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
    "image": "/ludoteca-magica.jpeg",
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
    "image": "/educativa-territoriale.jpeg",
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
    "image": "/campus-viaggi.jpeg",
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
    "image": "/tutoraggio-bes-dsa.jpeg",
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
