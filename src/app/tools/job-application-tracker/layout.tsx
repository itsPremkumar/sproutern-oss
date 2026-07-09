import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Job Application Tracker - Track Your Applications | Sproutern',
  description:
    'Free job application tracker. Organize and track your job applications, interview stages, and responses. Never miss a follow-up again.',
  keywords: [
    'job application tracker',
    'job tracker',
    'application organizer',
    'job search tracker',
    'interview tracker',
    'job hunt',
  ],
  canonical: '/tools/job-application-tracker',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
