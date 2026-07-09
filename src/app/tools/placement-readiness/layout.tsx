import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Placement Readiness Assessment - Check Job Readiness | Sproutern',
  description:
    'Free placement readiness assessment. Evaluate your skills, resume, and interview preparedness. Get personalized recommendations to improve your job readiness.',
  keywords: [
    'placement readiness',
    'job readiness',
    'career assessment',
    'placement preparation',
    'campus placement',
    'job preparation',
  ],
  canonical: '/tools/placement-readiness',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
