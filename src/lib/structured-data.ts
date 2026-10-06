export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EducationalOrganization', 'ChildCare'],
      '@id': 'https://www.follifolletti.it/#organization',
      name: 'Folli Folletti - Cooperativa Sociale',
      alternateName: ['Folli Folletti Napoli', 'Cooperativa Sociale Folli Folletti'],
      legalName: 'Folli Folletti Cooperativa Sociale di Stefania Busalacchi',
      url: 'https://www.follifolletti.it',
      logo: 'https://www.follifolletti.it/logosemplice.png',
      image: 'https://www.follifolletti.it/fondo3.jpg',
      description:
        'Cooperativa Sociale a Napoli specializzata in servizi educativi e per la famiglia: ludoteca autorizzata dal Comune di Napoli, prima infanzia, campus estivi e invernali, educativa territoriale 6-18 anni, tutoraggio specialistico BES e DSA, consulenze psicologiche e animazione per eventi.',
      telephone: '+390815921176',
      email: 'info@follifolletti.it',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Via Saverio Gatto, 21',
        addressLocality: 'Napoli',
        postalCode: '80131',
        addressRegion: 'NA',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 40.8711,
        longitude: 14.2375,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '19:00',
        },
      ],
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Napoli e provincia',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servizi Educativi e Ricreativi Folli Folletti',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Ludoteca Autorizzata dal Comune di Napoli',
              description:
                'Spazio gioco, socializzazione e laboratori pedagogici espressivi per la prima infanzia.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Educativa Territoriale',
              description:
                'Progetti educativi di inclusione, orientamento e socialità per giovani dai 6 ai 18 anni.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Campus Estivi e Invernali',
              description:
                'Esperienze attive, avventura, natura e laboratori creativi durante le pause scolastiche.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tutoraggio Specializzato BES e DSA',
              description:
                'Metodo di studio personalizzato, strumenti compensativi e potenziamento cognitivo.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Consulenze Psicologiche',
              description:
                'Spazio di ascolto professionale e sostegno alla genitorialità e ai minori.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.follifolletti.it/#website',
      url: 'https://www.follifolletti.it',
      name: 'Folli Folletti',
      publisher: {
        '@id': 'https://www.follifolletti.it/#organization',
      },
    },
  ],
} as const;
