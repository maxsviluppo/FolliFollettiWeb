import { useState, useEffect } from 'react';
import HomeV3 from './components/HomeV3';
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

    handleRoute();

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);

    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  // Mostra il pannello cookie all'avvio solo se non ancora espresso
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

      if (!hashTarget || hashTarget === '#home' || hashTarget === '#hero' || hashTarget === '#hero-v3') {
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
      {currentRoute === 'home' && (
        <HomeV3 onNavigate={(page, hash) => navigateTo(page, hash)} />
      )}

      {currentRoute === 'privacy' && (
        <PrivacyPage onBackHome={() => navigateTo('home', '#home')} />
      )}

      {currentRoute === 'cookies' && (
        <CookiePage
          onBackHome={() => navigateTo('home', '#home')}
          onOpenCookieSettings={() => setIsCookieModalOpen(true)}
        />
      )}

      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        onNavigate={(page) => navigateTo(page)}
      />
    </div>
  );
}
