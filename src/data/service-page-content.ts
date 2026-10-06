import type { ServiceCategorySlug } from '@/constants/service-categories';

export type ServicePageExtra = {
  illustrationSrc: string;
  illustrationAlt: string;
  leadTitle: string;
  leadParagraphs: string[];
  approachTitle: string;
  approachText: string;
};

export const SERVICE_PAGE_CONTENT: Record<ServiceCategorySlug, ServicePageExtra> = {
  ludoteca: {
    illustrationSrc: '/follettastesa-cropped.png',
    illustrationAlt: 'Illustrazione Folletta Folli Folletti — accoglienza e gioco educativo',
    leadTitle: 'Un luogo magico dove giocare significa crescere',
    leadParagraphs: [
      'La Ludoteca Folli Folletti è molto più di una sala giochi: è uno spazio educativo autorizzato dal Comune di Napoli, pensato per accogliere bambini e ragazzi in un ambiente caldo, colorato e rigorosamente igienizzato.',
      'Il gioco libero convive con laboratori di potenziamento cognitivo, percorsi di socializzazione, creatività e servizi per famiglie che desiderano festeggiare compleanni ed eventi privati in serenità.',
      'Ogni bambino è accompagnato nel rispetto dei tempi individuali; i genitori trovano educatori competenti e disponibili al dialogo.',
    ],
    approachTitle: 'La nostra filosofia in ludoteca',
    approachText:
      'Crediamo che imparare passi attraverso il piacere di scoprire e condividere. Alterniamo gioco guidato, laboratori mirati e social skill training, con un ponte costante tra casa, scuola e comunità.',
  },
  educativa: {
    illustrationSrc: '/filosofia.png',
    illustrationAlt: 'Illustrazione educativa Folli Folletti',
    leadTitle: 'Supporto scolastico e crescita consapevole',
    leadParagraphs: [
      'L’Educativa Territoriale accompagna ragazzi e famiglie nei percorsi di studio, recupero e orientamento, con un team specializzato su tutte le fasi scolastiche.',
      'Doposcuola strutturato, corsi estivi per debiti, preparazione agli esami e il corso esclusivo «L’Apprendimento su Misura» offrono strumenti concreti per studiare meglio e con meno stress.',
      'Lavoriamo in raccordo con scuola e genitori, costruendo piani educativi personalizzati e monitorando i progressi nel tempo.',
    ],
    approachTitle: 'Metodo e continuità educativa',
    approachText:
      'Non sostituiamo la scuola: la valorizziamo. Ogni percorso combina strategie di studio, motivazione e autonomia, in un ambiente accogliente dove l’errore diventa occasione di apprendimento.',
  },
  campus: {
    illustrationSrc: '/follettastesa-cropped.png',
    illustrationAlt: 'Campus estivi e invernali Folli Folletti',
    leadTitle: 'Avventure, natura e creatività nelle pause scolastiche',
    leadParagraphs: [
      'I campus Folli Folletti trasformano le vacanze in esperienze educative ricche: attività all’aperto, laboratori, gioco di squadra e momenti di scoperta guidata.',
      'Programmi estivi e invernali pensati per età diverse, con educatori qualificati e attenzione costante a sicurezza, inclusione e benessere.',
      'Ogni giornata equilibra movimento, espressione artistica, socialità e riposo, in spazi curati e accoglienti.',
    ],
    approachTitle: 'Crescere anche fuori dalla scuola',
    approachText:
      'Il campus è un laboratorio di vita: imparare a relazionarsi, a gestire l’autonomia e a vivere emozioni positive lontano dalla routine, sempre in un contesto protetto e professionalmente guidato.',
  },
  tutoraggio: {
    illustrationSrc: '/cooperativa-sociale.png',
    illustrationAlt: 'Tutoraggio BES e DSA Folli Folletti',
    leadTitle: 'Percorsi su misura per BES, DSA e potenziamento',
    leadParagraphs: [
      'Il tutoraggio specialistico offre supporto personalizzato a studenti con bisogni educativi speciali, disturbi specifici dell’apprendimento o necessità di potenziamento mirato.',
      'Screening, osservazione, strumenti compensativi e metodo di studio vengono calibrati sulla persona, in collaborazione con famiglia e, quando utile, con la scuola.',
      'Obiettivo: ridurre la fatica, aumentare la comprensione e restituire fiducia nel proprio modo di imparare.',
    ],
    approachTitle: 'Ogni mente ha il suo ritmo',
    approachText:
      'Partiamo dalle risorse dello studente, non solo dalle difficoltà. Percorsi chiari, obiettivi condivisi e monitoraggio periodico per costruire autonomia e serenità nello studio.',
  },
  psicologia: {
    illustrationSrc: '/follettastesa-cropped.png',
    illustrationAlt: 'Spazio ascolto e consulenze pedagogiche',
    leadTitle: 'Ascolto, orientamento e sostegno alle famiglie',
    leadParagraphs: [
      'Lo Spazio Ascolto è un luogo protetto dove genitori, bambini e ragazzi possono confrontarsi su dubbi scolastici, relazionali ed emotivi con una pedagogista esperta.',
      'Consulenze mirate, indicazioni sui servizi territoriali e supporto nelle fasi di cambiamento aiutano a leggere le difficoltà e a scegliere passi concreti.',
      'Colloqui su appuntamento, in sede o online, nel rispetto della riservatezza e del tempo di ciascuno.',
    ],
    approachTitle: 'Il qui ed ora educativo',
    approachText:
      'Non etichettiamo: accompagniamo. Ogni consulto è un momento per chiarire, orientare e costruire strategie condivise tra famiglia, scuola e servizi, quando necessario.',
  },
};
