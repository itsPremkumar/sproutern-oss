import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Email Generator - Create Professional Emails | Sproutern',
  description:
    'Free email generator for creating professional emails. Generate job application emails, follow-ups, thank you notes, and more with templates.',
  keywords: [
    'email generator',
    'professional email',
    'email template',
    'job application email',
    'follow up email',
    'business email',
  ],
  canonical: '/tools/email-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
