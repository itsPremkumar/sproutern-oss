import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'IP Subnet Calculator - Network Subnetting Tool | Sproutern',
  description:
    'Free IP subnet calculator for network engineers. Calculate subnet masks, network addresses, broadcast addresses, and available hosts.',
  keywords: [
    'ip subnet calculator',
    'subnet calculator',
    'cidr calculator',
    'network calculator',
    'ip address calculator',
    'subnet mask',
  ],
  canonical: '/tools/ip-subnet-calculator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
