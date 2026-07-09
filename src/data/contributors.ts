export interface ManualContributor {
  login: string; // GitHub username to match
  role: string;
  category: 'core' | 'maintainer' | 'contributor';
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    instagram?: string;
  };
  customAvatar?: string; // Optional override
  contributions?: number; // Optional override
}

export const MANUAL_CONTRIBUTORS: ManualContributor[] = [
  {
    login: 'sproutern-team',
    role: 'Editorial Team',
    category: 'core',
    bio: 'Dedicated to building free career tools for students.',
    contributions: 5000,
    socials: {
      linkedin: 'https://www.linkedin.com/company/sproutern',
      twitter: 'https://twitter.com/sproutern',
      website: 'https://www.sproutern.com',
    },
  },
  // Add more manual contributors here
];
