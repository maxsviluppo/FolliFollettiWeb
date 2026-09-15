import { useEffect, useState, useRef } from 'react';
import Navbar from './Navbar';
import ServicesCarouselV2 from './ServicesCarouselV2';
import PhilosophyV2 from './PhilosophyV2';
import RequestSectionV2 from './RequestSectionV2';
import Footer from './Footer';
import './HomeV2.css';

const SUBTITLE_LETTERS = Array.from('COOPERATIVA SOCIALE');

interface HomeV2Props {
  onNavigate?: (page: 'home' | 'privacy' | 'cookies', hash?: string) => void;
}

export default function HomeV2({ onNavigate }: HomeV2Props) {
  // Tracciamo il fattore di scroll per animare e rimpicciolire il logo verso la navbar
  const [scrollProgress, setScrollProgress] = useState(0);
  // Rileviamo quando la navbar tocca la cima dello schermo per fissarla e mostrare la barra bianca
  const [isNavFixedAtTop, setIsNavFixedAtTop] = useState(false);
  const navSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 900;

      // Calcoliamo la distanza di transizione per il rimpicciolimento del logo verso la navbar
      const sentinel = navSentinelRef.current;
      const targetDistance = isMobile
        ? 220
        : (sentinel ? Math.max(sentinel.offsetTop - 76, 260) : 320);

      // Il logo si rimpicciolisce progressivamente durante la transizione verso la navbar
      const progress = Math.min(Math.max(scrollY / targetDistance, 0), 1);
      setScrollProgress(progress);

      if (isMobile) {
        setIsNavFixedAtTop(progress >= 1);
      } else if (sentinel) {
        const rect = sentinel.getBoundingClientRect();
        // Su desktop, quando la barra tocca o supera il top (<= 0), è fissata con sfondo bianco
        setIsNavFixedAtTop(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateHome = (target?: string) => {
    if (target && target.startsWith('#')) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v2-clean">
      {/* 
        Logo Fluttuante Unico Dinamico:
        - In cima alla pagina (scroll = 0): è grande, in alto a sinistra e si sovrappone all'immagine fino alla lettera 'e'.
        - Con lo scroll verso il basso: si rimpicciolisce in modo fluido e si posiziona con precisione in alto a sinistra della barra menu.
        - Quando la barra tocca il top (isNavFixedAtTop = true): il logo resta fisso in cima integrato nella barra bianca al 100%.
      */}
      <div
        className={`home-v2__floating-logo-stage ${
          isNavFixedAtTop ? 'is-fixed-in-navbar' : ''
        }`}
        style={{
          ['--scroll-p' as string]: scrollProgress,
        }}
        aria-label="Folli Folletti Logo"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateHome('#home');
          }}
          className="home-v2__floating-logo-link"
        >
          <img
            src="/logo-folli-folletti-quadrifoglio.png"
            alt="Folli Folletti"
            className="home-v2__floating-logo-img"
            fetchPriority="high"
          />
        </a>

        {/* Sottotitolo COOPERATIVA SOCIALE sotto al logo grande che scivola e sfuma con lo scroll */}
        <div className="home-v2__logo-subtitles" aria-hidden="true">
          <span className="home-v2__coop-word">
            {SUBTITLE_LETTERS.map((char, idx) => (
              <span
                key={idx}
                className="hero__char"
                style={{ animationDelay: `${0.08 + idx * 0.022}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Hero Section della Bozza 2 */}
      <section id="home" className="hero-v2" aria-label="Folli Folletti - Cooperativa Sociale">
        <div className="hero-v2__stage">
          {/* Immagine ingrandita e nitida in secondo piano con farfalla animata Image-1.gif sul fiore */}
          <div className="hero-v2__image-wrap">
            <img
              src="/cooperativa-sociale-cropped.png"
              alt="Folli Folletti - Cooperativa Sociale"
              className="hero-v2__image"
              fetchPriority="high"
              decoding="async"
            />

            {/* Farfalla animata Image-1.gif posizionata sul fiore in basso a sinistra (sopra la metà) */}
            <div className="hero-v2__butterfly" aria-hidden="true">
              <img
                src="/Image-1.gif"
                alt="Farfalla blu animata sul fiore"
                className="hero-v2__butterfly-img"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 
        Barra bianca del menu top:
        - Sentinel e ancoraggio fisso per bloccare il menu al top dello schermo quando arrivano le categorie
        - Resta stabilmente fissa (.is-fixed-white-bar) con barra bianca solida
      */}
      <div ref={navSentinelRef} className="home-v2__navbar-anchor">
        <div
          className={`home-v2__navbar-container ${
            isNavFixedAtTop ? 'is-fixed-white-bar' : ''
          }`}
        >
          <Navbar
            currentPath="home"
            onNavigateHome={handleNavigateHome}
            logoSrc="/logo-folli-folletti-quadrifoglio.png"
            isAlwaysWhite={true}
          />
        </div>
      </div>

      {/* 
        Sezioni successive:
        1. I Nostri Servizi (folliappesi.png a sinistra, carosello a destra)
        2. La Nostra Filosofia (testo a sinistra, follettastesa.png a destra)
        3. Modulo di Richiesta & Informazioni (camion.png a sinistra, frase e form a destra)
      */}
      <main className="home-v2__main-content">
        <ServicesCarouselV2 />
        <PhilosophyV2 />
        <RequestSectionV2 />
      </main>

      {/* Footer identico alla Bozza 1 */}
      <Footer
        onNavigate={(page) => onNavigate && onNavigate(page)}
        onOpenCookieSettings={() => {
          window.dispatchEvent(new CustomEvent('folli:open-cookie-settings'));
        }}
      />
    </div>
  );
}
