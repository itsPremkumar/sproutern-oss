// Enhanced Geo-targeted SEO metadata for all major markets
// Optimized for: Germany, India, USA, China, Australia, Switzerland, Ireland, Sweden, + more

export type CountryCode =
  | 'IN' // India
  | 'DE' // Germany
  | 'US' // United States
  | 'CN' // China
  | 'AU' // Australia
  | 'CH' // Switzerland
  | 'IE' // Ireland
  | 'SE' // Sweden
  | 'GB' // United Kingdom
  | 'CA' // Canada
  | 'SG' // Singapore
  | 'NL' // Netherlands
  | 'FR' // France
  | 'JP' // Japan
  | 'GH' // Ghana
  | 'AE' // UAE
  | 'RU'; // Russia (Yandex)

// Country configuration with locale, currency, search engines
export const countryConfig: Record<
  CountryCode,
  {
    name: string;
    locale: string;
    hreflang: string;
    currency: string;
    searchEngines: string[];
    primaryLanguage: string;
    timezone: string;
  }
> = {
  IN: {
    name: 'India',
    locale: 'en_IN',
    hreflang: 'en-IN',
    currency: 'INR',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Asia/Kolkata',
  },
  DE: {
    name: 'Germany',
    locale: 'en_DE',
    hreflang: 'en-DE',
    currency: 'EUR',
    searchEngines: ['Google', 'Bing', 'Ecosia'],
    primaryLanguage: 'German',
    timezone: 'Europe/Berlin',
  },
  US: {
    name: 'United States',
    locale: 'en_US',
    hreflang: 'en-US',
    currency: 'USD',
    searchEngines: ['Google', 'Bing', 'Yahoo'],
    primaryLanguage: 'English',
    timezone: 'America/New_York',
  },
  CN: {
    name: 'China',
    locale: 'zh_CN',
    hreflang: 'zh-CN',
    currency: 'CNY',
    searchEngines: ['Baidu', 'Sogou', 'Bing'],
    primaryLanguage: 'Chinese',
    timezone: 'Asia/Shanghai',
  },
  AU: {
    name: 'Australia',
    locale: 'en_AU',
    hreflang: 'en-AU',
    currency: 'AUD',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Australia/Sydney',
  },
  CH: {
    name: 'Switzerland',
    locale: 'en_CH',
    hreflang: 'en-CH',
    currency: 'CHF',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'German',
    timezone: 'Europe/Zurich',
  },
  IE: {
    name: 'Ireland',
    locale: 'en_IE',
    hreflang: 'en-IE',
    currency: 'EUR',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Europe/Dublin',
  },
  SE: {
    name: 'Sweden',
    locale: 'en_SE',
    hreflang: 'en-SE',
    currency: 'SEK',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'Swedish',
    timezone: 'Europe/Stockholm',
  },
  GB: {
    name: 'United Kingdom',
    locale: 'en_GB',
    hreflang: 'en-GB',
    currency: 'GBP',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Europe/London',
  },
  CA: {
    name: 'Canada',
    locale: 'en_CA',
    hreflang: 'en-CA',
    currency: 'CAD',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'America/Toronto',
  },
  SG: {
    name: 'Singapore',
    locale: 'en_SG',
    hreflang: 'en-SG',
    currency: 'SGD',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Asia/Singapore',
  },
  NL: {
    name: 'Netherlands',
    locale: 'en_NL',
    hreflang: 'en-NL',
    currency: 'EUR',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'Dutch',
    timezone: 'Europe/Amsterdam',
  },
  FR: {
    name: 'France',
    locale: 'en_FR',
    hreflang: 'en-FR',
    currency: 'EUR',
    searchEngines: ['Google', 'Bing', 'Qwant'],
    primaryLanguage: 'French',
    timezone: 'Europe/Paris',
  },
  JP: {
    name: 'Japan',
    locale: 'en_JP',
    hreflang: 'en-JP',
    currency: 'JPY',
    searchEngines: ['Google', 'Yahoo Japan', 'Bing'],
    primaryLanguage: 'Japanese',
    timezone: 'Asia/Tokyo',
  },
  GH: {
    name: 'Ghana',
    locale: 'en_GH',
    hreflang: 'en-GH',
    currency: 'GHS',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'English',
    timezone: 'Africa/Accra',
  },
  AE: {
    name: 'UAE',
    locale: 'en_AE',
    hreflang: 'en-AE',
    currency: 'AED',
    searchEngines: ['Google', 'Bing'],
    primaryLanguage: 'Arabic',
    timezone: 'Asia/Dubai',
  },
  RU: {
    name: 'Russia',
    locale: 'ru_RU',
    hreflang: 'ru-RU',
    currency: 'RUB',
    searchEngines: ['Yandex', 'Google', 'Mail.ru'],
    primaryLanguage: 'Russian',
    timezone: 'Europe/Moscow',
  },
};

