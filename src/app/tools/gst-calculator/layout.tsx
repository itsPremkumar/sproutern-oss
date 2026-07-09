import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'GST Calculator - Calculate GST Online | Sproutern',
  description:
    'Free GST calculator for India. Calculate GST amount, add GST to price, or remove GST from total. Supports all GST rates: 5%, 12%, 18%, and 28%.',
  keywords: [
    'gst calculator',
    'gst calculator india',
    'calculate gst',
    'gst amount',
    'add gst',
    'remove gst',
  ],
  canonical: '/tools/gst-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
