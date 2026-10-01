import React from 'react';
import './DraftSelector.css';

export type DraftVersion = 'v1' | 'v2' | 'v3';

interface DraftSelectorProps {
  onSelectVersion: (version: DraftVersion) => void;
}

export default function DraftSelector({ onSelectVersion }: DraftSelectorProps) {
  return (
    <div className="draft-selector">
      <div className="draft-selector__bg-decor" aria-hidden="true" />

      <div className="draft-selector__container">
        <header className="draft-selector__header">
          <div className="draft-selector__logo-wrap">
            <img
              src="/logo-folli-folletti-2.png"
              alt="Folli Folletti"
              className="draft-selector__logo"
            />
          </div>

          <span className="draft-selector__badge">Area Revisione & Scelta Bozze</span>

          <h1 className="draft-selector__title">
            Seleziona la Versione della Home
          </h1>
          <p className="draft-selector__subtitle">
            Confronta le tre proposte grafiche realizzate per il progetto. Una volta concordata la soluzione ideale con il cliente, la imposteremo come versione ufficiale.
          </p>
        </header>

        <div className="draft-selector__grid">
          
          {/* Card Versione 1 - Attuale Bosco Scuro */}
          <div
            className="draft-card draft-card--v1"
            onClick={() => onSelectVersion('v1')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectVersion('v1');
              }
            }}
          >
            <div className="draft-card__media">
              <span className="draft-card__tag draft-card__tag--v1">
                Versione 1 (Attuale)
              </span>
              <img
                src="/fondo3.jpg"
                alt="Anteprima Versione 1"
                className="draft-card__img"
                loading="eager"
              />
            </div>

            <div className="draft-card__body">
              <h2 className="draft-card__version-title">
                1. Bosco Magico & Illustrazioni
              </h2>
              <p className="draft-card__desc">
                Layout narrativo immersivo con tema bosco incantato scuro, animazioni grafiche dinamiche, altalena in movimento e sezioni integrate.
              </p>

              <ul className="draft-card__features">
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Hero panoramica illustrata con effetti luce</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Altalena con fatina in oscillazione continua</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Sezioni "Cosa Facciamo" e Filosofia</span>
                </li>
              </ul>

              <button
                type="button"
                className="draft-card__btn draft-card__btn--v1"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectVersion('v1');
                }}
              >
                <span>Visualizza Versione 1</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Card Versione 2 - Nuova Proposta Fondo Bianco */}
          <div
            className="draft-card draft-card--v2"
            onClick={() => onSelectVersion('v2')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectVersion('v2');
              }
            }}
          >
            <div className="draft-card__media draft-card__media--v2">
              <span className="draft-card__tag draft-card__tag--v2">
                Versione 2 (Fondo Bianco)
              </span>
              <img
                src="/cooperativa-sociale.png"
                alt="Anteprima Versione 2"
                className="draft-card__img draft-card__img--v2"
                loading="eager"
              />
            </div>

            <div className="draft-card__body">
              <h2 className="draft-card__version-title">
                2. Nuova Proposta (Fondo Bianco)
              </h2>
              <p className="draft-card__desc">
                Home pulita su sfondo bianco puro con illustrazione fiabesca in testata, logo fluido e carosello dei servizi con illustrazioni ai lati.
              </p>

              <ul className="draft-card__features">
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Hero slide su fondo bianco puro</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Logo fluttuante che scala verso la barra</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Carosello servizi con folletti ai lati</span>
                </li>
              </ul>

              <button
                type="button"
                className="draft-card__btn draft-card__btn--v2"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectVersion('v2');
                }}
              >
                <span>Visualizza Versione 2</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Card Versione 3 - Novità: Mosaico Desktop & Banner Vincent Mobile */}
          <div
            className="draft-card draft-card--v3"
            onClick={() => onSelectVersion('v3')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectVersion('v3');
              }
            }}
          >
            <div className="draft-card__media draft-card__media--v3">
              <span className="draft-card__tag draft-card__tag--v3">
                Versione 3 (Novità Vetrina Servizi) ✨
              </span>
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                alt="Anteprima Versione 3 - Vetrina Servizi"
                className="draft-card__img draft-card__img--v3"
                loading="eager"
              />
            </div>

            <div className="draft-card__body">
              <h2 className="draft-card__version-title">
                3. Vetrina Servizi (Mosaico & Banner)
              </h2>
              <p className="draft-card__desc">
                Obiettivo: far cadere subito l'attenzione sui 5 servizi. Mosaico a 5 tessere ad incastro su desktop e banner orizzontali stile Vincent Store su mobile.
              </p>

              <ul className="draft-card__features">
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Hero slide bosco cartoon con folletti</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Desktop: 5 box mosaico compatto a tutto spazio</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Mobile: banner orizzontali ad alto impatto</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Fondo bianco pulito + Modale dettagli al click</span>
                </li>
              </ul>

              <button
                type="button"
                className="draft-card__btn draft-card__btn--v3"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectVersion('v3');
                }}
              >
                <span>Visualizza Versione 3</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

        </div>

        <div className="draft-selector__footer-note">
          <span>💡</span>
          <span>Potrai sempre passare da una bozza all’altra in qualsiasi istante tramite la barra mobile in basso.</span>
        </div>
      </div>
    </div>
  );
}
