import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Image to Base64 Converter - Encode Images Online | Sproutern',
  description:
    'Free image to Base64 converter. Convert images to Base64 encoded strings for embedding in HTML, CSS, or JavaScript. No upload required.',
  keywords: [
    'image to base64',
    'base64 converter',
    'encode image',
    'base64 image',
    'data uri',
    'image encoder',
  ],
  canonical: '/tools/image-to-base64',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
