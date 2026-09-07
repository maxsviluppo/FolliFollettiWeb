import './PrivacyPage.css';

interface PrivacyPageProps {
  onBackHome: () => void;
}

export default function PrivacyPage({ onBackHome }: PrivacyPageProps) {
  return (
    <div className="privacy-page" role="main">
      <div className="privacy-page__container">
        {/* Navigation Breadcrumb */}
        <div className="privacy-page__header">
          <button
            type="button"
            onClick={onBackHome}
            className="privacy-page__back-btn"
            aria-label="Torna alla Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </button>

          <h1 className="privacy-page__title">Informativa sulla Privacy</h1>
          <h2 className="privacy-page__legal-notice">Informativa Legale</h2>
          <p className="privacy-page__subtitle">
            Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 s.m.i.
            relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali.
          </p>
        </div>

        {/* Quick Summary Card */}
        <div className="privacy-page__summary-card">
          <h2 className="privacy-page__summary-title">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Sintesi del Trattamento
          </h2>
          <div className="privacy-page__summary-grid">
            <div className="privacy-page__summary-item">
              <span className="privacy-page__summary-label">Titolare del Trattamento</span>
              <strong>Stefania Busalacchi</strong>
              <span>Folli Folletti Cooperativa Sociale</span>
            </div>
            <div className="privacy-page__summary-item">
              <span className="privacy-page__summary-label">Sede Operativa</span>
              <span>Via Saverio Gatto, 21 - 80131 Napoli (NA)</span>
            </div>
            <div className="privacy-page__summary-item">
              <span className="privacy-page__summary-label">Contatto Privacy</span>
              <a href="mailto:info@follifolletti.it" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                info@follifolletti.it
              </a>
              <span>Tel: 081.5921176 / 345 5964494</span>
            </div>
            <div className="privacy-page__summary-item">
              <span className="privacy-page__summary-label">Ambito di applicazione</span>
              <span>Sito web ufficiale FolliFolletti.it</span>
            </div>
          </div>
        </div>

        {/* Full Document Sections modeled from https://www.follifolletti.it/general-5 */}
        <div className="privacy-page__content">
          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">1 - Informazioni relative alla Privacy del sito</h2>
            <p className="privacy-page__text">
              In questa sezione sono contenute le informazioni relative alle modalità di gestione di FolliFolletti.it, di proprietà di Stefania Busalacchi, in riferimento al trattamento dei dati degli utenti del sito stesso.
            </p>
            <p className="privacy-page__text">
              La presente informativa ha valore anche ai fini dell&apos;articolo 13 del Regolamento (UE) n. 2016/679, relativo alla protezione delle persone fisiche con riguardo al trattamento dei dati personali nonché alla libera circolazione di tali dati, per i soggetti che interagiscono con FolliFolletti.it.
            </p>
            <p className="privacy-page__text">
              L&apos;informativa è resa solo per FolliFolletti.it e non anche per altri siti web eventualmente consultati dall&apos;utente tramite link in esso contenuti.
            </p>
            <p className="privacy-page__text">
              Scopo del presente documento è fornire indicazioni circa le modalità, i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti al momento della connessione alle pagine web di FolliFolletti.it, indipendentemente dagli scopi del collegamento stesso, secondo la legislazione Italiana ed Europea.
            </p>
            <p className="privacy-page__text">
              Se l&apos;utente ha meno di quattordici anni, ai sensi dell&apos;art. 8, c. 1 regolamento (UE) 2016/679, e dell&apos;Art. 2 - Quinquies del D.Lgs 196/2003, così come modificato dal D.Lgs 181/18, dovrà legittimare il suo consenso attraverso l&apos;autorizzazione dei genitori o di chi ne fa le veci.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">2 - Titolare del trattamento</h2>
            <p className="privacy-page__text">
              Il titolare del trattamento è la persona fisica o giuridica, l&apos;autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali. Si occupa anche dei profili sulla sicurezza.
            </p>
            <p className="privacy-page__text">
              Relativamente al presente sito web il titolare del trattamento è <strong>Stefania Busalacchi</strong>. Per ogni chiarimento o esercizio dei diritti dell&apos;utente potrà contattarlo al seguente indirizzo email: <a href="mailto:info@follifolletti.it" style={{ color: 'var(--accent)', fontWeight: 700 }}>info@follifolletti.it</a>.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">3 - Luogo trattamento dati</h2>
            <p className="privacy-page__text">
              Il trattamento dei dati generato dall&apos;utilizzo di FolliFolletti.it avviene presso Via Saverio Gatto 14/21, Napoli. In caso di necessità, i dati connessi al servizio newsletter possono essere trattati dal responsabile del trattamento o soggetti da esso incaricati a tal fine presso la sede operativa di Folli Folletti.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">4 - Base giuridica del trattamento</h2>
            <p className="privacy-page__text">
              Il trattamento dei dati personali da parte di FolliFolletti.it si basa sul consenso – ai sensi dell&apos;art. 6, par. 1, lett. a) del Regolamento UE 2016/679 – espresso dall&apos;utente mediante la navigazione su questo sito web e la sua consultazione, così accettando la presente informativa.
            </p>
            <p className="privacy-page__text">
              Il consenso è facoltativo e può essere revocato in qualsiasi momento mediante richiesta inviata a mezzo email a <a href="mailto:info@follifolletti.it" style={{ color: 'var(--accent)', fontWeight: 700 }}>info@follifolletti.it</a> precisando che, in tal caso, in assenza di consenso non potranno essere erogati alcuni servizi e la navigazione sul sito web potrebbe essere compromessa.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">5 - Cookie e tecnologie di tracciamento</h2>
            <p className="privacy-page__text">
              Questo sito utilizza cookie e tecnologie similari nel rispetto della relativa normativa europea (direttiva 2009/136/CE che ha modificato la direttiva 2002/58/CE &quot;e-Privacy&quot;) e nazionale (Provvedimento Garante per la protezione dei dati personali dell&apos;8 maggio 2014 e successive Linee Guida del 10 giugno 2021 n. 231).
            </p>
            <p className="privacy-page__text">
              Per informazioni complete circa le categorie di cookie utilizzati e le preferenze di gestione, è possibile consultare la sezione dedicata alla Cookie Policy.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">6 - Dati di navigazione e Log Files</h2>
            <p className="privacy-page__text">
              Il presente sito fa uso di log files nei quali vengono conservate informazioni raccolte in maniera automatizzata durante le visite degli utenti per fini statistici aggregati e di sicurezza del sistema:
            </p>
            <ul className="privacy-page__list">
              <li>Indirizzo Internet Protocol (IP);</li>
              <li>Tipo di browser e parametri del dispositivo usato per connettersi al sito;</li>
              <li>Nome dell&apos;Internet Service Provider (ISP);</li>
              <li>Data e orario di visita;</li>
              <li>Pagina web di provenienza del visitatore (referral) e di uscita;</li>
              <li>Numero di click o interazioni anonime.</li>
            </ul>
            <p className="privacy-page__text">
              Tali dati sono trattati in base ai legittimi interessi del titolare per verificare il corretto funzionamento della piattaforma e prevenire tentativi di frode o danneggiamento.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">7 - Dati forniti volontariamente dall&apos;utente</h2>
            <p className="privacy-page__text">
              L&apos;invio facoltativo ed esplicito di posta elettronica agli indirizzi indicati o l&apos;iscrizione spontanea al servizio di <strong>Newsletter</strong> comporta l&apos;acquisizione dell&apos;indirizzo email e degli eventuali dati personali trasmessi, necessari per rispondere alle richieste di contatto o inviare le comunicazioni informative e periodiche richieste dall&apos;interessato.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">8 - Finalità e conservazione dei dati</h2>
            <p className="privacy-page__text">
              I dati raccolti dal sito durante il suo funzionamento sono utilizzati esclusivamente per le finalità descritte e conservati per il tempo strettamente necessario all&apos;erogazione delle attività e servizi richiesti (massimo 5 anni, o fino a revoca del consenso).
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">9 - Interazione con Social Network</h2>
            <p className="privacy-page__text">
              Il sito può incorporare collegamenti, pulsanti o widget di condivisione per social network (Facebook, Instagram, LinkedIn). Tali servizi permettono di interagire con le piattaforme esterne nel pieno rispetto delle preferenze privacy impostate dall&apos;utente su ciascun social network.
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">10 - Diritti dell&apos;interessato (GDPR)</h2>
            <p className="privacy-page__text">
              In conformità con gli articoli 15-22 del Regolamento (UE) 2016/679, ciascun utente ha il diritto di chiedere al Titolare:
            </p>
            <ul className="privacy-page__list">
              <li><strong>Diritto di Accesso:</strong> conferma dell&apos;esistenza di un trattamento e copia dei dati personali trattati;</li>
              <li><strong>Diritto di Rettifica:</strong> correzione o integrazione tempestiva dei dati inesatti o incompleti;</li>
              <li><strong>Diritto alla Cancellazione (&quot;oblio&quot;):</strong> rimozione dei dati non più necessari o in caso di revoca del consenso;</li>
              <li><strong>Diritto di Limitazione:</strong> sospensione temporanea del trattamento nei casi previsti dall&apos;art. 18;</li>
              <li><strong>Diritto alla Portabilità:</strong> ricezione dei propri dati in formato strutturato e leggibile da dispositivo automatico;</li>
              <li><strong>Diritto di Opposizione:</strong> opposizione in qualsiasi momento al trattamento per motivi legittimi;</li>
              <li><strong>Revoca del Consenso:</strong> in qualsiasi momento, senza pregiudicare la liceità del trattamento anteriore.</li>
            </ul>
            <p className="privacy-page__text">
              Per esercitare i propri diritti è sufficiente inviare un&apos;email a <a href="mailto:info@follifolletti.it" style={{ color: 'var(--accent)', fontWeight: 700 }}>info@follifolletti.it</a>. L&apos;utente ha altresì diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).
            </p>
          </section>

          <section className="privacy-page__card">
            <h2 className="privacy-page__section-title">11 - Recapiti e Contatti Diretti</h2>
            <div className="privacy-page__contacts-box">
              <strong>Folli Folletti - Cooperativa Sociale</strong><br />
              Via Saverio Gatto, 21 - 80131 Napoli (NA)<br />
              Telefono: <a href="tel:0815921176">081.5921176</a><br />
              Cellulare: <a href="tel:3455964494">345 5964494</a> / <a href="tel:3483142381">348 3142381</a><br />
              Email: <a href="mailto:info@follifolletti.it">info@follifolletti.it</a><br />
              Sito web: <a href="https://www.follifolletti.it" target="_blank" rel="noopener noreferrer">www.follifolletti.it</a>
            </div>
          </section>
        </div>

        {/* Back to Home Button at Bottom */}
        <div className="privacy-page__footer-nav">
          <button
            type="button"
            onClick={onBackHome}
            className="privacy-page__back-btn"
          >
            ← Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}
