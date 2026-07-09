import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: '2FA Guide - Two-Factor Authentication Setup | Sproutern',
  description:
    'Complete guide to Two-Factor Authentication (2FA). Learn how to set up authenticator apps, hardware keys, and other 2FA methods to protect your accounts.',
  keywords: [
    '2fa',
    'two-factor authentication',
    'security',
    'authenticator app',
    'yubikey',
    'account security',
  ],
  canonical: '/tools/2fa-guide',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
