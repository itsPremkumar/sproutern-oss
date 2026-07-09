import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Cold Email Generator - Write Effective Cold Emails | Sproutern',
  description:
    'Free cold email generator for job seekers. Create personalized cold emails that get responses. Templates for internships, jobs, and networking.',
  keywords: [
    'cold email generator',
    'cold email template',
    'job email',
    'networking email',
    'outreach email',
    'professional email',
  ],
  canonical: '/tools/cold-email-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
