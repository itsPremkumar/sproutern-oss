import React from 'react';
import interviewExperiencesData from '@/data/interview-experiences.json';
import { Metadata } from 'next';
import { InterviewSearch } from '@/components/interview/InterviewSearch';
import { InterviewExperience } from '@/types/interview';
import Script from 'next/script';
import { toCompanySlug } from '@/lib/company-slug';

const interviewExperiences =
  interviewExperiencesData as unknown as InterviewExperience[];

export const metadata: Metadata = {
  title: 'Real Interview Experiences | Campus Placement Stories & Prep Tips',
  description:
    'Read authentic campus placement interview experiences with company rounds, questions, preparation strategies, and selection insights for top employers.',
  keywords: [
    'interview experiences',
    'MIT interview experiences',
    'campus placement interviews',
    'technical interview questions',
    'HR interview questions',
    'coding interview preparation',
    'interview tips',
    'company interview process',
    'Bank of America interview questions',
    'Barclays interview experience',
    'Trimble interview questions',
    'Optum interview experience',
    'Citi interview questions',
    'Verizon interview experience',
    'Societe Generale interview questions',
    'NortonLifeLock interview experience',
  ],
  openGraph: {
    title: 'Real Interview Experiences | Sproutern',
    description:
      'Authentic interview experiences, preparation strategies, and company-specific interview insights for students.',
    url: 'https://www.sproutern.com/interview-experiences',
    siteName: 'Sproutern',
    images: [
      {
        url: 'https://www.sproutern.com/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Interview Experiences - Sproutern',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Interview Experiences | Sproutern',
    description:
      'Read authentic interview experiences and preparation tips for top companies.',
    images: ['https://www.sproutern.com/twitter.jpg'],
  },
  alternates: {
    canonical: 'https://www.sproutern.com/interview-experiences',
  },
};

export default function InterviewExperiencesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Interview Experiences',
        item: 'https://www.sproutern.com/interview-experiences',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Interview Experiences from MIT Students',
    description:
      'Collection of real interview experiences from Madras Institute of Technology students for various companies',
    url: 'https://www.sproutern.com/interview-experiences',
    numberOfItems: interviewExperiences.length,
  };

  // Get unique companies for ItemList
  const uniqueCompanies = [
    ...new Set(interviewExperiences.map((exp) => exp.company)),
  ];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Companies with Interview Experiences',
    description:
      'List of companies with real interview experiences shared by students',
    numberOfItems: uniqueCompanies.length,
    itemListElement: uniqueCompanies.map((company, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: company,
      url: `https://www.sproutern.com/interview-experiences/${toCompanySlug(company)}`,
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Real Interview Experiences from MIT Students | Sproutern',
    description:
      'Read authentic interview experiences from Madras Institute of Technology (MIT) students. Get insights on interview questions, preparation tips, and selection process for top companies.',
    url: 'https://www.sproutern.com/interview-experiences',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Sproutern',
      url: 'https://www.sproutern.com',
    },
    about: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Campus Placement Interview Preparation',
      credentialCategory: 'Interview Preparation Guide',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: interviewExperiences.length,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.description'],
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Real Interview Experiences
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Authentic insights directly from students at premier institutions
              like IITs, NITs, MITs and Anna University. This collection
              features real-world experiences from graduates placed in top-tier
              companies with highly competitive salary packages.
              <br />
              Search, filter, and learn from their journey.
            </p>
            <div className="mx-auto mt-4 max-w-2xl text-center">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Disclaimer:</span> These
                interview experiences are real accounts shared by students.
                Names have been anonymized for privacy. The content is for
                educational purposes only.
              </p>
            </div>
          </div>

          <InterviewSearch experiences={interviewExperiences} />
        </div>
      </div>
    </>
  );
}
