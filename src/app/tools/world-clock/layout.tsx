import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'World Clock - Check Time in Different Cities | Sproutern',
  description:
    'Free world clock to check current time in different cities and time zones. Perfect for scheduling international calls and meetings.',
  keywords: [
    'world clock',
    'time zones',
    'world time',
    'international time',
    'city time',
    'timezone converter',
  ],
  canonical: '/tools/world-clock',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
