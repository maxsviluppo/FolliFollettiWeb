import { useState, type FormEvent } from 'react';
import './Footer.css';

interface FooterProps {
  onNavigate?: (page: 'home' | 'privacy' | 'cookies') => void;
  onOpenCookieSettings?: () => void;
}

export default function Footer({ onNavigate, onOpenCookieSettings }: FooterProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubscribed(true);
  };

  const handleLinkClick = (page: 'home' | 'privacy' | 'cookies', hashTarget?: string) => (e: React.MouseEvent) => {
    if (page === 'privacy') {
      e.preventDefault();
      window.location.hash = '#privacy';
      if (onNavigate) onNavigate('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'cookies') {
      e.preventDefault();
      window.location.hash = '#cookies';
      if (onNavigate) onNavigate('cookies');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (onNavigate) {
      onNavigate('home');
    }
    if (hashTarget) {
      // If we are navigating to an anchor in home
      if (window.location.hash === '#privacy' || window.location.hash === '#cookies') {
        window.location.hash = hashTarget;
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Column 1: Brand & Description */}
          <div className="footer__col footer__col--brand">
            <a
              href="#home"
              onClick={handleLinkClick('home', '#home')}
              className="footer__logo-link"
              aria-label="Folli Folletti Home"
            >
              <img
                src="/logosemplice.png"
                alt="Folli Folletti"
                className="footer__logo-img"
              />
            </a>
            <p className="footer__brand-desc">
              Spazio educativo e ricreativo per la crescita, il gioco e il benessere di bambini,
              ragazzi e famiglie. Fusione di esperienza pedagogica, scuola e animazione in rete a Napoli.
            </p>
            <div className="footer__brand-badges">
              <span className="footer__badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Comune di Napoli
              </span>
              <span className="footer__badge">Prima Infanzia</span>
              <span className="footer__badge">Educative Territoriali 6-18</span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="footer__col footer__col--sitemap">
            <h3 className="footer__col-title">Sitemap</h3>
            <ul className="footer__links-list">
              <li>
                <a href="#home" onClick={handleLinkClick('home', '#home')} className="footer__link">
                  Home
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  I Nostri Servizi
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  Ludoteca Autorizzata
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  Educativa Territoriale
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  Campus Estivi e Invernali
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  Tutoraggio BES e DSA
                </a>
              </li>
              <li>
                <a href="#info" onClick={handleLinkClick('home', '#info')} className="footer__link">
                  Consulenze Psicologiche
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contatti */}
          <div className="footer__col footer__col--contacts">
            <h3 className="footer__col-title">Contatti</h3>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <svg className="footer__contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Via Saverio Gatto, 21<br />80131 Napoli (NA)</span>
              </div>
              <div className="footer__contact-item">
                <svg className="footer__contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <a href="tel:0815921176" className="footer__contact-link">081 5921176</a><br />
                  <a href="tel:3455964494" className="footer__contact-link">345 5964494</a> / <a href="tel:3483142381" className="footer__contact-link">348 3142381</a>
                </div>
              </div>
              <div className="footer__contact-item">
                <svg className="footer__contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:info@follifolletti.it" className="footer__contact-link">
                  info@follifolletti.it
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer__col footer__col--newsletter">
            <h3 className="footer__col-title">Newsletter</h3>
            <p className="footer__newsletter-desc">
              Resta sempre aggiornato su nuove attività educative, campus estivi, laboratori ed eventi speciali.
            </p>

            {subscribed ? (
              <div className="footer__newsletter-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Grazie! Ti sei iscritto con successo alla newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer__newsletter-form">
                <div className="footer__input-wrap">
                  <input
                    type="email"
                    required
                    placeholder="La tua email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="footer__email-input"
                    aria-label="Indirizzo email per newsletter"
                  />
                  <button type="submit" className="footer__submit-btn">
                    Iscriviti
                  </button>
                </div>

                <label className="footer__consent">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="footer__consent-checkbox"
                  />
                  <span>
                    Dichiaro di aver letto la{' '}
                    <a
                      href="#privacy"
                      onClick={handleLinkClick('privacy')}
                    >
                      Privacy Policy
                    </a>{' '}
                    e acconsento al trattamento dei dati per la ricezione della newsletter.
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links, Webagency codecafe.it */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Folli Folletti - Cooperativa Sociale. Tutti i diritti riservati.
          </p>

          <ul className="footer__legal-links">
            <li>
              <a
                href="#privacy"
                onClick={handleLinkClick('privacy')}
                className="footer__legal-link"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <span style={{ opacity: 0.35 }}>•</span>
            </li>
            <li>
              <a
                href="#cookies"
                onClick={handleLinkClick('cookies')}
                className="footer__legal-link"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <span style={{ opacity: 0.35 }}>•</span>
            </li>
            <li>
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="footer__legal-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
              >
                Impostazioni Cookie
              </button>
            </li>
          </ul>

          <p className="footer__credit">
            Creato da{' '}
            <a
              href="https://codecafe.it"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit-link"
              title="Visita codecafe.it"
            >
              codecafe.it
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
