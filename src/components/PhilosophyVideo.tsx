import React from 'react';
import './PhilosophyVideo.css';

export const PhilosophyVideo: React.FC = () => {
  return (
    <section className="philosophy-section" id="filosofia">
      {/* Sfondo della sezione a sinistra a margine pagina con edera alta risoluzione */}
      <div className="philosophy-section-bg" aria-hidden="true">
        <img
          src="/foresta-fondo1.png?v=5"
          alt=""
          className="philosophy-section-bg-img"
          draggable={false}
        />
      </div>

      <div className="philosophy-container">
        {/* 1. Titolo filosofia in alto */}
        <div className="philosophy-header">
          <img
            src="/filosofia.png"
            alt="La Nostra Filosofia"
            className="philosophy-title-image"
            draggable={false}
          />
        </div>

        {/* 2. Poesia in corsivo subito sotto */}
        <div className="philosophy-content">
          <blockquote className="philosophy-poem">
            <p className="philosophy-poem-text">
              “C'era una volta, mi leggevano da bambina, una fata, una strega, un drago e un cavaliere. Grandi magie, principesse e pirati.<br />
              Poi son cresciuta e ho pensato che le fiabe fossero solo fantasia, ho perso le ali e gettato la bacchetta magica.<br /><br />
              Infine ho capito che c'è più verità in una fiaba che in un giornale, ho imparato che esistono i draghi ma anche i cavalieri valenti che li sconfiggono.<br />
              Ho ritrovato le ali per poter volare e una bacchetta magica per fare magie. Solo che non si vedono e hanno altri nomi.<br />
              Ma una volta che le trovi, quelle vere non le perdi più.”
            </p>
            <footer className="philosophy-signature">
              <span className="philosophy-signature-author">Simona Bare' Neigbors</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
