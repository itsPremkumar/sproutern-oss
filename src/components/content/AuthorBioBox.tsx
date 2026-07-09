import { User, Calendar, Award } from 'lucide-react';
import Image from 'next/image';

interface AuthorBioBoxProps {
  name?: string;
  role?: string;
  bio?: string;
  imageUrl?: string;
  expertise?: string[];
  lastUpdated?: string;
}

export function AuthorBioBox({
  name = 'Sproutern Career Team',
  role = 'Career Guidance Experts',
  bio = 'Our team of career counselors, industry professionals, and former recruiters has helped over 50,000 Indian students and freshers land their dream jobs. We combine 15+ years of collective experience in career guidance, recruitment, and student mentorship.',
  imageUrl = '/logo.jpg',
  expertise = [
    'Career Counseling',
    'Resume Writing',
    'Interview Preparation',
    'Indian Job Market',
  ],
  lastUpdated,
}: AuthorBioBoxProps) {
  return (
    <div className="not-prose my-8 rounded-lg border border-border bg-muted/30 p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
        <Award className="h-4 w-4" />
        <span>Expert Author</span>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start">
        <div className="flex-shrink-0">
          <div className="relative h-20 w-20 overflow-hidden rounded-full bg-primary/10">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="flex h-full w-full items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="mb-1 text-lg font-bold">{name}</h4>
          <p className="mb-2 text-sm text-muted-foreground">{role}</p>
          <p className="mb-3 text-sm leading-relaxed">{bio}</p>

          {expertise && expertise.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {lastUpdated && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
