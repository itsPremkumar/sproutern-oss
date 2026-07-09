import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Deadline Calculator - Calculate Due Dates | Sproutern',
  description:
    'Free deadline calculator to find due dates. Add business days, exclude weekends and holidays. Perfect for project planning and assignments.',
  keywords: [
    'deadline calculator',
    'due date calculator',
    'business days calculator',
    'project deadline',
    'assignment deadline',
    'date calculator',
  ],
  canonical: '/tools/deadline-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