// Generate comprehensive hreflang tags for all supported countries
export const generateComprehensiveHrefLang = (currentPath: string) => {
  const baseUrl = 'https://sproutern.dpdns.org';

  const hreflangTags = Object.entries(countryConfig).map(([code, config]) => ({
    rel: 'alternate',
    hrefLang: config.hreflang,
    href: `${baseUrl}${currentPath}`,
  }));

  // Add x-default for search engines
  hreflangTags.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: `${baseUrl}${currentPath}`,
  });

  return hreflangTags;
};

// Country-specific page metadata
export const countryPageMetadata: Record<
  CountryCode,
  {
    home: { title: string; description: string; keywords: string };
    tools: { title: string; description: string };
    studyAbroad: { title: string; description: string };
  }
> = {
  IN: {
    home: {
      title:
        "Sproutern - India's #1 Career Platform | Free Tools & Interview Prep",
      description:
        'Get placement-ready with free CGPA calculator, resume checker, salary calculator, and 100+ interview guides. Trusted by 50,000+ Indian students.',
      keywords:
        'placements India, TCS interview, Infosys interview, CGPA to percentage, salary calculator India, campus placements',
    },
    tools: {
      title:
        'Free Career Tools for Indian Students | CGPA Calculator, Salary Calculator',
      description:
        'Use our free tools designed for Indian students - CGPA to percentage converter (Anna, VTU, Mumbai), salary calculator with Indian tax, and more.',
    },
    studyAbroad: {
      title:
        'Study Abroad from India | Complete Guide to USA, UK, Germany, Canada',
      description:
        'Comprehensive guide for Indian students planning to study abroad. Visa requirements, costs, scholarships, and university rankings.',
    },
  },
  DE: {
    home: {
      title: 'Sproutern - Career Platform for Students in Germany | Free Tools',
      description:
        'Free career tools for students in Germany. GPA calculator, resume optimization, interview preparation, and study abroad guides. Kostenlos!',
      keywords:
        'career Germany, student jobs Germany, internship Germany, GPA calculator, study in Germany, werkstudent',
    },
    tools: {
      title: 'Free Career Tools for Students in Germany | GPA Calculator',
      description:
        'Free tools for students in Germany - GPA/CGPA converter, salary calculator with German tax, resume checker with EU format support.',
    },
    studyAbroad: {
      title: 'Study in Germany Guide | Universities, Visa, Blocked Account',
      description:
        'Complete guide to studying in Germany. Free tuition universities, blocked account requirements, student visa process, and living costs.',
    },
  },
  US: {
    home: {
      title:
        'Sproutern - Career Platform for Students in USA | Free Interview Prep',
      description:
        'Get job-ready with free career tools. GPA calculator, resume checker, salary calculator, and interview prep for Google, Microsoft, Amazon, and more.',
      keywords:
        'internships USA, career tools, resume builder, interview prep, FAANG interview, college to career',
    },
    tools: {
      title:
        'Free Career Tools for US Students | GPA Calculator, Resume Checker',
      description:
        'Free tools for American students - 4.0 GPA calculator, resume score checker, salary calculator with US tax brackets, typing test.',
    },
    studyAbroad: {
      title: 'Study in USA Guide | Universities, F1 Visa, Scholarships',
      description:
        'Complete guide to studying in the USA. Top universities, F1 visa process, scholarships for international students, and cost of living.',
    },
  },
  CN: {
    home: {
      title: 'Sproutern - Career Platform for Students | 免费职业工具',
      description:
        'Free career tools for students worldwide. GPA calculator, resume checker, interview preparation guides. International career resources.',
      keywords:
        'career tools, GPA calculator, resume checker, interview prep, international students, study abroad China',
    },
    tools: {
      title: 'Free Career Tools | GPA Calculator, Resume Checker',
      description:
        'Free tools for students - GPA/CGPA converter supporting Chinese universities, resume optimization, and interview preparation.',
    },
    studyAbroad: {
      title: 'Study Abroad Guide for Chinese Students | USA, UK, Australia',
      description:
        'Complete guide for Chinese students planning to study abroad. IELTS/TOEFL requirements, visa process, and scholarship opportunities.',
    },
  },
  AU: {
    home: {
      title: 'Sproutern - Career Platform for Australian Students | Free Tools',
      description:
        'Free career tools for students in Australia. GPA calculator, resume checker with Australian format, interview preparation for ANZ companies.',
      keywords:
        'career Australia, graduate jobs Australia, internship Sydney, GPA calculator, resume AU format',
    },
    tools: {
      title: 'Free Career Tools for Australian Students | GPA Calculator',
      description:
        'Free tools for Australian students - 7-point GPA calculator, resume checker with AU format, salary calculator with Australian tax.',
    },
    studyAbroad: {
      title:
        'Study in Australia Guide | Universities, Student Visa, PR Pathway',
      description:
        'Complete guide to studying in Australia. Go8 universities, student visa (subclass 500), scholarship opportunities, and PR pathways.',
    },
  },
  CH: {
    home: {
      title:
        'Sproutern - Career Platform for Students in Switzerland | Free Tools',
      description:
        'Free career tools for students in Switzerland. GPA calculator, resume checker for Swiss companies, interview preparation guides.',
      keywords:
        'career Switzerland, internship Zurich, graduate jobs Switzerland, ETH career, Swiss banking careers',
    },
    tools: {
      title: 'Free Career Tools for Students in Switzerland',
      description:
        'Free tools for Swiss students - GPA/ECTS converter, resume checker, salary calculator with Swiss tax brackets.',
    },
    studyAbroad: {
      title: 'Study in Switzerland Guide | ETH, EPFL, Living Costs',
      description:
        'Complete guide to studying in Switzerland. ETH and EPFL requirements, student permit, living costs, and scholarship opportunities.',
    },
  },
  IE: {
    home: {
      title: 'Sproutern - Career Platform for Students in Ireland | Free Tools',
      description:
        'Free career tools for students in Ireland. GPA calculator, CV checker for Irish companies, interview prep for tech companies in Dublin.',
      keywords:
        'career Ireland, tech jobs Dublin, graduate program Ireland, internship Ireland, CV Ireland format',
    },
    tools: {
      title: 'Free Career Tools for Students in Ireland',
      description:
        'Free tools for Irish students - QQI/NFQ grade converter, CV checker, salary calculator with Irish tax, interview preparation.',
    },
    studyAbroad: {
      title: 'Study in Ireland Guide | Universities, Visa, Post-Study Work',
      description:
        'Complete guide to studying in Ireland. Trinity College, UCD requirements, visa process, and 2-year post-study work permit.',
    },
  },
  SE: {
    home: {
      title: 'Sproutern - Career Platform for Students in Sweden | Free Tools',
      description:
        'Free career tools for students in Sweden. GPA calculator, resume checker for Swedish companies, interview preparation guides.',
      keywords:
        'career Sweden, tech jobs Stockholm, graduate program Sweden, internship Sweden, Spotify careers',
    },
    tools: {
      title: 'Free Career Tools for Students in Sweden',
      description:
        'Free tools for Swedish students - ECTS grade converter, CV checker, salary calculator with Swedish tax, interview preparation.',
    },
    studyAbroad: {
      title: 'Study in Sweden Guide | Free Tuition, Universities, Scholarship',
      description:
        'Complete guide to studying in Sweden. KTH, Lund University requirements, SI scholarship, and residence permit process.',
    },
  },
  GB: {
    home: {
      title: 'Sproutern - Career Platform for UK Students | Free Tools',
      description:
        'Free career tools for students in UK. UCAS grade calculator, CV checker for UK companies, interview prep for graduate schemes.',
      keywords:
        'graduate schemes UK, internship London, career UK, CV checker, UCAS calculator, Big 4 UK',
    },
    tools: {
      title: 'Free Career Tools for UK Students | Grade Calculator, CV Checker',
      description:
        'Free tools for UK students - UCAS/A-Level grade converter, CV checker with UK format, salary calculator with UK tax.',
    },
    studyAbroad: {
      title: 'Study in UK Guide | Universities, Tier 4 Visa, Graduate Route',
      description:
        'Complete guide to studying in the UK. Russell Group universities, student visa, and 2-year graduate route visa.',
    },
  },
  CA: {
    home: {
      title: 'Sproutern - Career Platform for Canadian Students | Free Tools',
      description:
        'Free career tools for students in Canada. GPA calculator, resume checker for Canadian companies, interview preparation guides.',
      keywords:
        'career Canada, co-op Canada, internship Toronto, GPA calculator, resume CA format, PGWP',
    },
    tools: {
      title: 'Free Career Tools for Canadian Students | GPA Calculator',
      description:
        'Free tools for Canadian students - 4.0 GPA calculator, resume checker with Canadian format, salary calculator with CA tax.',
    },
    studyAbroad: {
      title: 'Study in Canada Guide | Universities, Study Permit, PGWP',
      description:
        'Complete guide to studying in Canada. Top universities, study permit process, PGWP, and Express Entry pathways.',
    },
  },
  SG: {
    home: {
      title:
        'Sproutern - Career Platform for Students in Singapore | Free Tools',
      description:
        'Free career tools for students in Singapore. GPA calculator, resume checker, interview prep for MNCs in Singapore.',
      keywords:
        'career Singapore, internship Singapore, NUS NTU careers, graduate program Singapore, tech jobs Singapore',
    },
    tools: {
      title: 'Free Career Tools for Students in Singapore',
      description:
        'Free tools for Singaporean students - CAP/GPA calculator, resume checker, salary calculator with SG tax.',
    },
    studyAbroad: {
      title: 'Study in Singapore Guide | NUS, NTU, Student Pass',
      description:
        'Complete guide to studying in Singapore. NUS, NTU requirements, student pass, and scholarship opportunities.',
    },
  },
  NL: {
    home: {
      title:
        'Sproutern - Career Platform for Students in Netherlands | Free Tools',
      description:
        'Free career tools for students in Netherlands. GPA calculator, CV checker for Dutch companies, interview preparation guides.',
      keywords:
        'career Netherlands, internship Amsterdam, graduate program Netherlands, tech jobs Amsterdam',
    },
    tools: {
      title: 'Free Career Tools for Students in Netherlands',
      description:
        'Free tools for Dutch students - ECTS grade converter, CV checker, salary calculator with Dutch tax.',
    },
    studyAbroad: {
      title:
        'Study in Netherlands Guide | Universities, Visa, Orientation Year',
      description:
        'Complete guide to studying in Netherlands. TU Delft, UvA requirements, and zoekjaar (orientation year) visa.',
    },
  },
  FR: {
    home: {
      title: 'Sproutern - Career Platform for Students in France | Free Tools',
      description:
        'Free career tools for students in France. GPA calculator, CV checker for French companies, interview preparation guides.',
      keywords:
        'career France, stage France, internship Paris, graduate program France, HEC careers',
    },
    tools: {
      title: 'Free Career Tools for Students in France',
      description:
        'Free tools for French students - ECTS grade converter, CV europass format, salary calculator with French tax.',
    },
    studyAbroad: {
      title: 'Study in France Guide | Grandes Écoles, Visa, Scholarships',
      description:
        'Complete guide to studying in France. Grande écoles, Campus France process, and Eiffel scholarship.',
    },
  },
  JP: {
    home: {
      title: 'Sproutern - Career Platform for Students in Japan | Free Tools',
      description:
        'Free career tools for students in Japan. GPA calculator, resume checker, interview preparation for Japanese companies.',
      keywords:
        'career Japan, internship Tokyo, graduate program Japan, shukatsu, Japanese companies careers',
    },
    tools: {
      title: 'Free Career Tools for Students in Japan',
      description:
        'Free tools for students in Japan - GPA converter, resume/rirekisho checker, salary calculator with Japanese tax.',
    },
    studyAbroad: {
      title:
        'Study in Japan Guide | Universities, Student Visa, MEXT Scholarship',
      description:
        'Complete guide to studying in Japan. Top universities, student visa, MEXT scholarship, and language requirements.',
    },
  },
  GH: {
    home: {
      title: 'Sproutern - Career Platform for Students in Ghana | Free Tools',
      description:
        'Free career tools for students in Ghana. GPA calculator, CV checker, interview preparation for African and international companies.',
      keywords:
        'career Ghana, internship Accra, graduate jobs Ghana, tech jobs Africa',
    },
    tools: {
      title: 'Free Career Tools for Students in Ghana',
      description:
        'Free tools for Ghanaian students - GPA calculator, CV checker, resume templates, and interview preparation.',
    },
    studyAbroad: {
      title: 'Study Abroad from Ghana | Scholarships, Visa Guide',
      description:
        'Complete guide for Ghanaian students planning to study abroad. Scholarship opportunities and visa requirements.',
    },
  },
  AE: {
    home: {
      title: 'Sproutern - Career Platform for Students in UAE | Free Tools',
      description:
        'Free career tools for students in UAE. GPA calculator, CV checker for Gulf companies, interview preparation guides.',
      keywords:
        'career UAE, internship Dubai, graduate jobs UAE, Abu Dhabi careers, expat jobs Dubai',
    },
    tools: {
      title: 'Free Career Tools for Students in UAE',
      description:
        'Free tools for UAE students - GPA calculator, CV checker with Gulf format, salary calculator.',
    },
    studyAbroad: {
      title: 'Study Abroad from UAE | Universities, Visa Guide',
      description:
        'Complete guide for UAE students planning to study abroad. Top destinations and scholarship opportunities.',
    },
  },
  RU: {
    home: {
      title:
        'Sproutern - Карьерная платформа для студентов | Бесплатные инструменты',
      description:
        'Бесплатные карьерные инструменты для студентов. Калькулятор GPA, проверка резюме, подготовка к собеседованию в международных компаниях.',
      keywords:
        'карьера студент, стажировка, резюме, подготовка к собеседованию, работа для студентов, career Russia, internship Moscow',
    },
    tools: {
      title: 'Бесплатные карьерные инструменты для студентов',
      description:
        'Бесплатные инструменты - калькулятор GPA, проверка резюме, калькулятор зарплаты, подготовка к собеседованию.',
    },
    studyAbroad: {
      title: 'Обучение за рубежом | Университеты, Визы, Стипендии',
      description:
        'Полное руководство для студентов, планирующих учебу за рубежом. Стипендии и требования к визе.',
    },
  },
};

