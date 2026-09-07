import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';
import FeaturesWorkspace from './components/FeaturesWorkspace';
import PrivacyPage from './components/PrivacyPage';
import CookiePage from './components/CookiePage';
import CookieModal from './components/CookieModal';
import './App.css';

type RouteType = 'home' | 'privacy' | 'cookies';

export default function App() {
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

  return (
    <div className="app">
      {/* Nella Home: la Hero è in cima e la Navbar è subito sotto di essa, diventando sticky allo scroll */}
      {currentRoute === 'home' ? (
        <>
          <Hero />
          <Navbar
            currentPath="home"
            onNavigateHome={(target) => navigateTo('home', target)}
          />
          <main>
            <InfoCards />
            <FeaturesWorkspace />
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

      {/* Pannello per accettare i cookie all'avvio, a tema modale minimal e poco invadente */}
      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        onNavigate={(page) => navigateTo(page)}
      />
    </div>
  );
}
