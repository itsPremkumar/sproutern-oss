import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ExternalLink,
  FileText,
  RefreshCw,
  Shield,
  User,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type {
  EditorialTrustContent,
  EditorialTrustSource,
} from '@/lib/editorial-trust';

interface EditorialTrustPanelProps {
  content: EditorialTrustContent;
  variant?: 'full' | 'compact';
  className?: string;
  contentClassName?: string;
}

function TrustLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    'inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 hover:underline';

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}

function SourceLink({ source }: { source: EditorialTrustSource }) {
  if (!source.href) {
    return (
      <span className="text-sm font-medium text-foreground">{source.label}</span>
    );
  }

  return <TrustLink href={source.href}>{source.label}</TrustLink>;
}

export function EditorialTrustPanel({
  content,
  variant = 'full',
  className,
  contentClassName,
}: EditorialTrustPanelProps) {
  const visibleSources =
    variant === 'compact' ? content.sources.slice(0, 3) : content.sources;
  const visibleUpdates =
    variant === 'compact'
      ? content.updateHistory.slice(0, 2)
      : content.updateHistory;

  return (
    <section className={cn('py-12 md:py-16', className)}>
      <div className="container">
        <div className={cn('mx-auto max-w-6xl', contentClassName)}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
              {content.sectionLabel}
            </Badge>
            <Badge variant="outline">Human reviewed</Badge>
            <Badge variant="outline">Source-backed</Badge>
          </div>

          <div className="mb-8 max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              {content.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {content.summary}
            </p>
          </div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="h-full">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Written by
                </p>
                <p className="mt-2 font-semibold">{content.writtenBy.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {content.writtenBy.role}
                </p>
                {content.writtenBy.href && (
                  <div className="mt-3">
                    <TrustLink href={content.writtenBy.href}>
                      View author profile
                    </TrustLink>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-950/40">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Reviewed by
                </p>
                <p className="mt-2 font-semibold">{content.reviewedBy.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {content.reviewedBy.role}
                </p>
                {content.reviewedBy.href && (
                  <div className="mt-3">
                    <TrustLink href={content.reviewedBy.href}>
                      Review standards
                    </TrustLink>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/40">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Last reviewed
                </p>
                <p className="mt-2 font-semibold">{content.lastUpdated}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Freshness checks are recorded on pages where the update is
                  material to the reader.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-950/40">
                  <RefreshCw className="h-5 w-5 text-orange-600" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Update cadence
                </p>
                <p className="mt-2 font-semibold">{content.reviewCadence}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Time-sensitive topics move faster when rules, deadlines, or
                  market signals change.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">
                  How this content is built and maintained
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {content.methodology}
                </p>

                <ul className="space-y-3">
                  {content.methodologyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-2">
                  <TrustLink href="/methodology">
                    Read our methodology
                  </TrustLink>
                  <TrustLink href="/editorial-guidelines">
                    Editorial guidelines
                  </TrustLink>
                  <TrustLink href="/contact">
                    Report a correction
                  </TrustLink>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">
                  Primary sources and expert references
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {content.citationNote && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {content.citationNote}
                  </p>
                )}

                <ul className="space-y-4">
                  {visibleSources.map((source) => (
                    <li
                      key={source.label}
                      className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="mb-1">
                        <SourceLink source={source} />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {source.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {visibleUpdates.length > 0 && (
            <Card className="mt-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Recent updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {visibleUpdates.map((update) => (
                  <div
                    key={`${update.date ?? 'ongoing'}-${update.title}`}
                    className="rounded-xl border bg-muted/30 p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {update.date && (
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {update.date}
                        </span>
                      )}
                      <p className="font-semibold">{update.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {update.detail}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <FileText className="h-4 w-4 text-primary" />
            <span>
              Prefer the full policy pages? Read our public standards or contact
              the team if a major page needs a correction.
            </span>
            <TrustLink href="/editorial-guidelines">
              Open standards
            </TrustLink>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
