'use client';

import { User, Calendar, CheckCircle } from 'lucide-react';

interface AuthorBoxProps {
  name: string;
  role: string;
  expertise?: string[];
  avatarUrl?: string;
  lastUpdated?: string;
  reviewedBy?: string;
}

export function AuthorBox({
  name,
  role,
  expertise = [],
  avatarUrl,
  lastUpdated,
  reviewedBy,
}: AuthorBoxProps) {
  return (
    <div className="my-8 border-b border-t py-6">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <User className="h-8 w-8 text-primary" />
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-lg font-bold">{name}</span>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </div>
          <p className="mb-2 text-sm text-muted-foreground">{role}</p>

          {expertise.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            {lastUpdated && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Updated: {lastUpdated}</span>
              </div>
            )}
            {reviewedBy && (
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span>Reviewed by: {reviewedBy}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Preset author configurations for consistency
export const AUTHORS = {
  sprouternTeam: {
    name: 'Sproutern Team',
    role: 'Career Experts & Content Team',
    expertise: ['Career Guidance', 'Interview Prep', 'Resume Writing'],
    avatarUrl: '/logo.jpg',
  },
  careerTeam: {
    name: 'Sproutern Career Team',
    role: 'Career Counselors & Industry Experts',
    expertise: ['Placements', 'Industry Insights', 'Skill Development'],
  },
};
