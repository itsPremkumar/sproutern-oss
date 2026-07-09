import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Font Pairings - Find Perfect Font Combinations | Sproutern',
  description:
    'Free font pairing tool. Discover beautiful font combinations for your designs. Browse curated Google Fonts pairings for headings and body text.',
  keywords: [
    'font pairings',
    'font combinations',
    'google fonts',
    'typography',
    'font matcher',
    'web fonts',
  ],
  canonical: '/tools/font-pairings',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
