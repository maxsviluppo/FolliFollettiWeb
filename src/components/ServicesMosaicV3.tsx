'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './ServicesMosaicV3.css';
import { SERVICES_DATA, type ServiceDetail } from '@/data/services-data';

export type { ServiceModule, ServiceDetail } from '@/data/services-data';
export { SERVICES_DATA } from '@/data/services-data';

interface ServicesMosaicV3Props {
  onOpenContactForm?: (serviceSlug?: string) => void;
}

export default function ServicesMosaicV3({ onOpenContactForm: _onOpenContactForm }: ServicesMosaicV3Props) {
  const router = useRouter();

  const openServiceDetail = (service: ServiceDetail) => {
    router.push(`/servizi/${service.slug}`);
  };

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const ce = e as CustomEvent<{ slug: string }>;
      const rawSlug = ce.detail?.slug?.toLowerCase();
      if (rawSlug) {
        const slug = rawSlug === 'consulenze' ? 'psicologia' : rawSlug;
        const found = SERVICES_DATA.find((s) => s.slug === slug || (slug === 'psicologia' && s.id === 5));
        if (found) {
          openServiceDetail(found);
        }
      }
    };

    window.addEventListener('folli:open-service-modal', handleOpenEvent);
    return () => window.removeEventListener('folli:open-service-modal', handleOpenEvent);
  }, [router]);

  const ludoteca = SERVICES_DATA[0];
  const educativa = SERVICES_DATA[1];
  const campus = SERVICES_DATA[2];
  const tutoraggio = SERVICES_DATA[3];
  const psicologia = SERVICES_DATA[4];

  return (
    <section id="servizi" className="services-mosaic-v3" aria-labelledby="mosaic-heading">
      <div className="services-mosaic-v3__container">
        <div className="services-mosaic-v3__header">
          <div className="services-mosaic-v3__header-tag">
            <span className="services-mosaic-v3__tag-dot" aria-hidden="true" />
            <span className="services-mosaic-v3__tag-text">SERVIZI INTEGRATI PER L’INFANZIA E LA FAMIGLIA</span>
          </div>

          <h2 id="mosaic-heading" className="services-mosaic-v3__title">
            I Nostri 5 Servizi Specialistici
          </h2>

          <p className="services-mosaic-v3__subtitle">
            Dalla ludoteca autorizzata dal Comune di Napoli al supporto scolastico, screening DSA, campus e consulenze.
          </p>
        </div>

        <div className="services-mosaic-v3__desktop-grid" role="region" aria-label="Mosaico Servizi Desktop">
          <article
            id="service-item-ludoteca"
            className="mosaic-card mosaic-card--wide mosaic-card--wide-1"
            onClick={() => openServiceDetail(ludoteca)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceDetail(ludoteca);
              }
            }}
            aria-label={'Dettagli ' + ludoteca.title}
          >
            <img src={ludoteca.image} alt={ludoteca.title} className="mosaic-card__bg-img" loading="eager" />
            <div className="mosaic-card__overlay mosaic-card__overlay--hero" />
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">{ludoteca.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="mosaic-card__bottom">
              <span className="mosaic-card__green-phrase">
                {ludoteca.badge} &bull; {ludoteca.ageGroup}
              </span>
              <h3 className="mosaic-card__title">{ludoteca.title}</h3>
              <span className="mosaic-card__subtitle">{ludoteca.subtitle}</span>
              <div className="mosaic-card__footer-cta">
                <span>Scopri orari e dettagli</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          <article
            id="service-item-educativa"
            className="mosaic-card mosaic-card--wide mosaic-card--wide-2"
            onClick={() => openServiceDetail(educativa)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceDetail(educativa);
              }
            }}
            aria-label={'Dettagli ' + educativa.title}
          >
            <img src={educativa.image} alt={educativa.title} className="mosaic-card__bg-img" loading="eager" />
            <div className="mosaic-card__overlay mosaic-card__overlay--hero" />
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">{educativa.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="mosaic-card__bottom">
              <span className="mosaic-card__green-phrase">
                {educativa.badge} &bull; {educativa.ageGroup}
              </span>
              <h3 className="mosaic-card__title">{educativa.title}</h3>
              <span className="mosaic-card__subtitle">{educativa.subtitle}</span>
              <div className="mosaic-card__footer-cta">
                <span>Dettagli doposcuola e corsi</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          <article
            id="service-item-campus"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-1"
            onClick={() => openServiceDetail(campus)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceDetail(campus);
              }
            }}
            aria-label={'Dettagli ' + campus.title}
          >
            <img src={campus.image} alt={campus.title} className="mosaic-card__bg-img" loading="lazy" />
            <div className="mosaic-card__overlay" />
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">{campus.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="mosaic-card__bottom">
              <span className="mosaic-card__green-phrase">
                {campus.badge} &bull; {campus.ageGroup}
              </span>
              <h3 className="mosaic-card__title">{campus.title}</h3>
              <span className="mosaic-card__subtitle">{campus.subtitle}</span>
              <div className="mosaic-card__footer-cta">
                <span>Scopri programmi e viaggi</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          <article
            id="service-item-tutoraggio"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-2"
            onClick={() => openServiceDetail(tutoraggio)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceDetail(tutoraggio);
              }
            }}
            aria-label={'Dettagli ' + tutoraggio.title}
          >
            <img src={tutoraggio.image} alt={tutoraggio.title} className="mosaic-card__bg-img" loading="lazy" />
            <div className="mosaic-card__overlay" />
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">{tutoraggio.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="mosaic-card__bottom">
              <span className="mosaic-card__green-phrase">
                {tutoraggio.badge} &bull; {tutoraggio.ageGroup}
              </span>
              <h3 className="mosaic-card__title">{tutoraggio.title}</h3>
              <span className="mosaic-card__subtitle">{tutoraggio.subtitle}</span>
              <div className="mosaic-card__footer-cta">
                <span>Dettagli e screening DSA</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>

          <article
            id="service-item-psicologia"
            className="mosaic-card mosaic-card--compact mosaic-card--compact-3"
            onClick={() => openServiceDetail(psicologia)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openServiceDetail(psicologia);
              }
            }}
            aria-label={'Dettagli ' + psicologia.title}
          >
            <img src={psicologia.image} alt={psicologia.title} className="mosaic-card__bg-img" loading="lazy" />
            <div className="mosaic-card__overlay" />
            <div className="mosaic-card__top">
              <span className="mosaic-card__theme-badge">{psicologia.category}</span>
              <div className="mosaic-card__arrow-btn" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <div className="mosaic-card__bottom">
              <span className="mosaic-card__green-phrase">
                {psicologia.badge} &bull; {psicologia.ageGroup}
              </span>
              <h3 className="mosaic-card__title">{psicologia.title}</h3>
              <span className="mosaic-card__subtitle">{psicologia.subtitle}</span>
              <div className="mosaic-card__footer-cta">
                <span>Dettagli e spazio ascolto</span>
                <span className="mosaic-card__cta-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </div>
          </article>
        </div>

        <div className="services-mosaic-v3__mobile-stack" role="region" aria-label="Elenco Servizi Mobile">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              id={`service-item-mobile-${service.slug}`}
              className="mobile-service-banner"
              onClick={() => openServiceDetail(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openServiceDetail(service);
                }
              }}
              aria-label={'Apri dettagli ' + service.title}
            >
              <img
                src={service.image}
                alt={service.title}
                className="mobile-service-banner__img"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="mobile-service-banner__gradient" />
              <div className="mobile-service-banner__top">
                <span className="mobile-service-banner__theme-badge">{service.category}</span>
                <div className="mobile-service-banner__arrow-wrap" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
              <div className="mobile-service-banner__bottom">
                <span className="mobile-service-banner__green-phrase">
                  {service.badge} &bull; {service.ageGroup}
                </span>
                <h3 className="mobile-service-banner__title">{service.title}</h3>
                <span className="mobile-service-banner__subtitle">{service.subtitle}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
