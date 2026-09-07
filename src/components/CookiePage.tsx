import './CookiePage.css';

interface CookiePageProps {
  onBackHome: () => void;
  onOpenCookieSettings?: () => void;
}

export default function CookiePage({ onBackHome, onOpenCookieSettings }: CookiePageProps) {
  return (
    <div className="cookie-page" role="main">
      <div className="cookie-page__container">
        {/* Header Breadcrumb */}
        <div className="cookie-page__header">
          <button
            type="button"
            onClick={onBackHome}
            className="cookie-page__back-btn"
            aria-label="Torna alla Home"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </button>

          <h1 className="cookie-page__title">Informativa sui Cookie</h1>
          <h2 className="cookie-page__legal-notice">Informativa Legale</h2>
          <p className="cookie-page__subtitle">
            Linee Guida cookie e altri strumenti di tracciamento del Garante per la Protezione dei Dati Personali
            (Provvedimento n. 231 del 10 giugno 2021) e art. 122 D.Lgs. 196/2003 s.m.i.
          </p>
        </div>

        {/* Content Cards */}
        <div className="cookie-page__content">
          <section className="cookie-page__card">
            <h2 className="cookie-page__section-title">1 - Cosa sono i Cookie</h2>
            <p className="cookie-page__text">
              I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano direttamente al suo terminale
              (computer, tablet, smartphone), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.
            </p>
            <p className="cookie-page__text">
              I cookie permettono al sito di riconoscere il dispositivo dell&apos;utente, conservare informazioni sulle sue preferenze
              e ottimizzare l&apos;esperienza di navigazione complessiva.
            </p>
          </section>

          <section className="cookie-page__card">
            <h2 className="cookie-page__section-title">2 - Tipologie di Cookie utilizzati</h2>
            <ul className="cookie-page__list">
              <li>
                <strong>Cookie Tecnici e di Navigazione (Necessari):</strong> Sono essenziali per il corretto funzionamento del sito
                e per consentire all&apos;utente di navigare agevolmente e utilizzare le funzionalità basilari (es. gestione delle sessioni,
                caricamento dei font e stili). Ai sensi dell&apos;art. 122 del Codice Privacy, questi cookie non richiedono il preventivo consenso dell&apos;utente.
              </li>
              <li>
                <strong>Cookie Analitici Anonimizzati:</strong> Utilizzati per raccogliere informazioni in forma strettamente aggregata
                e anonima sul numero degli utenti e sulle modalità di fruizione del portale, con mascheramento dell&apos;indirizzo IP,
                senza possibilità di identificazione diretta.
              </li>
              <li>
                <strong>Widget e Contenuti di Terze Parti:</strong> Il sito può integrare elementi forniti da terze parti
                (es. Google Fonts per la tipografia, mappe, icone social di Facebook, Instagram e LinkedIn). Tali soggetti terzi
                possono a loro volta installare cookie secondo le rispettive informative privacy.
              </li>
            </ul>
          </section>

          <section className="cookie-page__card">
            <h2 className="cookie-page__section-title">3 - Tabella dei Cookie presenti sul sito</h2>
            <div className="cookie-page__table-wrap">
              <table className="cookie-page__table">
                <thead>
                  <tr>
                    <th>Nome Cookie</th>
                    <th>Fornitore</th>
                    <th>Finalità</th>
                    <th>Durata</th>
                    <th>Tipologia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>PHPSESSID / Session</strong></td>
                    <td>FolliFolletti.it</td>
                    <td>Mantenimento dello stato di sessione e navigazione</td>
                    <td>Sessione</td>
                    <td>Tecnico (Necessario)</td>
                  </tr>
                  <tr>
                    <td><strong>cookie_consent</strong></td>
                    <td>FolliFolletti.it</td>
                    <td>Memorizzazione delle preferenze sul consenso cookie</td>
                    <td>12 mesi</td>
                    <td>Tecnico (Necessario)</td>
                  </tr>
                  <tr>
                    <td><strong>Google Fonts</strong></td>
                    <td>Google LLC</td>
                    <td>Erogazione dei caratteri tipografici ottimizzati (Outfit, DM Sans)</td>
                    <td>Sessione</td>
                    <td>Terza Parte (Tecnico)</td>
                  </tr>
                  <tr>
                    <td><strong>Social Plugins</strong></td>
                    <td>Meta / Instagram / LinkedIn</td>
                    <td>Visualizzazione e interazione con i canali social ufficiali</td>
                    <td>Persistente</td>
                    <td>Terza Parte</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="cookie-page__card">
            <h2 className="cookie-page__section-title">4 - Come gestire o disabilitare i Cookie nei Browser</h2>
            <p className="cookie-page__text">
              L&apos;utente può gestire o revocare in qualsiasi momento le preferenze relative ai cookie direttamente dalle impostazioni
              del proprio browser, impedendo ad esempio l&apos;installazione di cookie di terze parti o eliminando quelli già memorizzati.
            </p>
            <div className="cookie-page__browser-grid">
              <div className="cookie-page__browser-card">
                <strong>Google Chrome</strong>
                <span>Impostazioni &gt; Privacy e sicurezza &gt; Cookie e altri dati dei siti.</span>
              </div>
              <div className="cookie-page__browser-card">
                <strong>Apple Safari</strong>
                <span>Preferenze &gt; Privacy &gt; Blocca tutti i cookie o rimuovi dati salvati.</span>
              </div>
              <div className="cookie-page__browser-card">
                <strong>Mozilla Firefox</strong>
                <span>Opzioni &gt; Privacy e sicurezza &gt; Cookie e dati dei siti web.</span>
              </div>
              <div className="cookie-page__browser-card">
                <strong>Microsoft Edge</strong>
                <span>Impostazioni &gt; Cookie e autorizzazioni sito &gt; Gestisci ed elimina.</span>
              </div>
            </div>
          </section>

          <section className="cookie-page__card" style={{ background: 'rgba(255, 255, 255, 0.98)', border: '1px solid rgba(155, 197, 61, 0.5)' }}>
            <h2 className="cookie-page__section-title">5 - Gestione e Modifica del Consenso sul Sito</h2>
            <p className="cookie-page__text">
              In conformità alle Linee Guida del Garante Privacy del 10 giugno 2021, puoi verificare, revocare o personalizzare
              le tue scelte relative ai cookie in qualunque momento cliccando sul pulsante sottostante:
            </p>
            <button
              type="button"
              onClick={onOpenCookieSettings}
              className="cookie-page__back-btn"
              style={{ background: 'var(--accent, #6aab3a)', color: '#ffffff', borderColor: 'var(--accent, #6aab3a)', marginTop: '0.5rem' }}
            >
              ⚙️ Apri Pannello Impostazioni Cookie
            </button>
          </section>

          <section className="cookie-page__card">
            <h2 className="cookie-page__section-title">6 - Titolare del Trattamento e Contatti</h2>
            <p className="cookie-page__text">
              Il Titolare del trattamento dei dati è <strong>Stefania Busalacchi</strong> per conto di Folli Folletti Cooperativa Sociale,
              con sede operativa in Via Saverio Gatto 14/21, 80131 Napoli (NA).
            </p>
            <p className="cookie-page__text">
              Per ogni comunicazione o richiesta in merito all&apos;utilizzo dei cookie, è possibile scrivere a:{' '}
              <a href="mailto:info@follifolletti.it" style={{ color: 'var(--accent)', fontWeight: 700 }}>
                info@follifolletti.it
              </a>.
            </p>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="cookie-page__footer-nav">
          <button
            type="button"
            onClick={onBackHome}
            className="cookie-page__back-btn"
          >
            ← Torna alla Home
          </button>
        </div>
      </div>
    </div>
  );
}
