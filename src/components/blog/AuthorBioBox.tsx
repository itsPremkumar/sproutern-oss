import { Users, Calendar, CheckCircle } from 'lucide-react';

interface AuthorBioBoxProps {
  author?: string;
  expertise?: string;
  lastUpdated?: string;
  stats?: string;
}

export function AuthorBioBox({
  author = 'Sproutern Career Team',
  expertise = 'Based on analysis of 10,000+ successful internship applications and interviews with hiring managers.',
  lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  stats = 'Trusted by 50,000+ students across India',
}: AuthorBioBoxProps) {
  return (
    <div className="not-prose mt-8 border-t pt-8">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-lg font-bold">{author}</p>
          <p className="mb-2 text-sm text-muted-foreground">{expertise}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>Last updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3 text-green-600" />
              <span>{stats}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
