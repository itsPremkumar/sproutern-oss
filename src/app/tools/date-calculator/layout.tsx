import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Date Calculator - Calculate Days Between Dates | Sproutern',
  description:
    'Free date calculator to find the number of days between two dates. Calculate age, duration, and add or subtract days from any date.',
  keywords: [
    'date calculator',
    'days between dates',
    'date difference',
    'duration calculator',
    'add days',
    'subtract days',
  ],
  canonical: '/tools/date-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
