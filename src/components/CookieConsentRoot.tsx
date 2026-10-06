'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import CookieModal from './CookieModal';

type SitePage = 'home' | 'privacy' | 'cookies';

type CookieConsentContextValue = {
  openCookieSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieConsentRoot');
  }
  return ctx;
}

export default function CookieConsentRoot({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('folli_folletti_cookie_consent');
      if (!stored) {
        const timer = setTimeout(() => setIsCookieModalOpen(true), 700);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const navigateFromModal = useCallback(
    (page: SitePage) => {
      setIsCookieModalOpen(false);
      if (page === 'privacy') router.push('/privacy');
      else if (page === 'cookies') router.push('/cookies');
      else router.push('/');
    },
    [router]
  );

  const value = useMemo(
    () => ({
      openCookieSettings: () => setIsCookieModalOpen(true),
    }),
    []
  );

  return (
    <CookieConsentContext.Provider value={value}>
      <div className="app">{children}</div>
      <CookieModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
        onNavigate={navigateFromModal}
      />
    </CookieConsentContext.Provider>
  );
}
