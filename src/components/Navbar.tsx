import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Attività', href: '#info' },
  { label: 'Esperienze', href: '#info' },
  { label: 'Chi siamo', href: '#info' },
  { label: 'Contatti', href: '#info' },
];

interface NavbarProps {
  currentPath?: 'home' | 'privacy' | 'cookies';
  onNavigateHome?: (hashTarget?: string) => void;
}

export default function Navbar({ currentPath = 'home', onNavigateHome }: NavbarProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel is above the viewport, the navbar is stuck to the top
        setIsStuck(entry.boundingClientRect.top <= 0 && !entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (currentPath !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <div ref={sentinelRef} className="navbar-sentinel" aria-hidden="true" />
      <header
        className={`navbar ${isStuck || currentPath !== 'home' ? 'navbar--stuck' : ''}`}
        role="banner"
      >
        <div className="navbar__inner">
          <a
            href="#home"
            onClick={handleLinkClick('#home')}
            className="navbar__logo"
            aria-label="Folli Folletti Home"
          >
            <img
              src="/logosemplice.png"
              alt="Folli Folletti"
              className="navbar__logo-img"
            />
          </a>

          <nav className="navbar__nav" aria-label="Principale">
            <ul className="navbar__list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick(link.href)}
                    className="navbar__link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className={`navbar__menu-btn ${mobileOpen ? 'is-active' : ''}`}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <img
                src="/favicon.png"
                alt=""
                className="navbar__menu-favicon"
              />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="navbar__mobile-drawer" role="dialog" aria-label="Menu Mobile">
            <ul className="navbar__mobile-list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={(e) => {
                      handleLinkClick(link.href)(e);
                      setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
