'use client';

import {
  Shield,
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  Users,
} from 'lucide-react';

type BadgeType = 'verified' | 'updated' | 'expert' | 'trusted' | 'popular';

interface CredibilityBadgeProps {
  type: BadgeType;
  text?: string;
  date?: string;
}

const badgeConfig: Record<
  BadgeType,
  {
    icon: React.ReactNode;
    defaultText: string;
    bgColor: string;
    textColor: string;
  }
> = {
  verified: {
    icon: <CheckCircle className="h-4 w-4" />,
    defaultText: 'Verified Information',
    bgColor: 'bg-green-50 dark:bg-green-950',
    textColor: 'text-green-700 dark:text-green-300',
  },
  updated: {
    icon: <Clock className="h-4 w-4" />,
    defaultText: 'Recently Updated',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    textColor: 'text-blue-700 dark:text-blue-300',
  },
  expert: {
    icon: <BookOpen className="h-4 w-4" />,
    defaultText: 'Expert Reviewed',
    bgColor: 'bg-purple-50 dark:bg-purple-950',
    textColor: 'text-purple-700 dark:text-purple-300',
  },
  trusted: {
    icon: <Shield className="h-4 w-4" />,
    defaultText: 'Trusted Source',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    textColor: 'text-orange-700 dark:text-orange-300',
  },
  popular: {
    icon: <Users className="h-4 w-4" />,
    defaultText: 'Popular Resource',
    bgColor: 'bg-pink-50 dark:bg-pink-950',
    textColor: 'text-pink-700 dark:text-pink-300',
  },
};

export function CredibilityBadge({ type, text, date }: CredibilityBadgeProps) {
  const config = badgeConfig[type];
  const displayText = text || config.defaultText;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium ${config.bgColor} ${config.textColor}`}
    >
      {config.icon}
      <span>{displayText}</span>
      {date && <span className="opacity-75">• {date}</span>}
    </div>
  );
}

// Convenience component for showing multiple badges
interface CredibilityBadgesProps {
  badges: Array<{ type: BadgeType; text?: string; date?: string }>;
  className?: string;
}

export function CredibilityBadges({
  badges,
  className = '',
}: CredibilityBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {badges.map((badge, index) => (
        <CredibilityBadge
          key={index}
          {...badge}
        />
      ))}
    </div>
  );
}

// Trust signals section for tool/content pages
interface TrustSignalsProps {
  usersCount?: string;
  lastUpdated?: string;
  sourceVerified?: boolean;
  expertReviewed?: boolean;
}

export function TrustSignals({
  usersCount = '10,000+',
  lastUpdated,
  sourceVerified = true,
  expertReviewed = true,
}: TrustSignalsProps) {
  return (
    <div className="my-6 flex flex-wrap items-center gap-3 rounded-lg bg-muted/50 px-4 py-4">
      <div className="flex items-center gap-2 text-sm">
        <Users className="h-4 w-4 text-primary" />
        <span>
          <strong>{usersCount}</strong> users trust this tool
        </span>
      </div>
      {sourceVerified && (
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span>Source Verified</span>
        </div>
      )}
      {expertReviewed && (
        <div className="flex items-center gap-2 text-sm">
          <Award className="h-4 w-4 text-purple-600" />
          <span>Expert Reviewed</span>
        </div>
      )}
      {lastUpdated && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Updated: {lastUpdated}</span>
        </div>
      )}
    </div>
  );
}
