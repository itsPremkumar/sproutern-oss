import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Work Visa Comparison - Compare H-1B, Blue Card & More | Sproutern',
  description:
    'Compare work visa requirements, costs, processing times, and benefits across countries. H-1B, O-1A, EU Blue Card, Skilled Worker visa, and more for USA, UK, Germany, Canada, Australia.',
  keywords: [
    'work visa comparison',
    'H-1B visa',
    'EU Blue Card',
    'skilled worker visa',
    'work permit comparison',
    'international work visa',
    'visa requirements',
    'work abroad',
    'immigration visa',
    'employment visa',
  ],
  canonical: '/tools/work-visa-comparison',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
