import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface ServicePricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function ServicePricingCard({
  title,
  description,
  price,
  features,
  isPopular = false,
  ctaText = 'Book Now',
  ctaLink = '/contact',
}: ServicePricingCardProps) {
  return (
    <Card
      className={`relative flex h-full flex-col ${isPopular ? 'z-10 mb-[-10px] mt-[-10px] border-primary shadow-lg shadow-primary/20 sm:mb-[20px] sm:mt-[-20px]' : 'border-gray-200 dark:border-gray-800'}`}
    >
      {isPopular && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="min-h-[40px]">
          {description}
        </CardDescription>
        <div className="mb-2 mt-4">
          <span className="text-4xl font-extrabold">{price}</span>
          {price !== 'Custom' && (
            <span className="ml-1 text-muted-foreground">/project</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-4">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            What's included
          </h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex-start flex gap-3"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-6">
        <Button
          asChild
          className="w-full"
          variant={isPopular ? 'default' : 'outline'}
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
