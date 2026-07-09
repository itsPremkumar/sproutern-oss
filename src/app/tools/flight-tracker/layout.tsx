import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Flight Tracker - Track Flights in Real Time | Sproutern',
  description:
    'Free flight tracker to monitor flights in real time. Check flight status, delays, and arrivals for airlines worldwide. Perfect for students traveling for interviews.',
  keywords: [
    'flight tracker',
    'flight status',
    'track flight',
    'live flight',
    'airline tracker',
    'flight arrivals',
  ],
  canonical: '/tools/flight-tracker',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
