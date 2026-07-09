import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'CGPA Converter - Convert CGPA to Different Scales | Sproutern',
  description:
    'Free CGPA converter to convert between different grading scales. Convert CGPA to percentage or GPA for university applications.',
  keywords: [
    'cgpa converter',
    'cgpa calculator',
    'grade converter',
    'gpa scale',
    'academic grades',
    'university grades',
  ],
  canonical: '/tools/cgpa-converter',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
