/**
 * JobPosting Schema Generator for Internship Listings
 * Helps internships appear in Google for Jobs
 */

export interface JobPostingParams {
  title: string;
  description: string;
  company: {
    name: string;
    logo?: string;
    url?: string;
  };
  location: {
    type: 'Remote' | 'OnSite' | 'Hybrid';
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry: string;
    };
  };
  datePosted: string; // ISO 8601 format
  validThrough?: string; // ISO 8601 format
  employmentType?:
    | 'FULL_TIME'
    | 'PART_TIME'
    | 'CONTRACTOR'
    | 'INTERN'
    | 'TEMPORARY';
  baseSalary?: {
    currency: string;
    value: {
      minValue?: number;
      maxValue?: number;
      value?: number;
    };
    unitText: 'MONTH' | 'YEAR' | 'HOUR' | 'WEEK';
  };
  requirements?: string[];
  responsibilities?: string[];
  skills?: string[];
  educationRequirements?: string;
  experienceRequirements?: string;
  applicationUrl?: string;
  directApply?: boolean;
}

/**
 * Generate JobPosting schema for internships
 */
export function generateJobPostingSchema(params: JobPostingParams) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: params.title,
    description: params.description,
    datePosted: params.datePosted,
    hiringOrganization: {
      '@type': 'Organization',
      name: params.company.name,
      ...(params.company.logo && {
        logo: params.company.logo,
      }),
      ...(params.company.url && {
        sameAs: params.company.url,
      }),
    },
    ...(params.validThrough && {
      validThrough: params.validThrough,
    }),
    ...(params.employmentType && {
      employmentType: params.employmentType,
    }),
  };

  // Add location
  if (params.location.type === 'Remote') {
    schema.jobLocationType = 'TELECOMMUTE';
    schema.applicantLocationRequirements = {
      '@type': 'Country',
      name: params.location.address?.addressCountry || 'Worldwide',
    };
  } else {
    schema.jobLocation = {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...params.location.address,
      },
    };
  }

  // Add salary information if provided
  if (params.baseSalary) {
    const { currency, value, unitText } = params.baseSalary;

    if (value.minValue !== undefined && value.maxValue !== undefined) {
      schema.baseSalary = {
        '@type': 'MonetaryAmount',
        currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: value.minValue,
          maxValue: value.maxValue,
          unitText,
        },
      };
    } else if (value.value !== undefined) {
      schema.baseSalary = {
        '@type': 'MonetaryAmount',
        currency,
        value: {
          '@type': 'QuantitativeValue',
          value: value.value,
          unitText,
        },
      };
    }
  }

  // Add qualifications and requirements
  if (params.educationRequirements) {
    schema.educationRequirements = {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: params.educationRequirements,
    };
  }

  if (params.experienceRequirements) {
    schema.experienceRequirements = {
      '@type': 'OccupationalExperienceRequirements',
      monthsOfExperience: params.experienceRequirements,
    };
  }

  // Add skills
  if (params.skills && params.skills.length > 0) {
    schema.skills = params.skills.join(', ');
  }

  // Add responsibilities
  if (params.responsibilities && params.responsibilities.length > 0) {
    schema.responsibilities = params.responsibilities.join('. ');
  }

  // Add application information
  if (params.applicationUrl) {
    schema.directApply = params.directApply !== false;
    schema.applicationContact = {
      '@type': 'ContactPoint',
      url: params.applicationUrl,
    };
  }

  return schema;
}

/**
 * Generate multiple job postings for a collection
 */
export function generateJobPostingCollection(jobs: JobPostingParams[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: jobs.map((job, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateJobPostingSchema(job),
    })),
  };
}

/**
 * Helper to convert internship data to JobPosting params
 */
export function internshipToJobPosting(internship: {
  id: string;
  title: string;
  description: string;
  company: string;
  companyLogo?: string;
  companyWebsite?: string;
  location?: string;
  locationType?: 'Remote' | 'On-site' | 'Hybrid';
  postedAt: Date;
  deadline?: Date;
  stipend?: {
    min?: number;
    max?: number;
    currency?: string;
  };
  duration?: string;
  requirements?: string[];
  skills?: string[];
}): JobPostingParams {
  const baseUrl = 'https://www.sproutern.com';

  return {
    title: internship.title,
    description: internship.description,
    company: {
      name: internship.company,
      logo: internship.companyLogo,
      url: internship.companyWebsite,
    },
    location: {
      type:
        internship.locationType === 'Remote'
          ? 'Remote'
          : internship.locationType === 'Hybrid'
            ? 'Hybrid'
            : 'OnSite',
      address:
        internship.locationType !== 'Remote'
          ? {
              addressLocality: internship.location || 'Multiple Locations',
              addressCountry: 'IN',
            }
          : undefined,
    },
    datePosted: internship.postedAt.toISOString(),
    validThrough: internship.deadline?.toISOString(),
    employmentType: 'INTERN',
    ...(internship.stipend && {
      baseSalary: {
        currency: internship.stipend.currency || 'INR',
        value: {
          ...(internship.stipend.min && { minValue: internship.stipend.min }),
          ...(internship.stipend.max && { maxValue: internship.stipend.max }),
        },
        unitText: 'MONTH',
      },
    }),
    requirements: internship.requirements,
    skills: internship.skills,
    educationRequirements: "Bachelor's degree or currently pursuing",
    experienceRequirements: '0-1 years',
    applicationUrl: `${baseUrl}/internships/${internship.id}`,
    directApply: true,
  };
}
