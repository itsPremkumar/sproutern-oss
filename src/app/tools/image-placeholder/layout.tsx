import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Image Placeholder Generator - Create Placeholders | Sproutern',
  description:
    'Free image placeholder generator. Create placeholder images of any size for web development, mockups, and design prototypes.',
  keywords: [
    'image placeholder',
    'placeholder generator',
    'dummy image',
    'placeholder image',
    'mockup image',
    'development placeholder',
  ],
  canonical: '/tools/image-placeholder',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
