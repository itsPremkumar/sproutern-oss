'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Shield,
  CheckCircle,
  Clock,
  Users,
  Smartphone,
  Key,
  Fingerprint,
  MessageSquare,
  Mail,
  HardDrive,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

interface TwoFAMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  security: 'High' | 'Medium' | 'Low';
  description: string;
  pros: string[];
  cons: string[];
  recommended: boolean;
}

const twoFAMethods: TwoFAMethod[] = [
  {
    id: 'authenticator',
    name: 'Authenticator App',
    icon: <Smartphone className="h-6 w-6" />,
    security: 'High',
    description:
      'Apps like Google Authenticator, Authy, or Microsoft Authenticator generate time-based one-time passwords (TOTP).',
    pros: [
      'Works offline',
      'Very secure',
      'Free to use',
      'Works with most services',
    ],
    cons: ['Need phone access', 'Backup codes required if phone lost'],
    recommended: true,
  },
  {
    id: 'hardware',
    name: 'Hardware Security Key',
    icon: <Key className="h-6 w-6" />,
    security: 'High',
    description:
      'Physical devices like YubiKey that plug into your device for authentication.',
    pros: ['Most secure option', 'Phishing resistant', 'Works without phone'],
    cons: ['Costs money', 'Can be lost', 'Not supported everywhere'],
    recommended: true,
  },
  {
    id: 'biometric',
    name: 'Biometric',
    icon: <Fingerprint className="h-6 w-6" />,
    security: 'High',
    description:
      'Face ID, Touch ID, or fingerprint authentication on your devices.',
    pros: ['Very convenient', 'Hard to replicate', 'Built into devices'],
    cons: ['Device dependent', 'Privacy concerns', 'Can fail occasionally'],
    recommended: true,
  },
  {
    id: 'sms',
    name: 'SMS Text Message',
    icon: <MessageSquare className="h-6 w-6" />,
    security: 'Low',
    description: 'Receive a code via text message to your phone number.',
    pros: ['Easy to use', 'No app needed', 'Works on any phone'],
    cons: [
      'Vulnerable to SIM swapping',
      'Requires cell service',
      'Can be intercepted',
    ],
    recommended: false,
  },
  {
    id: 'email',
    name: 'Email',
    icon: <Mail className="h-6 w-6" />,
    security: 'Low',
    description: 'Receive a verification code or link via email.',
    pros: ['Easy to use', 'No phone needed', 'Familiar to users'],
    cons: [
      'Only as secure as email',
      'Slow delivery possible',
      'Email can be compromised',
    ],
    recommended: false,
  },
  {
    id: 'backup',
    name: 'Backup Codes',
    icon: <HardDrive className="h-6 w-6" />,
    security: 'Medium',
    description: 'One-time use codes stored securely for emergency access.',
    pros: ['Works when all else fails', 'No device needed', 'Simple to use'],
    cons: ['Can be lost or stolen', 'Limited number', 'Must store securely'],
    recommended: false,
  },
];

const popularServices = [
  { name: 'Google', url: 'https://myaccount.google.com/security' },
  { name: 'Microsoft', url: 'https://account.microsoft.com/security' },
  { name: 'Apple', url: 'https://appleid.apple.com/account/manage' },
  { name: 'Facebook', url: 'https://www.facebook.com/settings?tab=security' },
  { name: 'Twitter/X', url: 'https://twitter.com/settings/security' },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/accounts/privacy_and_security/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/psettings/two-step-verification',
  },
  { name: 'GitHub', url: 'https://github.com/settings/security' },
];

export default function TwoFAGuideClient() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(
    'authenticator',
  );

  const securityColors = {
    High: 'text-green-600 bg-green-100 dark:bg-green-950',
    Medium: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-950',
    Low: 'text-red-600 bg-red-100 dark:bg-red-950',
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Shield className="h-4 w-4" />
            Free Security Guide
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Two-Factor Authentication Guide
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Learn how to protect your accounts with 2FA. Compare methods and set
            up security for popular services.
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
            <span className="text-sm font-medium">6 Methods</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">8 Services</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Best Practices</span>
          </div>
        </div>

        {/* What is 2FA */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">
              What is Two-Factor Authentication?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Two-factor authentication (2FA) adds an extra layer of security
              beyond your password. Even if someone steals your password, they
              can't access your account without the second factor - something
              you have (like your phone) or something you are (like your
              fingerprint).
            </p>
          </CardContent>
        </Card>

        {/* 2FA Methods */}
        <h2 className="mb-4 text-2xl font-bold">2FA Methods Comparison</h2>
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {twoFAMethods.map((method) => (
            <Card
              key={method.id}
              className={`cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'border-primary ring-2 ring-primary/20'
                  : ''
              }`}
              onClick={() =>
                setSelectedMethod(
                  selectedMethod === method.id ? null : method.id,
                )
              }
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-muted p-2">
                      {method.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base">{method.name}</CardTitle>
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-xs ${securityColors[method.security]}`}
                      >
                        {method.security} Security
                      </span>
                    </div>
                  </div>
                  {method.recommended && (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                      Recommended
                    </span>
                  )}
                </div>
              </CardHeader>
              {selectedMethod === method.id && (
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950">
                      <h4 className="mb-2 font-medium text-green-700 dark:text-green-300">
                        ✅ Pros
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {method.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-red-50 p-3 dark:bg-red-950">
                      <h4 className="mb-2 font-medium text-red-700 dark:text-red-300">
                        ❌ Cons
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {method.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Warning about SMS */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
          <CardContent className="flex items-start gap-3 py-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-600" />
            <div className="text-sm">
              <p className="font-semibold text-yellow-800 dark:text-yellow-200">
                SMS 2FA is Better Than Nothing
              </p>
              <p className="text-yellow-700 dark:text-yellow-300">
                While SMS-based 2FA is less secure due to SIM swapping attacks,
                it's still much better than no 2FA at all. Use authenticator
                apps when possible, but don't skip 2FA entirely just because SMS
                is the only option.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Popular Services */}
        <h2 className="mb-4 text-2xl font-bold">
          Enable 2FA on Popular Services
        </h2>
        <div className="mb-8 grid gap-3 md:grid-cols-4">
          {popularServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border bg-background p-4 text-center transition-shadow hover:shadow-md"
            >
              <span className="font-medium">{service.name}</span>
            </a>
          ))}
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Password Generator',
                href: '/tools/password-generator',
                desc: 'Generate secure passwords',
              },
              {
                title: 'Password Strength Checker',
                href: '/tools/password-strength-checker',
                desc: 'Check password security',
              },
              {
                title: 'Privacy Checklist',
                href: '/tools/privacy-checklist',
                desc: 'Protect your privacy',
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
