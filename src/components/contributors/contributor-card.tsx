import Link from 'next/link';
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Instagram,
  User,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getInitials } from '@/lib/utils';

export interface ContributorCardProps {
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

export function ContributorCard({
  login,
  avatar_url,
  html_url,
  contributions,
  type,
  role,
  bio,
  socials,
}: ContributorCardProps) {
  return (
    <Card className="glass-strong glow-hover shadow-premium group relative h-full overflow-hidden border-primary/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <CardContent className="flex h-full flex-col items-center p-6 text-center">
        {/* Avatar Section */}
        <div className="relative mb-4">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-70 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg" />
          <Link
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar className="h-24 w-24 cursor-pointer border-2 border-background shadow-xl transition-transform hover:scale-105">
              <AvatarImage
                src={avatar_url}
                alt={login}
              />
              <AvatarFallback>{getInitials(login)}</AvatarFallback>
            </Avatar>
          </Link>

          <div className="absolute bottom-0 right-0 rounded-full bg-background p-1 shadow-md">
            <Github className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Info Section */}
        <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {login}
        </h3>

        {role ? (
          <Badge className="mb-2 bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
            {role}
          </Badge>
        ) : (
          <Badge
            variant="secondary"
            className="mb-2 bg-primary/10 text-primary hover:bg-primary/20"
          >
            {type}
          </Badge>
        )}

        {bio && (
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {bio}
          </p>
        )}

        <div className="mt-auto w-full border-t border-border/50 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="mr-2 flex items-center gap-1 text-xs text-muted-foreground">
              <span className="font-bold text-foreground">{contributions}</span>
              <span>commits</span>
            </div>

            {/* Social Links */}
            {socials && (
              <div className="flex gap-2">
                {socials.linkedin && (
                  <Link
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-[#0077b5]"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                )}
                {socials.twitter && (
                  <Link
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-sky-500"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                )}
                {socials.instagram && (
                  <Link
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-pink-600"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                )}
                {socials.website && (
                  <Link
                    href={socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Globe className="h-4 w-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
