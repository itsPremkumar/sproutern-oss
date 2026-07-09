import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Study Planner - Create Your Study Schedule | Sproutern',
  description:
    'Free study planner to organize your study schedule. Create study plans, set goals, and track progress. Perfect for exam preparation.',
  keywords: [
    'study planner',
    'study schedule',
    'exam preparation',
    'study timetable',
    'study organizer',
    'academic planner',
  ],
  canonical: '/tools/study-planner',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
