'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import HomeV3 from './HomeV3';
import { useCookieConsent } from './CookieConsentRoot';
type SitePage = 'home' | 'privacy' | 'cookies';

export default function HomePageClient() {
  const router = useRouter();
  const { openCookieSettings } = useCookieConsent();

  const onNavigate = useCallback(
    (page: SitePage, hash?: string) => {
      if (page === 'privacy') {
        router.push('/privacy');
        return;
      }
      if (page === 'cookies') {
        router.push('/cookies');
        return;
      }

      const target =
        hash && hash.startsWith('#') ? hash : hash ? `#${hash.replace(/^#/, '')}` : '';

      if (target === '#contatti' || target === '#perche-noi') {
        router.push('/contattaci');
        return;
      }

      if (target && target !== '#home' && target !== '#hero' && target !== '#hero-v3') {
        router.push('/' + target);
        requestAnimationFrame(() => {
          document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      router.push('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [router]
  );

  const onGoContattaci = useCallback(
    (serviceSlug?: string) => {
      if (serviceSlug) {
        router.push(`/contattaci?servizio=${encodeURIComponent(serviceSlug)}`);
      } else {
        router.push('/contattaci');
      }
    },
    [router]
  );

  return (
    <HomeV3
      onNavigate={onNavigate}
      onOpenCookieSettings={openCookieSettings}
      onGoContattaci={onGoContattaci}
    />
  );
}
