import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Tax Calculator - Income Tax Calculator India | Sproutern',
  description:
    'Free income tax calculator for India. Calculate tax under old and new regime. Estimate your tax liability for FY 2024-25 with latest slabs.',
  keywords: [
    'tax calculator',
    'income tax calculator',
    'tax calculation',
    'india tax',
    'new tax regime',
    'old tax regime',
  ],
  canonical: '/tools/tax-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
