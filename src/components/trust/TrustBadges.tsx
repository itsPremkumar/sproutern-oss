'use client';

import Link from 'next/link';
import { Shield, Award, CheckCircle, Lock, TrendingUp } from 'lucide-react';

export function TrustBadges({ className = '' }: { className?: string }) {
  const badges = [
    {
      icon: Shield,
      label: 'Secure Platform',
      description: 'SSL Encrypted',
    },
    {
      icon: CheckCircle,
      label: 'Verified Listings',
      description: 'All internships verified',
    },
    {
      icon: Award,
      label: 'Trusted by 10K+',
      description: 'Students worldwide',
    },
    {
      icon: Lock,
      label: 'Privacy Protected',
      description: 'Your data is safe',
    },
  ];

  return (
    <div className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${className}`}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-all hover:border-indigo-300 hover:shadow-sm"
        >
          <badge.icon className="mb-2 h-8 w-8 text-indigo-600" />
          <h3 className="mb-1 text-sm font-semibold text-gray-900">
            {badge.label}
          </h3>
          <p className="text-xs text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}

export function CompactTrustSignals() {
  return (
    <div className="flex items-center gap-6 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-green-600" />
        <span>SSL Secured</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <span>Verified Listings</span>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-green-600" />
        <span>Trusted by 10K+ Students</span>
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Why Students Trust Sproutern
          </h2>
          <p className="text-gray-600">
            Join thousands of students who found their dream internships through
            our platform
          </p>
        </div>

        <TrustBadges />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TrustCard
            title="Transparent Process"
            description="Clear application process with real-time updates and honest communication."
            icon="🎯"
          />
          <TrustCard
            title="Quality Assured"
            description="Every internship is reviewed and verified by our team before listing."
            icon="✅"
          />
          <TrustCard
            title="Student First"
            description="Built by students, for students. We understand your needs and concerns."
            icon="💙"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/methodology"
            className="inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700"
          >
            Learn about our verification process
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-3 text-3xl">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

/**
 * Security badges for footer or bottom of pages
 */
export function SecurityBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-5 w-5 text-green-600" />
        <span className="font-medium">256-bit SSL Encryption</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Lock className="h-5 w-5 text-green-600" />
        <span className="font-medium">GDPR Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <CheckCircle className="h-5 w-5 text-green-600" />
        <span className="font-medium">Privacy Protected</span>
      </div>
    </div>
  );
}
