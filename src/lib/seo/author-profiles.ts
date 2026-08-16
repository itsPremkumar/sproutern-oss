/**
 * Author Profile Schema and Data
 * E-E-A-T compliance with author credentials
 */

export interface AuthorProfile {
  id: string;
  name: string;
  slug: string;
  title: string;
  bio: string;
  expertise: string[];
  education?: string[];
  experience?: Array<{
    role: string;
    company: string;
    duration: string;
  }>;
  certifications?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  email?: string;
  image?: string;
  publishedArticles?: number;
}

// Default author profiles for Sproutern
export const authorProfiles: AuthorProfile[] = [
  {
    id: 'sproutern-team',
    name: 'Sproutern Editorial Team',
    slug: 'editorial-team',
    title: 'Content & Research Team',
    bio: 'Our editorial team consists of career counselors, HR professionals, and industry experts dedicated to providing accurate, helpful content for students and job seekers.',
    expertise: [
      'Career Development',
      'Resume Writing',
      'Interview Preparation',
      'Industry Trends',
      'Educational Guidance',
    ],
    publishedArticles: 100,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/sproutern',
      twitter: 'https://twitter.com/sproutern',
      github: 'https://github.com/sproutern',
    },
    email: 'https://github.com/itsPremkumar/sproutern-oss',
    image: '/logo.jpg',
  },
];

/**
 * Get author by slug
 */
export function getAuthor(slug: string): AuthorProfile | undefined {
  return authorProfiles.find((author) => author.slug === slug);
}

/**
 * Get author by ID
 */
export function getAuthorById(id: string): AuthorProfile | undefined {
  return authorProfiles.find((author) => author.id === id);
}

/**
 * Generate Person schema for author
 */
export function generateAuthorSchema(author: AuthorProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://sproutern.dpdns.org/authors/${author.slug}`,
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    ...(author.image && { image: author.image }),
    url: `https://sproutern.dpdns.org/authors/${author.slug}`,
    ...(author.email && { email: author.email }),
    ...(author.socialLinks && {
      sameAs: Object.values(author.socialLinks).filter(Boolean),
    }),
    ...(author.expertise && {
      knowsAbout: author.expertise,
    }),
    ...(author.education && {
      alumniOf: author.education.map((edu) => ({
        '@type': 'EducationalOrganization',
        name: edu,
      })),
    }),
    ...(author.experience &&
      author.experience.length > 0 && {
        worksFor: {
          '@type': 'Organization',
          name: author.experience[0].company,
        },
      }),
  };
}

/**
 * Generate ProfilePage schema
 */
export function generateProfilePageSchema(author: AuthorProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: generateAuthorSchema(author),
    name: `${author.name} - Author Profile`,
    description: author.bio,
    url: `https://sproutern.dpdns.org/authors/${author.slug}`,
    ...(author.publishedArticles && {
      mentions: {
        '@type': 'CreativeWork',
        name: 'Articles',
        numberOfItems: author.publishedArticles,
      },
    }),
  };
}
