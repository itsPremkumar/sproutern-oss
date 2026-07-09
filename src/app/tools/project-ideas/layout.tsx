import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title:
    'Project Ideas Generator - Get Inspired for Your Next Project | Sproutern',
  description:
    'Free project ideas generator for students. Get unique project ideas for web development, machine learning, mobile apps, and more. Build your portfolio.',
  keywords: [
    'project ideas',
    'coding projects',
    'student projects',
    'web development projects',
    'portfolio projects',
    'final year project',
  ],
  canonical: '/tools/project-ideas',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
