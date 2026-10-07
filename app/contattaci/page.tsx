import type { Metadata } from 'next';
import ContattaciPageClient from '@/components/ContattaciPageClient';

export const metadata: Metadata = {
  title: 'Contattaci — Chi siamo, filosofia e richieste',
  description:
    'Folli Folletti Cooperativa Sociale Napoli: la nostra storia, filosofia, mission e contatti. Ludoteca, educativa, campus, tutoraggio BES/DSA e consulenze pedagogiche.',
  alternates: { canonical: '/contattaci' },
};

type PageProps = {
  searchParams: Promise<{ servizio?: string }>;
};

export default async function ContattaciPage({ searchParams }: PageProps) {
  const { servizio } = await searchParams;
  return <ContattaciPageClient initialServiceSlug={servizio} />;
}
