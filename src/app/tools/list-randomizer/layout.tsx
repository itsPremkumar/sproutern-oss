import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'List Randomizer - Shuffle & Randomize Lists Online | Sproutern',
  description:
    'Free list randomizer to shuffle and randomize any list. Pick random items, create random orders, or shuffle names for fair selection.',
  keywords: [
    'list randomizer',
    'shuffle list',
    'random picker',
    'random order',
    'name shuffler',
    'randomize names',
  ],
  canonical: '/tools/list-randomizer',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
