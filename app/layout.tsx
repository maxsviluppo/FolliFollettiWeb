import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import CookieConsentRoot from '@/components/CookieConsentRoot';
import { organizationJsonLd } from '@/lib/structured-data';
import './globals.css';

const siteDescription =
  'Folli Folletti Cooperativa Sociale a Napoli: ludoteca autorizzata dal Comune di Napoli, prima infanzia, campus estivi e invernali, educativa territoriale 6-18 anni, tutoraggio Bes e DSA, consulenze psicologiche.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.follifolletti.it'),
  title: {
    default:
      'Folli Folletti | Cooperativa Sociale Napoli - Ludoteca, Campus, Servizi Educativi e Famiglie',
    template: '%s | Folli Folletti',
  },
  description: siteDescription,
  keywords: [
    'cooperativa sociale napoli',
    'ludoteca napoli',
    'asilo nido napoli',
    'scuola infanzia napoli',
    'campus estivi napoli',
    'campus invernali napoli',
    'tutoraggio bes dsa napoli',
    'educativa territoriale napoli',
    'consulenza psicologica minori napoli',
    'animazione feste napoli',
    'folli folletti',
  ],
  authors: [{ name: 'Folli Folletti Cooperativa Sociale - Stefania Busalacchi' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Folli Folletti | Cooperativa Sociale Napoli',
    description:
      'Spazio di crescita, gioco, educazione e benessere per bambini, ragazzi e famiglie. Ludoteca autorizzata dal Comune di Napoli, campus, tutoraggio BES/DSA.',
    url: 'https://www.follifolletti.it/',
    siteName: 'Folli Folletti',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/favicon.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Folli Folletti | Cooperativa Sociale Napoli',
    description:
      'Ludoteca autorizzata, prima infanzia, campus estivi e invernali, educativa territoriale 6-18 anni, tutoraggio BES/DSA e consulenze psicologiche.',
    images: ['/favicon.png'],
  },
  other: {
    'geo.region': 'IT-NA',
    'geo.placename': 'Napoli',
    'geo.position': '40.8711;14.2375',
    ICBM: '40.8711, 14.2375',
  },
};

export const viewport: Viewport = {
  themeColor: '#3d6b2a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <link rel="preload" as="image" href="/slidefollettadondolo.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/logo-folli-folletti-2.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/logosemplice.png" />
        <link rel="preload" as="image" href="/trilli-leaf-clean.png" />
        <link rel="preload" as="image" href="/trilli-fairy-body.png" />
        <link rel="preload" as="image" href="/trilli-wings-clean.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Cinzel:wght@700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Outfit:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CookieConsentRoot>{children}</CookieConsentRoot>
        <Script
          id="folli-folletti-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
