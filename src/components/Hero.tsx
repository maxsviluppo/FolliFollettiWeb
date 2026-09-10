import { DUST_PARTICLES, FIREFLIES } from '../constants/heroParticles';
import SlideFooterCut from './SlideFooterCut';
import './Hero.css';

const WELCOME_LETTERS = Array.from('WELCOME');
const SUBTITLE_LETTERS = Array.from('COOPERATIVA SOCIALE');

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Folli Folletti Home">
      <div className="hero__media">
        <img
          src="/fondo3.jpg"
          alt=""
          className="hero__image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__gradient" aria-hidden="true" />

        <div className="hero__rays" aria-hidden="true">
          <div className="hero__ray hero__ray--1" />
          <div className="hero__ray hero__ray--2" />
          <div className="hero__ray hero__ray--3" />
          <div className="hero__ray hero__ray--4" />
          <div className="hero__ray hero__ray--5" />
        </div>

        <div className="hero__particles" aria-hidden="true">
          {DUST_PARTICLES.map((p) => (
            <span
              key={p.id}
              className="hero__dust"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                ['--drift' as string]: `${p.drift}px`,
              }}
            />
          ))}
        </div>

        {/* Lucciole magiche con movimenti casuali e bagliore fatato */}
        <div className="hero__fireflies" aria-hidden="true">
          {FIREFLIES.map((f) => (
            <span
              key={f.id}
              className="hero__firefly"
              style={{
                left: `${f.left}%`,
                top: `${f.top}%`,
                width: `${f.size}px`,
                height: `${f.size}px`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.duration}s`,
                ['--tx1' as string]: `${f.tx1}px`,
                ['--ty1' as string]: `${f.ty1}px`,
                ['--tx2' as string]: `${f.tx2}px`,
                ['--ty2' as string]: `${f.ty2}px`,
                ['--tx3' as string]: `${f.tx3}px`,
                ['--ty3' as string]: `${f.ty3}px`,
              }}
            />
          ))}
        </div>

        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <div className="hero__glow hero__glow--2" aria-hidden="true" />
      </div>

      <div className="hero__content">
        {/* Scritta Welcome Cooperativa Sociale che appare lettera per lettera velocemente con scia di scintille luminose */}
        <div className="hero__header-badge">
          <div className="hero__welcome-title-wrap">
            <span className="hero__welcome-sparkle-trail" aria-hidden="true" />
            <h2 className="hero__welcome-title">
              {WELCOME_LETTERS.map((char, idx) => (
                <span
                  key={idx}
                  className="hero__char"
                  style={{ animationDelay: `${0.05 + idx * 0.035}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>
          </div>

          <div className="hero__coop-subtitle-wrap">
            <span className="hero__coop-sparkle-trail" aria-hidden="true" />
            <p className="hero__coop-subtitle">
              {SUBTITLE_LETTERS.map((char, idx) => (
                <span
                  key={idx}
                  className="hero__char"
                  style={{ animationDelay: `${0.32 + idx * 0.018}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="hero__logo-stage">
          <div className="hero__logo-ambient" aria-hidden="true" />

          {/* Altalena con fatina in oscillazione continua (loop), appesa sotto la O di 'folletti' al livello inferiore al logo */}
          <div className="hero__swing-wrap" aria-hidden="true">
            <img
              src="/altalena-tight.png"
              alt="Altalena Folli Folletti"
              className="hero__swing-img"
              loading="eager"
              decoding="async"
            />
          </div>

          <h1 className="hero__logo-title">
            <img
              src="/logo-folli-folletti-2.png"
              alt="Folli Folletti"
              className="hero__logo-img"
              fetchPriority="high"
            />
            <span className="sr-only">Folli Folletti</span>
          </h1>
        </div>
      </div>

      {/* Trilli flying on a leaf at the bottom-left margin */}
      <div className="hero__trilli-container" aria-hidden="true">
        {/* Leaf anchored to bottom-left margin */}
        <img
          src="/trilli-leaf-clean.png"
          alt=""
          className="hero__trilli-leaf"
        />

        {/* Hovering Fairy in suspension */}
        <div className="hero__trilli-fairy">
          {/* Wings with rhythmic flutter and pauses */}
          <img
            src="/trilli-wings-clean.png"
            alt=""
            className="hero__trilli-wings"
          />

          {/* Body and green dress */}
          <img
            src="/trilli-fairy-body.png"
            alt=""
            className="hero__trilli-body"
          />

          {/* Fairy dust sparks */}
          <div className="hero__trilli-sparks">
            <span className="hero__trilli-spark spark--1" />
            <span className="hero__trilli-spark spark--2" />
            <span className="hero__trilli-spark spark--3" />
            <span className="hero__trilli-spark spark--4" />
          </div>
        </div>
      </div>

      <SlideFooterCut />
    </section>
  );
}
