import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'GPA Converter - Convert GPA Scales | Sproutern',
  description:
    'Free GPA converter to convert between different grading scales. Convert 4.0, 10.0, and percentage systems. Perfect for study abroad applications.',
  keywords: [
    'gpa converter',
    'gpa calculator',
    'grade converter',
    '4.0 scale',
    'gpa to percentage',
    'academic grades',
  ],
  canonical: '/tools/gpa-converter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
