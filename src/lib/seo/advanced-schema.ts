/**
 * Advanced Schema Generators for Enhanced SEO
 * Additional structured data types for rich snippets
 */

// VideoObject schema for tutorial/educational videos
export const generateVideoSchema = (params: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT1M33S" for 1 min 33 sec)
  contentUrl?: string;
  embedUrl?: string;
  interactionCount?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: params.name,
  description: params.description,
  thumbnailUrl: params.thumbnailUrl,
  uploadDate: params.uploadDate,
  ...(params.duration && { duration: params.duration }),
  ...(params.contentUrl && { contentUrl: params.contentUrl }),
  ...(params.embedUrl && { embedUrl: params.embedUrl }),
  ...(params.interactionCount && {
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: params.interactionCount,
    },
  }),
});

// Event schema for webinars, career fairs, workshops
export const generateEventSchema = (params: {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  location?: {
    name: string;
    address?: string;
  };
  organizer: {
    name: string;
    url?: string;
  };
  eventStatus?:
    | 'EventScheduled'
    | 'EventCancelled'
    | 'EventPostponed'
    | 'EventRescheduled';
  eventAttendanceMode?:
    | 'OnlineEventAttendanceMode'
    | 'OfflineEventAttendanceMode'
    | 'MixedEventAttendanceMode';
  onlineUrl?: string;
  image?: string;
  offers?: {
    price: string;
    currency: string;
    availability?: string;
  };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: params.name,
  startDate: params.startDate,
  endDate: params.endDate,
  description: params.description,
  eventStatus: `https://schema.org/${params.eventStatus || 'EventScheduled'}`,
  eventAttendanceMode: `https://schema.org/${params.eventAttendanceMode || 'OnlineEventAttendanceMode'}`,
  ...(params.location && {
    location: {
      '@type': 'Place',
      name: params.location.name,
      ...(params.location.address && { address: params.location.address }),
    },
  }),
  ...(params.onlineUrl && {
    location: {
      '@type': 'VirtualLocation',
      url: params.onlineUrl,
    },
  }),
  organizer: {
    '@type': 'Organization',
    name: params.organizer.name,
    ...(params.organizer.url && { url: params.organizer.url }),
  },
  ...(params.image && { image: params.image }),
  ...(params.offers && {
    offers: {
      '@type': 'Offer',
      price: params.offers.price,
      priceCurrency: params.offers.currency,
      availability: params.offers.availability || 'https://schema.org/InStock',
    },
  }),
});

// ItemList schema for lists/collections (blog index, tool list, etc.)
export const generateItemListSchema = (params: {
  name: string;
  description?: string;
  items: Array<{
    position: number;
    name: string;
    url: string;
    image?: string;
  }>;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: params.name,
  ...(params.description && { description: params.description }),
  itemListElement: params.items.map((item) => ({
    '@type': 'ListItem',
    position: item.position,
    name: item.name,
    url: item.url,
    ...(item.image && { image: item.image }),
  })),
});

// QAPage schema for Q&A content
export const generateQAPageSchema = (params: {
  question: string;
  answer: string;
  author?: string;
  datePublished?: string;
  upvoteCount?: number;
  acceptedAnswer?: boolean;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: {
    '@type': 'Question',
    name: params.question,
    text: params.question,
    ...(params.datePublished && { dateCreated: params.datePublished }),
    ...(params.upvoteCount && { upvoteCount: params.upvoteCount }),
    ...(params.author && {
      author: {
        '@type': 'Person',
        name: params.author,
      },
    }),
    acceptedAnswer: {
      '@type': 'Answer',
      text: params.answer,
      ...(params.datePublished && { dateCreated: params.datePublished }),
      ...(params.author && {
        author: {
          '@type': 'Person',
          name: params.author,
        },
      }),
    },
  },
});

