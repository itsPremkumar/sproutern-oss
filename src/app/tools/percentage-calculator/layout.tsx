import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Percentage Calculator - Calculate Percentages Online | Sproutern',
  description:
    'Free percentage calculator. Calculate percentage of a number, percentage change, mark percentage, and more. Essential for students and professionals.',
  keywords: [
    'percentage calculator',
    'calculate percentage',
    'percent calculator',
    'percentage of number',
    'marks percentage',
    'percentage change',
  ],
  canonical: '/tools/percentage-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
