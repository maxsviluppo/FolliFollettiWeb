import React from 'react';
import './PhilosophyV2.css';

export const PhilosophyV2: React.FC = () => {
  return (
    <section className="philosophy-v2" id="filosofia" aria-labelledby="philosophy-v2-heading">
      <div className="philosophy-v2__container">
        {/* Contenuto di Testo (Titolo e Poesia) */}
        <div className="philosophy-v2__left-content">
          <div className="philosophy-v2__header">
            <img
              id="philosophy-v2-heading"
              src="/filosofia.png"
              alt="La Nostra Filosofia"
              className="philosophy-v2__title-img"
              draggable={false}
            />
          </div>

          <div className="philosophy-v2__body">
            {/* Illustrazione SOLO per mobile: float a destra, mezza fuori con testo a contorno */}
            <div className="philosophy-v2__art-float" aria-hidden="true">
              <img
                src="/follettastesa-cropped.png"
                alt="Folletta stesa sui quadrifogli"
                className="philosophy-v2__art-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <blockquote className="philosophy-v2__poem">
              <p className="philosophy-v2__poem-paragraph">
                “C'era una volta, mi leggevano da bambina, una fata, una strega, un drago e un cavaliere. Grandi magie, principesse e pirati.
              </p>
              <p className="philosophy-v2__poem-paragraph">
                Poi son cresciuta e ho pensato che le fiabe fossero solo fantasia, ho perso le ali e gettato la bacchetta magica.
              </p>
              <p className="philosophy-v2__poem-paragraph">
                Infine ho capito che c'è più verità in una fiaba che in un giornale, ho imparato che esistono i draghi ma anche i cavalieri valenti che li sconfiggono.”
              </p>
              <footer className="philosophy-v2__signature">
                <span className="philosophy-v2__signature-author">— Simona Bare' Neigbors</span>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* LATO DESTRO PER DESKTOP: Illustrazione follettastesa.png nella sua colonna dedicata */}
        <div className="philosophy-v2__right-art">
          <div className="philosophy-v2__art-wrapper">
            <img
              src="/follettastesa-cropped.png"
              alt="Folletta stesa sul prato di quadrifogli"
              className="philosophy-v2__art-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyV2;
