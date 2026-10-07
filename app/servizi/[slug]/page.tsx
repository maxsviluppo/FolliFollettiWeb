import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailPageClient from '@/components/ServiceDetailPageClient';
import { SERVICE_CATEGORIES, type ServiceCategorySlug } from '@/constants/service-categories';
import { SERVICES_DATA } from '@/data/services-data';

const VALID_SLUGS = new Set(SERVICE_CATEGORIES.map((c) => c.slug));

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!VALID_SLUGS.has(slug as ServiceCategorySlug)) {
    return { title: 'Servizio non trovato' };
  }
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: 'Servizio' };

  return {
    title: `${service.title} — ${service.subtitle}`,
    description: service.shortDesc,
    alternates: { canonical: `/servizi/${slug}` },
    openGraph: {
      title: `${service.title} | Folli Folletti`,
      description: service.shortDesc,
      images: service.image.startsWith('http') ? [{ url: service.image }] : [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  if (!VALID_SLUGS.has(slug as ServiceCategorySlug)) {
    notFound();
  }

  return <ServiceDetailPageClient slug={slug as ServiceCategorySlug} />;
}
