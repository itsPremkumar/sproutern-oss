'use client';

import { Badge } from '@/components/ui/badge';
import { Users, Heart } from 'lucide-react';

export function TestimonialsHeader() {
  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">
      {/* Badge */}
      <div className="mb-6 flex justify-center">
        <Badge
          variant="secondary"
          className="border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        >
          <Users
            size={16}
            className="mr-2"
          />
          Trusted by Our Users
        </Badge>
      </div>

      {/* Main Heading */}
      <h1 className="mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl lg:text-7xl">
        What Our Users Say
      </h1>

      {/* Subheading */}
      <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
        Join thousands of students who have transformed their careers with our
        platform. Here's what they have to say about their experience.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">
            <Heart
              size={20}
              className="text-primary"
            />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">
              Satisfaction Rate
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-accent/10 p-2">
            <Users
              size={20}
              className="text-accent"
            />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">109+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}
