import './FeaturesWorkspace.css';

export default function FeaturesWorkspace() {
  return (
    <section id="progetti" className="features-workspace" aria-labelledby="features-workspace-heading">
      <div className="features-workspace__container">
        <div className="features-workspace__header">
          <span className="features-workspace__eyebrow">Novità & Iniziative</span>
          <h2 id="features-workspace-heading" className="features-workspace__title">
            I Nostri Progetti & Attività
          </h2>
          <p className="features-workspace__desc">
            Uno spazio aperto per scoprire in anteprima i progetti educativi, gli eventi speciali
            e i laboratori esperienziali in partenza per bambini e famiglie.
          </p>
        </div>

        {/* Spazio pronto per inserire gli elementi in elaborazione */}
        <div className="features-workspace__canvas" role="region" aria-label="Spazio nuovi elementi">
          <span className="features-workspace__badge-ready">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Spazio Dedicato
          </span>
          <h3 className="features-workspace__canvas-title">
            Sezione pronta per i nuovi contenuti in arrivo
          </h3>
          <p className="features-workspace__canvas-subtext">
            Questo spazio è predisposto per accogliere i nuovi elementi, schede di approfondimento,
            gallerie o moduli personalizzati in fase di elaborazione.
          </p>
        </div>
      </div>

      {/* Sfondo decorativo in basso da parte a parte tono su tono soft lieve con skylinehome.jpg */}
      <div className="features-workspace__skyline-bg" aria-hidden="true">
        <img
          src="/skylinehome.jpg"
          alt=""
          className="features-workspace__skyline-img"
          loading="lazy"
          decoding="async"
        />
        <div className="features-workspace__skyline-gradient" />
      </div>
    </section>
  );
}
