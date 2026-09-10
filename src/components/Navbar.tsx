import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

export interface SubService {
  id: number;
  label: string;
  category: string;
  href: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  subItems?: SubService[];
}

export const NAV_SERVICES: SubService[] = [
  { id: 1, label: 'Ludoteca', category: 'Spazio & Gioco', href: '#service-1' },
  { id: 2, label: 'Educativa', category: 'Crescita & Sviluppo', href: '#service-2' },
  { id: 3, label: 'Campus (estivi e invernali)', category: 'Esperienze & Vacanze', href: '#service-3' },
  { id: 4, label: 'Tutoraggio Bes e DSA', category: 'Apprendimento & Metodo', href: '#service-4' },
  { id: 5, label: 'Consulenze psicologiche', category: 'Benessere & Ascolto', href: '#service-5' },
];

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home' },
  {
    label: 'Servizi',
    href: '#info',
    subItems: NAV_SERVICES,
  },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const checkStuck = () => {
      if (!sentinelRef.current) return;
      const rect = sentinelRef.current.getBoundingClientRect();
      setIsStuck(rect.top <= 0);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(entry.boundingClientRect.top <= 0 && !entry.isIntersecting);
      },
      { threshold: [0, 1] }
    );

    observer.observe(sentinel);
    window.addEventListener('scroll', checkStuck, { passive: true });
    checkStuck();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkStuck);
    };
  }, []);

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    setDesktopDropdownOpen(false);
    if (currentPath !== 'home' && onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href);
      setMobileOpen(false);
    } else if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  const handleSubServiceClick = (service: SubService) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    setDesktopDropdownOpen(false);

    if (currentPath !== 'home' && onNavigateHome) {
      onNavigateHome('#info');
    } else {
      const infoEl = document.querySelector('#info');
      if (infoEl) {
        infoEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Scroll to the specific card in InfoCards
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('folli:select-service', { detail: { serviceId: service.id } })
      );
    }, 120);
  };

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 180);
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
              width="170"
              height="44"
              loading="eager"
              decoding="async"
            />
          </a>

          <nav className="navbar__nav" aria-label="Principale">
            <ul className="navbar__list">
              {NAV_LINKS.map((link) => {
                const hasSub = !!link.subItems;

                if (hasSub) {
                  return (
                    <li
                      key={link.label}
                      className={`navbar__item navbar__item--has-dropdown ${
                        desktopDropdownOpen ? 'is-dropdown-open' : ''
                      }`}
                      onMouseEnter={handleMouseEnterDropdown}
                      onMouseLeave={handleMouseLeaveDropdown}
                    >
                      <a
                        href={link.href}
                        onClick={handleLinkClick(link.href)}
                        className="navbar__link navbar__link--dropdown-trigger"
                        aria-expanded={desktopDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span className="navbar__link-text">{link.label}</span>
                        <svg
                          className="navbar__chevron"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </a>

                      {/* Menu a discesa per i 5 servizi */}
                      <div
                        className={`navbar__dropdown ${
                          desktopDropdownOpen ? 'is-visible' : ''
                        }`}
                        role="menu"
                        aria-label="Sottocategorie Servizi"
                      >
                        <div className="navbar__dropdown-header">
                          <span className="navbar__dropdown-eyebrow">I Nostri Servizi</span>
                        </div>
                        <ul className="navbar__dropdown-list">
                          {link.subItems?.map((sub) => (
                            <li key={sub.id} role="none">
                              <a
                                href={sub.href}
                                onClick={handleSubServiceClick(sub)}
                                className="navbar__dropdown-item"
                                role="menuitem"
                              >
                                <span className="navbar__dropdown-dot" aria-hidden="true" />
                                <div className="navbar__dropdown-content">
                                  <span className="navbar__dropdown-title">{sub.label}</span>
                                  <span className="navbar__dropdown-cat">{sub.category}</span>
                                </div>
                                <svg
                                  className="navbar__dropdown-arrow"
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="M9 18l6-6-6-6" />
                                </svg>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.label} className="navbar__item">
                    <a
                      href={link.href}
                      onClick={handleLinkClick(link.href)}
                      className="navbar__link"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
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
                width="28"
                height="28"
              />
            </button>
          </div>
        </div>

        {/* Menu Mobile con sottocategoria Servizi */}
        {mobileOpen && (
          <div className="navbar__mobile-drawer" role="dialog" aria-label="Menu Mobile">
            <ul className="navbar__mobile-list">
              {NAV_LINKS.map((link) => {
                if (link.subItems) {
                  return (
                    <li key={link.label} className="navbar__mobile-item--has-sub">
                      <div className="navbar__mobile-sub-header">
                        <a
                          href={link.href}
                          className="navbar__mobile-link navbar__mobile-link--main"
                          onClick={(e) => {
                            handleLinkClick(link.href)(e);
                            setMobileOpen(false);
                          }}
                        >
                          {link.label}
                        </a>
                        <button
                          type="button"
                          className={`navbar__mobile-toggle-btn ${
                            mobileServicesOpen ? 'is-expanded' : ''
                          }`}
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          aria-label="Mostra sottocategorie"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                      </div>

                      {/* 5 Sottocategorie Servizi su Mobile */}
                      {mobileServicesOpen && (
                        <ul className="navbar__mobile-sublist">
                          {link.subItems.map((sub) => (
                            <li key={sub.id}>
                              <a
                                href={sub.href}
                                className="navbar__mobile-sublink"
                                onClick={handleSubServiceClick(sub)}
                              >
                                <span className="navbar__mobile-sub-dot" aria-hidden="true" />
                                <div className="navbar__mobile-sub-info">
                                  <span className="navbar__mobile-sub-title">{sub.label}</span>
                                  <span className="navbar__mobile-sub-cat">{sub.category}</span>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
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
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
