import React from 'react';
import './DraftTopBar.css';

export type DraftVersion = 'v1' | 'v2' | 'v3';

interface DraftTopBarProps {
  currentVersion: DraftVersion;
  onSwitchVersion: (v: DraftVersion) => void;
  onBackToSelector: () => void;
}

export default function DraftTopBar({
  currentVersion,
  onSwitchVersion,
  onBackToSelector
}: DraftTopBarProps) {
  const getVersionLabel = () => {
    if (currentVersion === 'v1') return 'Versione 1 (Bosco Scuro)';
    if (currentVersion === 'v2') return 'Versione 2 (Fondo Bianco)';
    return 'Versione 3 (Vetrina Mosaico & Banner)';
  };

  return (
    <aside className="draft-top-bar" aria-label="Selettore bozza in corso">
      <div className="draft-top-bar__info">
        <span
          className={`draft-top-bar__dot draft-top-bar__dot--${currentVersion}`}
          aria-hidden="true"
        />
        <span className="draft-top-bar__label">
          Bozza: <strong>{getVersionLabel()}</strong>
        </span>
      </div>

      <div className="draft-top-bar__actions">
        {/* Pulsanti Rapidi per Passare a Ciascuna Bozza */}
        <div className="draft-top-bar__segmented" role="group" aria-label="Selettore rapido versione">
          <button
            type="button"
            className={`draft-top-bar__seg-btn ${currentVersion === 'v1' ? 'is-active' : ''}`}
            onClick={() => onSwitchVersion('v1')}
            title="Passa alla Versione 1 (Bosco Scuro)"
          >
            V1 Bosco
          </button>
          <button
            type="button"
            className={`draft-top-bar__seg-btn ${currentVersion === 'v2' ? 'is-active' : ''}`}
            onClick={() => onSwitchVersion('v2')}
            title="Passa alla Versione 2 (Fondo Bianco)"
          >
            V2 Bianco
          </button>
          <button
            type="button"
            className={`draft-top-bar__seg-btn draft-top-bar__seg-btn--v3 ${currentVersion === 'v3' ? 'is-active' : ''}`}
            onClick={() => onSwitchVersion('v3')}
            title="Passa alla Versione 3 (Vetrina Mosaico Desktop & Banner Mobile)"
          >
            V3 Vetrina ✨
          </button>
        </div>

        <button
          type="button"
          className="draft-top-bar__btn draft-top-bar__btn--selector"
          onClick={onBackToSelector}
          title="Torna alla schermata di scelta tra tutte le bozze"
        >
          Tutte le Bozze
        </button>
      </div>
    </aside>
  );
}
