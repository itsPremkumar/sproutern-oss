import type { Metadata } from 'next';
import {
  generateHrefLangTags,
  generateGeoOrganizationSchema,
  generateGeoLocalBusinessSchema,
  generateGeoAggregateOfferSchema,
} from './geo-metadata';

import { generateBreadcrumbSchema } from './schema-generators';
import { generateAIMetadata } from './ai-metadata-generator';

const siteUrl = 'https://www.sproutern.com';

// Complete SEO configuration for all important pages with geo-targeting
export const completePageSEO = {
  // HOME PAGE
  home: {
    title:
      'Sproutern - Free Career Tools, Interview Prep & Study Abroad Resources',
    description:
      'Use free career tools, real interview experiences, resume help, salary calculators, and study abroad resources built for students and freshers in India.',
    keywords:
      'career tools for students, interview preparation, cgpa converter, salary calculator India, resume checker, study abroad resources, career guidance, interview experiences, company interviews India, student resources, freshers career platform',
    canonical: siteUrl,
    ...generateAIMetadata({
      summary:
        'Sproutern is a free career platform for students offering 90+ tools including CGPA Converter, Salary Calculator, and authentic interview experiences from top companies.',
      contentType: 'educational',
      primaryTopic: 'Career Development & Education',
      audience: 'Students, Graduates, Job Seekers',
      confidence: 'high',
    }),
    ogTitle: 'Sproutern - Career Tools, Interview Prep & Study Abroad Guides',
    ogDescription:
      'Free career tools, interview prep, resume help, salary calculators, and study abroad guides for students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Sproutern - Free Career Tools for Students',
    twitterDescription:
      'Career tools, interview prep, resume help, and study abroad resources for students and freshers.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/'),
    schema: [
      generateGeoOrganizationSchema('IN'),
      generateGeoAggregateOfferSchema('IN'),
      {
        '@type': 'WebSite',
        name: 'Sproutern',
        url: siteUrl,
        description:
          "India's leading interview preparation and career resources platform for students",
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/interview-experiences?search={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#team`,
        name: 'Sproutern Team',
        alternateName: [
          'Sproutern Editorial Team',
          'Sproutern Career Experts',
        ],
        jobTitle: 'Editorial Team',
        url: `${siteUrl}/about`,
        image: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.jpg`,
          width: 400,
          height: 400,
          caption: 'Sproutern Team',
          creditText: 'Sproutern',
          creator: {
            '@type': 'Organization',
            name: 'Sproutern',
          },
          copyrightNotice: '© 2026 Sproutern. All rights reserved.',
          license: 'https://www.sproutern.com/terms',
          acquireLicensePage: 'https://www.sproutern.com/contact',
        },
        description:
          'A team of career experts and technologists dedicated to helping students and freshers build successful careers through free tools and resources.',
        worksFor: {
          '@type': 'Organization',
          '@id': `${siteUrl}#organization`,
          name: 'Sproutern',
          url: siteUrl,
        },
        knowsAbout: [
          'Career Guidance',
          'Interview Preparation',
          'Resume Building',
          'EdTech',
          'Student Success',
        ],
        sameAs: [
          'https://www.linkedin.com/company/sproutern',
          'https://github.com/sproutern',
          'https://www.instagram.com/sproutern',
          `${siteUrl}/about`,
        ],
      },
      // SoftwareApplication schemas for popular tools - enables rich results
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/tools/cgpa-converter#app`,
        name: 'CGPA to Percentage Calculator',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web Browser',
        url: `${siteUrl}/tools/cgpa-converter`,
        description:
          'Free online CGPA to percentage converter for all Indian universities. Supports Anna University, VTU, JNTU, Mumbai University and 25+ more.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '12500',
          bestRating: '5',
          worstRating: '1',
        },
        featureList: [
          'Support for 25+ universities',
          'Instant calculation',
          'No signup required',
          'Mobile friendly',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/tools/typing-test#app`,
        name: 'Typing Speed Test',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web Browser',
        url: `${siteUrl}/tools/typing-test`,
        description:
          'Free online typing speed test. Measure your WPM, accuracy and improve your typing skills for job assessments.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.7',
          ratingCount: '8200',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteUrl}/tools/salary-calculator#app`,
        name: 'Salary Calculator India',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web Browser',
        url: `${siteUrl}/tools/salary-calculator`,
        description:
          'Free CTC to in-hand salary calculator for Indian employees. Calculate take-home pay with tax deductions, PF, and other components.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '5400',
          bestRating: '5',
          worstRating: '1',
        },
      },
      // FAQPage Schema for AI Answer Engine Optimization (AEO)
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Sproutern free for students?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Sproutern is completely free for students. Our mission is to democratize access to career resources. We provide all our tools, interview experiences, and guides at no cost.',
            },
          },
          {
            '@type': 'Question',
            name: 'What career tools does Sproutern offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We offer 90+ free career tools including a CGPA to Percentage Converter, AI Resume Score Checker, Salary Calculator for India, Typing Speed Test, and document generators for students.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are the interview experiences real?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, all interview experiences on Sproutern are authentic and shared by students who have successfully cleared interviews at top companies like Bank of America, Barclays, Optum, and others.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can Sproutern help with campus placements?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We provide comprehensive resources including real interview questions, technical and HR interview guides, resume templates, and skill development roadmaps to help you ace your campus placements.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the resume builder ATS-friendly?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, our resume templates and guides are designed to be ATS (Application Tracking System) friendly to ensure your profile gets shortlisted by potential recruiters.',
            },
          },
        ],
      },
      // Speakable Schema for Voice Search (Google Assistant/Alexa)
      {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.text-lg.text-muted-foreground', '#faq-section'],
      },
    ],
  },

  // INTERVIEW EXPERIENCES PAGE
  interviewExperiences: {
    title: 'Real Interview Experiences - Top Company Questions & Tips',
    description:
      'Read authentic interview experiences from students placed at top companies like Bank of America, Barclays, Optum, Citi, Trimble, and more. Learn interview questions, preparation tips, and selection strategies.',
    keywords:
      'interview experiences, Bank of America interview questions, Barclays interview experience, Optum interview, Citi interview questions, campus placement interviews, technical interview questions, HR interview, coding interview preparation, interview tips',
    canonical: `${siteUrl}/interview-experiences`,
    ogTitle: 'Real Interview Experiences from Top Companies',
    ogDescription:
      'Authentic interview experiences from Bank of America, Barclays, Citi, Optum & more. Learn from students who made it through.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Real Interview Experiences',
    twitterDescription:
      'Interview experiences from top companies. Questions, tips & strategies.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/interview-experiences'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Interview Experiences',
        description:
          'Collection of real interview experiences from students placed at top companies',
        url: `${siteUrl}/interview-experiences`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Company Interview Experiences',
          numberOfItems: 10,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Bank of America Interview Experience',
              url: `${siteUrl}/interview-experiences/bank-of-america`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Barclays Interview Experience',
              url: `${siteUrl}/interview-experiences/barclays`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Optum Interview Experience',
              url: `${siteUrl}/interview-experiences/optum`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Citi Interview Experience',
              url: `${siteUrl}/interview-experiences/citi`,
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Trimble Interview Experience',
              url: `${siteUrl}/interview-experiences/trimble`,
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Societe Generale Interview Experience',
              url: `${siteUrl}/interview-experiences/societe-generale`,
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'NortonLifeLock Interview Experience',
              url: `${siteUrl}/interview-experiences/nortonlifelock`,
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'Verizon Interview Experience',
              url: `${siteUrl}/interview-experiences/verizon`,
            },
          ],
        },
      },
    ],
  },

  // INTERNSHIPS LISTING PAGE
  internships: {
    title: 'Internships for Students | Remote, On-site & Startup Roles',
    description:
      'Find student internships across startups and top companies. Explore role details, location, stipend, and apply directly to opportunities that match your goals.',
    keywords:
      'student internships, paid internships, remote internships, startup internships, internships India, internships for freshers',
    canonical: `${siteUrl}/internships`,
    ogTitle: 'Internships for Students',
    ogDescription:
      'Browse internships by role, location, and stipend. Apply directly to verified opportunities.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Internships for Students',
    twitterDescription:
      'Explore verified internships and apply directly from one platform.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/internships'),
    schema: [
      generateGeoAggregateOfferSchema('IN'),
      {
        '@type': 'CollectionPage',
        name: 'Internships',
        description:
          'Collection of internship opportunities for students and fresh graduates',
        url: `${siteUrl}/internships`,
      },
    ],
  },

  // OFF-CAMPUS DRIVES PAGE
  offCampusDrives: {
    title: 'Off-Campus Drives | Latest Job Openings for Freshers',
    description:
      'Find latest off-campus drive details for freshers. Get updates on walk-in drives, eligibility criteria, and application deadlines.',
    keywords:
      'off campus drives, fresher jobs, walk-in drives, campus recruitment, job openings, 2025 drives, recruitment drives, hiring drives',
    canonical: `${siteUrl}/off-campus-drives`,
    ogTitle: 'Off-Campus Drives',
    ogDescription:
      'Latest off-campus drives for freshers. Walk-in drives, eligibility & deadlines.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Off-Campus Drives',
    twitterDescription: 'Latest job openings for freshers ',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/off-campus-drives'),
    schema: [],
  },

  // BLOG PAGE
  blog: {
    title: 'Career Blog | Interview Tips, Resume Guides & Job Advice',
    description:
      'Read expert career advice, internship tips, interview preparation guides, and success stories. Get insights from industry professionals.',
    keywords:
      'career blog, internship tips, interview preparation, career advice, resume tips, job search, career guidance, student success stories',
    canonical: `${siteUrl}/blog`,
    ogTitle: 'Career Blog',
    ogDescription: 'Expert career advice, internship tips & interview guides',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Career Blog',
    twitterDescription: 'Internship tips, interview guides & career advice',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/blog'),
    schema: [],
  },

  // CGPA CONVERTER TOOL (New dedicated config for AEO)
  cgpaConverter: {
    title: 'CGPA to Percentage Converter | 25+ University Formulas',
    description:
      'Convert your CGPA to percentage instantly. Supports Anna University, VTU, JNTU, Mumbai University, AKTU, and 25+ more. Official formulas verified.',
    keywords:
      'cgpa converter, cgpa to percentage, anna university cgpa calculator, vtu cgpa calculator, jntu cgpa to percentage, cgpa calculator india',
    canonical: `${siteUrl}/tools/cgpa-converter`,
    ogTitle: 'CGPA to Percentage Converter',
    ogDescription:
      'Instantly convert CGPA to percentage for 25+ Indian Universities.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'CGPA Converter',
    twitterDescription: 'Convert CGPA to percentage instantly',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/cgpa-converter'),
    schema: [
      {
        '@type': 'HowTo',
        name: 'How to Convert CGPA to Percentage',
        description:
          'Step-by-step guide to convert your CGPA or SGPA to percentage using official university formulas.',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Enter your CGPA',
            text: 'Enter your current Cumulative Grade Point Average (CGPA) or Semester Grade Point Average (SGPA) in the input field.',
            image: `${siteUrl}/opengraph.jpg`,
            url: `${siteUrl}/tools/cgpa-converter#step1`,
          },
          {
            '@type': 'HowToStep',
            name: 'Select University',
            text: 'Choose your university from the dropdown list (e.g., Anna University, VTU, Mumbai University) to apply the correct conversion formula.',
            image: `${siteUrl}/opengraph.jpg`,
            url: `${siteUrl}/tools/cgpa-converter#step2`,
          },
          {
            '@type': 'HowToStep',
            name: 'View Result',
            text: 'The calculator instantly displays your percentage equivalent and your class/division based on the university grading scale.',
            image: `${siteUrl}/opengraph.jpg`,
            url: `${siteUrl}/tools/cgpa-converter#step3`,
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'CGPA to Percentage Converter',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // RESOURCES PAGE
  resources: {
    title:
      'Free Career Resources for Students | Resume, Interview & Skill Guides',
    description:
      'Access free career resources including resume templates, ATS keyword guides, LinkedIn and GitHub profile optimization, interview guides, cover letters, and skill-building support for students and fresh graduates.',
    keywords:
      'career resources, resume templates, cover letters, interview cheatsheet, aptitude formulas, resume guide, linkedin optimization, github profile guide, ATS resume keywords, career tools, job search resources, education platform India, student resources',
    canonical: `${siteUrl}/resources`,
    ogTitle: 'Free Career Resources for Students',
    ogDescription:
      'Resume templates, interview guides, and career resources for students and fresh graduates.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Career Resources',
    twitterDescription: 'Resume templates, interview guides & more',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Career Resources Hub',
        description:
          'Comprehensive career resources for students including resume templates, interview guides, and skill development materials.',
        url: `${siteUrl}/resources`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Career Resources',
          numberOfItems: 12,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Resume Writing Guide',
              url: `${siteUrl}/resources/resume-guide`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Interview Preparation',
              url: `${siteUrl}/resources/interview-prep`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Career Planning',
              url: `${siteUrl}/resources/career-planning`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Skill Development',
              url: `${siteUrl}/resources/skill-development`,
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Networking Guide',
              url: `${siteUrl}/resources/networking`,
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Resume Templates',
              url: `${siteUrl}/resources/resume-templates`,
            },
            {
              '@type': 'ListItem',
              position: 7,
              name: 'Interview Cheat Sheet',
              url: `${siteUrl}/resources/interview-cheatsheet`,
            },
            {
              '@type': 'ListItem',
              position: 8,
              name: 'LinkedIn Optimization',
              url: `${siteUrl}/resources/linkedin-optimization`,
            },
            {
              '@type': 'ListItem',
              position: 9,
              name: 'Salary Negotiation Guide',
              url: `${siteUrl}/resources/salary-negotiation`,
            },
            {
              '@type': 'ListItem',
              position: 10,
              name: 'ATS Resume Keywords Guide',
              url: `${siteUrl}/resources/ats-resume-keywords`,
            },
            {
              '@type': 'ListItem',
              position: 11,
              name: 'GitHub Profile Guide',
              url: `${siteUrl}/resources/github-profile`,
            },
            {
              '@type': 'ListItem',
              position: 12,
              name: 'Industry Insights',
              url: `${siteUrl}/resources/industry-insights`,
            },
          ],
        },
      },
    ],
  },

  // TOOLS PAGE
  tools: {
    title:
      '90+ Free Career Tools for Students | Resume, Salary, GPA & More',
    description:
      'Use 90+ free career tools including resume checkers, salary calculators, GPA converters, aptitude tests, and planning tools for students and early-career professionals.',
    keywords:
      'career tools, CGPA converter, salary calculator, resume checker, EMI calculator, cover letter generator, career roadmap, typing test, aptitude test, free tools for students India',
    canonical: `${siteUrl}/tools`,
    ...generateAIMetadata({
      summary:
        'Collection of 90+ free career tools including CGPA to Percentage Converter, In-Hand Salary Calculator (India), and AI Resume Score Checker.',
      contentType: 'tool',
      primaryTopic: 'Educational Tools',
      confidence: 'high',
    }),
    ogTitle: '90+ Free Career Tools for Students',
    ogDescription:
      'Free tools for resumes, salary planning, GPA conversion, interview prep, and more.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '90+ Free Career Tools',
    twitterDescription:
      'Resume, salary, GPA, interview, and planning tools for students.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Free Career Tools for Students',
        description:
          'Collection of 90+ free career tools designed for Indian students including calculators, generators, and assessment tools.',
        url: `${siteUrl}/tools`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Career Tools',
          numberOfItems: 90,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Resume Score Checker',
              url: `${siteUrl}/tools/resume-score-checker`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'CGPA to Percentage Converter',
              url: `${siteUrl}/tools/cgpa-converter`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Salary Calculator',
              url: `${siteUrl}/tools/salary-calculator`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Aptitude Mock Test',
              url: `${siteUrl}/tools/aptitude-test`,
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Typing Speed Test',
              url: `${siteUrl}/tools/typing-test`,
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Career Roadmap Generator',
              url: `${siteUrl}/tools/career-roadmap`,
            },
          ],
        },
      },
    ],
  },

  // SKILL TEST PAGE
  skillTest: {
    title: 'Online Skill Test | Aptitude, Technical & Coding Tests',
    description:
      'Take free online skill tests including aptitude, technical, and coding assessments. Get instant results and improve your skills.',
    keywords:
      'skill test, online test, aptitude test, technical test, coding test, assessment, practice test, interview preparation',
    canonical: `${siteUrl}/skill-test`,
    ogTitle: 'Skill Test',
    ogDescription: 'Free online aptitude, technical & coding tests',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Skill Test',
    twitterDescription: 'Take free online skill tests',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/skill-test'),
    schema: [],
  },

  // RESUME OPTIMIZER PAGE
  resumeOptimizer: {
    title: 'AI Resume Optimizer | Improve Your Resume Score',
    description:
      'Use AI-powered resume optimizer to improve your resume. Get instant feedback, suggestions, and score improvement tips.',
    keywords:
      'resume optimizer, AI resume, resume improvement, resume score, resume feedback, resume tips, resume builder, career tools',
    canonical: `${siteUrl}/resume-optimizer`,
    ogTitle: 'AI Resume Optimizer',
    ogDescription: 'Improve your resume with AI. Get instant feedback & score',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Resume Optimizer',
    twitterDescription: 'AI-powered resume improvement tool',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resume-optimizer'),
    schema: [],
  },

  // ABOUT PAGE
  about: {
    title: 'About Sproutern | Our Mission & Team',
    description:
      'Learn about Sproutern, our mission to bridge the gap between talented students and innovative startups, and the team behind the platform.',
    keywords:
      'about sproutern, internship platform, student career platform, startup hiring, our mission, our team, company story',
    canonical: `${siteUrl}/about`,
    ogTitle: 'About Sproutern - Our Mission & Team',
    ogDescription: "Learn about Sproutern's mission and the team behind it.",
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'About Sproutern - Our Mission & Team',
    twitterDescription: 'Connecting students with startup opportunities',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/about'),
    schema: [
      generateGeoOrganizationSchema('IN'),
      {
        '@type': 'Person',
        name: 'Sproutern Team',
        jobTitle: 'Editorial Team',
        url: `${siteUrl}/about`,
        sameAs: [
          'https://www.linkedin.com/company/sproutern',
          'https://twitter.com/sproutern',
          'https://www.instagram.com/sproutern',
        ],
        image: `${siteUrl}/logo.jpg`,
        description:
          'The team behind Sproutern, bridging the gap between students and startups.',
      },
    ],
  },

  // TEAM PAGE
  team: {
    title: 'Sproutern Team - Career Experts & Technologists',
    description:
      'Meet the team behind Sproutern. A group of career experts and technologists dedicated to helping students and freshers build successful careers.',
    keywords:
      'sproutern team, career experts, edtech team, student mentors, tech innovators',
    canonical: `${siteUrl}/team`,
    ...generateAIMetadata({
      summary:
        'The Sproutern Team consists of career experts and technologists dedicated to helping students worldwide build successful careers through free tools and resources.',
      contentType: 'profile',
      primaryTopic: 'EdTech Team',
      audience: 'Students, Developers',
      confidence: 'high',
    }),
    ogTitle: 'Sproutern Team - Career Experts & Technologists',
    ogDescription:
      'Meet the experts behind Sproutern dedicated to student career success worldwide.',
    ogImage: `${siteUrl}/logo.jpg`,
    ogType: 'profile',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Sproutern Team - Career Experts & Technologists',
    twitterDescription:
      'Experts helping students worldwide launch their careers.',
    twitterImage: `${siteUrl}/logo.jpg`,
    hreflang: generateHrefLangTags('/team'),
    schema: [
      generateGeoOrganizationSchema('IN'),
      {
        '@type': 'Organization',
        '@id': `${siteUrl}#organization`,
        name: 'Sproutern Team',
        url: `${siteUrl}/about`,
        logo: `${siteUrl}/logo.jpg`,
        description: 'The editorial and technical team behind Sproutern career platform.',
        sameAs: [
          'https://www.linkedin.com/company/sproutern',
          'https://twitter.com/sproutern',
          'https://github.com/sproutern',
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'About', url: `${siteUrl}/about` },
        { name: 'Team', url: `${siteUrl}/about` },
      ]),
    ],
  },

  // CONTACT PAGE
  contact: {
    title: 'Contact Us | Get in Touch with Sproutern Support Team',
    description:
      "Have questions? Contact Sproutern's support team. We're here to help students find internships and startups hire talent. Get in touch today.",
    keywords:
      'contact sproutern, customer support, help center, get in touch, contact form, support email, customer service',
    canonical: `${siteUrl}/contact`,
    ogTitle: 'Contact Sproutern',
    ogDescription: 'Get in touch with Sproutern support team',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contact Us',
    twitterDescription: 'Contact Sproutern support team',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/contact'),
    schema: [],
  },

  // FAQ PAGE
  faq: {
    title: 'FAQ | Frequently Asked Questions About Internships',
    description:
      'Find answers to common questions about internships, applications, resume building, and using Sproutern. Get help with your career journey.',
    keywords:
      'FAQ, frequently asked questions, internship questions, career questions, job search help, internship guide, help center',
    canonical: `${siteUrl}/faq`,
    ogTitle: 'FAQ',
    ogDescription: 'Frequently asked questions about internships & careers',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'FAQ',
    twitterDescription: 'Common questions about internships',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/faq'),
    schema: [],
  },

  // TESTIMONIALS PAGE
  testimonials: {
    title: 'Student Success Stories | Testimonials & Reviews',
    description:
      "Read success stories from students who landed their dream internships through Sproutern. See how we've helped 10,000+ students start their careers.",
    keywords:
      'student testimonials, success stories, internship reviews, career success, student reviews, user testimonials, success cases',
    canonical: `${siteUrl}/testimonials`,
    ogTitle: 'Student Success Stories',
    ogDescription: 'Read success stories from students who landed internships',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Success Stories',
    twitterDescription: 'Student testimonials & success stories',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/testimonials'),
    schema: [],
  },

  // SHARE EXPERIENCE PAGE (formerly post-internship)
  postInternship: {
    title: 'Share Your Interview Experience | Help Students Prepare',
    description:
      'Share your interview experience and help fellow students prepare for their dream jobs. Contribute to the community and make a difference.',
    keywords:
      'share interview experience, interview preparation, campus placement tips, help students, interview community, career guidance',
    canonical: `${siteUrl}/interview-experiences`,
    ogTitle: 'Share Your Interview Experience',
    ogDescription:
      'Share your experience & help students prepare for interviews',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Share Interview Experience',
    twitterDescription:
      'Help students prepare by sharing your interview journey',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/interview-experiences'),
    schema: [],
  },

  // SIGNIN PAGE
  signin: {
    title: 'Sign In | Login to Your Sproutern Account',
    description:
      'Sign in to access your Sproutern account. Track applications, save internships, and manage your profile.',
    keywords: 'sign in, login, student login, account access, user login',
    canonical: `${siteUrl}/signin`,
    ogTitle: 'Sign In',
    ogDescription: 'Login to your Sproutern account',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Sign In',
    twitterDescription: 'Login to your account',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/signin'),
    schema: [],
  },

  // SIGNUP PAGE
  signup: {
    title: 'Sign Up | Create Your Free Sproutern Account',
    description:
      'Create your free Sproutern account and start applying to internships. Get access to AI resume optimizer, skill tests, and career resources.',
    keywords:
      'sign up, create account, register, student registration, free account, join sproutern',
    canonical: `${siteUrl}/signup`,
    ogTitle: 'Sign Up',
    ogDescription: 'Create your free Sproutern account',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Sign Up',
    twitterDescription: 'Create your free account',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/signup'),
    schema: [],
  },

  // PRIVACY POLICY PAGE
  privacyPolicy: {
    title: 'Privacy Policy | How Sproutern Protects Your Data',
    description:
      "Read Sproutern's privacy policy to understand how we collect, use, and protect your personal information.",
    keywords:
      'privacy policy, data protection, user privacy, terms of service, data security',
    canonical: `${siteUrl}/privacy-policy`,
    ogTitle: 'Privacy Policy',
    ogDescription: 'How Sproutern protects your data',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Privacy Policy',
    twitterDescription: 'Data protection & privacy',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/privacy-policy'),
    schema: [],
  },

  // TERMS AND CONDITIONS PAGE
  termsAndConditions: {
    title: 'Terms and Conditions | Sproutern User Agreement',
    description:
      "Read Sproutern's terms and conditions. Understand your rights and responsibilities when using our platform.",
    keywords:
      'terms and conditions, user agreement, terms of service, legal, platform rules',
    canonical: `${siteUrl}/terms-and-conditions`,
    ogTitle: 'Terms and Conditions',
    ogDescription: 'Sproutern user agreement & terms',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Terms & Conditions',
    twitterDescription: 'User agreement & platform rules',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/terms-and-conditions'),
    schema: [],
  },

  // REQUESTS PAGE
  requests: {
    title: 'Browse Student Internship Requests | Hire Top Talent',
    description:
      'Browse internship requests from ambitious students. Find candidates with the skills you need for your startup.',
    keywords:
      'student requests, hire interns, find candidates, startup hiring, student profiles',
    canonical: `${siteUrl}/requests`,
    ogTitle: 'Browse Student Requests',
    ogDescription: 'Find candidates with the skills you need',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Browse Student Requests',
    twitterDescription: 'Find candidates with the skills you need',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/requests'),
    schema: [],
  },

  // POST REQUEST PAGE
  postRequest: {
    title: 'Post Internship Request | Find Your Dream Internship',
    description:
      'Post your internship request and let startups find you. Showcase your skills and preferences to get hired.',
    keywords:
      'post internship request, find internship, student profile, job search, career opportunities',
    canonical: `${siteUrl}/post-request`,
    ogTitle: 'Post Internship Request',
    ogDescription: 'Let startups find you. Post your request today.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Post Internship Request',
    twitterDescription: 'Let startups find you. Post your request today.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/post-request'),
    schema: [],
  },

  // PROFILE PAGE
  profile: {
    title: 'My Profile | Manage Your Career Journey',
    description:
      'Manage your Sproutern profile, update your skills, and track your internship applications.',
    keywords:
      'user profile, student profile, startup profile, dashboard, account management',
    canonical: `${siteUrl}/profile`,
    ogTitle: 'My Profile',
    ogDescription: 'Manage your career journey on Sproutern',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'My Profile',
    twitterDescription: 'Manage your career journey',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/profile'),
    schema: [],
  },

  // SITEMAP PAGE
  sitemapPage: {
    title: 'Sitemap | Explore All Pages on Sproutern',
    description:
      'Navigate through all pages on Sproutern including internships, tools, resources, and blog posts.',
    keywords: 'sitemap, site map, website navigation, all pages',
    canonical: `${siteUrl}/html-sitemap`,
    ogTitle: 'Sitemap',
    ogDescription: 'Explore all pages on Sproutern',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Sitemap',
    twitterDescription: 'Explore all pages on Sproutern',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/html-sitemap'),
    schema: [],
  },

  // FORGOT PASSWORD PAGE
  forgotPassword: {
    title: 'Forgot Password | Reset Your Sproutern Account Password',
    description:
      'Reset your password to regain access to your Sproutern account.',
    keywords: 'forgot password, reset password, account recovery, login help',
    canonical: `${siteUrl}/forgot-password`,
    ogTitle: 'Forgot Password',
    ogDescription: 'Reset your Sproutern account password',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Forgot Password',
    twitterDescription: 'Reset your account password',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/forgot-password'),
    schema: [],
  },

  // DISCLAIMER PAGE
  disclaimer: {
    title: 'Disclaimer',
    description:
      'Read the disclaimer for Sproutern to understand the terms of use, our liabilities, and the informational nature of our content.',
    keywords: 'disclaimer, terms of use, liability, informational purpose',
    canonical: `${siteUrl}/disclaimer`,
    ogTitle: 'Disclaimer',
    ogDescription: 'Read our disclaimer and terms of use',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Disclaimer',
    twitterDescription: 'Read our disclaimer and terms of use',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/disclaimer'),
    schema: [],
  },

  // COOKIE POLICY PAGE
  cookiePolicy: {
    title: 'Cookie Policy | How Sproutern Uses Cookies',
    description:
      'Learn about how Sproutern uses cookies to improve your experience. Understand what cookies we use, why we use them, and how to manage your cookie preferences.',
    keywords:
      'cookie policy, cookies, tracking, privacy, data collection, browser cookies, cookie management',
    canonical: `${siteUrl}/cookie-policy`,
    ogTitle: 'Cookie Policy',
    ogDescription: 'Learn about how Sproutern uses cookies',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Cookie Policy',
    twitterDescription: 'Cookie usage and management',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/cookie-policy'),
    schema: [],
  },

  // PRIVACY PAGE (Short URL)
  privacy: {
    title: 'Privacy Policy | Sproutern - Student Internship Platform',
    description:
      "Sproutern's Privacy Policy: Learn how we collect, use, and protect your personal information on our student internship platform.",
    keywords:
      'privacy policy, data protection, user privacy, sproutern privacy',
    canonical: `${siteUrl}/privacy`,
    ogTitle: 'Privacy Policy',
    ogDescription: 'How Sproutern protects your data',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Privacy Policy',
    twitterDescription: 'Data protection & privacy',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/privacy'),
    schema: [],
  },

  // TERMS PAGE (Short URL)
  terms: {
    title: 'Terms of Service | Sproutern - Student Internship Platform',
    description:
      "Sproutern's Terms of Service: Understand the rules and guidelines for using our student internship platform.",
    keywords:
      'terms of service, user agreement, terms and conditions, sproutern terms',
    canonical: `${siteUrl}/terms`,
    ogTitle: 'Terms of Service',
    ogDescription: 'Sproutern user agreement & terms',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Terms of Service',
    twitterDescription: 'User agreement & platform rules',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/terms'),
    schema: [],
  },

  // CAREER PLANNING PAGE
  careerPlanning: {
    title: 'Strategic Career Planning Guide | Build Your Roadmap',
    description:
      'Learn how to plan your career effectively. Discover your strengths, set SMART goals, and create a roadmap for professional success.',
    keywords:
      'career planning, career roadmap, goal setting, career development, professional growth, career path, self-assessment',
    canonical: `${siteUrl}/resources/career-planning`,
    ogTitle: 'Strategic Career Planning Guide',
    ogDescription: 'Build your career roadmap with our comprehensive guide',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Career Planning Guide',
    twitterDescription: 'Build your career roadmap today',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/career-planning'),
    schema: [],
  },

  // INTERVIEW PREP PAGE
  interviewPrep: {
    title: 'Interview Prep Guide | Questions & Answers',
    description:
      'Master your job interviews with our comprehensive guide. Get common interview questions, behavioral interview tips (STAR method), and technical interview advice.',
    keywords:
      'interview preparation, interview questions, STAR method, behavioral interview, technical interview, job interview tips, interview guide',
    canonical: `${siteUrl}/resources/interview-prep`,
    ogTitle: 'Interview Preparation Guide',
    ogDescription: 'Master your interviews with common questions & tips',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Interview Prep Guide',
    twitterDescription: 'Ace your next interview',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/interview-prep'),
    schema: [],
  },

  // SKILL DEVELOPMENT PAGE
  skillDevelopment: {
    title: 'Skill Development Guide | In-Demand Skills',
    description:
      'Discover the most in-demand technical and soft skills. Learn how to upskill effectively and stay competitive in the job market.',
    keywords:
      'skill development, in-demand skills, upskilling, technical skills, soft skills, learning resources, career skills',
    canonical: `${siteUrl}/resources/skill-development`,
    ogTitle: 'Skill Development Guide',
    ogDescription: 'Top skills & how to learn them',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Skill Development Guide',
    twitterDescription: 'Top in-demand skills',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/skill-development'),
    schema: [],
  },

  // NETWORKING PAGE
  networking: {
    title: 'Professional Networking Guide | Build Your Network',
    description:
      'Learn the art of professional networking. Get tips on using LinkedIn, cold emailing, and building meaningful connections to unlock career opportunities.',
    keywords:
      'professional networking, networking tips, LinkedIn networking, cold emailing, networking guide, career connections, mentorship',
    canonical: `${siteUrl}/resources/networking`,
    ogTitle: 'Professional Networking Guide',
    ogDescription: 'Master the art of professional networking',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Networking Guide',
    twitterDescription: 'Build your professional network',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/networking'),
    schema: [],
  },

  // INDUSTRY INSIGHTS PAGE
  industryInsights: {
    title: 'Industry Insights & Trends | Startup Ecosystem',
    description:
      'Stay updated with the latest trends in the Indian startup ecosystem. Get insights on booming sectors, salary benchmarks, and future of work.',
    keywords:
      'industry insights, startup trends, market trends, salary benchmarks, future of work, indian startup ecosystem, career trends',
    canonical: `${siteUrl}/resources/industry-insights`,
    ogTitle: 'Industry Insights & Trends',
    ogDescription: 'Latest trends & salary benchmarks in startups',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Industry Insights',
    twitterDescription: 'Startup trends & salary benchmarks',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/industry-insights'),
    schema: [],
  },

  // COVER LETTERS PAGE
  coverLetters: {
    title: 'Cover Letter Writing Guide | Professional Templates',
    description:
      'Learn to write compelling cover letters that get you noticed. Download professional templates, industry-specific examples, and expert tips for standing out.',
    keywords:
      'cover letter, cover letter template, cover letter examples, how to write cover letter, professional cover letter, job application letter',
    canonical: `${siteUrl}/resources/cover-letters`,
    ogTitle: 'Cover Letter Writing Guide',
    ogDescription: 'Free cover letter templates & expert writing tips',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cover Letter Guide',
    twitterDescription: 'Professional cover letter templates & tips',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/cover-letters'),
    schema: [],
  },

  // RESUME TEMPLATES PAGE
  resumeTemplates: {
    title: 'Free ATS Resume Templates | Download',
    description:
      'Download professionally designed ATS-optimized resume templates for students and professionals. Perfect for campus placements and job applications.',
    keywords:
      'resume template, ATS resume, resume format, fresher resume, professional resume, resume download, free resume template',
    canonical: `${siteUrl}/resources/resume-templates`,
    ogTitle: 'Free ATS-Friendly Resume Templates',
    ogDescription: 'Download professional ATS-optimized resume templates',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Resume Templates',
    twitterDescription: 'Free ATS-friendly resume templates',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/resume-templates'),
    schema: [],
  },

  // APTITUDE FORMULAS PAGE
  aptitudeFormulas: {
    title: 'Aptitude Formulas | Placement Exam Guide',
    description:
      'Master placement exams with our comprehensive aptitude formulas collection. Essential formulas, shortcuts, and examples for TCS, Infosys, Wipro placements.',
    keywords:
      'aptitude formulas, quantitative aptitude, placement formulas, aptitude test, TCS aptitude, percentage formulas, profit loss formulas',
    canonical: `${siteUrl}/resources/aptitude-formulas`,
    ogTitle: 'Quantitative Aptitude Formulas',
    ogDescription: 'Complete aptitude formulas for placement exams',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Aptitude Formulas',
    twitterDescription: 'Essential formulas for placement exams',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/aptitude-formulas'),
    schema: [],
  },

  // INTERVIEW CHEATSHEET PAGE
  interviewCheatsheet: {
    title: 'HR Interview Cheat Sheet | 50+ Questions',
    description:
      'Ace your HR interviews with our comprehensive cheat sheet. 50+ common questions with answers, STAR method, salary negotiation tips, and follow-up templates.',
    keywords:
      'HR interview questions, interview cheatsheet, common interview questions, interview answers, STAR method, salary negotiation, interview tips',
    canonical: `${siteUrl}/resources/interview-cheatsheet`,
    ogTitle: 'HR Interview Cheat Sheet',
    ogDescription: '50+ HR interview questions with expert answers',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Interview Cheatsheet',
    twitterDescription: '50+ HR interview questions & answers',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/resources/interview-cheatsheet'),
    schema: [],
  },

  // EDITORIAL GUIDELINES PAGE
  editorialGuidelines: {
    title: 'Editorial Guidelines | Content Standards',
    description:
      "Learn about Sproutern's editorial guidelines, content quality standards, and our commitment to providing accurate, helpful career resources for students in India.",
    keywords:
      'editorial guidelines, content policy, quality standards, Sproutern policy, content accuracy, career content standards, E-E-A-T',
    canonical: `${siteUrl}/editorial-guidelines`,
    ogTitle: 'Editorial Guidelines',
    ogDescription:
      'Our commitment to quality, accuracy, and helpfulness in career content.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Editorial Guidelines',
    twitterDescription: 'Content quality standards and review process',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/editorial-guidelines'),
    schema: [
      {
        '@type': 'WebPage',
        name: 'Editorial Guidelines',
        description:
          "Sproutern's content quality standards and editorial review process.",
        url: `${siteUrl}/editorial-guidelines`,
        isPartOf: {
          '@type': 'WebSite',
          name: 'Sproutern',
          url: siteUrl,
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        {
          name: 'Editorial Guidelines',
          url: `${siteUrl}/editorial-guidelines`,
        },
      ]),
    ],
  },

  // SUCCESS STORIES PAGE
  successStories: {
    title: 'Success Stories | Real Student & Startup Stories',
    description:
      'Read real success stories from students who landed dream internships and startups who found exceptional talent through Sproutern. 10,000+ successful placements.',
    keywords:
      'success stories, internship success, student placement, startup hiring success, career success, Sproutern reviews, testimonials',
    canonical: `${siteUrl}/success-stories`,
    ogTitle: 'Success Stories',
    ogDescription:
      'Real stories from students who landed internships and startups who found great talent.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Success Stories',
    twitterDescription:
      'Real internship success stories from students and startups',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/success-stories'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Success Stories',
        description:
          'Collection of success stories from students and startups using Sproutern.',
        url: `${siteUrl}/success-stories`,
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Success Stories', url: `${siteUrl}/success-stories` },
      ]),
    ],
  },

  // METHODOLOGY PAGE
  methodology: {
    title: 'Our Methodology | How We Verify Information',
    description:
      "Learn how Sproutern's tools calculate results, where our data comes from, and how we ensure accuracy. Transparent methodology for career tools.",
    keywords:
      'Sproutern methodology, calculation accuracy, data sources, verification process, CGPA formula, salary calculation, resume scoring',
    canonical: `${siteUrl}/methodology`,
    ogTitle: 'Our Methodology',
    ogDescription:
      'Transparent methodology and data sources for all Sproutern career tools and calculators.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Our Methodology',
    twitterDescription: 'How our tools work and where our data comes from',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/methodology'),
    schema: [
      {
        '@type': 'WebPage',
        name: 'Methodology',
        description:
          "Sproutern's methodology for calculations, data sources, and verification processes.",
        url: `${siteUrl}/methodology`,
        about: {
          '@type': 'Thing',
          name: 'Career Tools Methodology',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Methodology', url: `${siteUrl}/methodology` },
      ]),
    ],
  },

  // DONATE PAGE
  donate: {
    title: 'Support Sproutern | Empower Students & Startups',
    description:
      'Help us keep Sproutern free for students. Your contribution empowers thousands of students with internships and career resources. Support our mission today.',
    keywords:
      'donate to sproutern, support education, free internship platform, student empowerment, education non-profit support',
    canonical: `${siteUrl}/donate`,
    ogTitle: "Support Sproutern's Mission",
    ogDescription:
      'Help us connect students with startups. Your support keeps our tools and resources free for everyone.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Support Sproutern',
    twitterDescription:
      'Empower students and startups by supporting Sproutern.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/donate'),
    schema: [
      {
        '@type': 'WebPage',
        name: 'Donate',
        description:
          "Support Sproutern's mission to provide free career resources to students.",
        url: `${siteUrl}/donate`,
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Donate', url: `${siteUrl}/donate` },
      ]),
    ],
  },

  // TOOLS - SALARY CALCULATOR
  salaryCalculator: {
    title: 'In-Hand Salary Calculator India | Tax Breakdown',
    description:
      'Calculate your monthly in-hand salary from CTC. Accurate breakdown of PF, Professional Tax, and Income Tax under New and Old Regimes for FY 2024-25.',
    keywords:
      'salary calculator, in-hand salary calculator, ctc to in-hand, take home salary calculator, income tax calculator 2025, new tax regime calculator',
    canonical: `${siteUrl}/tools/salary-calculator`,
    ogTitle: 'In-Hand Salary Calculator India',
    ogDescription:
      'Know your exact take-home salary. Compare New vs Old Tax Regime instantly.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Salary Calculator India',
    twitterDescription: 'Calculate in-hand salary from CTC with tax breakdown.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/salary-calculator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Salary Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - RESUME SCORE CHECKER
  resumeScoreChecker: {
    title: 'Free AI Resume Score Checker | ATS Compatibility Test',
    description:
      'Check your resume score for free with our AI-powered tool. Get instant feedback on ATS compatibility, keywords, formatting, and impact. Improve your chances of shortlisting.',
    keywords:
      'resume score checker, ats resume checker, free resume review, ai resume scorer, cv score, resume grader, check resume ats friendly',
    canonical: `${siteUrl}/tools/resume-score-checker`,
    ogTitle: 'Free AI Resume Score Checker',
    ogDescription:
      'Get your resume score and actionable feedback instantly. AI-powered ATS check.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI Resume Score Checker',
    twitterDescription: 'Check your resume score and fix ATS issues for free.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/resume-score-checker'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Resume Score Checker',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - EMI CALCULATOR
  emiCalculator: {
    title: 'Education Loan EMI Calculator | Plan Your Repayment',
    description:
      'Calculate your Education Loan EMI accurately. Plan your repayment schedule with our easy-to-use calculator. Essential for students planning higher studies.',
    keywords:
      'education loan emi calculator, student loan calculator, emi calculator, loan repayment calculator, education loan interest calculator',
    canonical: `${siteUrl}/tools/emi-calculator`,
    ogTitle: 'Education Loan EMI Calculator',
    ogDescription:
      'Plan your education loan repayment with our free EMI calculator.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Education Loan EMI Calculator',
    twitterDescription: 'Calculate your education loan EMI instantly.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/emi-calculator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'EMI Calculator',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - CAREER ROADMAP
  careerRoadmap: {
    title: 'AI Career Roadmap Generator | Personalized Paths',
    description:
      'Generate a personalized career roadmap based on your skills and goals. Get step-by-step guidance for roles in Tech, Management, Design, and more.',
    keywords:
      'career roadmap generator, ai career path, career guidance tool, learning path generator, software engineer roadmap, data science roadmap',
    canonical: `${siteUrl}/tools/career-roadmap`,
    ogTitle: 'AI Career Roadmap Generator',
    ogDescription:
      'Get a personalized step-by-step career roadmap for your dream role.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Career Roadmap Generator',
    twitterDescription: 'Plan your career with AI-generated roadmaps.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/career-roadmap'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Career Roadmap Generator',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - COLD EMAIL GENERATOR
  coldEmailGenerator: {
    title: 'Cold Email Generator for Internships | Free Tool',
    description:
      'Generate professional cold emails for internship and job applications. Customize templates for recruiters, founders, and HRs to get higher response rates.',
    keywords:
      'cold email generator, internship email template, job application email, cold email for recruiters, email writer tool',
    canonical: `${siteUrl}/tools/cold-email-generator`,
    ogTitle: 'Cold Email Generator for Internships',
    ogDescription:
      'Create effective cold emails that get responses from recruiters and founders.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cold Email Generator',
    twitterDescription:
      'Generate professional cold emails for job applications.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/cold-email-generator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Cold Email Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - COVER LETTER GENERATOR
  coverLetterGenerator: {
    title: 'Free AI Cover Letter Generator | Tailored for Freshers',
    description:
      'Create a professional cover letter in seconds. Our AI generates tailored cover letters based on your skills and the job description. Perfect for students and freshers.',
    keywords:
      'cover letter generator, ai cover letter, free cover letter builder, internship cover letter, fresher cover letter maker',
    canonical: `${siteUrl}/tools/cover-letter-generator`,
    ogTitle: 'AI Cover Letter Generator',
    ogDescription:
      'Generate professional cover letters tailored to your job applications instantly.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Cover Letter Generator',
    twitterDescription: 'Create tailored cover letters in seconds with AI.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/cover-letter-generator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Cover Letter Generator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Tools', url: `${siteUrl}/tools` },
        {
          name: 'Cover Letter Generator',
          url: `${siteUrl}/tools/cover-letter-generator`,
        },
      ]),
    ],
  },

  // TOOLS - INTERVIEW QUESTIONS
  interviewQuestions: {
    title: 'Interview Question Generator | Role-Specific Practice',
    description:
      'Generate role-specific interview questions for practice. Covers technical, behavioral, and HR questions for Software, Marketing, Finance, and more.',
    keywords:
      'interview question generator, practice interview questions, technical interview questions, hr interview questions, mock interview tool',
    canonical: `${siteUrl}/tools/interview-questions`,
    ogTitle: 'Interview Question Generator',
    ogDescription:
      'Practice with role-specific interview questions generated for you.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Interview Question Generator',
    twitterDescription: 'Generate practice questions for your next interview.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/interview-questions'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Interview Question Generator',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - JOB DESCRIPTION ENHANCER
  jobDescriptionEnhancer: {
    title: 'Job Description Enhancer | For Startups & Recruiters',
    description:
      'Optimize your job descriptions to attract top student talent. Our tool enhances clarity, inclusivity, and appeal for internship and fresher listings.',
    keywords:
      'job description enhancer, jd improver, write better job descriptions, startup hiring tool, internship description generator',
    canonical: `${siteUrl}/tools/job-description-enhancer`,
    ogTitle: 'Job Description Enhancer',
    ogDescription:
      'Create compelling job descriptions that attract the best talent.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Job Description Enhancer',
    twitterDescription: 'Optimize your job postings for better reach.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/job-description-enhancer'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Job Description Enhancer',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - LINKEDIN GENERATOR
  linkedinGenerator: {
    title: 'LinkedIn Post Generator | Viral Content for Students',
    description:
      'Generate engaging LinkedIn posts for your achievements, project updates, and job search. Build your personal brand with professional content.',
    keywords:
      'linkedin post generator, linkedin content creator, personal branding tool, student linkedin posts, viral linkedin content',
    canonical: `${siteUrl}/tools/linkedin-generator`,
    ogTitle: 'LinkedIn Post Generator',
    ogDescription:
      'Create engaging LinkedIn posts to build your professional brand.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'LinkedIn Post Generator',
    twitterDescription: 'Generate professional LinkedIn content instantly.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/linkedin-generator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'LinkedIn Post Generator',
        applicationCategory: 'SocialNetworkingApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - PASSWORD GENERATOR
  passwordGenerator: {
    title: 'Strong Password Generator | Secure & Random',
    description:
      'Generate strong, secure, and random passwords instantly. Protect your accounts with high-entropy passwords.',
    keywords:
      'password generator, strong password, secure password tool, random password creator',
    canonical: `${siteUrl}/tools/password-generator`,
    ogTitle: 'Strong Password Generator',
    ogDescription:
      'Generate secure passwords instantly to protect your online accounts.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Password Generator',
    twitterDescription: 'Create strong, secure passwords instantly.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/password-generator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Password Generator',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - PERCENTAGE CALCULATOR
  percentageCalculator: {
    title: 'Percentage Calculator | Academic & General Use',
    description:
      'Simple and accurate percentage calculator for students. Calculate marks percentage, percentage change, and more.',
    keywords:
      'percentage calculator, marks percentage, calculate percentage, math tool, student calculator',
    canonical: `${siteUrl}/tools/percentage-calculator`,
    ogTitle: 'Percentage Calculator',
    ogDescription:
      'Quick and easy percentage calculations for students and everyone.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Percentage Calculator',
    twitterDescription: 'Calculate percentages instantly.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/percentage-calculator'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Percentage Calculator',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - POMODORO TIMER
  pomodoroTimer: {
    title: 'Pomodoro Timer | Focus & Productivity Tool',
    description:
      'Boost your study productivity with our Pomodoro Timer. Customizable work/break intervals to help you stay focused and avoid burnout.',
    keywords:
      'pomodoro timer, study timer, productivity tool, focus timer, tomato timer, study technique',
    canonical: `${siteUrl}/tools/pomodoro-timer`,
    ogTitle: 'Pomodoro Timer for Study Focus',
    ogDescription:
      'Stay focused and productive with our customizable Pomodoro timer.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Pomodoro Timer',
    twitterDescription: 'Boost productivity with the Pomodoro technique.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/pomodoro-timer'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Pomodoro Timer',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - PROJECT IDEAS
  projectIdeas: {
    title: 'Final Year Project Ideas Generator | CS, IT, ECE',
    description:
      'Get innovative final year project ideas for Computer Science, IT, and Engineering students. Filter by domain like AI, Web Dev, IoT, and Blockchain.',
    keywords:
      'project ideas, final year projects, computer science projects, engineering project ideas, student projects, capstone project ideas',
    canonical: `${siteUrl}/tools/project-ideas`,
    ogTitle: 'Final Year Project Ideas Generator',
    ogDescription:
      'Discover innovative project ideas for your final year submission.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Project Ideas Generator',
    twitterDescription: 'Find the perfect final year project idea.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/project-ideas'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Project Ideas Generator',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - SKILLS ASSESSMENT
  skillsAssessment: {
    title: 'Free Skills Assessment Test | Tech Skills',
    description:
      'Assess your technical skills in Python, Java, React, and more. Get a detailed analysis of your strengths and areas for improvement.',
    keywords:
      'skills assessment, technical skill test, coding test, skill evaluation, programming quiz, self assessment',
    canonical: `${siteUrl}/tools/skills-assessment`,
    ogTitle: 'Free Technical Skills Assessment',
    ogDescription: 'Evaluate your tech skills and identify areas for growth.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Skills Assessment Test',
    twitterDescription: 'Test your technical skills for free.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/skills-assessment'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Skills Assessment',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - SKILLS GAP ANALYZER
  skillsGapAnalyzer: {
    title: 'Skills Gap Analyzer | Identify Skills to Learn',
    description:
      'Compare your current skills with job requirements. Identify skill gaps and get personalized learning recommendations for 8+ job roles. Free career tool.',
    keywords:
      'skills gap analysis, skill gap analyzer, career skills, job requirements, skill development, learning roadmap, career planning',
    canonical: `${siteUrl}/tools/skills-gap-analyzer`,
    ogTitle: 'Skills Gap Analyzer - Identify What to Learn',
    ogDescription:
      'Compare your skills with job requirements and get personalized learning recommendations.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Skills Gap Analyzer',
    twitterDescription:
      'Identify skills you need to learn for your target job.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/skills-gap-analyzer'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Skills Gap Analyzer',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - STUDY PLANNER
  studyPlanner: {
    title: 'AI Study Planner | Personalized Learning Schedules',
    description:
      'Create a personalized study schedule based on your subjects and exam dates. Optimize your preparation with our AI-powered study planner.',
    keywords:
      'study planner, exam schedule maker, study timetable generator, student planner, exam preparation tool',
    canonical: `${siteUrl}/tools/study-planner`,
    ogTitle: 'AI Study Planner',
    ogDescription: 'Create a personalized study schedule to ace your exams.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study Planner',
    twitterDescription:
      'Optimize your exam preparation with a custom study plan.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/study-planner'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Study Planner',
        applicationCategory: 'ProductivityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
    ],
  },

  // TOOLS - TYPING TEST
  typingTest: {
    title: 'Online Typing Test | Check WPM & Accuracy',
    description:
      'Test your typing speed and accuracy with our free online typing test. Improve your WPM (Words Per Minute) for coding and documentation.',
    keywords:
      'typing test, check wpm, typing speed test, keyboard practice, typing accuracy',
    canonical: `${siteUrl}/tools/typing-test`,
    ogTitle: 'Online Typing Speed Test',
    ogDescription: 'Check your WPM and accuracy with our free typing test.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Typing Test',
    twitterDescription: 'Test and improve your typing speed.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/typing-test'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Typing Test',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Tools', url: `${siteUrl}/tools` },
        { name: 'Typing Test', url: `${siteUrl}/tools/typing-test` },
      ]),
    ],
  },

  // COMPANIES LISTING
  companies: {
    title:
      'Company Interview Guides, Salaries & Work Culture | Sproutern',
    description:
      'Research company interview guides, salary ranges, work culture, and hiring patterns across product companies, MNCs, and IT services employers.',
    keywords:
      'mnc companies, tcs, infosys, wipro, interview questions, salary structure, placement papers, it companies india',
    canonical: `${siteUrl}/companies`,
    ogTitle: 'Company Interview Guides & Salary Research',
    ogDescription:
      'Explore company interview guides, salary ranges, and work culture signals.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Company Interview Guides',
    twitterDescription:
      'Interview questions, salary ranges, and work culture signals for top companies.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Companies',
        description: 'List of top MNC companies with interview resources.',
        url: `${siteUrl}/companies`,
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
      ]),
    ],
  },

  // STUDENT BUDGET PLANNER
  studentBudgetPlanner: {
    title: 'Student Budget Planner | Free Finance Tool',
    description:
      'Track your internship stipend, manage expenses, and save for your goals with our free student budget planner. Visual analytics and smart insights.',
    keywords:
      'student budget planner, student finance, internship stipend tracker, expense tracker for students, budget calculator, financial planning for students',
    canonical: `${siteUrl}/tools/student-budget-planner`,
    ogTitle: 'Student Budget Planner - Free Financial Tool',
    ogDescription:
      'Take control of your finances with our free student budget planner.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Student Budget Planner',
    twitterDescription: 'Track your stipend and manage expenses.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/student-budget-planner'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Student Budget Planner',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Tools', url: `${siteUrl}/tools` },
        {
          name: 'Budget Planner',
          url: `${siteUrl}/tools/student-budget-planner`,
        },
      ]),
    ],
  },

  // MNC PLACEMENT GUIDE
  'mnc-placement-guide': {
    title: 'Get Placed in Top MNCs | Placement Guide',
    description:
      'Comprehensive guide to getting placed in top MNCs like TCS, Infosys, Wipro. Learn about the recruitment process, preparation strategy, and resume building.',
    keywords:
      'mnc placement guide, how to get placed in mnc, tcs placement, infosys placement, wipro placement, placement preparation, campus placement guide',
    canonical: `${siteUrl}/companies/mnc-placement-guide`,
    ogTitle: 'How to Get Placed in Top MNCs',
    ogDescription: 'Complete guide to cracking MNC interviews.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'MNC Placement Guide',
    twitterDescription: 'Complete guide to cracking MNC interviews.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/mnc-placement-guide'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        {
          name: 'Placement Guide',
          url: `${siteUrl}/companies/mnc-placement-guide`,
        },
      ]),
    ],
  },

  // INTERNSHIP OPPORTUNITIES
  'internship-opportunities': {
    title: 'MNC Internship Opportunities | Apply Now',
    description:
      'Find and apply for internships at top MNCs. Learn how to find off-campus internships, application timelines, and get PPO tips.',
    keywords:
      'mnc internships, internship opportunities, summer internship 2025, off campus internship, google internship, microsoft internship, tcs internship',
    canonical: `${siteUrl}/companies/internship-opportunities`,
    ogTitle: 'MNC Internship Opportunities',
    ogDescription: 'Find and apply for internships at top MNCs.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'MNC Internship Opportunities',
    twitterDescription: 'Find and apply for internships at top MNCs.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/internship-opportunities'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        {
          name: 'Internships',
          url: `${siteUrl}/companies/internship-opportunities`,
        },
      ]),
    ],
  },

  // APPLICATION PROCESS
  'application-process': {
    title: 'MNC Interview Process | Step-by-Step Guide',
    description:
      'Understand the complete MNC recruitment process. From online application and aptitude tests to technical and HR interviews.',
    keywords:
      'mnc interview process, recruitment process, tcs interview process, infosys selection process, aptitude test, technical interview, hr interview',
    canonical: `${siteUrl}/companies/application-process`,
    ogTitle: 'MNC Application & Interview Process',
    ogDescription: 'Step-by-step guide to MNC recruitment process.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'MNC Application Process',
    twitterDescription: 'Step-by-step guide to MNC recruitment process.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/application-process'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        {
          name: 'Application Process',
          url: `${siteUrl}/companies/application-process`,
        },
      ]),
    ],
  },

  // COMPANIES - TCS
  tcs: {
    title: 'TCS Recruitment | NQT, Digital, Prime',
    description:
      'Complete guide to TCS recruitment process. TCS NQT, Digital, and Prime roles. Syllabus, interview questions, and salary structure.',
    keywords:
      'tcs recruitment, tcs nqt, tcs digital, tcs prime, tcs placement, tcs careers, tcs fresher hiring',
    canonical: `${siteUrl}/companies/tcs`,
    ogTitle: 'TCS Recruitment',
    ogDescription: 'Complete guide to TCS NQT, Digital & Prime recruitment.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'TCS Recruitment',
    twitterDescription: 'TCS NQT, Digital & Prime recruitment guide.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/tcs'),
    schema: [
      {
        '@type': 'Organization',
        name: 'Tata Consultancy Services',
        alternateName: 'TCS',
        url: 'https://www.tcs.com',
        sameAs: [
          'https://en.wikipedia.org/wiki/Tata_Consultancy_Services',
          'https://www.linkedin.com/company/tata-consultancy-services',
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'TCS', url: `${siteUrl}/companies/tcs` },
      ]),
    ],
  },

  // COMPANIES - INFOSYS
  infosys: {
    title: 'Infosys Recruitment | SP, DSE, SE Roles',
    description:
      'Infosys recruitment process for Specialist Programmer (SP), Digital Specialist Engineer (DSE), and Systems Engineer (SE) roles. Syllabus and interview tips.',
    keywords:
      'infosys recruitment, infosys sp, infosys dse, infosys se, infosys placement, infosys careers, infosys fresher hiring',
    canonical: `${siteUrl}/companies/infosys`,
    ogTitle: 'Infosys Recruitment',
    ogDescription: 'Guide to Infosys SP, DSE & SE recruitment.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Infosys Recruitment',
    twitterDescription: 'Infosys SP, DSE & SE recruitment guide.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/infosys'),
    schema: [
      {
        '@type': 'Organization',
        name: 'Infosys',
        url: 'https://www.infosys.com',
        sameAs: [
          'https://en.wikipedia.org/wiki/Infosys',
          'https://www.linkedin.com/company/infosys',
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'Infosys', url: `${siteUrl}/companies/infosys` },
      ]),
    ],
  },

  // COMPANIES - WIPRO
  wipro: {
    title: 'Wipro Recruitment | NLTH, Turbo, Elite',
    description:
      'Wipro recruitment process for NLTH (Elite) and Turbo roles. Exam pattern, syllabus, and interview questions for freshers.',
    keywords:
      'wipro recruitment, wipro nlth, wipro turbo, wipro elite, wipro placement, wipro careers, wipro fresher hiring',
    canonical: `${siteUrl}/companies/wipro`,
    ogTitle: 'Wipro Recruitment',
    ogDescription: 'Guide to Wipro NLTH & Turbo recruitment.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Wipro Recruitment',
    twitterDescription: 'Wipro NLTH & Turbo recruitment guide.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/wipro'),
    schema: [
      {
        '@type': 'Organization',
        name: 'Wipro',
        url: 'https://www.wipro.com',
        sameAs: [
          'https://en.wikipedia.org/wiki/Wipro',
          'https://www.linkedin.com/company/wipro',
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'Wipro', url: `${siteUrl}/companies/wipro` },
      ]),
    ],
  },

  // COMPANIES - TCS INTERVIEW QUESTIONS
  tcsInterviewQuestions: {
    title: 'TCS Interview Questions | Technical & HR Round',
    description:
      'Prepare for TCS NQT and Digital interviews with our curated list of technical and HR interview questions. Includes coding questions, puzzles, and experience sharing.',
    keywords:
      'tcs interview questions, tcs nqt interview, tcs digital interview, tcs technical questions, tcs hr questions, tcs placement papers',
    canonical: `${siteUrl}/companies/tcs/interview-questions`,
    ogTitle: 'TCS Interview Questions',
    ogDescription:
      'Prepare for TCS interviews with real questions and answers.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'TCS Interview Questions',
    twitterDescription: 'Real TCS interview questions and answers.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/tcs/interview-questions'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'TCS', url: `${siteUrl}/companies/tcs` },
        {
          name: 'Interview Questions',
          url: `${siteUrl}/companies/tcs/interview-questions`,
        },
      ]),
    ],
  },

  // COMPANIES - TCS SALARY
  tcsSalary: {
    title: 'TCS Salary Structure | Ninja, Digital, Prime',
    description:
      'Detailed breakdown of TCS salary structure for Ninja, Digital, and Prime profiles. Know your in-hand salary, CTC, bonuses, and benefits.',
    keywords:
      'tcs salary, tcs ninja salary, tcs digital salary, tcs prime salary, tcs fresher salary, tcs in-hand salary',
    canonical: `${siteUrl}/companies/tcs/salary`,
    ogTitle: 'TCS Salary Structure',
    ogDescription:
      'Know the exact salary structure for TCS Ninja, Digital & Prime.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'TCS Salary Structure',
    twitterDescription: 'TCS salary breakdown for freshers.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/tcs/salary'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'TCS', url: `${siteUrl}/companies/tcs` },
        { name: 'Salary', url: `${siteUrl}/companies/tcs/salary` },
      ]),
    ],
  },

  // COMPANIES - INFOSYS INTERVIEW QUESTIONS
  infosysInterviewQuestions: {
    title: 'Infosys Interview Questions | SP & DSE Roles',
    description:
      'Crack Infosys Specialist Programmer (SP) and Digital Specialist Engineer (DSE) interviews. Top interview questions, coding problems, and HR tips.',
    keywords:
      'infosys interview questions, infosys sp interview, infosys dse interview, infosys technical questions, infosys hr questions',
    canonical: `${siteUrl}/companies/infosys/interview-questions`,
    ogTitle: 'Infosys Interview Questions',
    ogDescription: 'Top interview questions for Infosys SP & DSE roles.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Infosys Interview Questions',
    twitterDescription: 'Crack Infosys interviews with these questions.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/infosys/interview-questions'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'Infosys', url: `${siteUrl}/companies/infosys` },
        {
          name: 'Interview Questions',
          url: `${siteUrl}/companies/infosys/interview-questions`,
        },
      ]),
    ],
  },

  // COMPANIES - WIPRO INTERVIEW QUESTIONS
  wiproInterviewQuestions: {
    title: 'Wipro Interview Questions | NLTH & Turbo',
    description:
      'Wipro NLTH (Elite) and Turbo interview questions. Prepare with common technical questions on Java, C, Python, and behavioral questions.',
    keywords:
      'wipro interview questions, wipro nlth interview, wipro turbo interview, wipro elite interview, wipro technical questions',
    canonical: `${siteUrl}/companies/wipro/interview-questions`,
    ogTitle: 'Wipro Interview Questions',
    ogDescription: 'Common interview questions for Wipro NLTH & Turbo.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Wipro Interview Questions',
    twitterDescription: 'Prepare for Wipro interviews.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/companies/wipro/interview-questions'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Companies', url: `${siteUrl}/companies` },
        { name: 'Wipro', url: `${siteUrl}/companies/wipro` },
        {
          name: 'Interview Questions',
          url: `${siteUrl}/companies/wipro/interview-questions`,
        },
      ]),
    ],
  },

  // TOOLS - APTITUDE TEST
  aptitudeTest: {
    title: 'Free Online Aptitude Test | Placements',
    description:
      'Practice aptitude questions for placement exams. Covers quantitative aptitude, logical reasoning, and verbal ability. Essential for TCS, Infosys, Wipro exams.',
    keywords:
      'aptitude test, online aptitude test, placement preparation, quantitative aptitude, logical reasoning, verbal ability, tcs aptitude, infosys aptitude',
    canonical: `${siteUrl}/tools/aptitude-test`,
    ogTitle: 'Free Online Aptitude Test',
    ogDescription: 'Practice aptitude questions for placement exams.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Aptitude Test',
    twitterDescription: 'Practice aptitude questions for placements.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/aptitude-test'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Aptitude Test',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Tools', url: `${siteUrl}/tools` },
        { name: 'Aptitude Test', url: `${siteUrl}/tools/aptitude-test` },
      ]),
    ],
  },

  // ==========================================
  // SCHOOL SECTION
  // ==========================================

  // SCHOOL MAIN PAGE
  school: {
    title: 'School Students Guide | Career Planning',
    description:
      'Complete guide for school students covering stream selection after 10th, career options after 12th, board exam tips, competitive exam preparation, and study abroad options.',
    keywords:
      'school students guide, after 10th options, after 12th career, stream selection, board exam tips, competitive exams, study abroad, CBSE, ICSE, state board',
    canonical: `${siteUrl}/school`,
    ogTitle: 'School Students Guide - Career Planning & Stream Selection',
    ogDescription:
      'Complete guide for school students - stream selection, board exams, competitive exams, and career planning.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'School Students Guide',
    twitterDescription: 'Career planning guide for school students',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'School Students Guide',
        description:
          'Comprehensive career guidance for school students in India',
        url: `${siteUrl}/school`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'School Resources',
          numberOfItems: 6,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'After 10th Guide',
              url: `${siteUrl}/school/after-10th-guide`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'After 12th Guide',
              url: `${siteUrl}/school/after-12th-guide`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Stream Selection',
              url: `${siteUrl}/school/stream-selection`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Board Exam Tips',
              url: `${siteUrl}/school/board-exam-tips`,
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Competitive Exams',
              url: `${siteUrl}/school/competitive-exams`,
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Study Abroad',
              url: `${siteUrl}/school/study-abroad`,
            },
          ],
        },
      },
    ],
  },

  // SCHOOL - AFTER 10TH GUIDE
  schoolAfter10thGuide: {
    title: 'After 10th Guide | Science vs Commerce vs Arts',
    description:
      'Complete guide on what to do after 10th class. Compare Science, Commerce, and Arts streams. Understand career options, scope, and salary for each stream.',
    keywords:
      'after 10th guide, science vs commerce, arts stream, stream selection, 10th class career, PCM vs PCB, commerce subjects, arts career options',
    canonical: `${siteUrl}/school/after-10th-guide`,
    ogTitle: 'After 10th Guide - Stream Selection & Career Options',
    ogDescription:
      'Compare Science, Commerce, Arts streams. Make the right choice after 10th.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'After 10th Guide',
    twitterDescription: 'Science vs Commerce vs Arts - which stream to choose?',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/after-10th-guide'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'School', url: `${siteUrl}/school` },
        { name: 'After 10th Guide', url: `${siteUrl}/school/after-10th-guide` },
      ]),
    ],
  },

  // SCHOOL - AFTER 12TH GUIDE
  schoolAfter12thGuide: {
    title: 'After 12th Guide | Career Options & Courses',
    description:
      'Explore all career options after 12th for Science, Commerce, and Arts students. Top courses, entrance exams, and salary expectations explained.',
    keywords:
      'after 12th guide, career after 12th, courses after 12th, entrance exams, B.Tech, MBBS, CA, BBA, B.Com, BA, engineering, medical',
    canonical: `${siteUrl}/school/after-12th-guide`,
    ogTitle: 'After 12th Guide - Career Options & Courses',
    ogDescription:
      'All career options after 12th for Science, Commerce, Arts students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'After 12th Guide',
    twitterDescription: 'Career options after 12th class',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/after-12th-guide'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'School', url: `${siteUrl}/school` },
        { name: 'After 12th Guide', url: `${siteUrl}/school/after-12th-guide` },
      ]),
    ],
  },

  // SCHOOL - STREAM SELECTION
  schoolStreamSelection: {
    title: 'Stream Selection Quiz | Which Stream After 10th?',
    description:
      'Take our interactive quiz to find the best stream after 10th. Discover if Science, Commerce, or Arts suits your interests and career goals.',
    keywords:
      'stream selection quiz, which stream, aptitude test, career test, science commerce arts, after 10th quiz, stream finder',
    canonical: `${siteUrl}/school/stream-selection`,
    ogTitle: 'Stream Selection Quiz - Find Your Best Stream',
    ogDescription:
      'Interactive quiz to find Science, Commerce, or Arts suits you best.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Stream Selection Quiz',
    twitterDescription: 'Which stream should you choose after 10th?',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/stream-selection'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Stream Selection Quiz',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
    ],
  },

  // SCHOOL - BOARD EXAM TIPS
  schoolBoardExamTips: {
    title: 'Board Exam Tips | CBSE, ICSE Preparation Guide',
    description:
      'Ace your board exams with expert tips. Time management, study techniques, subject-wise preparation, and stress management for CBSE and ICSE students.',
    keywords:
      'board exam tips, CBSE preparation, ICSE exam tips, 10th board, 12th board, exam preparation, study tips, time table, stress management',
    canonical: `${siteUrl}/school/board-exam-tips`,
    ogTitle: 'Board Exam Tips - CBSE & ICSE Preparation',
    ogDescription:
      'Expert tips to ace your board exams. Time management & study techniques.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Board Exam Tips',
    twitterDescription: 'Ace your 10th and 12th board exams',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/board-exam-tips'),
    schema: [],
  },

  // SCHOOL - COMPETITIVE EXAMS
  schoolCompetitiveExams: {
    title: 'Competitive Exams Guide | JEE, NEET, CUET',
    description:
      'Complete guide to competitive exams after 10th and 12th. JEE, NEET, CUET, NDA, CLAT - eligibility, syllabus, preparation tips, and coaching options.',
    keywords:
      'competitive exams, JEE preparation, NEET preparation, CUET, NDA exam, CLAT, entrance exams, coaching, preparation tips',
    canonical: `${siteUrl}/school/competitive-exams`,
    ogTitle: 'Competitive Exams Guide - JEE, NEET, CUET',
    ogDescription:
      'Complete guide to JEE, NEET, CUET, NDA and other entrance exams.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Competitive Exams Guide',
    twitterDescription: 'JEE, NEET, CUET preparation guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/competitive-exams'),
    schema: [],
  },

  // SCHOOL - STUDY ABROAD
  schoolStudyAbroad: {
    title: 'Study Abroad After 12th | Undergrad Options Guide',
    description:
      'Guide to studying abroad after 12th. Countries, universities, entrance exams, scholarships, and application process for Indian students.',
    keywords:
      'study abroad after 12th, undergraduate abroad, SAT, ACT, IELTS, TOEFL, USA universities, UK universities, scholarships abroad',
    canonical: `${siteUrl}/school/study-abroad`,
    ogTitle: 'Study Abroad After 12th - Complete Guide',
    ogDescription:
      'Undergraduate abroad options for Indian students after 12th.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study Abroad After 12th',
    twitterDescription: 'Undergraduate abroad options for Indian students',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/school/study-abroad'),
    schema: [],
  },

  // ==========================================
  // COLLEGE SECTION
  // ==========================================

  // COLLEGE MAIN PAGE
  college: {
    title: 'College Students Guide | First Year to Placements',
    description:
      'Complete guide for college students covering first year survival, semester planning, extracurriculars, internships, and placement preparation.',
    keywords:
      'college students guide, first year tips, semester planning, extracurriculars, internships, placements, CGPA, engineering college, B.Tech',
    canonical: `${siteUrl}/college`,
    ogTitle: 'College Students Guide',
    ogDescription:
      'Complete guide from first year to placements for college students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'College Students Guide',
    twitterDescription: 'First year to placements - complete college guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/college'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'College Students Guide',
        description: 'Comprehensive guide for college students in India',
        url: `${siteUrl}/college`,
      },
    ],
  },

  // COLLEGE - FIRST YEAR GUIDE
  collegeFirstYearGuide: {
    title: 'First Year College Guide | Freshman Survival Tips',
    description:
      'Complete first year survival guide covering academics, hostel life, clubs, time management, and avoiding common freshman mistakes.',
    keywords:
      'first year college, freshman guide, college survival, hostel tips, CGPA tips, clubs, time management, college academics',
    canonical: `${siteUrl}/college/first-year-guide`,
    ogTitle: 'First Year College Survival Guide',
    ogDescription: 'Everything you need to ace your first year of college.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'First Year Guide',
    twitterDescription: 'Freshman survival tips for college students',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/college/first-year-guide'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'College', url: `${siteUrl}/college` },
        {
          name: 'First Year Guide',
          url: `${siteUrl}/college/first-year-guide`,
        },
      ]),
    ],
  },

  // COLLEGE - SEMESTER PLANNER
  collegeSemesterPlanner: {
    title: 'Semester Planner | Academic Calendar Tool',
    description:
      'Plan your semester effectively with our comprehensive planner. Track exams, assignments, projects, and maintain work-life balance.',
    keywords:
      'semester planner, academic calendar, study schedule, exam planning, assignment tracker, college planner, time table',
    canonical: `${siteUrl}/college/semester-planner`,
    ogTitle: 'Semester Planner - Academic Calendar Tool',
    ogDescription:
      'Plan your semester effectively. Track exams, assignments, and projects.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Semester Planner',
    twitterDescription: 'Plan your college semester effectively',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/college/semester-planner'),
    schema: [],
  },

  // COLLEGE - EXTRACURRICULARS
  collegeExtracurriculars: {
    title: 'Extracurricular Activities Guide | Clubs & Societies',
    description:
      'Guide to choosing the right extracurricular activities in college. Technical clubs, cultural activities, sports, and how they boost your resume.',
    keywords:
      'extracurricular activities, college clubs, technical clubs, cultural activities, sports, resume boost, college societies, hackathons',
    canonical: `${siteUrl}/college/extracurriculars`,
    ogTitle: 'Extracurricular Activities Guide',
    ogDescription:
      'Choose the right clubs and activities to boost your resume.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Extracurriculars Guide',
    twitterDescription: 'College clubs and activities guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/college/extracurriculars'),
    schema: [],
  },

  // COLLEGE - COMPARISON
  collegeComparison: {
    title: 'College Comparison Tool | Engineering Colleges',
    description:
      'Compare colleges based on placements, fees, faculty, infrastructure, and rankings. Make informed decisions about your education.',
    keywords:
      'college comparison, compare colleges, engineering colleges, placements comparison, college rankings, fees comparison, NITs, IITs, private colleges',
    canonical: `${siteUrl}/college/comparison`,
    ogTitle: 'College Comparison Tool',
    ogDescription: 'Compare colleges based on placements, fees, and rankings.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'College Comparison',
    twitterDescription: 'Compare colleges on placements, fees, rankings',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/college/comparison'),
    schema: [],
  },

  // ==========================================
  // FRESHERS SECTION
  // ==========================================

  // FRESHERS MAIN PAGE
  freshers: {
    title: 'Freshers Guide | First Job Tips, Salary & Career',
    description:
      'Complete guide for freshers entering the workforce. First job tips, salary negotiation, bond clauses, notice period, and career growth strategies.',
    keywords:
      'freshers guide, first job tips, salary negotiation, bond clauses, notice period, probation, relocation, career growth, IT freshers',
    canonical: `${siteUrl}/freshers`,
    ogTitle: 'Freshers Career Guide',
    ogDescription:
      'Complete guide for freshers - first job, salary, bonds, and career growth.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Freshers Guide',
    twitterDescription: 'First job tips, salary negotiation, and career advice',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Freshers Career Guide',
        description:
          'Complete career guide for freshers entering the workforce',
        url: `${siteUrl}/freshers`,
      },
    ],
  },

  // FRESHERS - FIRST JOB GUIDE
  freshersFirstJobGuide: {
    title: 'First Job Guide | 90 Days Roadmap for Freshers',
    description:
      'Complete first job guide covering first 90 days roadmap, workplace expectations, manager relationships, performance reviews, and common mistakes.',
    keywords:
      'first job guide, first 90 days, workplace tips, manager relationship, performance review, fresher mistakes, corporate culture',
    canonical: `${siteUrl}/freshers/first-job-guide`,
    ogTitle: 'First Job Guide - 90 Days Roadmap',
    ogDescription: 'Everything you need to succeed in your first job.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'First Job Guide',
    twitterDescription: 'Complete guide for your first 90 days at work',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/first-job-guide'),
    schema: [
      generateBreadcrumbSchema([
        { name: 'Home', url: siteUrl },
        { name: 'Freshers', url: `${siteUrl}/freshers` },
        { name: 'First Job Guide', url: `${siteUrl}/freshers/first-job-guide` },
      ]),
    ],
  },

  // FRESHERS - SALARY NEGOTIATION
  freshersSalaryNegotiation: {
    title: 'Salary Negotiation for Freshers | Best Offer',
    description:
      'Learn how to negotiate your first salary. Tips, scripts, and strategies for freshers to get the best compensation package.',
    keywords:
      'salary negotiation, fresher salary, negotiate offer, first job salary, CTC negotiation, salary scripts, compensation package',
    canonical: `${siteUrl}/freshers/salary-negotiation`,
    ogTitle: 'Salary Negotiation Guide for Freshers',
    ogDescription:
      'Get the salary you deserve with proven negotiation strategies.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Salary Negotiation',
    twitterDescription: 'Negotiate your first salary like a pro',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/salary-negotiation'),
    schema: [],
  },

  // FRESHERS - BOND CLAUSES
  freshersBondClauses: {
    title: 'Service Bond Clauses | IT Company Bonds Explained',
    description:
      'Understand service bond agreements in IT companies. TCS, Infosys, Wipro bonds - are they legal, enforceable, and how to handle them.',
    keywords:
      'service bond, IT company bond, TCS bond, Infosys bond, Wipro bond, bond clause, service agreement, bond breakage',
    canonical: `${siteUrl}/freshers/bond-clauses`,
    ogTitle: 'Service Bond Clauses Explained',
    ogDescription:
      'Understanding bond agreements in IT companies for freshers.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Bond Clauses',
    twitterDescription: 'IT company service bonds explained',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/bond-clauses'),
    schema: [],
  },

  // FRESHERS - NOTICE PERIOD
  freshersNoticePeriod: {
    title: 'Notice Period Guide | How to Resign Professionally',
    description:
      'Complete guide to notice period in Indian companies. How to resign, notice buyout, gardening leave, and transition best practices.',
    keywords:
      'notice period, how to resign, resignation, notice buyout, gardening leave, exit formalities, relieving letter',
    canonical: `${siteUrl}/freshers/notice-period`,
    ogTitle: 'Notice Period Guide - How to Resign',
    ogDescription: 'Professional guide to serving notice period and resigning.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Notice Period Guide',
    twitterDescription: 'How to resign professionally',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/notice-period'),
    schema: [],
  },

  // FRESHERS - PROBATION TIPS
  freshersProbationTips: {
    title: 'Probation Period Tips | How to Clear Probation',
    description:
      'Tips to clear your probation period successfully. What managers look for, common pitfalls, and how to get confirmed.',
    keywords:
      'probation period, clear probation, probation tips, confirmation, probation review, fresher probation',
    canonical: `${siteUrl}/freshers/probation-tips`,
    ogTitle: 'Probation Period Tips - Get Confirmed',
    ogDescription: 'Tips to clear your probation period successfully.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Probation Tips',
    twitterDescription: 'How to clear your probation period',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/probation-tips'),
    schema: [],
  },

  // FRESHERS - RELOCATION
  freshersRelocation: {
    title: 'Relocation Guide for Freshers | Moving to a New City',
    description:
      'Complete guide to relocating for your first job. Finding accommodation, budgeting, adjusting to new city, and work-life balance tips.',
    keywords:
      'relocation guide, moving for job, new city living, accommodation, PG, flat sharing, budgeting, work-life balance',
    canonical: `${siteUrl}/freshers/relocation`,
    ogTitle: 'Relocation Guide - Moving for Your First Job',
    ogDescription: 'Complete guide to relocating for your first job.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Relocation Guide',
    twitterDescription: 'Moving to a new city for your first job',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/freshers/relocation'),
    schema: [],
  },

  // ==========================================
  // COUNTRIES SECTION (Study Abroad)
  // ==========================================

  // COUNTRIES MAIN PAGE
  countries: {
    title: 'Study Abroad Guide | USA, UK, Canada & More',
    description:
      'Complete guide to studying abroad for Indian students. Compare countries, universities, visa requirements, costs, and job opportunities.',
    keywords:
      'study abroad, study in USA, study in UK, study in Canada, study in Germany, study in Australia, international education, MS abroad',
    canonical: `${siteUrl}/countries`,
    ogTitle: 'Study Abroad Guide - Compare Countries',
    ogDescription: 'Complete study abroad guide for Indian students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study Abroad Guide',
    twitterDescription: 'Compare countries for higher education',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Study Abroad Country Guides',
        description:
          'Comprehensive guides for studying abroad in different countries',
        url: `${siteUrl}/countries`,
      },
    ],
  },

  // COUNTRIES - USA
  countriesUSA: {
    title: 'Study in USA | Guide for Indian Students',
    description:
      'Complete guide to studying in USA. Top universities, F1 visa, GRE/TOEFL, costs, scholarships, OPT, and job opportunities for Indian students.',
    keywords:
      'study in USA, F1 visa, US universities, GRE, TOEFL, OPT, CPT, USA scholarships, MS in USA, Indian students USA',
    canonical: `${siteUrl}/countries/usa`,
    ogTitle: 'Study in USA Guide for Indian Students',
    ogDescription:
      'Complete USA study abroad guide - visa, universities, costs, jobs.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in USA',
    twitterDescription: 'Complete guide for Indian students',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/usa'),
    schema: [],
  },

  // COUNTRIES - UK
  countriesUK: {
    title: 'Study in UK | Universities, Visa & Costs Guide',
    description:
      'Study in UK guide for Indian students. Top universities, student visa, IELTS requirements, tuition fees, and Graduate Route visa explained.',
    keywords:
      'study in UK, UK student visa, British universities, IELTS, UK tuition fees, Graduate Route, PSW visa, MS in UK',
    canonical: `${siteUrl}/countries/uk`,
    ogTitle: 'Study in UK Guide',
    ogDescription: 'Complete UK study guide - universities, visa, costs.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in UK',
    twitterDescription: 'UK universities and visa guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/uk'),
    schema: [],
  },

  // COUNTRIES - CANADA
  countriesCanada: {
    title: 'Study in Canada | PR Pathway Guide',
    description:
      'Study in Canada guide with PR pathway. Top universities, study permit, PGWP, Express Entry, costs, and immigration options for Indian students.',
    keywords:
      'study in Canada, Canada PR, study permit, PGWP, Express Entry, Canadian universities, Canada immigration, MS in Canada',
    canonical: `${siteUrl}/countries/canada`,
    ogTitle: 'Study in Canada with PR Pathway',
    ogDescription: 'Complete Canada study and immigration guide.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Canada',
    twitterDescription: 'Canada study and PR pathway guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/canada'),
    schema: [],
  },

  // COUNTRIES - GERMANY
  countriesGermany: {
    title: 'Study in Germany | Free Tuition & Visa Guide',
    description:
      'Study in Germany with free tuition. Public universities, student visa, blocked account, German language requirements, and job prospects.',
    keywords:
      'study in Germany, free tuition Germany, German universities, blocked account, German student visa, TU9, MS in Germany',
    canonical: `${siteUrl}/countries/germany`,
    ogTitle: 'Study in Germany - Free Tuition Guide',
    ogDescription:
      'Germany study guide with free tuition at public universities.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Germany',
    twitterDescription: 'Free tuition education in Germany',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/germany'),
    schema: [],
  },

  // COUNTRIES - AUSTRALIA
  countriesAustralia: {
    title: 'Study in Australia | Universities & PR Guide',
    description:
      'Study in Australia guide. Top universities, student visa 500, post-study work visa, costs, and PR pathways for Indian students.',
    keywords:
      'study in Australia, Australian universities, student visa 500, post-study work visa, Australia PR, Group of Eight, MS in Australia',
    canonical: `${siteUrl}/countries/australia`,
    ogTitle: 'Study in Australia Guide',
    ogDescription: 'Complete Australia study and PR pathway guide.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Australia',
    twitterDescription: 'Australian universities and visa guide',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/australia'),
    schema: [],
  },

  // COUNTRIES - FRANCE
  countriesFrance: {
    title: 'Study in France | Affordable Education Guide',
    description:
      'Study in France with low tuition. Campus France, Grandes Écoles, post-study visa, CAF housing subsidy, and career opportunities.',
    keywords:
      'study in France, French universities, Campus France, Grandes Ecoles, France student visa, CAF, Eiffel scholarship, MS in France',
    canonical: `${siteUrl}/countries/france`,
    ogTitle: 'Study in France - Affordable Education',
    ogDescription: 'Low tuition education in France for Indian students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in France',
    twitterDescription: 'Affordable education in France',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/france'),
    schema: [],
  },

  // COUNTRIES - IRELAND
  countriesIreland: {
    title: 'Study in Ireland | Tech Hub & Universities Guide',
    description:
      "Study in Ireland - Europe's tech hub. Top universities, student visa, post-study work permit, costs, and career opportunities in tech.",
    keywords:
      'study in Ireland, Irish universities, Ireland student visa, Stamp 1G, Dublin tech, Trinity College, MS in Ireland',
    canonical: `${siteUrl}/countries/ireland`,
    ogTitle: 'Study in Ireland - Tech Hub of Europe',
    ogDescription: 'Ireland study guide for tech careers.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Ireland',
    twitterDescription: "Study in Europe's tech hub",
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/ireland'),
    schema: [],
  },

  // COUNTRIES - NETHERLANDS
  countriesNetherlands: {
    title: 'Study in Netherlands | English Programs Guide',
    description:
      'Study in Netherlands with English-taught programs. Top universities, MVV visa, orientation year, costs, and career opportunities.',
    keywords:
      'study in Netherlands, Dutch universities, MVV visa, orientation year, TU Delft, English programs, MS in Netherlands',
    canonical: `${siteUrl}/countries/netherlands`,
    ogTitle: 'Study in Netherlands Guide',
    ogDescription: 'English-taught programs in Netherlands.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Netherlands',
    twitterDescription: 'English programs in Netherlands',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/netherlands'),
    schema: [],
  },

  // COUNTRIES - SINGAPORE
  countriesSingapore: {
    title: "Study in Singapore | Asia's Education Hub Guide",
    description:
      "Study in Singapore - Asia's top education destination. NUS, NTU, student pass, costs, and job opportunities for Indian students.",
    keywords:
      'study in Singapore, NUS, NTU, Singapore student pass, Singapore universities, Asia education, MS in Singapore',
    canonical: `${siteUrl}/countries/singapore`,
    ogTitle: 'Study in Singapore Guide',
    ogDescription: "Asia's top education destination for Indians.",
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Singapore',
    twitterDescription: 'NUS, NTU and Singapore education',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/singapore'),
    schema: [],
  },

  // COUNTRIES - JAPAN
  countriesJapan: {
    title: 'Study in Japan | MEXT Scholarship Guide',
    description:
      'Study in Japan guide. Top universities, MEXT scholarship, student visa, language requirements, costs, and career opportunities.',
    keywords:
      'study in Japan, MEXT scholarship, Japanese universities, Japan student visa, Japanese language, Tokyo University, MS in Japan',
    canonical: `${siteUrl}/countries/japan`,
    ogTitle: 'Study in Japan Guide - MEXT Scholarship',
    ogDescription: 'Japan study guide with MEXT scholarship information.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Study in Japan',
    twitterDescription: 'MEXT scholarship and Japan universities',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/countries/japan'),
    schema: [],
  },

  // ==========================================
  // SCHOLARSHIPS SECTION
  // ==========================================

  // SCHOLARSHIPS MAIN PAGE
  scholarships: {
    title: 'Scholarships Database | India',
    description:
      'Comprehensive scholarship database for Indian students. Government scholarships, private scholarships, international scholarships - eligibility, deadlines, and application process.',
    keywords:
      'scholarships India, government scholarships, private scholarships, INSPIRE, NTSE, Central Sector, merit scholarships, need-based scholarships, SC ST scholarships',
    canonical: `${siteUrl}/scholarships`,
    ogTitle: 'Scholarships Database - Find Scholarships',
    ogDescription:
      'Find government and private scholarships for Indian students.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Scholarships Database',
    twitterDescription: 'Find scholarships you are eligible for',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/scholarships'),
    schema: [
      {
        '@type': 'CollectionPage',
        name: 'Scholarships Database',
        description:
          'Comprehensive database of scholarships for Indian students',
        url: `${siteUrl}/scholarships`,
        mainEntity: {
          '@type': 'ItemList',
          name: 'Available Scholarships',
          numberOfItems: 50,
        },
      },
    ],
  },

  // ==========================================
  // CAREER GUIDES
  // ==========================================

  // CAREER SWITCH
  careerSwitch: {
    title: 'Career Switch Guide | Change Industries',
    description:
      'Complete guide for switching careers. IT to non-IT, engineering to MBA, tech transitions - step-by-step roadmap and success stories.',
    keywords:
      'career switch, change industry, career transition, IT to MBA, tech to product, career change guide, industry switch',
    canonical: `${siteUrl}/career-switch`,
    ogTitle: 'Career Switch Guide - Change Industries',
    ogDescription: 'Step-by-step roadmap for switching careers successfully.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Career Switch Guide',
    twitterDescription: 'How to change careers successfully',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/career-switch'),
    schema: [
      {
        '@type': 'HowTo',
        name: 'How to Switch Careers',
        description:
          'Step-by-step guide to successfully transition to a new career field',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Self-Assessment',
            text: 'Identify transferable skills',
          },
          {
            '@type': 'HowToStep',
            name: 'Research',
            text: 'Understand target field requirements',
          },
          {
            '@type': 'HowToStep',
            name: 'Upskilling',
            text: 'Bridge skill gaps with courses',
          },
          {
            '@type': 'HowToStep',
            name: 'Network',
            text: 'Connect with people in target industry',
          },
          {
            '@type': 'HowToStep',
            name: 'Apply',
            text: 'Target companies open to career changers',
          },
        ],
      },
    ],
  },

  // LAYOFF GUIDE
  layoffGuide: {
    title: 'Layoff Survival Guide | Job Loss Recovery Tips',
    description:
      'Complete guide for handling layoffs. Immediate steps, financial planning, resume gap explanation, job search strategies, and mental health support.',
    keywords:
      'layoff guide, job loss tips, unemployment, resume gap, severance, job search after layoff, mental health, career recovery',
    canonical: `${siteUrl}/layoff-guide`,
    ogTitle: 'Layoff Survival Guide',
    ogDescription: 'Everything you need to bounce back from a layoff.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Layoff Survival Guide',
    twitterDescription: 'Recover from job loss and bounce back stronger',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/layoff-guide'),
    schema: [],
  },

  // ==========================================
  // ADDITIONAL TOOLS
  // ==========================================

  // VISA TIMELINE CALCULATOR
  visaTimeline: {
    title: 'Visa Timeline Calculator | Student Visa',
    description:
      'Calculate your student visa timeline for USA, UK, Canada, Germany, Australia, and more. Get personalized visa application schedule.',
    keywords:
      'visa timeline, student visa processing, F1 visa timeline, UK visa processing, Canada study permit, visa calculator',
    canonical: `${siteUrl}/tools/visa-timeline`,
    ogTitle: 'Visa Timeline Calculator',
    ogDescription:
      'Plan your student visa application with country-specific timelines.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Visa Timeline Calculator',
    twitterDescription: 'Calculate your visa application timeline',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/visa-timeline'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Visa Timeline Calculator',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
    ],
  },

  // SCHOLARSHIP CHECKER
  scholarshipChecker: {
    title: 'Scholarship Eligibility Checker | Find Scholarships',
    description:
      'Check your eligibility for 15+ scholarships based on academic percentage, family income, category, and education level.',
    keywords:
      'scholarship checker, eligibility checker, find scholarships, NTSE eligibility, INSPIRE eligibility, scholarship finder',
    canonical: `${siteUrl}/tools/scholarship-checker`,
    ogTitle: 'Scholarship Eligibility Checker',
    ogDescription:
      'Find scholarships you are eligible for based on your profile.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Scholarship Checker',
    twitterDescription: 'Check your scholarship eligibility',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/scholarship-checker'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'Scholarship Eligibility Checker',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
    ],
  },

  // SOP OUTLINER
  sopOutliner: {
    title: 'AI SOP Outliner | Statement of Purpose Generator',
    description:
      'Generate a personalized Statement of Purpose outline for your masters or PhD application. AI-powered SOP structure and guidance.',
    keywords:
      'SOP outliner, statement of purpose, SOP generator, MS application, PhD application, SOP structure, motivation letter',
    canonical: `${siteUrl}/tools/sop-outliner`,
    ogTitle: 'AI SOP Outliner',
    ogDescription:
      'Generate personalized SOP outline for your graduate application.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'SOP Outliner',
    twitterDescription: 'AI-powered Statement of Purpose generator',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/tools/sop-outliner'),
    schema: [
      {
        '@type': 'WebApplication',
        name: 'SOP Outliner',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      },
    ],
  },

  // OFFLINE PAGE
  offline: {
    title: 'Offline | Sproutern',
    description:
      'You are currently offline. Please check your internet connection to access Sproutern.',
    keywords: 'offline, no internet, connection error',
    canonical: `${siteUrl}/offline`,
    ogTitle: 'Offline',
    ogDescription: 'Check your internet connection.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    twitterTitle: 'Offline',
    twitterDescription: 'No internet connection',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/offline'),
    schema: [],
  },

  // SERVICES PAGES
  services: {
    title: 'Expert Startup Services - MVPs, SEO Audit & Fractional CTO',
    description:
      'Scale your startup with expert services. 30-Day MVP development, Technical SEO audits, and Fractional CTO services tailored for founders and early-stage companies.',
    keywords:
      'startup services, MVP development, technical SEO audit, fractional CTO, Next.js developer, hire developer for startup, startup MVP build, SEO for startups',
    canonical: `${siteUrl}/services`,
    ogTitle: 'Premium Startup Services by Sproutern',
    ogDescription:
      'Build your MVP in 30 days, optimize your SEO, or hire a Fractional CTO. Expert services for modern startups.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Startup MVP & SEO Services',
    twitterDescription:
      'Fast MVPs, comprehensive SEO audits, and Fractional CTO services for startups.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services'),
    schema: [
      {
        '@type': 'Service',
        name: '30-Day Startup MVP Build',
        description:
          'Comprehensive Next.js MVP development for early-stage startups. From idea to production in 30 days.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'Software Development',
        areaServed: ['IN', 'US', 'GB', 'SG'],
        offers: {
          '@type': 'Offer',
          price: '2499',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'Service',
        name: 'Technical SEO Audit',
        description:
          'In-depth technical SEO analysis to improve rankings, performance, and core web vitals.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'SEO Consulting',
        areaServed: ['IN', 'US', 'GB', 'SG'],
        offers: {
          '@type': 'Offer',
          price: '499',
          priceCurrency: 'USD',
        },
      },
    ],
  },

  servicesMVP: {
    title: '30-Day Startup MVP Development | Hire Next.js Expert',
    description:
      'Get your MVP built in 30 days by an expert Next.js developer. Fast, scalable, and ready for users. Specializing in SaaS, EdTech, and AI startups.',
    keywords:
      'MVP development, startup MVP, hire Next.js developer, build SaaS MVP, 30 day MVP, startup launch, product development',
    canonical: `${siteUrl}/services/mvp-development`,
    ogTitle: 'Launch Your Startup MVP in 30 Days',
    ogDescription:
      'Professional MVP development service for startups. Get to market faster with a battle-tested tech stack.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '30-Day MVP Build for Startups',
    twitterDescription:
      'From idea to production-ready MVP in just 30 days. Scalable architecture, ready for growth.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/mvp-development'),
    schema: [
      {
        '@type': 'Product',
        name: '30-Day Startup MVP Build',
        description:
          'End-to-end development of a minimum viable product using Next.js, Tailwind CSS, and Firebase/Supabase.',
        brand: { '@id': `${siteUrl}#organization` },
        offers: {
          '@type': 'Offer',
          url: `${siteUrl}/services/mvp-development`,
          price: '2499',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      },
    ],
  },

  servicesSEO: {
    title: 'Technical SEO Audit for Startups | Boost Organic Traffic',
    description:
      'Comprehensive technical SEO audit to identify and fix issues holding back your rankings. Core Web Vitals, site architecture, and content strategy.',
    keywords:
      'technical SEO audit, startup SEO, improve rankings, core web vitals audit, SEO for SaaS, organic growth strategy',
    canonical: `${siteUrl}/services/technical-seo-audit`,
    ogTitle: 'Technical SEO Audit - Fix Your Rankings',
    ogDescription:
      'Stop losing traffic. Get an expert technical SEO audit tailored for performance and growth.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Technical SEO Audit for Startups',
    twitterDescription:
      'In-depth SEO analysis. Performance, architecture, and growth strategy.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/technical-seo-audit'),
    schema: [
      {
        '@type': 'Service',
        name: 'Technical SEO Audit',
        description:
          'Technical analysis of website health, speed, and search engine visibility.',
        provider: { '@id': `${siteUrl}#organization` },
      },
    ],
  },

  servicesFractionalCTO: {
    title: 'Fractional CTO for Early-Stage Startups | Engineering Leadership',
    description:
      'Engineering leadership on demand. Architecture review, team hiring, tech stack selection, and scalability strategy for founders.',
    keywords:
      'fractional CTO, startup CTO, engineering leadership, tech advisor, architecture review, remote CTO, startup tech consultant',
    canonical: `${siteUrl}/services/fractional-cto`,
    ogTitle: 'Expert Fractional CTO Services',
    ogDescription:
      'Technical leadership without the full-time cost. Guide your startup with expert engineering strategy.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fractional CTO for Founders',
    twitterDescription:
      'Scale your tech team and architecture with expert leadership.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/fractional-cto'),
    schema: [
      {
        '@type': 'Service',
        name: 'Fractional CTO Advisory',
        description:
          'High-level technical strategy and engineering leadership for growth-stage startups.',
        provider: { '@id': `${siteUrl}#founder` },
      },
    ],
  },

  servicesWebDevelopment: {
    title: 'Custom Web Application Development Services | Next.js & React',
    description:
      'High-performance custom web applications built with Next.js, React, and modern backend technologies. Scalable, secure, and SEO-friendly web development.',
    keywords:
      'web application development, Next.js developer, custom web apps, React developer, full-stack web development, SaaS development, enterprise web apps',
    canonical: `${siteUrl}/services/web-development`,
    ogTitle: 'Custom Web Application Development | Scalable & Fast',
    ogDescription:
      'Build your next big idea with modern web technologies. Expert Next.js and full-stack development services tailored to your business needs.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Custom Web Application Development Services',
    twitterDescription:
      'Scalable, secure, and lightning-fast web apps built with Next.js and React.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/web-development'),
    schema: [
      {
        '@type': 'Service',
        name: 'Web Application Development',
        description:
          'End-to-end custom web application development using cutting-edge technologies like Next.js and Node.js.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'Web Development',
        areaServed: ['IN', 'US', 'GB', 'SG', 'Global'],
      },
    ],
  },

  servicesMobileAppDevelopment: {
    title: 'Mobile App Development | iOS & Android Apps (React Native)',
    description:
      'Cross-platform mobile application development for iOS and Android using React Native. Beautiful, native-feeling apps delivered fast.',
    keywords:
      'mobile app development, React Native developer, iOS app development, Android app development, cross-platform mobile apps, mobile MVP',
    canonical: `${siteUrl}/services/mobile-app-development`,
    ogTitle: 'Cross-Platform Mobile App Development',
    ogDescription:
      'Launch on both iOS and Android simultaneously. Expert React Native development for startups and enterprises.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'React Native Mobile App Development',
    twitterDescription:
      'High-performance iOS and Android applications built with React Native.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/mobile-app-development'),
    schema: [
      {
        '@type': 'Service',
        name: 'Mobile Application Development',
        description:
          'Cross-platform mobile app development services for iOS and Android using React Native.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'Mobile App Development',
        areaServed: ['IN', 'US', 'GB', 'SG', 'Global'],
      },
    ],
  },

  servicesAIIntegration: {
    title: 'AI & LLM Integration Services | Custom AI Solutions',
    description:
      'Automate your business with custom AI solutions. Expert integration of Large Language Models (LLMs), RAG systems, and autonomous AI agents.',
    keywords:
      'AI integration, LLM development, custom AI solutions, RAG implementation, AI agents, OpenAI API integration, Claude integration, AI consulting',
    canonical: `${siteUrl}/services/ai-integration`,
    ogTitle: 'Custom AI & LLM Integration Services',
    ogDescription:
      'Transform your product with Artificial Intelligence. From basic LLM wrappers to complex RAG systems and autonomous agents.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI Development & Integration Services',
    twitterDescription:
      'Implement cutting-edge AI features, RAG pipelines, and autonomous agents in your applications.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/ai-integration'),
    schema: [
      {
        '@type': 'Service',
        name: 'AI & LLM Integration',
        description:
          'Custom Artificial Intelligence solutions, LLM integrations, and RAG systems architecture.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'Artificial Intelligence Consulting',
        areaServed: ['IN', 'US', 'GB', 'SG', 'Global'],
      },
    ],
  },

  servicesMCPDevelopment: {
    title: 'MCP Server Development | Model Context Protocol Experts',
    description:
      'Connect your data to AI assistants with custom Model Context Protocol (MCP) servers. Expert development for secure, scalable tooling integration.',
    keywords:
      'MCP server development, Model Context Protocol, AI tooling, Claude integration, custom MCP servers, AI context, secure AI data access',
    canonical: `${siteUrl}/services/mcp-development`,
    ogTitle: 'Custom Model Context Protocol (MCP) Development',
    ogDescription:
      'Build secure, context-aware AI tools. Expert Model Context Protocol server development for Claude and other supporting LLMs.',
    ogImage: `${siteUrl}/opengraph.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'MCP Server Development Services',
    twitterDescription:
      'Bridge the gap between your data and AI assistants with custom MCP servers.',
    twitterImage: `${siteUrl}/twitter.jpg`,
    hreflang: generateHrefLangTags('/services/mcp-development'),
    schema: [
      {
        '@type': 'Service',
        name: 'MCP Server Development',
        description:
          'Implementation and deployment of custom Model Context Protocol servers to provide secure data access to AI models.',
        provider: { '@id': `${siteUrl}#organization` },
        serviceType: 'Software Integration',
        areaServed: ['IN', 'US', 'GB', 'SG', 'Global'],
      },
    ],
  },
};

export default completePageSEO;
