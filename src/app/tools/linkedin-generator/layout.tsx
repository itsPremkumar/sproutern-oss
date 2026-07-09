import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title:
    'LinkedIn Message Generator - Professional Connection Messages | Sproutern',
  description:
    'Free LinkedIn message generator. Create professional connection requests, follow-ups, and networking messages. Templates for job seekers and professionals.',
  keywords: [
    'linkedin message generator',
    'linkedin connection request',
    'linkedin template',
    'networking message',
    'professional message',
    'linkedin outreach',
  ],
  canonical: '/tools/linkedin-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
