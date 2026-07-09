import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Notice Period Calculator - Calculate Last Working Day | Sproutern',
  description:
    'Free notice period calculator. Calculate your last working day based on notice period duration. Plan your job transition and resignation timeline.',
  keywords: [
    'notice period calculator',
    'last working day',
    'resignation calculator',
    'notice period',
    'job transition',
    'lwm calculator',
  ],
  canonical: '/tools/notice-period-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
