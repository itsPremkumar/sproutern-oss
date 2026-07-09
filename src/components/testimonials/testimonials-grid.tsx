'use client';

import { TestimonialCard } from './testimonial-card';

interface Testimonial {
  name: string;
  role: string;
  company?: string;
  feedback: string;
  rating: number;
  avatarUrl: string;
  featured?: boolean;
}

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`${index === 1 ? 'md:col-span-2 lg:col-span-1' : ''} ${
            index === 0 ? 'lg:col-start-1' : ''
          }`}
        >
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
}
