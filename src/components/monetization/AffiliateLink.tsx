import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { AffiliateLink as AffiliateLinkType } from '@/config/monetization';

interface AffiliateLinkProps {
  affiliate: AffiliateLinkType;
  className?: string;
  showSponsor?: boolean;
}

/**
 * Renders an affiliate link that opens in a new tab with proper
 * rel attributes (required for SEO + FTC compliance).
 */
export function AffiliateLink({
  affiliate,
  className = '',
  showSponsor = false,
}: AffiliateLinkProps) {
  // If no real URL is set, render nothing (safe for production).
  if (!affiliate.url) return null;

  return (
    <Link
      href={affiliate.url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
      title={affiliate.note}
    >
      {affiliate.label}
      <ExternalLink className="ml-1 inline h-3 w-3" />
      {showSponsor && affiliate.sponsor ? (
        <span className="ml-1 text-xs text-muted-foreground">
          ({affiliate.sponsor})
        </span>
      ) : null}
    </Link>
  );
}
