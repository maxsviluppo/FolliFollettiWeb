'use client';

import Link from 'next/link';
import { SERVICE_CATEGORIES, type ServiceCategorySlug } from '@/constants/service-categories';
import { NavContattaciButton, NavPhoneButton } from './SiteMarketingHeader';
import './HomeV3.css';

type ServiceSiteHeaderProps = {
  activeSlug?: ServiceCategorySlug;
};

export default function ServiceSiteHeader({ activeSlug }: ServiceSiteHeaderProps) {
  return (
    <header className="home-v3__navbar home-v3__navbar--scrolled service-site-header" role="banner">
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
          <NavContattaciButton />
        </div>
      </div>

      <div
        className="home-v3__categories-bar home-v3__categories-bar--visible service-site-header__categories"
        role="navigation"
        aria-label="Categorie Servizi"
      >
        <div className="home-v3__categories-container">
          <div className="home-v3__categories-nav">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className={
                  'home-v3__category-btn' +
                  (activeSlug === cat.slug ? ' home-v3__category-btn--active' : '')
                }
                title={`Vai a ${cat.name}`}
                aria-current={activeSlug === cat.slug ? 'page' : undefined}
              >
                <span className="home-v3__cat-text">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
