import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'ROI Calculator - Return on Investment Calculator | Sproutern',
  description:
    'Free ROI calculator to calculate return on investment. Evaluate business investments, education costs, and marketing campaign returns.',
  keywords: [
    'roi calculator',
    'return on investment',
    'investment calculator',
    'profit calculator',
    'business roi',
    'education roi',
  ],
  canonical: '/tools/roi-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
