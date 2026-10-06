'use client';

import Link from 'next/link';
import { SERVICES_DATA, type ServiceDetail } from '@/data/services-data';
import { SERVICE_PAGE_CONTENT } from '@/data/service-page-content';
import type { ServiceCategorySlug } from '@/constants/service-categories';
import ServiceSiteHeader from './ServiceSiteHeader';
import './ServiceDetailPage.css';

type Props = {
  slug: ServiceCategorySlug;
};

function getService(slug: ServiceCategorySlug): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export default function ServiceDetailPageClient({ slug }: Props) {
  const service = getService(slug);
  const extra = SERVICE_PAGE_CONTENT[slug];

  if (!service || !extra) {
    return null;
  }

  const waPhone = service.slug === 'psicologia' ? '393455964494' : '390815921176';
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(service.whatsappText)}`;

  return (
    <div className="service-page">
      <ServiceSiteHeader activeSlug={slug} />

      <section className="service-page__hero service-page__hero--with-site-header" aria-labelledby="service-page-title">
        <img src={service.image} alt="" className="service-page__hero-img" fetchPriority="high" />
        <div className="service-page__hero-overlay" aria-hidden="true" />
        <div className="service-page__hero-content">
          <span className="service-page__hero-tag">{service.category}</span>
          <span className="service-page__hero-eyebrow">{service.subtitle}</span>
          <h1 id="service-page-title" className="service-page__hero-title">
            {service.title}
          </h1>
          <p className="service-page__hero-badge-line">
            {service.badge} · {service.ageGroup}
          </p>
        </div>
        <div className="service-page__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" fill="#ffffff">
            <path d="M0,20 C360,48 720,0 1080,28 C1260,40 1380,32 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      <main className="service-page__body">
        <div className="service-page__meta">
          <div className="service-page__meta-item">
            <span className="service-page__meta-label">Destinatari</span>
            <strong className="service-page__meta-value">{service.ageGroup}</strong>
          </div>
          <div className="service-page__meta-item">
            <span className="service-page__meta-label">Orari &amp; giorni</span>
            <strong className="service-page__meta-value">{service.schedule}</strong>
          </div>
          <div className="service-page__meta-item">
            <span className="service-page__meta-label">Caratteristica chiave</span>
            <strong className="service-page__meta-value">{service.keyFeature}</strong>
          </div>
        </div>

        <section className="service-page__lead" aria-labelledby="service-lead-title">
          <h2 id="service-lead-title" className="service-page__section-title">
            {extra.leadTitle}
          </h2>
          {extra.leadParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <p>{service.fullDesc}</p>
        </section>

        <section className="service-page__split" aria-labelledby="service-approach-title">
          <div className="service-page__illustration-wrap">
            <img
              src={extra.illustrationSrc}
              alt={extra.illustrationAlt}
              className="service-page__illustration"
              loading="lazy"
            />
          </div>
          <div className="service-page__approach">
            <h2 id="service-approach-title" className="service-page__section-title">
              {extra.approachTitle}
            </h2>
            <p>{extra.approachText}</p>
          </div>
        </section>

        <section className="service-page__modules" aria-labelledby="service-modules-title">
          <h2 id="service-modules-title" className="service-page__section-title">
            Aree e moduli di intervento
          </h2>
          <div className="service-page__modules-grid">
            {service.modules.map((mod) => (
              <article key={mod.title} className="service-page__module-card">
                <div className="service-page__module-head">
                  <h3 className="service-page__module-title">{mod.title}</h3>
                  {mod.badge && <span className="service-page__module-badge">{mod.badge}</span>}
                </div>
                <p className="service-page__module-desc">{mod.description}</p>
                {mod.points && (
                  <ul className="service-page__module-points">
                    {mod.points.map((pt) => (
                      <li key={pt}>
                        <span className="service-page__check" aria-hidden="true">
                          ✓
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="service-page__highlights" aria-labelledby="service-highlights-title">
          <h2 id="service-highlights-title" className="service-page__section-title">
            Punti di forza ed elementi distintivi
          </h2>
          <ul className="service-page__highlights-list">
            {service.highlights.map((h) => (
              <li key={h}>
                <span className="service-page__check" aria-hidden="true">
                  ✓
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="service-page__tags" aria-label="Ambiti principali">
          {service.tags.map((tag) => (
            <span key={tag} className="service-page__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="service-page__actions">
          <div className="service-page__actions-row">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="service-page__btn service-page__btn--wa"
            >
              Contatta su WhatsApp
            </a>
            <Link href={`/contattaci?servizio=${slug}`} className="service-page__btn service-page__btn--primary">
              Richiedi informazioni
            </Link>
            <a
              href={service.slug === 'psicologia' ? 'tel:3455964494' : 'tel:0815921176'}
              className="service-page__btn service-page__btn--ghost"
            >
              {service.slug === 'psicologia' ? 'Chiama · 345 5964494' : 'Chiama la sede · 081 5921176'}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
