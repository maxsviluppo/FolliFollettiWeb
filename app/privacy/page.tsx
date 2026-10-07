import type { Metadata } from 'next';
import PrivacyPageClient from '@/components/PrivacyPageClient';

export const metadata: Metadata = {
  title: 'Informativa sulla Privacy',
  description:
    'Informativa privacy Folli Folletti Cooperativa Sociale Napoli — trattamento dati personali ai sensi del GDPR.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyRoute() {
  return <PrivacyPageClient />;
}
