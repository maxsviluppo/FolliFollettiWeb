import React, { useState } from 'react';
import './RequestSectionV2.css';

export const RequestSectionV2: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ludoteca',
    message: '',
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.privacy) return;

    setLoading(true);

    // Preparazione email diretta verso info@follifolletti.it
    const subject = encodeURIComponent(`Richiesta informazioni da ${formData.name} - ${formData.service.toUpperCase()}`);
    const body = encodeURIComponent(
      `Nuova richiesta ricevuta dal sito:\n\n` +
      `Nome e Cognome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefono: ${formData.phone || 'Non specificato'}\n` +
      `Servizio: ${formData.service}\n\n` +
      `Messaggio:\n${formData.message || 'Nessun messaggio aggiuntivo'}\n`
    );

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Apriamo il client di posta per inviare a info@follifolletti.it
      window.location.href = `mailto:info@follifolletti.it?subject=${subject}&body=${body}`;
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'ludoteca',
      message: '',
      privacy: false,
    });
  };

  return (
    <section className="request-v2" id="richiesta" aria-labelledby="request-v2-heading">
      <div className="request-v2__container">
        {/* LATO SINISTRO: Illustrazione ingrandita camion.png con i folletti */}
        <div className="request-v2__left-art">
          <div className="request-v2__art-wrapper">
            <img
              src="/camion-cropped.png"
              alt="Il furgoncino di Folli Folletti con i simpatici folletti"
              className="request-v2__art-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* LATO DESTRO: Modulo di Richiesta collegato a info@follifolletti.it */}
        <div className="request-v2__right-content">
          {/* Scheda del Modulo di Richiesta */}
          <div className="request-v2__card">
            {submitted ? (
              <div className="request-v2__success-state">
                <div className="request-v2__success-icon" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="request-v2__success-title">Richiesta Inviata con Successo!</h3>
                <p className="request-v2__success-text">
                  Grazie <strong>{formData.name}</strong>, il tuo messaggio è stato recapitato a <strong>info@follifolletti.it</strong>. Ti risponderemo nel più breve tempo possibile.
                </p>
                <button
                  type="button"
                  className="request-v2__reset-btn"
                  onClick={handleReset}
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form className="request-v2__form" onSubmit={handleSubmit}>
                <div className="request-v2__form-header">
                  <div className="request-v2__email-badge">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>Ricezione messaggi: </span>
                    <a href="mailto:info@follifolletti.it" className="request-v2__email-link">
                      info@follifolletti.it
                    </a>
                  </div>

                  <h3 id="request-v2-heading" className="request-v2__form-title">
                    Modulo di Richiesta & Informazioni
                  </h3>
                  <p className="request-v2__form-subtitle">
                    Inviaci un messaggio per disponibilità, iscrizioni o informazioni sui nostri servizi. Riceviamo e rispondiamo a: <strong>info@follifolletti.it</strong>
                  </p>
                </div>

                <div className="request-v2__form-grid">
                  {/* Nome e Cognome */}
                  <div className="request-v2__field">
                    <label htmlFor="req-name" className="request-v2__label">
                      Nome e Cognome *
                    </label>
                    <input
                      id="req-name"
                      type="text"
                      required
                      placeholder="es. Mario Rossi"
                      className="request-v2__input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Telefono */}
                  <div className="request-v2__field">
                    <label htmlFor="req-phone" className="request-v2__label">
                      Telefono / WhatsApp
                    </label>
                    <input
                      id="req-phone"
                      type="tel"
                      placeholder="es. 333 1234567"
                      className="request-v2__input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="request-v2__field request-v2__field--full">
                    <label htmlFor="req-email" className="request-v2__label">
                      Email *
                    </label>
                    <input
                      id="req-email"
                      type="email"
                      required
                      placeholder="es. mario.rossi@email.it"
                      className="request-v2__input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Servizio di Interesse */}
                  <div className="request-v2__field request-v2__field--full">
                    <label htmlFor="req-service" className="request-v2__label">
                      Servizio di Interesse
                    </label>
                    <select
                      id="req-service"
                      className="request-v2__select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="ludoteca">Ludoteca & Feste</option>
                      <option value="educativa">Educativa & Percorsi di Crescita</option>
                      <option value="campus">Campus Estivi e Invernali</option>
                      <option value="tutoraggio">Tutoraggio BES e DSA</option>
                      <option value="consulenze">Consulenze Psicologiche e Famiglia</option>
                      <option value="altro">Altre informazioni o collaborazioni</option>
                    </select>
                  </div>

                  {/* Messaggio */}
                  <div className="request-v2__field request-v2__field--full">
                    <label htmlFor="req-message" className="request-v2__label">
                      Messaggio o Domanda
                    </label>
                    <textarea
                      id="req-message"
                      rows={3}
                      placeholder="Scrivi qui cosa vorresti sapere (età del bambino, giorni preferiti, ecc.)..."
                      className="request-v2__textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Consenso Privacy */}
                  <div className="request-v2__privacy-field request-v2__field--full">
                    <label className="request-v2__checkbox-label">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="request-v2__checkbox"
                      />
                      <span>
                        Ho letto e accetto l'<a href="#privacy" className="request-v2__privacy-link">Informativa sulla Privacy</a>.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="request-v2__action">
                  <button
                    type="submit"
                    disabled={loading}
                    className="request-v2__submit-btn"
                  >
                    {loading ? 'Invio in corso...' : 'Invia Richiesta'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestSectionV2;
