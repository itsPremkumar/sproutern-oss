import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Mock Interview Practice - AI Interview Simulator | Sproutern',
  description:
    'Free mock interview practice tool. Practice technical and HR interview questions with AI feedback. Prepare for campus placements and job interviews.',
  keywords: [
    'mock interview',
    'interview practice',
    'interview simulator',
    'interview preparation',
    'technical interview',
    'hr interview',
  ],
  canonical: '/tools/mock-interview',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
