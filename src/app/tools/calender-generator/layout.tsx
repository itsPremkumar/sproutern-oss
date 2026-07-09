import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Calendar Generator - Create Custom Calendars | Sproutern',
  description:
    'Free online calendar generator tool. Create printable calendars for any month or year. Perfect for students, professionals, and personal use.',
  keywords: [
    'calendar generator',
    'printable calendar',
    'monthly calendar',
    'yearly calendar',
    'calendar maker',
    'custom calendar',
  ],
  canonical: '/tools/calender-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
