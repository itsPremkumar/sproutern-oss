import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Time Calculator - Add & Subtract Time Online | Sproutern',
  description:
    'Free time calculator to add and subtract time. Calculate time differences, convert hours to minutes, and work with time durations.',
  keywords: [
    'time calculator',
    'add time',
    'subtract time',
    'time difference',
    'hours calculator',
    'time duration',
  ],
  canonical: '/tools/time-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
