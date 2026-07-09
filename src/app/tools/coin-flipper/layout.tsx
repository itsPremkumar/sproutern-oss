import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Coin Flipper - Flip a Coin Online | Sproutern',
  description:
    'Free online coin flipper. Flip a virtual coin for random heads or tails results. Perfect for decision making, games, and probability experiments.',
  keywords: [
    'coin flipper',
    'flip a coin',
    'heads or tails',
    'random coin flip',
    'virtual coin',
    'coin toss',
  ],
  canonical: '/tools/coin-flipper',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
