import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Checklist - Protect Your Online Privacy | Sproutern',
  description:
    'Free privacy checklist to protect your online data. Step-by-step guide to secure your social media, email, and browser settings.',
  keywords: [
    'privacy checklist',
    'online privacy',
    'data protection',
    'privacy guide',
    'digital security',
    'social media privacy',
  ],
  canonical: '/tools/privacy-checklist',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
