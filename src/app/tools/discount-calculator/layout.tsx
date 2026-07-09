import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Discount Calculator - Calculate Savings Online | Sproutern',
  description:
    'Free discount calculator to calculate sale prices and savings. Find the final price after applying percentage discounts.',
  keywords: [
    'discount calculator',
    'sale calculator',
    'percentage off',
    'savings calculator',
    'price calculator',
    'discount percentage',
  ],
  canonical: '/tools/discount-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
