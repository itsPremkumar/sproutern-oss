import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Dice Roller - Roll Virtual Dice Online | Sproutern',
  description:
    'Free online dice roller. Roll one or multiple dice with customizable sides. Perfect for board games, RPGs, and random number generation.',
  keywords: [
    'dice roller',
    'roll dice online',
    'virtual dice',
    'random dice',
    'd6 dice',
    'd20 dice',
  ],
  canonical: '/tools/dice-roller',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
