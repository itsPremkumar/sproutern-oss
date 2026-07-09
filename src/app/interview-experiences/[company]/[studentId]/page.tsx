import React from 'react';
import Link from 'next/link';
import interviewExperiencesData from '@/data/interview-experiences.json';
import { notFound, permanentRedirect } from 'next/navigation';
import { Metadata } from 'next';
import { InterviewExperience } from '@/types/interview';
import { ShareButton } from '@/components/interview/ShareButton';
import Script from 'next/script';
import { decodeCompanyParam, toCompanySlug } from '@/lib/company-slug';

const interviewExperiences =
  interviewExperiencesData as unknown as InterviewExperience[];

interface Props {
  params: Promise<{ company: string; studentId: string }>;
}

export async function generateStaticParams() {
  return interviewExperiences.map((exp) => ({
    company: toCompanySlug(exp.company),
    studentId: exp.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { studentId } = await params;
  const experience = interviewExperiences.find((exp) => exp.id === studentId);

  if (!experience) {
    return {
      title: 'Experience Not Found',
    };
  }

  const canonicalCompanySlug = toCompanySlug(experience.company);
  const roundsInfo =
    experience.rounds.length > 0
      ? `${experience.rounds.length} interview rounds`
      : 'detailed interview process';

  const skillsInfo =
    experience.primarySkills && experience.primarySkills.length > 0
      ? ` Skills: ${experience.primarySkills.slice(0, 3).join(', ')}.`
      : '';

  // Calculate title to stay within 70 chars when suffix is added
  // Layout adds " | Sproutern" (12 chars total including " | ")
  const maxTotalLength = 58;

  const company_name = experience.company;
  const role_name = experience.role || 'SDE';

  let titleContent = `${company_name} Interview - ${role_name}`;
  if (titleContent.length > maxTotalLength) {
    // Try shorter format
    titleContent = `${company_name} - ${role_name} Interview`;
    if (titleContent.length > maxTotalLength) {
      // Even shorter
      titleContent = `${company_name} Interview`;
      if (titleContent.length > maxTotalLength) {
        titleContent = titleContent.substring(0, maxTotalLength - 3) + '...';
      }
    }
  }

  return {
    title: titleContent,
    description: `Read ${experience.studentName}'s complete interview experience at ${experience.company} for ${experience.role || 'the position'}. Learn about ${roundsInfo}, questions asked, preparation strategy, and valuable tips.${skillsInfo} Verdict: ${experience.verdict}.`,
    keywords: [
      `${experience.company} interview experience`,
      `${experience.company} ${experience.role} interview`,
      `${experience.company} interview questions`,
      `${experience.company} interview rounds`,
      'MIT placement interview',
      'technical interview experience',
      'campus placement experience',
      ...(experience.primarySkills || []),
    ],
    openGraph: {
      title: `${experience.studentName}'s ${experience.company} Interview Experience`,
      description: `${experience.verdict === 'Selected' ? '✅ Selected' : experience.verdict} - ${experience.role || 'Position'} at ${experience.company}. Read about the complete interview process, questions, and preparation tips.`,
      url: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}/${studentId}`,
      siteName: 'Sproutern',
      images: [
        {
          url:
            experience.studentImage ||
            'https://www.sproutern.com/opengraph.jpg',
          width: 1200,
          height: 630,
          alt: `${experience.studentName}'s Interview Experience at ${experience.company}`,
        },
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime: experience.date || new Date().toISOString(),
      authors: experience.studentName ? [experience.studentName] : undefined,
      tags: [
        experience.company,
        experience.role || '',
        ...(experience.primarySkills || []),
        ...(experience.topicsCovered || []),
      ].filter(Boolean),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${experience.studentName}'s ${experience.company} Interview Experience`,
      description: `${experience.verdict} - ${experience.role || 'Position'}. Learn about interview rounds, questions, and preparation tips.`,
      images: [
        experience.studentImage || 'https://www.sproutern.com/twitter.jpg',
      ],
    },
    alternates: {
      canonical: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}/${studentId}`,
    },
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { company, studentId } = await params;
  const requestedSlug = toCompanySlug(decodeCompanyParam(company));

  const experience = interviewExperiences.find((exp) => exp.id === studentId);

  if (!experience) {
    notFound();
  }

  const canonicalCompanySlug = toCompanySlug(experience.company);
  if (requestedSlug !== canonicalCompanySlug) {
    permanentRedirect(
      `/interview-experiences/${canonicalCompanySlug}/${studentId}`,
    );
  }

  const decodedCompany = experience.company;

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${experience.studentName}'s Interview Experience at ${experience.company}`,
    description: `Interview experience for ${experience.role || 'position'} at ${experience.company}`,
    author: {
      '@type': 'Person',
      name: experience.studentName,
      ...(experience.linkedIn && { sameAs: experience.linkedIn }),
    },
    datePublished: experience.date || new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'Sproutern',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sproutern.com/logo.jpg',
        creditText: 'Sproutern',
        creator: {
          '@type': 'Organization',
          name: 'Sproutern',
        },
        copyrightNotice: '© 2026 Sproutern. All rights reserved.',
        license: 'https://www.sproutern.com/terms',
        acquireLicensePage: 'https://www.sproutern.com/contact',
      },
    },
    image: experience.studentImage || 'https://www.sproutern.com/opengraph.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}/${studentId}`,
    },
  };

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
        name: experience.company,
        item: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: experience.studentName,
        item: `https://www.sproutern.com/interview-experiences/${canonicalCompanySlug}/${studentId}`,
      },
    ],
  };

  const faqSchema =
    experience.tips && experience.tips.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: experience.tips.slice(0, 5).map((tip, index) => ({
            '@type': 'Question',
            name: `Tip ${index + 1} for ${experience.company} Interview`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: tip,
            },
          })),
        }
      : null;

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center justify-between">
            <Link
              href={`/interview-experiences/${canonicalCompanySlug}`}
              className="flex items-center font-medium text-blue-600 hover:text-blue-800"
            >
              &larr; Back to {decodedCompany}
            </Link>
            <ShareButton
              url={`/interview-experiences/${canonicalCompanySlug}/${studentId}`}
              title={`${experience.studentName}'s Interview Experience`}
              company={experience.company}
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-white">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-6">
                  {experience.studentImage && (
                    <img
                      src={experience.studentImage}
                      alt={experience.studentName}
                      className="h-24 w-24 rounded-full border-4 border-white/20 object-cover"
                    />
                  )}
                  <div>
                    <h1 className="mb-2 text-3xl font-bold">
                      {experience.studentName}
                    </h1>
                    <p className="text-lg text-blue-100">
                      {experience.role} at {experience.company}
                    </p>
                    {experience.department && (
                      <p className="mt-1 text-sm text-blue-200">
                        {experience.department}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 md:items-end">
                  <span
                    className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm ${
                      experience.verdict === 'Selected'
                        ? 'bg-green-500 text-white'
                        : experience.verdict === 'Rejected'
                          ? 'bg-red-500 text-white'
                          : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {experience.verdict}
                  </span>
                  <span className="text-sm text-blue-100">
                    Batch: {experience.batch}
                  </span>
                  {experience.salary && (
                    <span className="font-semibold text-white">
                      Package: {experience.salary}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Quick Stats */}
              <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                {experience.cgpa && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">CGPA</span>
                    <span className="font-semibold text-gray-900">
                      {experience.cgpa}
                    </span>
                  </div>
                )}
                {experience.location && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Location
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.location}
                    </span>
                  </div>
                )}
                {experience.workMode && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Work Mode
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.workMode}
                    </span>
                  </div>
                )}
                {experience.jobType && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Job Type
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.jobType}
                    </span>
                  </div>
                )}
                <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                  <span className="block text-xs text-gray-500">
                    Difficulty
                  </span>
                  <span className="font-semibold text-gray-900">
                    {experience.difficulty}
                  </span>
                </div>
                {experience.interviewMode && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Interview Mode
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.interviewMode}
                    </span>
                  </div>
                )}
                {experience.totalDuration && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Total Duration
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.totalDuration}
                    </span>
                  </div>
                )}
                {experience.applicationMethod && (
                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-3">
                    <span className="block text-xs text-gray-500">
                      Applied Via
                    </span>
                    <span className="font-semibold text-gray-900">
                      {experience.applicationMethod}
                    </span>
                  </div>
                )}
              </div>

              {/* Skills & Preparation */}
              {(experience.primarySkills ||
                experience.topicsCovered ||
                experience.preparationTime) && (
                <div className="mb-8 rounded-xl border border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Skills & Preparation
                  </h3>
                  <div className="space-y-3">
                    {experience.primarySkills && (
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          Primary Skills:
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {experience.primarySkills.map((skill, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {experience.topicsCovered && (
                      <div>
                        <span className="text-sm font-medium text-gray-700">
                          Topics Covered:
                        </span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {experience.topicsCovered.map((topic, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {experience.preparationTime && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-gray-700">
                          Preparation Time:
                        </span>
                        <span className="text-gray-900">
                          {experience.preparationTime}
                        </span>
                      </div>
                    )}
                    {experience.problemsSolved && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-gray-700">
                          Problems Solved:
                        </span>
                        <span className="text-gray-900">
                          {experience.problemsSolved}+
                        </span>
                      </div>
                    )}
                    {experience.mockInterviews && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium text-gray-700">
                          Mock Interviews:
                        </span>
                        <span className="text-gray-900">
                          {experience.mockInterviews}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Resources Used */}
              {experience.resources && experience.resources.length > 0 && (
                <div className="mb-8 rounded-xl border border-gray-100 bg-green-50 p-6">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    Resources Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.resources.map((resource, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
                      >
                        {resource}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience & Achievements */}
              {(experience.certifications ||
                experience.previousInternships ||
                experience.hackathons) && (
                <div className="mb-8 rounded-xl border border-gray-100 bg-purple-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Background & Achievements
                  </h3>
                  <div className="space-y-3">
                    {experience.certifications &&
                      experience.certifications.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Certifications:
                          </span>
                          <ul className="mt-1 list-inside list-disc text-sm text-gray-900">
                            {experience.certifications.map((cert, i) => (
                              <li key={i}>{cert}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {experience.previousInternships &&
                      experience.previousInternships.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Previous Internships:
                          </span>
                          <ul className="mt-1 list-inside list-disc text-sm text-gray-900">
                            {experience.previousInternships.map((intern, i) => (
                              <li key={i}>{intern}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    {experience.hackathons &&
                      experience.hackathons.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            Hackathons:
                          </span>
                          <ul className="mt-1 list-inside list-disc text-sm text-gray-900">
                            {experience.hackathons.map((hack, i) => (
                              <li key={i}>{hack}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              )}

              {/* Company Insights */}
              {(experience.eligibilityCriteria ||
                experience.numberOfApplicants ||
                experience.workLifeBalance) && (
                <div className="mb-8 rounded-xl border border-gray-100 bg-orange-50 p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    Company Insights
                  </h3>
                  <div className="space-y-2 text-sm">
                    {experience.eligibilityCriteria && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Eligibility:
                        </span>{' '}
                        {experience.eligibilityCriteria}
                      </div>
                    )}
                    {experience.numberOfApplicants && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Applicants:
                        </span>{' '}
                        {experience.numberOfApplicants}
                      </div>
                    )}
                    {experience.numberOfSelected && (
                      <div>
                        <span className="font-medium text-gray-700">
                          Selected:
                        </span>{' '}
                        {experience.numberOfSelected}
                      </div>
                    )}
                    {experience.workLifeBalance && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">
                          Work-Life Balance:
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < experience.workLifeBalance!
                                  ? 'text-yellow-500'
                                  : 'text-gray-300'
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {experience.learningOpportunities && (
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">
                          Learning Opportunities:
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < experience.learningOpportunities!
                                  ? 'text-yellow-500'
                                  : 'text-gray-300'
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact & Links */}
              <div className="mb-8 flex flex-wrap gap-3">
                {experience.resumeUrl && (
                  <a
                    href={experience.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    {experience.resumeUrl.endsWith('.tex')
                      ? 'View LaTeX Source'
                      : 'View Resume'}
                  </a>
                )}
                {experience.linkedIn && (
                  <a
                    href={experience.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
                  >
                    LinkedIn Profile
                  </a>
                )}
                {experience.githubProfile && (
                  <a
                    href={experience.githubProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
                  >
                    GitHub Profile
                  </a>
                )}
                {experience.willingToMentor && (
                  <span className="rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
                    ✓ Available for Mentorship
                  </span>
                )}
                {experience.availableForMockInterview && (
                  <span className="rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
                    ✓ Available for Mock Interviews
                  </span>
                )}
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Interview Experience
                </h2>

                {experience.rounds.length > 0 ? (
                  <div className="space-y-8">
                    {experience.rounds.map((round, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 py-2 pl-6"
                      >
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-bold text-gray-900">
                            {round.roundName}
                          </h3>
                          {round.duration && (
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                              ⏱ {round.duration}
                            </span>
                          )}
                          {round.mode && (
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                              {round.mode}
                            </span>
                          )}
                          {round.platform && (
                            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                              {round.platform}
                            </span>
                          )}
                        </div>
                        <p className="mb-4 whitespace-pre-wrap">
                          {round.description}
                        </p>
                        {round.questions && round.questions.length > 0 && (
                          <div className="rounded-lg bg-gray-50 p-4">
                            <h4 className="mb-2 font-semibold text-gray-900">
                              Questions Asked:
                            </h4>
                            <ul className="list-inside list-disc space-y-1">
                              {round.questions.map((q, i) => (
                                <li key={i}>{q}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap rounded-xl border border-gray-100 bg-gray-50 p-6">
                    {experience.content || 'No detailed content available yet.'}
                  </div>
                )}

                {experience.whatWorkedWell &&
                  experience.whatWorkedWell.length > 0 && (
                    <div className="mt-10">
                      <h2 className="mb-4 text-2xl font-bold text-gray-900">
                        What Worked Well
                      </h2>
                      <ul className="list-inside list-disc space-y-2 rounded-xl border border-green-100 bg-green-50 p-6 text-gray-800">
                        {experience.whatWorkedWell.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {experience.mistakesToAvoid &&
                  experience.mistakesToAvoid.length > 0 && (
                    <div className="mt-10">
                      <h2 className="mb-4 text-2xl font-bold text-gray-900">
                        Mistakes to Avoid
                      </h2>
                      <ul className="list-inside list-disc space-y-2 rounded-xl border border-red-100 bg-red-50 p-6 text-gray-800">
                        {experience.mistakesToAvoid.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                {experience.tips && experience.tips.length > 0 && (
                  <div className="mt-10">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">
                      Tips for Juniors
                    </h2>
                    <ul className="list-inside list-disc space-y-2 rounded-xl border border-yellow-100 bg-yellow-50 p-6 text-gray-800">
                      {experience.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-12 border-t border-gray-100 pt-8">
                <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-500">
                  <p>
                    <span className="font-semibold">Disclaimer:</span> This
                    interview experience is a personal account shared by the
                    student. It represents their individual experience and may
                    not reflect the standard recruitment process of the company.
                    Student names have been changed to protect their privacy.
                    The information provided is for educational and preparation
                    purposes only and should not be considered as official
                    company documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
