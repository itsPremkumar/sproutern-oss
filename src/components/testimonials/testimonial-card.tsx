'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  feedback: string;
  rating: number;
  avatarUrl: string;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  role,
  company,
  feedback,
  rating,
  avatarUrl,
  featured = false,
}: TestimonialCardProps) {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured
          ? 'border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10'
          : 'bg-card/50 backdrop-blur-sm hover:bg-card/80'
      }`}
    >
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="absolute right-4 top-4 opacity-20 transition-opacity group-hover:opacity-40">
          <Quote
            size={32}
            className="text-primary"
          />
        </div>

        {/* Rating Stars */}
        <div className="mb-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="mb-6 text-lg font-medium leading-relaxed text-foreground/90">
          "{feedback}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 ring-2 ring-primary/20 ring-offset-2">
            <AvatarImage
              src={avatarUrl}
              alt={name}
            />
            <AvatarFallback className="bg-primary/10 font-semibold text-primary">
              {name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h4 className="text-lg font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
            {company && (
              <Badge
                variant="secondary"
                className="mt-1 text-xs"
              >
                {company}
              </Badge>
            )}
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </CardContent>
    </Card>
  );
}
