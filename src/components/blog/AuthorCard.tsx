import { User, Linkedin, Twitter, Globe } from 'lucide-react';
import Link from 'next/link';

interface AuthorCardProps {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  updatedDate?: string;
}

export function AuthorCard({
  name,
  title,
  bio,
  avatarUrl,
  linkedin,
  twitter,
  website,
  updatedDate,
}: AuthorCardProps) {
  return (
    <div className="mt-10 border-t pt-8">
      <div className="flex items-start gap-4">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <User className="h-8 w-8 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <p className="text-lg font-bold">{name}</p>
          <p className="mb-2 text-sm text-muted-foreground">{title}</p>
          <p className="mb-3 text-sm text-muted-foreground">{bio}</p>

          <div className="flex items-center gap-4">
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}
            {twitter && (
              <Link
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${name}'s Twitter profile`}
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}
            {website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={`${name}'s website`}
              >
                <Globe className="h-5 w-5" />
              </Link>
            )}
          </div>

          {updatedDate && (
            <p className="mt-3 text-xs text-muted-foreground">
              Last updated: {updatedDate}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Default author for Sproutern content
export const defaultAuthor: AuthorCardProps = {
  name: 'Sproutern Career Team',
  title: 'Career Experts & Content Specialists',
  bio: "Our team of career experts has helped over 10,000 students land internships at companies ranging from startups to Fortune 500 giants. We're passionate about making career guidance accessible to everyone.",
  linkedin: 'https://linkedin.com/company/sproutern',
};

// Function to generate Author schema for SEO
export function generateAuthorSchema(author: AuthorCardProps) {
  return {
    '@type': 'Person',
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    url: author.website || author.linkedin,
    sameAs: [author.linkedin, author.twitter, author.website].filter(Boolean),
  };
}
