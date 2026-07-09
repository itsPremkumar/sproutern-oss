import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Career Quiz - Discover Your Ideal Career Path | Sproutern',
  description:
    'Take our free career quiz to discover your ideal career path. Based on your skills, interests, and personality, find careers that match your strengths.',
  keywords: [
    'career quiz',
    'career test',
    'career aptitude test',
    'career assessment',
    'job quiz',
    'career guidance',
  ],
  canonical: '/tools/career-quiz',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