// Person schema for author profiles (E-E-A-T)
export const generatePersonSchema = (params: {
  name: string;
  jobTitle?: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[]; // Social profiles
  email?: string;
  worksFor?: {
    name: string;
    url?: string;
  };
  alumniOf?: string;
  knowsAbout?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: params.name,
  ...(params.jobTitle && { jobTitle: params.jobTitle }),
  ...(params.description && { description: params.description }),
  ...(params.image && { image: params.image }),
  ...(params.url && { url: params.url }),
  ...(params.sameAs && { sameAs: params.sameAs }),
  ...(params.email && { email: params.email }),
  ...(params.worksFor && {
    worksFor: {
      '@type': 'Organization',
      name: params.worksFor.name,
      ...(params.worksFor.url && { url: params.worksFor.url }),
    },
  }),
  ...(params.alumniOf && { alumniOf: params.alumniOf }),
  ...(params.knowsAbout && { knowsAbout: params.knowsAbout }),
});

// Product schema for tools/services
export const generateProductSchema = (params: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  offers?: {
    price: string;
    currency: string;
    availability?: string;
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: params.name,
  description: params.description,
  ...(params.image && { image: params.image }),
  ...(params.brand && {
    brand: {
      '@type': 'Brand',
      name: params.brand,
    },
  }),
  ...(params.offers && {
    offers: {
      '@type': 'Offer',
      price: params.offers.price,
      priceCurrency: params.offers.currency,
      availability: params.offers.availability || 'https://schema.org/InStock',
    },
  }),
  ...(params.aggregateRating && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: params.aggregateRating.ratingValue,
      reviewCount: params.aggregateRating.reviewCount,
    },
  }),
});

// CollectionPage schema for index pages
export const generateCollectionPageSchema = (params: {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: params.name,
  description: params.description,
  url: params.url,
  ...(params.numberOfItems && {
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: params.numberOfItems,
    },
  }),
});

// SpecialAnnouncement schema for important updates
export const generateSpecialAnnouncementSchema = (params: {
  name: string;
  text: string;
  datePosted: string;
  expires?: string;
  category?: string;
  url?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SpecialAnnouncement',
  name: params.name,
  text: params.text,
  datePosted: params.datePosted,
  ...(params.expires && { expires: params.expires }),
  ...(params.category && { category: params.category }),
  ...(params.url && { url: params.url }),
  publisher: {
    '@type': 'Organization',
    name: 'Sproutern',
    url: 'https://www.sproutern.com',
  },
});

// LearningResource schema for educational content
export const generateLearningResourceSchema = (params: {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  teaches?: string[];
  timeRequired?: string;
  author?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LearningResource',
  name: params.name,
  description: params.description,
  url: params.url,
  ...(params.educationalLevel && { educationalLevel: params.educationalLevel }),
  ...(params.teaches && { teaches: params.teaches }),
  ...(params.timeRequired && { timeRequired: params.timeRequired }),
  ...(params.author && {
    author: {
      '@type': 'Person',
      name: params.author,
    },
  }),
  provider: {
    '@type': 'Organization',
    name: 'Sproutern',
    url: 'https://www.sproutern.com',
  },
  isAccessibleForFree: true,
  inLanguage: 'en',
});

// WebPage schema with Speakable (for voice search optimization)
export const generateWebPageWithSpeakableSchema = (params: {
  name: string;
  description: string;
  url: string;
  speakableSelectors?: string[]; // CSS selectors for speakable content
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: params.name,
  description: params.description,
  url: params.url,
  ...(params.speakableSelectors && {
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: params.speakableSelectors,
    },
  }),
});

// SearchAction for site search
export const generateSiteSearchAction = (searchUrlTemplate: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://www.sproutern.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: searchUrlTemplate,
    },
    'query-input': 'required name=search_term_string',
  },
});

// LocalBusiness schema for physical presence (if applicable)
export const generateLocalBusinessSchema = (params: {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  email?: string;
  priceRange?: string;
  openingHours?: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: params.name,
  description: params.description,
  address: {
    '@type': 'PostalAddress',
    ...params.address,
  },
  ...(params.geo && {
    geo: {
      '@type': 'GeoCoordinates',
      latitude: params.geo.latitude,
      longitude: params.geo.longitude,
    },
  }),
  ...(params.telephone && { telephone: params.telephone }),
  ...(params.email && { email: params.email }),
  ...(params.priceRange && { priceRange: params.priceRange }),
  ...(params.openingHours && {
    openingHoursSpecification: params.openingHours,
  }),
});
