import React from 'react';
import Link from 'next/link';
import interviewExperiencesData from '@/data/interview-experiences.json';
import { notFound, permanentRedirect } from 'next/navigation';
import { Metadata } from 'next';
import { InterviewExperience } from '@/types/interview';
import Script from 'next/script';
import { decodeCompanyParam, toCompanySlug } from '@/lib/company-slug';

const interviewExperiences =
  interviewExperiencesData as unknown as InterviewExperience[];

interface Props {
  params: Promise<{ company: string }>;
}

function getCanonicalCompanyName(companyParam: string): string | null {
  const decoded = decodeCompanyParam(companyParam);
  const requestedSlug = toCompanySlug(decoded);

  const match = interviewExperiences.find((exp) => {
    const normalizedCompany = exp.company.trim();
    return (
      normalizedCompany.toLowerCase() === decoded.toLowerCase() ||
      toCompanySlug(normalizedCompany) === requestedSlug
    );
  });

  return match?.company ?? null;
}

function getExperiencesForCompanySlug(
  companySlug: string,
): InterviewExperience[] {
  return interviewExperiences.filter(
    (exp) => toCompanySlug(exp.company) === companySlug,
  );
}

export async function generateStaticParams() {
  const companies = [
    ...new Set(interviewExperiences.map((exp) => exp.company)),
  ];
  return companies.map((company) => ({
    company: toCompanySlug(company),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { company } = await params;
  const canonicalCompany = getCanonicalCompanyName(company);

  if (!canonicalCompany) {
    return {
      title: 'Interview Experiences Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalCompanySlug = toCompanySlug(canonicalCompany);
  const experiences = getExperiencesForCompanySlug(canonicalCompanySlug);

  return {
    title: `${canonicalCompany} Interview Experiences`,
    description: `Read ${experiences.length} authentic interview experiences for ${canonicalCompany} from MIT students. Learn about interview rounds, questions asked, preparation tips, and selection process.`,
    keywords: [
      `${canonicalCompany} interview experience`,
      `${canonicalCompany} interview questions`,
      `${canonicalCompany} interview process`,
      `${canonicalCompany} campus placement`,
      `${canonicalCompany} technical interview`,
      `${canonicalCompany} HR interview`,
      'MIT placement',
      'interview preparation',
    ],
    openGraph: {
      title: `${canonicalCompany} Interview Experiences from MIT Students`,
      description: `${experiences.length} real interview experiences for ${canonicalCompany}. Get insights on interview rounds, questions, and preparation strategies from MIT students.`,
      url: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}`,
      siteName: 'Sproutern',
      images: [
        {
          url: 'https://www.sproutern.com/opengraph.jpg',
          width: 1200,
          height: 630,
          alt: `${canonicalCompany} Interview Experiences`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${canonicalCompany} Interview Experiences`,
      description: `${experiences.length} authentic interview stories from MIT students for ${canonicalCompany}`,
      images: ['https://www.sproutern.com/twitter.jpg'],
    },
    alternates: {
      canonical: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}`,
    },
  };
}

export default async function CompanyExperiencesPage({ params }: Props) {
  const { company } = await params;
  const canonicalCompany = getCanonicalCompanyName(company);

  if (!canonicalCompany) {
    notFound();
  }

  const canonicalCompanySlug = toCompanySlug(canonicalCompany);
  const requestedSlug = toCompanySlug(decodeCompanyParam(company));

  if (requestedSlug !== canonicalCompanySlug) {
    permanentRedirect(`/interview-experiences/${canonicalCompanySlug}`);
  }

  const experiences = getExperiencesForCompanySlug(canonicalCompanySlug);
  if (experiences.length === 0) {
    notFound();
  }

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
      {
        '@type': 'ListItem',
        position: 3,
        name: canonicalCompany,
        item: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}`,
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${canonicalCompany} Interview Experiences`,
    description: `Collection of ${experiences.length} interview experiences from MIT students for ${canonicalCompany}`,
    url: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}`,
    numberOfItems: experiences.length,
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${canonicalCompany} Interview Experiences`,
    description: `Real interview experiences from students for ${canonicalCompany}`,
    numberOfItems: experiences.length,
    itemListElement: experiences.map((exp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${exp.studentName || 'Student'}'s ${canonicalCompany} Interview - ${exp.role}`,
      url: `https://www.sproutern.com/interview-experiences/${toCompanySlug(exp.company)}/${exp.id}`,
      item: {
        '@type': 'Article',
        name: `${exp.studentName || 'Student'}'s Interview Experience at ${canonicalCompany}`,
        author: { '@type': 'Person', name: exp.studentName || 'Student' },
        datePublished: exp.date || new Date().toISOString().split('T')[0],
      },
    })),
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: canonicalCompany,
    description: `Interview experiences and questions for ${canonicalCompany}`,
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
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Link
              href="/interview-experiences"
              className="flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              &larr; Back to Companies
            </Link>
          </div>

          <div className="mb-12 text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {canonicalCompany} Interview Experiences
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              {experiences.length} students shared their journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp) => (
              <Link
                key={exp.id}
                href={`/interview-experiences/${toCompanySlug(exp.company)}/${exp.id}`}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-indigo-100 font-bold text-indigo-700">
                      {exp.studentImage ? (
                        <img
                          src={exp.studentImage}
                          alt={exp.studentName || 'Student'}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        (exp.studentName || 'A').charAt(0)
                      )}
                    </div>
                    {exp.verdict && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          exp.verdict === 'Selected'
                            ? 'bg-green-100 text-green-800'
                            : exp.verdict === 'Rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {exp.verdict}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900">
                    {exp.studentName || 'Student'}
                  </h3>
                  <p className="mb-1 text-sm text-gray-500">{exp.role}</p>
                  {exp.college && (
                    <p className="mb-4 text-xs text-gray-400">{exp.college}</p>
                  )}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Batch: {exp.batch}</span>
                    {exp.difficulty && (
                      <>
                        <span>&bull;</span>
                        <span>{exp.difficulty}</span>
                      </>
                    )}
                  </div>
                </div>
                {exp.date && (
                  <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-3">
                    <span className="text-xs text-gray-500">{exp.date}</span>
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                      Read Story &rarr;
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
