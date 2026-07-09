'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useState } from 'react';
import {
  Linkedin,
  Twitter,
  Globe,
  Github,
  Mail,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SocialLink {
  platform:
    | 'linkedin'
    | 'twitter'
    | 'github'
    | 'website'
    | 'email'
    | 'instagram';
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: React.ReactNode;
  imageUrl: string;
  fallbackImageUrl: string;
  socials?: SocialLink[];
}

const SocialIcon = ({
  platform,
  className,
}: {
  platform: SocialLink['platform'];
  className?: string;
}) => {
  switch (platform) {
    case 'linkedin':
      return <Linkedin className={className} />;
    case 'twitter':
      return <Twitter className={className} />;
    case 'github':
      return <Github className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'website':
      return <Globe className={className} />;
    case 'email':
      return <Mail className={className} />;
    default:
      return <Globe className={className} />;
  }
};

export function TeamMemberCard({
  name,
  role,
  description,
  imageUrl,
  fallbackImageUrl,
  socials = [],
}: TeamMemberCardProps) {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <Card className="relative overflow-hidden rounded-3xl border-0 bg-background/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-background/80 hover:shadow-2xl">
        <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

        <CardContent className="relative z-10 flex flex-col items-center px-8 pb-8 pt-12 text-center">
          <div className="relative mb-6 transition-transform duration-500 group-hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70" />
            <div className="relative z-10 h-40 w-40 rounded-full bg-background p-1 ring-4 ring-primary/10 transition-all duration-500 group-hover:ring-primary/30">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={imgSrc}
                  alt={`${name} - ${role}`}
                  width={160}
                  height={160}
                  onError={() => setImgSrc(fallbackImageUrl)}
                />
              </div>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
              {name}
            </h3>
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary">
              {role}
            </div>
          </div>

          <div className="mx-auto mb-8 max-w-2xl text-left leading-relaxed text-muted-foreground">
            {description}
          </div>

          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'rounded-full p-2.5 transition-all duration-300',
                  'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground',
                  'hover:scale-110 hover:shadow-lg hover:shadow-primary/25',
                )}
                aria-label={`${name}'s ${social.platform}`}
              >
                <SocialIcon
                  platform={social.platform}
                  className="h-5 w-5"
                />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
