import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'CSS Gradient Generator - Create Beautiful Gradients | Sproutern',
  description:
    'Free CSS gradient generator. Create beautiful linear and radial gradients with live preview. Copy CSS code instantly for your web projects.',
  keywords: [
    'css gradient generator',
    'gradient maker',
    'linear gradient',
    'radial gradient',
    'css background',
    'color gradient',
  ],
  canonical: '/tools/css-gradient-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
