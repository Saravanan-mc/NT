/**
 * =========================================================================
 * NEDUNTHATCHAN ARCHITECTS — 40+ YR MASTER SEO ARCHITECTURE CONFIGURATION
 * Engineered for #1 Google Rank on:
 * - "Architect in Erode"
 * - "Best Architects in Erode"
 * - "Top Architectural Firm Erode"
 * - "Architect" (Local Intent Pack & Maps 3-Pack)
 * =========================================================================
 */

export interface SEOConfig {
  siteUrl: string;
  brandName: string;
  shortName: string;
  tamilName: string;
  founder: string;
  coaRegistration: string;
  degree: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  telephone: string;
  telephoneDisplay: string;
  email: string;
  geo: {
    latitude: number;
    longitude: number;
    region: string;
    placename: string;
    streetAddress: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    googleMapsDirections: string;
    googleMapsEmbed: string;
  };
  socialProfiles: string[];
  servicesOffered: {
    name: string;
    category: string;
    description: string;
  }[];
  faqList: {
    question: string;
    answer: string;
  }[];
}

export const masterSEOData: SEOConfig = {
  siteUrl: 'https://nedunthatchan.com',
  brandName: 'Nedunthatchan Architects',
  shortName: 'Nedunthatchan',
  tamilName: 'நெடுந்தச்சன் ஆர்க்கிடெக்ட்ஸ்',
  founder: 'Ar. Karthikraja G',
  coaRegistration: 'CA/2022/149864',
  degree: 'B.Arch',
  title: 'Best Architects in Erode | Nedunthatchan Architects · Top Architectural Firm & Luxury Interiors',
  description:
    'Award-winning architects in Erode, Tamil Nadu. Nedunthatchan Architects, led by Ar. Karthikraja G (B.Arch, CA/2022/149864), creates bespoke luxury villas, modern residences, commercial landmarks & turnkey interiors. 5.0★ Google rating. Call +91 9500975083.',
  canonicalUrl: 'https://nedunthatchan.com/',
  telephone: '+919500975083',
  telephoneDisplay: '+91 95009 75083',
  email: 'ar.karthikrajag@gmail.com',
  geo: {
    latitude: 11.3209,
    longitude: 77.7073,
    region: 'IN-TN',
    placename: 'Erode',
    streetAddress: 'Near Lakshmi Nei Store, Valayakara Street, Kasipalayam',
    area: 'Kasipalayam',
    city: 'Erode',
    state: 'Tamil Nadu',
    pincode: '638002',
    country: 'India',
    googleMapsDirections: 'https://maps.app.goo.gl/6a1k24tP26n6wzPZ8',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.181827827827!2d77.7073!3d11.3209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f0012345678%3A0xabcdef1234567890!2sNedunthatchan%20Architects!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  socialProfiles: [
    'https://www.instagram.com/nt__architects/',
    'https://youtube.com/@karthickraja583',
    'https://www.facebook.com/p/Nedunthatchan-Architects-61564874193582/',
    'https://www.threads.com/@nt__architects',
    'https://maps.app.goo.gl/6a1k24tP26n6wzPZ8',
  ],
  keywords: [
    // --- 1. PRIMARY LOCAL INTENT QUERIES (ERODE #1 TARGET) ---
    'architect in erode',
    'best architects in erode',
    'architects in erode',
    'top architects in erode',
    'erode architects',
    'architecture firm in erode',
    'best interior designers in erode',
    'luxury villa architect erode',
    'architect near me erode',
    'kasipalayam architects',
    'famous architects in erode',
    'top 10 architects in erode',

    // --- 2. HIGH INTENT ARCHITECTURAL SERVICES ---
    'residential architects in erode',
    'commercial architecture firm erode',
    'modern house design erode',
    'luxury home architects tamil nadu',
    'biophilic architecture erode',
    'traditional courtyard house architect',
    'turnkey construction architects erode',
    'pmc consultants erode',
    '3d architectural visualization erode',
    'bungalow architect erode',

    // --- 3. REGIONAL KONGU / TAMIL NADU AUTHORITY ---
    'architects in coimbatore',
    'architects in tiruppur',
    'architects in salem',
    'architects in tamil nadu',
    'council of architecture registered architect erode',
    'licensed architect erode',

    // --- 4. BRAND & FOUNDER ENTITY SIGNALS ---
    'nedunthatchan architects',
    'nedunthatchan architects erode',
    'karthikraja g architect',
    'ar karthikraja erode',
    'nedunthatchan coa ca/2022/149864',

    // --- 5. VERNACULAR & TAMIL SEARCH INTENT ---
    'ஈரோடு ஆர்க்கிடெக்ட்',
    'ஈரோடு சிறந்த கட்டிடக்கலைஞர்',
    'கண்டதும் இனித்திடும் நற்குடிலொன்று செய்வோம்',
  ],
  servicesOffered: [
    {
      name: 'Luxury Residential & Villa Architecture',
      category: 'Architecture',
      description: 'Bespoke architectural design, contemporary villa elevations, solar-wind climatology analysis, and biophilic floor plans crafted for Tamil Nadu climates.',
    },
    {
      name: 'Bespoke Interior Architecture & Decor',
      category: 'Interior Design',
      description: 'Ultra-luxury interior design, sacred central courtyards, teak wood features, custom lighting design, and modern spatial decor.',
    },
    {
      name: 'Turnkey Construction & PMC Stewardship',
      category: 'Project Management & Construction',
      description: 'End-to-end Project Management Consultancy (PMC), on-site structural oversight, rigorous material procurement, and turnkey delivery.',
    },
    {
      name: 'Commercial Landmarks & Corporate Ateliers',
      category: 'Commercial Architecture',
      description: 'Futuristic retail showrooms, boutique corporate offices, multi-use commercial complexes, and hospitality spaces in Erode.',
    },
    {
      name: 'Sacred Architecture & Cultural Sanctuaries',
      category: 'Heritage & Sacred Architecture',
      description: 'Contemporary interpretation of traditional Tamil cultural heritage, Ganesha foyers, Peacock & Vel murals, and sacred prayer halls.',
    },
  ],
  faqList: [
    {
      question: 'Who is the best architect in Erode for residential house design?',
      answer:
        'Nedunthatchan Architects is widely rated as one of the best architecture firms in Erode. Led by Council of Architecture-registered Ar. Karthikraja G (B.Arch, CA/2022/149864), the atelier holds a 5.0 Google rating across 120+ completed built works, specializing in luxury villas, modern residences, and biophilic courtyards.',
    },
    {
      question: 'What architectural services are provided in Erode by Nedunthatchan Architects?',
      answer:
        'Nedunthatchan Architects offers end-to-end architectural services in Erode: conceptual planning, solar-wind orientation analysis, generative 3D & VR walkthroughs, luxury interior design, turnkey construction management, structural coordination, and Project Management Consultancy (PMC).',
    },
    {
      question: 'How do I book an architectural consultation with Ar. Karthikraja G in Erode?',
      answer:
        'You can schedule a private client consultation by calling +91 9500975083, initiating a direct WhatsApp inquiry, or visiting the atelier at Valayakara Street, near Lakshmi Nei Store, Kasipalayam, Erode — 638002.',
    },
    {
      question: 'What areas does Nedunthatchan Architects serve in Tamil Nadu?',
      answer:
        'While headquartered in Kasipalayam, Erode, Nedunthatchan Architects provides full architectural and PMC services across Erode, Coimbatore, Tiruppur, Salem, Karur, Chennai, and throughout Tamil Nadu and South India.',
    },
    {
      question: 'Are the architects at Nedunthatchan Architects COA licensed?',
      answer:
        'Yes, Founder & Principal Architect Ar. Karthikraja G holds a Bachelor of Architecture (B.Arch) degree and is officially registered with the Council of Architecture (India) under registration number CA/2022/149864.',
    },
  ],
};

/**
 * Generates the complete Schema.org JSON-LD Structured Data Graph
 * Recognized by Google Search, Knowledge Graph, and Local 3-Pack.
 */
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. PRIMARY LOCAL BUSINESS & ARCHITECTURAL FIRM ENTITY
      {
        '@type': ['ArchitecturalFirm', 'LocalBusiness', 'ProfessionalService'],
        '@id': `${masterSEOData.siteUrl}/#organization`,
        name: masterSEOData.brandName,
        alternateName: [
          masterSEOData.shortName,
          'NT Architects',
          masterSEOData.tamilName,
          'Best Architects in Erode',
          'Nedunthatchan Architects Erode',
        ],
        url: masterSEOData.siteUrl,
        logo: `${masterSEOData.siteUrl}/logo.png`,
        image: [
          `${masterSEOData.siteUrl}/designs/angular-crest-villa.webp`,
          `${masterSEOData.siteUrl}/designs/velum-mayilum-central-courtyard-mandapam.jpg`,
          `${masterSEOData.siteUrl}/designs/chellammal-complex-commercial-landmark.jpg`,
          `${masterSEOData.siteUrl}/designs/pichwai-interior-meditation-wall.jpg`,
        ],
        description: masterSEOData.description,
        telephone: masterSEOData.telephone,
        email: masterSEOData.email,
        priceRange: '₹₹₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
        foundingDate: '2017',
        founder: {
          '@type': 'Person',
          '@id': `${masterSEOData.siteUrl}/#founder`,
          name: masterSEOData.founder,
          jobTitle: 'Principal Architect & Founder',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional License',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Council of Architecture (India)',
            },
            identifier: masterSEOData.coaRegistration,
          },
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: `${masterSEOData.degree} Architecture`,
          },
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: masterSEOData.geo.streetAddress,
          addressLocality: masterSEOData.geo.city,
          addressRegion: masterSEOData.geo.state,
          postalCode: masterSEOData.geo.pincode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: masterSEOData.geo.latitude,
          longitude: masterSEOData.geo.longitude,
        },
        hasMap: masterSEOData.geo.googleMapsDirections,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '120',
          bestRating: '5',
          worstRating: '1',
        },
        areaServed: [
          { '@type': 'City', name: 'Erode' },
          { '@type': 'AdministrativeArea', name: 'Kasipalayam' },
          { '@type': 'City', name: 'Perundurai' },
          { '@type': 'City', name: 'Bhavani' },
          { '@type': 'City', name: 'Gobichettipalayam' },
          { '@type': 'City', name: 'Coimbatore' },
          { '@type': 'City', name: 'Tiruppur' },
          { '@type': 'City', name: 'Salem' },
          { '@type': 'State', name: 'Tamil Nadu' },
        ],
        sameAs: masterSEOData.socialProfiles,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Architectural & Interior Design Services in Erode',
          itemListElement: masterSEOData.servicesOffered.map((service, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              category: service.category,
              description: service.description,
            },
            position: index + 1,
          })),
        },
      },

      // 2. WEBPAGE & BREADCRUMB DEFINITIONS
      {
        '@type': 'WebSite',
        '@id': `${masterSEOData.siteUrl}/#website`,
        url: masterSEOData.siteUrl,
        name: 'Nedunthatchan Architects Erode',
        alternateName: 'Best Architects in Erode',
        description: masterSEOData.description,
        publisher: {
          '@id': `${masterSEOData.siteUrl}/#organization`,
        },
        inLanguage: ['en-IN', 'ta-IN'],
      },

      // 3. FAQPAGES RICH SNIPPET FOR GOOGLE SERP EXPANDABLE CAROUSELS
      {
        '@type': 'FAQPage',
        '@id': `${masterSEOData.siteUrl}/#faq`,
        mainEntity: masterSEOData.faqList.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };
};
