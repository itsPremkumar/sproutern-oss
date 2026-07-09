import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Salary Calculator - Take Home Pay Calculator India | Sproutern',
  description:
    'Free salary calculator for India. Calculate take-home salary after deductions like PF, TDS, and professional tax. Understand your CTC breakdown.',
  keywords: [
    'salary calculator',
    'take home pay',
    'ctc calculator',
    'salary breakup',
    'in hand salary',
    'pf calculator',
  ],
  canonical: '/tools/salary-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
