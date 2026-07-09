import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Skills Assessment - Evaluate Your Technical Skills | Sproutern',
  description:
    'Free skills assessment tool. Evaluate your programming, soft skills, and technical knowledge. Get personalized learning recommendations.',
  keywords: [
    'skills assessment',
    'skill test',
    'technical skills',
    'programming test',
    'skill evaluation',
    'career skills',
  ],
  canonical: '/tools/skills-assessment',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
