import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Cost of Living Calculator - Compare City Expenses | Sproutern',
  description:
    'Free cost of living calculator. Compare living expenses between cities in India. Understand rent, food, transport, and lifestyle costs before relocating.',
  keywords: [
    'cost of living calculator',
    'city comparison',
    'living expenses',
    'rent calculator',
    'salary comparison',
    'india cost of living',
  ],
  canonical: '/tools/cost-of-living',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
