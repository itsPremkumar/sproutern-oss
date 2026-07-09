'use client';

import { ContributorCard } from './contributor-card';

export interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
  role?: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    instagram?: string;
  };
}

interface ContributorsGridProps {
  contributors: Contributor[];
}

export function ContributorsGrid({ contributors }: ContributorsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {contributors.map((contributor) => (
        <ContributorCard
          key={contributor.id}
          login={contributor.login}
          avatar_url={contributor.avatar_url}
          html_url={contributor.html_url}
          contributions={contributor.contributions}
          type={contributor.type}
          role={contributor.role}
          bio={contributor.bio}
          socials={contributor.socials}
        />
      ))}
    </div>
  );
}
