'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Network,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  BookOpen,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

interface SubnetResult {
  networkAddress: string;
  broadcastAddress: string;
  firstHost: string;
  lastHost: string;
  subnetMask: string;
  wildcardMask: string;
  totalHosts: number;
  usableHosts: number;
  cidr: number;
  networkClass: string;
  binaryMask: string;
}

export default function IPSubnetCalculatorClient() {
  const [ipAddress, setIpAddress] = useState('192.168.1.0');
  const [cidr, setCidr] = useState(24);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState('');

  const validateIP = (ip: string): boolean => {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every((part) => {
      const num = parseInt(part, 10);
      return !isNaN(num) && num >= 0 && num <= 255;
    });
  };

  const ipToNumber = (ip: string): number => {
    const parts = ip.split('.').map(Number);
    return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3];
  };

  const numberToIP = (num: number): string => {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255,
    ].join('.');
  };

  const result = useMemo((): SubnetResult | null => {
    setError('');

    if (!validateIP(ipAddress)) {
      setError('Invalid IP address format');
      return null;
    }

    if (cidr < 0 || cidr > 32) {
      setError('CIDR must be between 0 and 32');
      return null;
    }

    const ipNum = ipToNumber(ipAddress);
    const mask = cidr === 0 ? 0 : (0xffffffff << (32 - cidr)) >>> 0;
    const networkNum = (ipNum & mask) >>> 0;
    const broadcastNum = (networkNum | (~mask >>> 0)) >>> 0;
    const totalHosts = Math.pow(2, 32 - cidr);
    const usableHosts = cidr >= 31 ? totalHosts : totalHosts - 2;

    const firstOctet = parseInt(ipAddress.split('.')[0], 10);
    let networkClass = 'Classless';
    if (firstOctet < 128) networkClass = 'Class A';
    else if (firstOctet < 192) networkClass = 'Class B';
    else if (firstOctet < 224) networkClass = 'Class C';
    else if (firstOctet < 240) networkClass = 'Class D (Multicast)';
    else networkClass = 'Class E (Reserved)';

    const wildcardMask = ~mask >>> 0;
    const binaryMask =
      mask.toString(2).padStart(32, '0').match(/.{8}/g)?.join('.') || '';

    return {
      networkAddress: numberToIP(networkNum),
      broadcastAddress: numberToIP(broadcastNum),
      firstHost:
        cidr >= 31 ? numberToIP(networkNum) : numberToIP(networkNum + 1),
      lastHost:
        cidr >= 31 ? numberToIP(broadcastNum) : numberToIP(broadcastNum - 1),
      subnetMask: numberToIP(mask),
      wildcardMask: numberToIP(wildcardMask),
      totalHosts,
      usableHosts,
      cidr,
      networkClass,
      binaryMask,
    };
  }, [ipAddress, cidr]);

  const copyValue = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const commonSubnets = [
    { cidr: 8, name: '/8', hosts: '16,777,214' },
    { cidr: 16, name: '/16', hosts: '65,534' },
    { cidr: 24, name: '/24', hosts: '254' },
    { cidr: 25, name: '/25', hosts: '126' },
    { cidr: 26, name: '/26', hosts: '62' },
    { cidr: 27, name: '/27', hosts: '30' },
    { cidr: 28, name: '/28', hosts: '14' },
    { cidr: 29, name: '/29', hosts: '6' },
    { cidr: 30, name: '/30', hosts: '2' },
    { cidr: 31, name: '/31', hosts: '2 (P2P)' },
    { cidr: 32, name: '/32', hosts: '1' },
  ];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Network className="h-4 w-4" />
            Free Network Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            IP Subnet Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate IP subnets, network addresses, broadcast addresses, and
            host ranges instantly.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">IPv4 Support</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Client-Side Only</span>
          </div>
        </div>

        {/* Calculator */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              Subnet Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  IP Address
                </label>
                <input
                  type="text"
                  value={ipAddress}
                  onChange={(e) => setIpAddress(e.target.value)}
                  placeholder="e.g., 192.168.1.0"
                  className="w-full rounded-lg border bg-muted/50 p-3 font-mono outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  CIDR Notation
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-lg">/</span>
                  <input
                    type="number"
                    value={cidr}
                    onChange={(e) =>
                      setCidr(
                        Math.min(
                          32,
                          Math.max(0, parseInt(e.target.value) || 0),
                        ),
                      )
                    }
                    min="0"
                    max="32"
                    className="w-20 rounded-lg border bg-muted/50 p-3 font-mono outline-none"
                  />
                  <input
                    type="range"
                    value={cidr}
                    onChange={(e) => setCidr(parseInt(e.target.value))}
                    min="0"
                    max="32"
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-red-600 dark:bg-red-950">
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Subnet Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    label: 'Network Address',
                    value: result.networkAddress,
                    key: 'network',
                  },
                  {
                    label: 'Broadcast Address',
                    value: result.broadcastAddress,
                    key: 'broadcast',
                  },
                  {
                    label: 'First Usable Host',
                    value: result.firstHost,
                    key: 'first',
                  },
                  {
                    label: 'Last Usable Host',
                    value: result.lastHost,
                    key: 'last',
                  },
                  {
                    label: 'Subnet Mask',
                    value: result.subnetMask,
                    key: 'mask',
                  },
                  {
                    label: 'Wildcard Mask',
                    value: result.wildcardMask,
                    key: 'wildcard',
                  },
                  {
                    label: 'Total Hosts',
                    value: result.totalHosts.toLocaleString(),
                    key: 'total',
                  },
                  {
                    label: 'Usable Hosts',
                    value: result.usableHosts.toLocaleString(),
                    key: 'usable',
                  },
                  {
                    label: 'Network Class',
                    value: result.networkClass,
                    key: 'class',
                  },
                  {
                    label: 'CIDR Notation',
                    value: `/${result.cidr}`,
                    key: 'cidr',
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                  >
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-mono font-semibold">
                        {item.value}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyValue(item.value, item.key)}
                    >
                      {copied === item.key ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="text-sm text-muted-foreground">
                  Binary Subnet Mask
                </div>
                <div className="font-mono text-xs text-primary">
                  {result.binaryMask}
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950">
                <div className="font-semibold">IP Range</div>
                <div className="font-mono">
                  {result.networkAddress} — {result.broadcastAddress}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Common Subnets Reference */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              Common Subnets Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 md:grid-cols-6 lg:grid-cols-11">
              {commonSubnets.map((subnet) => (
                <button
                  key={subnet.cidr}
                  onClick={() => setCidr(subnet.cidr)}
                  className={`rounded-lg border p-2 text-center transition-colors hover:bg-muted ${
                    cidr === subnet.cidr ? 'border-primary bg-primary/10' : ''
                  }`}
                >
                  <div className="font-mono font-semibold">{subnet.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {subnet.hosts}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Understanding IP Subnetting
          </h2>
          <p>
            Subnetting divides a network into smaller sub-networks, improving
            security and reducing network congestion. Each subnet has its own
            network address, broadcast address, and range of usable host
            addresses.
          </p>

          <h3>Key Concepts</h3>
          <ul>
            <li>
              <strong>Network Address:</strong> First address in the subnet,
              identifies the network itself
            </li>
            <li>
              <strong>Broadcast Address:</strong> Last address, used to
              communicate with all hosts in subnet
            </li>
            <li>
              <strong>Subnet Mask:</strong> Defines which portion of IP
              represents network vs host
            </li>
            <li>
              <strong>CIDR:</strong> Classless Inter-Domain Routing notation
              (e.g., /24 = 255.255.255.0)
            </li>
            <li>
              <strong>Wildcard Mask:</strong> Inverse of subnet mask, used in
              ACLs
            </li>
          </ul>

          <h3>Common Subnet Sizes</h3>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">CIDR</th>
                  <th className="border p-2 text-left">Subnet Mask</th>
                  <th className="border p-2 text-left">Usable Hosts</th>
                  <th className="border p-2 text-left">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">/24</td>
                  <td className="border p-2 font-mono">255.255.255.0</td>
                  <td className="border p-2">254</td>
                  <td className="border p-2">Small business</td>
                </tr>
                <tr>
                  <td className="border p-2">/25</td>
                  <td className="border p-2 font-mono">255.255.255.128</td>
                  <td className="border p-2">126</td>
                  <td className="border p-2">Department</td>
                </tr>
                <tr>
                  <td className="border p-2">/26</td>
                  <td className="border p-2 font-mono">255.255.255.192</td>
                  <td className="border p-2">62</td>
                  <td className="border p-2">Small office</td>
                </tr>
                <tr>
                  <td className="border p-2">/30</td>
                  <td className="border p-2 font-mono">255.255.255.252</td>
                  <td className="border p-2">2</td>
                  <td className="border p-2">Point-to-point links</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Number Converter',
                href: '/tools/number-converter',
                desc: 'Convert number systems',
              },
              {
                title: 'ASCII Table',
                href: '/tools/ascii-table',
                desc: 'Character code reference',
              },
              {
                title: 'Regex Tester',
                href: '/tools/regex-tester',
                desc: 'Test regex patterns',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
