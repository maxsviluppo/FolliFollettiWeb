import React from 'react';
import './DraftTopBar.css';

interface DraftTopBarProps {
  currentVersion: 'v1' | 'v2';
  onSwitchVersion: (v: 'v1' | 'v2') => void;
  onBackToSelector: () => void;
}

export default function DraftTopBar({
  currentVersion,
  onSwitchVersion,
  onBackToSelector
}: DraftTopBarProps) {
  return (
    <aside className="draft-top-bar" aria-label="Selettore bozza in corso">
      <div className="draft-top-bar__info">
        <span
          className={`draft-top-bar__dot ${
            currentVersion === 'v2' ? 'draft-top-bar__dot--v2' : ''
          }`}
          aria-hidden="true"
        />
        <span className="draft-top-bar__label">
          Bozza: <strong>{currentVersion === 'v1' ? 'Versione 1 (Attuale)' : 'Versione 2 (Nuova)'}</strong>
        </span>
      </div>

      <div className="draft-top-bar__actions">
        {currentVersion === 'v1' ? (
          <button
            type="button"
            className="draft-top-bar__btn draft-top-bar__btn--primary"
            onClick={() => onSwitchVersion('v2')}
            title="Passa alla Versione 2"
          >
            Guarda Versione 2 →
          </button>
        ) : (
          <button
            type="button"
            className="draft-top-bar__btn draft-top-bar__btn--primary"
            onClick={() => onSwitchVersion('v1')}
            title="Passa alla Versione 1"
          >
            ← Guarda Versione 1
          </button>
        )}

        <button
          type="button"
          className="draft-top-bar__btn"
          onClick={onBackToSelector}
          title="Torna alla schermata con i 2 riquadri"
        >
          Scelta Bozze
        </button>
      </div>
    </aside>
  );
}
