'use client';

import SiteMarketingHeader from './SiteMarketingHeader';
import InquiryForm, { type InquiryServiceOption } from './InquiryForm';
import Footer from './Footer';
import { useCookieConsent } from './CookieConsentRoot';
import { useRouter } from 'next/navigation';
import {
  CONTATTACI_COOPERATIVA,
  CONTATTACI_CONTACT,
  CONTATTACI_MISSION,
  CONTATTACI_PHILOSOPHY,
} from '@/data/contattaci-page-content';
import './HomeV3.css';
import './ContattaciPage.css';

const SLUG_TO_SERVICE: Record<string, InquiryServiceOption> = {
  ludoteca: 'Ludoteca',
  educativa: 'Educativa',
  campus: 'Campus',
  tutoraggio: 'Tutoraggio',
  psicologia: 'Psicologia',
};

type Props = {
  initialServiceSlug?: string;
};

export default function ContattaciPageClient({ initialServiceSlug }: Props) {
  const router = useRouter();
  const { openCookieSettings } = useCookieConsent();
  const initialServizio =
    (initialServiceSlug && SLUG_TO_SERVICE[initialServiceSlug.toLowerCase()]) || 'Ludoteca';

  const onNavigate = (page: 'home' | 'privacy' | 'cookies', hash?: string) => {
    if (page === 'privacy') {
      router.push('/privacy');
      return;
    }
    if (page === 'cookies') {
      router.push('/cookies');
      return;
    }
    const target = hash?.startsWith('#') ? hash : hash ? `#${hash}` : '';
    router.push(target ? `/${target}` : '/');
  };

  return (
    <div className="contattaci-page">
      <SiteMarketingHeader variant="contattaci" contattaciActive />

      <section className="contattaci-page__hero" aria-labelledby="contattaci-hero-title">
        <img
          src="/contattaci-hero-groovy-tours.jpg"
          alt="Illustrazione Folli Folletti — avventura, viaggio e fantasia nel bosco"
          className="contattaci-page__hero-img"
          fetchPriority="high"
        />
        <div className="contattaci-page__hero-overlay contattaci-page__hero-overlay--light" aria-hidden="true" />
        <div className="contattaci-page__hero-content">
          <span className="contattaci-page__hero-eyebrow">Folli Folletti · Napoli</span>
          <h1 id="contattaci-hero-title" className="contattaci-page__hero-title">
            Contattaci e conosci la nostra storia
          </h1>
        </div>
        <div className="contattaci-page__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" fill="#ffffff">
            <path d="M0,20 C360,48 720,0 1080,28 C1260,40 1380,32 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      <section className="contattaci-page__philosophy-block" aria-labelledby="philosophy-quote">
        <div className="contattaci-page__philosophy-banner">
          <img
            src="/filosofia.png"
            alt="La nostra filosofia — illustrazione Folli Folletti"
            className="contattaci-page__philosophy-banner-img"
            loading="eager"
          />
        </div>
        <blockquote id="philosophy-quote" className="contattaci-page__quote">
          {CONTATTACI_PHILOSOPHY.quote}
        </blockquote>
        <p className="contattaci-page__quote-author">{CONTATTACI_PHILOSOPHY.author}</p>
      </section>

      <main className="contattaci-page__body">
        <section className="contattaci-page__story contattaci-page__story--solo" aria-labelledby="coop-heading">
          <div className="contattaci-page__story-text">
            <span className="home-v3__eyebrow">{CONTATTACI_COOPERATIVA.eyebrow}</span>
            <h2 id="coop-heading" className="home-v3__section-title">
              {CONTATTACI_COOPERATIVA.title}
            </h2>
            {CONTATTACI_COOPERATIVA.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </section>

        <section className="contattaci-page__mission" aria-labelledby="mission-heading">
          <span className="home-v3__eyebrow">Mission</span>
          <h2 id="mission-heading" className="home-v3__section-title" style={{ marginBottom: 0 }}>
            Al servizio delle famiglie
          </h2>
          <p>{CONTATTACI_MISSION}</p>
        </section>

        <section
          id="contatti"
          className="home-v3__contact-section contattaci-page__contact-section"
          aria-labelledby="contact-heading"
          style={{ padding: 0, background: 'transparent', border: 'none' }}
        >
          <div className="home-v3__section-container" style={{ padding: 0 }}>
            <div className="home-v3__contact-box">
              <div className="home-v3__contact-info">
                <span className="home-v3__eyebrow">Parla con noi</span>
                <h2 id="contact-heading" className="home-v3__contact-title">
                  Siamo qui per te e per la tua famiglia
                </h2>
                <p className="home-v3__contact-desc">
                  Informazioni sui 5 servizi, disponibilità o visita in sede: scrivici, chiamaci o compila il modulo.
                </p>

                <div className="home-v3__contact-details">
                  <div className="home-v3__c-item">
                    <div className="home-v3__c-bullet" aria-hidden="true">
                      📍
                    </div>
                    <div>
                      <strong>Sede &amp; ludoteca:</strong>
                      <p>
                        {CONTATTACI_CONTACT.addressLine1} — {CONTATTACI_CONTACT.addressLine2}
                      </p>
                    </div>
                  </div>

                  <div className="home-v3__c-item">
                    <div className="home-v3__c-bullet" aria-hidden="true">
                      📞
                    </div>
                    <div>
                      <strong>Telefono:</strong>
                      <p>
                        <a href={`tel:${CONTATTACI_CONTACT.telHref}`}>{CONTATTACI_CONTACT.tel}</a>
                      </p>
                      <div className="contattaci-page__cells">
                        {CONTATTACI_CONTACT.cells.map((c) => (
                          <span key={c.href}>
                            {c.label}{' '}
                            <a href={`tel:${c.href}`}>{c.number}</a>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="home-v3__c-item">
                    <div className="home-v3__c-bullet" aria-hidden="true">
                      ✉️
                    </div>
                    <div>
                      <strong>Email &amp; web:</strong>
                      <p>
                        <a href={`mailto:${CONTATTACI_CONTACT.email}`}>{CONTATTACI_CONTACT.email}</a>
                        <br />
                        {CONTATTACI_CONTACT.web}
                      </p>
                    </div>
                  </div>

                  <div className="home-v3__c-item">
                    <div className="home-v3__c-bullet" aria-hidden="true">
                      ⏰
                    </div>
                    <div>
                      <strong>Orari di apertura:</strong>
                      <p>{CONTATTACI_CONTACT.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="modulo" className="home-v3__contact-form-wrap">
                <InquiryForm idPrefix="contattaci" initialServizio={initialServizio} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} onOpenCookieSettings={openCookieSettings} />
    </div>
  );
}