// Generate country-specific Organization schema
export const generateCountryOrganizationSchema = (country: CountryCode) => {
  const config = countryConfig[country];
  const metadata = countryPageMetadata[country];

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `Sproutern ${config.name}`,
    url: 'https://sproutern.dpdns.org',
    logo: 'https://sproutern.dpdns.org/logo.jpg',
    description: metadata.home.description,
    areaServed: {
      '@type': 'Country',
      name: config.name,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@sproutern.com',
      availableLanguage: config.primaryLanguage,
    },
    sameAs: [
      'https://www.linkedin.com/company/sproutern',
      'https://twitter.com/sproutern',
      'https://www.instagram.com/sproutern',
    ],
  };
};

// Baidu-specific meta tags for China SEO
export const getBaiduMetaTags = () => ({
  'baidu-site-verification': '', // Add your Baidu verification code when available
  'applicable-device': 'pc,mobile',
  'mobile-agent': 'format=xhtml; url=https://sproutern.dpdns.org',
});

// Yandex-specific meta tags for Russia (if needed)
export const getYandexMetaTags = () => ({
  'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || 'YOUR_YANDEX_VERIFICATION',
});

// Get priority countries based on traffic analytics
export const getPriorityCountries = (): CountryCode[] => [
  'DE',
  'IN',
  'US',
  'CN',
  'AU',
  'CH',
  'IE',
  'SE',
  'GB',
  'CA',
];

// Export all hreflang values for sitemap generation
export const getAllHreflangValues = (): string[] =>
  Object.values(countryConfig).map((c) => c.hreflang);
