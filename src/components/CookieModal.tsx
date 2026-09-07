import { useState } from 'react';
import './CookieModal.css';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: 'home' | 'privacy' | 'cookies') => void;
}

export default function CookieModal({ isOpen, onClose, onNavigate }: CookieModalProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  if (!isOpen) return null;

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('folli_folletti_cookie_consent', 'all');
    } catch {
      // ignore
    }
    onClose();
  };

  const handleNecessaryOnly = () => {
    try {
      localStorage.setItem('folli_folletti_cookie_consent', 'necessary');
    } catch {
      // ignore
    }
    onClose();
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem(
        'folli_folletti_cookie_consent',
        analyticsAllowed ? 'all' : 'necessary'
      );
    } catch {
      // ignore
    }
    onClose();
  };

  return (
    <div
      className="cookie-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-modal-title"
    >
      <div className="cookie-modal">
        <div className="cookie-modal__header">
          <div className="cookie-modal__icon-wrap">
            <img src="/favicon.png" alt="" className="cookie-modal__icon" />
          </div>
          <h3 id="cookie-modal-title" className="cookie-modal__title">
            Informativa sui Cookie
          </h3>
        </div>

        <p className="cookie-modal__desc">
          Utilizziamo cookie tecnici per assicurare il corretto funzionamento del sito e, previo tuo consenso,
          cookie analitici anonimizzati per comprendere come viene utilizzato. Puoi accettare tutte le funzionalità,
          proseguire solo con i cookie necessari o gestire le tue preferenze.
        </p>

        <div className="cookie-modal__links">
          <button
            type="button"
            onClick={() => {
              onNavigate('cookies');
            }}
            className="cookie-modal__link-btn"
          >
            Consulta la Cookie Policy
          </button>
          <span style={{ opacity: 0.35 }}>•</span>
          <button
            type="button"
            onClick={() => {
              onNavigate('privacy');
            }}
            className="cookie-modal__link-btn"
          >
            Informativa Privacy
          </button>
        </div>

        {showCustom && (
          <div className="cookie-modal__custom-section">
            <div className="cookie-modal__toggle-row">
              <div className="cookie-modal__toggle-label">
                <strong>Cookie Tecnici e di Sistema</strong>
                <span>Indispensabili per navigazione, font e sicurezza.</span>
              </div>
              <span className="cookie-modal__badge-required">Sempre attivi</span>
            </div>

            <div className="cookie-modal__toggle-row" style={{ marginTop: '0.35rem' }}>
              <div className="cookie-modal__toggle-label">
                <strong>Cookie Analitici Anonimizzati</strong>
                <span>Statistiche aggregate con mascheramento IP.</span>
              </div>
              <input
                type="checkbox"
                checked={analyticsAllowed}
                onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                style={{ width: '18px', height: '18px', accentColor: '#6aab3a', cursor: 'pointer' }}
                aria-label="Attiva cookie analitici anonimizzati"
              />
            </div>
          </div>
        )}

        <div className="cookie-modal__actions">
          {!showCustom ? (
            <>
              <button
                type="button"
                onClick={() => setShowCustom(true)}
                className="cookie-modal__btn cookie-modal__btn--customize"
              >
                Personalizza
              </button>
              <button
                type="button"
                onClick={handleNecessaryOnly}
                className="cookie-modal__btn cookie-modal__btn--necessary"
              >
                Solo necessari
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="cookie-modal__btn cookie-modal__btn--accept"
              >
                Accetta tutti
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setShowCustom(false)}
                className="cookie-modal__btn cookie-modal__btn--customize"
              >
                Chiudi opzioni
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="cookie-modal__btn cookie-modal__btn--accept"
              >
                Salva preferenze
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
