'use client';

import { useRouter } from 'next/navigation';
import CookiePage from './CookiePage';
import { useCookieConsent } from './CookieConsentRoot';

export default function CookiePageClient() {
  const router = useRouter();
  const { openCookieSettings } = useCookieConsent();

  return (
    <CookiePage
      onBackHome={() => router.push('/')}
      onOpenCookieSettings={openCookieSettings}
    />
  );
}
