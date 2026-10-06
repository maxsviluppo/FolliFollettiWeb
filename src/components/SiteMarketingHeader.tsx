'use client';

import Link from 'next/link';
import './HomeV3.css';

type SiteMarketingHeaderProps = {
  /** Home: barra categorie gestita dal parent. Contattaci: solo nav compatta. */
  variant?: 'home' | 'contattaci';
  isNavbarScrolled?: boolean;
  categoriesBar?: React.ReactNode;
  contattaciActive?: boolean;
};

export function NavPhoneButton() {
  return (
    <a href="tel:0815921176" className="home-v3__nav-call-btn home-v3__nav-call-btn--green" title="Chiama Folli Folletti">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span>081 5921176</span>
    </a>
  );
}

export function NavContattaciButton({ active }: { active?: boolean }) {
  if (active) {
    return (
      <span className="home-v3__nav-cta-btn home-v3__nav-cta-btn--current" aria-current="page">
        Contattaci
      </span>
    );
  }
  return (
    <Link href="/contattaci" className="home-v3__nav-cta-btn home-v3__nav-cta-btn--link">
      Contattaci
    </Link>
  );
}

export default function SiteMarketingHeader({
  variant = 'home',
  isNavbarScrolled = true,
  categoriesBar,
  contattaciActive = false,
}: SiteMarketingHeaderProps) {
  const navClass =
    variant === 'home'
      ? `home-v3__navbar ${isNavbarScrolled ? 'home-v3__navbar--scrolled' : 'home-v3__navbar--transparent'}`
      : 'home-v3__navbar home-v3__navbar--scrolled contattaci-page__header';

  return (
    <header className={navClass} role="banner">
      <div className="home-v3__navbar-container">
        <Link href="/" className="home-v3__nav-logo-link">
          <img
            src="/logo-folli-folletti-quadrifoglio.png"
            alt="Folli Folletti Cooperativa Sociale"
            className="home-v3__nav-logo-img"
            width={160}
            height={50}
          />
        </Link>

        <div className="home-v3__nav-actions home-v3__nav-actions--end">
          <NavPhoneButton />
          <NavContattaciButton active={contattaciActive || variant === 'contattaci'} />
        </div>
      </div>
      {categoriesBar}
    </header>
  );
}
