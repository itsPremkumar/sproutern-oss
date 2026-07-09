import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Skills Gap Analyzer - Identify Skill Gaps | Sproutern',
  description:
    'Free skills gap analyzer. Compare your current skills with job requirements. Identify areas for improvement and get learning recommendations.',
  keywords: [
    'skills gap analyzer',
    'skill gap',
    'career development',
    'skill comparison',
    'job requirements',
    'learning path',
  ],
  canonical: '/tools/skills-gap-analyzer',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
