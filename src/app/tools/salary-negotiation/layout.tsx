import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Salary Negotiation Tips - Negotiate Your Salary | Sproutern',
  description:
    'Free salary negotiation guide and tips. Learn how to negotiate your salary for job offers, raises, and promotions. Get paid what you deserve.',
  keywords: [
    'salary negotiation',
    'negotiate salary',
    'job offer negotiation',
    'salary tips',
    'raise negotiation',
    'compensation',
  ],
  canonical: '/tools/salary-negotiation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
