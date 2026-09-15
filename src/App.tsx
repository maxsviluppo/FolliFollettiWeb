import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import InfoCards from './components/InfoCards';
import { PhilosophyVideo } from './components/PhilosophyVideo';
import Footer from './components/Footer';
import PrivacyPage from './components/PrivacyPage';
import CookiePage from './components/CookiePage';
import CookieModal from './components/CookieModal';
import DraftSelector from './components/DraftSelector';
import DraftTopBar from './components/DraftTopBar';
import HomeV2 from './components/HomeV2';
import './App.css';

type RouteType = 'home' | 'privacy' | 'cookies';
type DraftVersion = 'selector' | 'v1' | 'v2';

export default function App() {
  const [draftVersion, setDraftVersion] = useState<DraftVersion>(() => {
    const params = new URLSearchParams(window.location.search);
    const vParam = params.get('v');
    if (vParam === '1') return 'v1';
    if (vParam === '2') return 'v2';
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('v1')) return 'v1';
    if (hash.includes('v2')) return 'v2';
    return 'selector';
  });

  const [currentRoute, setCurrentRoute] = useState<RouteType>('home');
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash === '#privacy' || hash === '#/privacy' || path === '/privacy') {
        setCurrentRoute('privacy');
        document.title = 'Informativa sulla Privacy | Folli Folletti - Cooperativa Sociale Napoli';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#cookies' || hash === '#/cookies' || path === '/cookies') {
        setCurrentRoute('cookies');
        document.title = 'Cookie Policy | Folli Folletti - Cooperativa Sociale Napoli';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentRoute('home');
        document.title = 'Folli Folletti | Cooperativa Sociale Napoli - Ludoteca, Campus, Servizi Educativi e Famiglie';
        if (hash === '#filosofia') {
          setTimeout(() => {
            const el = document.getElementById('filosofia');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Initial check
    handleRoute();

    // Listen for hash & history changes
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);

    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  // Mostra il pannello cookie all'avvio solo se l'utente non ha ancora espresso il consenso
  useEffect(() => {
    try {
      const stored = localStorage.getItem('folli_folletti_cookie_consent');
      if (!stored) {
        const timer = setTimeout(() => {
          setIsCookieModalOpen(true);
        }, 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const navigateTo = (page: RouteType, hashTarget?: string) => {
    if (page === 'privacy') {
      window.location.hash = '#privacy';
      setCurrentRoute('privacy');
      document.title = 'Informativa sulla Privacy | Folli Folletti - Cooperativa Sociale Napoli';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'cookies') {
      window.location.hash = '#cookies';
      setCurrentRoute('cookies');
      document.title = 'Cookie Policy | Folli Folletti - Cooperativa Sociale Napoli';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = hashTarget || '';
      setCurrentRoute('home');
      document.title = 'Folli Folletti | Cooperativa Sociale Napoli - Ludoteca, Campus, Servizi Educativi e Famiglie';

      if (!hashTarget || hashTarget === '#home' || hashTarget === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.querySelector(hashTarget);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  // 1. Schermata iniziale di accesso che mostra e confronta entrambe le bozze
  if (draftVersion === 'selector') {
    return (
      <DraftSelector
        onSelectVersion={(v) => {
          setDraftVersion(v);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />
    );
  }

  // 2. Bozza 2 (Nuova proposta su fondo bianco con hero dedicata, navbar top e categorie)
  if (draftVersion === 'v2') {
    return (
      <>
        <DraftTopBar
          currentVersion="v2"
          onSwitchVersion={(v) => setDraftVersion(v)}
          onBackToSelector={() => setDraftVersion('selector')}
        />
        <HomeV2
          onNavigate={(page, hash) => navigateTo(page, hash)}
        />
        {/* Pannello cookie */}
        <CookieModal
          isOpen={isCookieModalOpen}
          onClose={() => setIsCookieModalOpen(false)}
          onNavigate={(page) => navigateTo(page)}
        />
      </>
    );
  }

  // 3. Bozza 1 (Completa e originale con bosco animato, cards e sezioni)
  return (
    <div className="app">
      {/* Barra fluttuante per cambiare bozza o tornare alla selezione */}
      <DraftTopBar
        currentVersion="v1"
        onSwitchVersion={(v) => setDraftVersion(v)}
        onBackToSelector={() => setDraftVersion('selector')}
      />

      {/* Nella Home Versione 1: la Hero originale è in cima e la Navbar è subito sotto */}
      {currentRoute === 'home' ? (
        <>
          <Hero />
          <Navbar
            currentPath="home"
            onNavigateHome={(target) => navigateTo('home', target)}
          />
          <main className="main-content">
            {/* Sfondo panoramico skyline tono su tono con dissolvenza */}
            <div className="main-skyline-bg" aria-hidden="true">
              <img
                src="/skylinehome.jpg"
                alt=""
                className="main-skyline-img"
                loading="lazy"
                decoding="async"
              />
              <div className="main-skyline-gradient" />
            </div>

            <InfoCards />
            <PhilosophyVideo />
          </main>
        </>
      ) : (
        <>
          {/* Nelle pagine interne (Privacy e Cookie): Navbar sempre visibile in cima */}
          <Navbar
            currentPath={currentRoute}
            onNavigateHome={(target) => navigateTo('home', target)}
          />
          {currentRoute === 'privacy' && (
            <PrivacyPage onBackHome={() => navigateTo('home', '#home')} />
          )}
          {currentRoute === 'cookies' && (
            <CookiePage
              onBackHome={() => navigateTo('home', '#home')}
              onOpenCookieSettings={() => setIsCookieModalOpen(true)}
            />
          )}
        </>
      )}

      {/* Footer presente su tutte le pagine con link alle impostazioni cookie */}
      <Footer
        onNavigate={(page) => navigateTo(page)}
        onOpenCookieSettings={() => setIsCookieModalOpen(true)}
      />

      {/* Pannello cookie */}
      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        onNavigate={(page) => navigateTo(page)}
      />
    </div>
  );
}
