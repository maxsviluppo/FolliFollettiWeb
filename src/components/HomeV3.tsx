'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroV3 from './HeroV3';
import ServicesMosaicV3 from './ServicesMosaicV3';
import Footer from './Footer';
import SiteMarketingHeader from './SiteMarketingHeader';
import { SERVICE_CATEGORIES } from '@/constants/service-categories';
import './HomeV3.css';

interface HomeV3Props {
  onNavigate?: (page: 'home' | 'privacy' | 'cookies', hash?: string) => void;
  onOpenCookieSettings?: () => void;
  onGoContattaci?: (serviceSlug?: string) => void;
}

export default function HomeV3({ onNavigate, onOpenCookieSettings, onGoContattaci }: HomeV3Props) {
  const [showCategoriesBar, setShowCategoriesBar] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.pageYOffset || document.documentElement.scrollTop;
    let upDistance = 0;
    let downDistance = 0;

    const onScroll = () => {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const diff = y - lastY;

      setIsNavbarScrolled(y > 30);

      if (y < 80) {
        setShowCategoriesBar(false);
        upDistance = 0;
        downDistance = 0;
      } else if (diff > 0) {
        upDistance = 0;
        downDistance += diff;
        if (downDistance >= 8) {
          setShowCategoriesBar(true);
        }
      } else if (diff < 0) {
        downDistance = 0;
        upDistance += Math.abs(diff);
        if (upDistance >= 10) {
          setShowCategoriesBar(false);
        }
      }

      lastY = y <= 0 ? 0 : y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categoriesBar = (
    <div
      className={`home-v3__categories-bar ${showCategoriesBar ? 'home-v3__categories-bar--visible' : ''}`}
      role="navigation"
      aria-label="Categorie Servizi"
    >
      <div className="home-v3__categories-container">
        <div className="home-v3__categories-nav">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="home-v3__category-btn"
              title={`Vai al servizio ${cat.name}`}
            >
              <span className="home-v3__cat-text">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="home-v3-root">
      <SiteMarketingHeader
        variant="home"
        isNavbarScrolled={isNavbarScrolled}
        categoriesBar={categoriesBar}
      />

      <HeroV3 />

      <ServicesMosaicV3 onOpenContactForm={(slug) => onGoContattaci?.(slug)} />

      <Footer
        onNavigate={(page, hash) => onNavigate?.(page, hash)}
        onOpenCookieSettings={onOpenCookieSettings}
      />
    </div>
  );
}
