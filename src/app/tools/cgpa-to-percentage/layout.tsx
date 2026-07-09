import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'CGPA to Percentage Converter - Free Calculator | Sproutern',
  description:
    'Convert CGPA to percentage easily with our free online calculator. Supports multiple grading scales including 10-point, 4-point scale conversions for Indian universities.',
  keywords: [
    'cgpa to percentage',
    'cgpa converter',
    'cgpa calculator',
    'grade calculator',
    'percentage converter',
    'gpa to percentage',
  ],
  canonical: '/tools/cgpa-to-percentage',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
