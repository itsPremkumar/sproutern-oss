import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Password Generator - Strong Secure Passwords | Sproutern',
  description:
    'Free strong password generator. Create secure, random passwords with customizable length, symbols, numbers, and uppercase letters. Never use weak passwords again.',
  keywords: [
    'password generator',
    'strong password',
    'secure password',
    'random password',
    'password creator',
    'password tool',
  ],
  canonical: '/tools/password-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
