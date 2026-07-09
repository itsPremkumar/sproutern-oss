import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Color Palette Generator - Create Color Schemes | Sproutern',
  description:
    'Free color palette generator. Create beautiful, harmonious color schemes for your designs. Generate complementary, analogous, and triadic color palettes.',
  keywords: [
    'color palette generator',
    'color scheme generator',
    'color picker',
    'design colors',
    'hex colors',
    'color combinations',
  ],
  canonical: '/tools/color-palette-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
