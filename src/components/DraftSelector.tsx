import React from 'react';
import './DraftSelector.css';

interface DraftSelectorProps {
  onSelectVersion: (version: 'v1' | 'v2') => void;
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
            Seleziona la versione della Home
          </h1>
          <p className="draft-selector__subtitle">
            Confronta le due proposte grafiche realizzate per il progetto. Una volta scelta la versione definitiva con il cliente, la imposteremo come Home ufficiale del sito.
          </p>
        </header>

        <div className="draft-selector__grid">
          {/* Card Versione 1 - Attuale */}
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
                Layout narrativo immersivo con tema bosco incantato, animazioni grafiche dinamiche, altalena in movimento e sezioni informative integrate.
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
                  <span>Sezioni "Cosa Facciamo" e Filosofia Educativa</span>
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

          {/* Card Versione 2 - Nuova Proposta (Pagina Bianca) */}
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
                Versione 2 (Nuova Proposta)
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
                Home pulita su sfondo bianco puro con la nuova illustrazione fiabesca e layout responsive con marginatura su mobile.
              </p>

              <ul className="draft-card__features">
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Hero slide su fondo bianco puro</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Mobile: dettagli grandi con marginatura a destra</span>
                </li>
                <li className="draft-card__feature-item">
                  <span className="draft-card__check">✓</span>
                  <span>Possibilità di passare istantaneamente tra le due</span>
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
        </div>

        <div className="draft-selector__footer-note">
          <span>💡</span>
          <span>Potrai sempre ritornare a questa schermata in qualsiasi momento tramite la barra in alto.</span>
        </div>
      </div>
    </div>
  );
}
