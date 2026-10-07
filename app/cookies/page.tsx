import type { Metadata } from 'next';
import CookiePageClient from '@/components/CookiePageClient';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy e preferenze di Folli Folletti Cooperativa Sociale Napoli.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesRoute() {
  return <CookiePageClient />;
}
