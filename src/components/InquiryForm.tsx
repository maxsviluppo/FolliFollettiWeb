'use client';

import React, { useState } from 'react';

export type InquiryServiceOption =
  | 'Ludoteca'
  | 'Educativa'
  | 'Campus'
  | 'Tutoraggio'
  | 'Psicologia';

const SERVICE_OPTIONS: { value: InquiryServiceOption; label: string }[] = [
  { value: 'Ludoteca', label: '1. Ludoteca (Spazio & Gioco)' },
  { value: 'Educativa', label: '2. Educativa Territoriale (6-18 anni)' },
  { value: 'Campus', label: '3. Campus Estivi e Invernali' },
  { value: 'Tutoraggio', label: '4. Tutoraggio BES e DSA' },
  { value: 'Psicologia', label: '5. Spazio Ascolto e Consulenze' },
];

type InquiryFormProps = {
  idPrefix?: string;
  initialServizio?: InquiryServiceOption;
  title?: string;
};

export default function InquiryForm({
  idPrefix = 'inq',
  initialServizio = 'Ludoteca',
  title = 'Richiedi informazioni',
}: InquiryFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    servizio: initialServizio,
    messaggio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <div className="home-v3__form-success">
        <div className="home-v3__success-icon">✓</div>
        <h3>Richiesta inviata con successo!</h3>
        <p>Grazie per averci contattato. Una nostra educatrice ti risponderà al più presto.</p>
        <button type="button" className="home-v3__form-btn" onClick={() => setFormSubmitted(false)}>
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form className="home-v3__form" onSubmit={handleSubmit}>
      <h3 className="home-v3__form-title">{title}</h3>

      <div className="home-v3__field-group">
        <label htmlFor={`${idPrefix}-nome`}>Nome e Cognome *</label>
        <input
          id={`${idPrefix}-nome`}
          type="text"
          required
          placeholder="Es. Maria Rossi"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>

      <div className="home-v3__fields-row">
        <div className="home-v3__field-group">
          <label htmlFor={`${idPrefix}-tel`}>Telefono *</label>
          <input
            id={`${idPrefix}-tel`}
            type="tel"
            required
            placeholder="Es. 333 1234567"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
          />
        </div>

        <div className="home-v3__field-group">
          <label htmlFor={`${idPrefix}-servizio`}>Servizio di interesse</label>
          <select
            id={`${idPrefix}-servizio`}
            value={formData.servizio}
            onChange={(e) =>
              setFormData({ ...formData, servizio: e.target.value as InquiryServiceOption })
            }
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="home-v3__field-group">
        <label htmlFor={`${idPrefix}-msg`}>Messaggio o note</label>
        <textarea
          id={`${idPrefix}-msg`}
          rows={3}
          placeholder="Raccontaci brevemente di cosa hai bisogno..."
          value={formData.messaggio}
          onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
        />
      </div>

      <button type="submit" className="home-v3__form-btn">
        <span>Invia richiesta</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
