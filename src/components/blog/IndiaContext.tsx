import { MapPin, TrendingUp, Users, Building } from 'lucide-react';

interface Statistic {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface IndiaContextProps {
  title?: string;
  description: string;
  statistics: Statistic[];
  challenges?: string[];
  opportunities?: string[];
}

export function IndiaContext({
  title = 'Why This Matters for Indian Students in 2025',
  description,
  statistics,
  challenges = [],
  opportunities = [],
}: IndiaContextProps) {
  return (
    <section className="not-prose my-10">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <MapPin className="h-6 w-6 text-primary" />
        {title}
      </h2>

      <div className="space-y-6">
        {/* Description */}
        <div className="prose prose-sm max-w-none">
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* Key Statistics */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Key Statistics:</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  {stat.icon || <TrendingUp className="h-5 w-5" />}
                </div>
                <div>
                  <p className="text-xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges and Opportunities */}
        {(challenges.length > 0 || opportunities.length > 0) && (
          <div className="grid gap-6 md:grid-cols-2">
            {challenges.length > 0 && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                <h4 className="mb-3 font-semibold text-red-700 dark:text-red-300">
                  Current Challenges:
                </h4>
                <ul className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {opportunities.length > 0 && (
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                <h4 className="mb-3 font-semibold text-green-700 dark:text-green-300">
                  Emerging Opportunities:
                </h4>
                <ul className="space-y-2">
                  {opportunities.map((opportunity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500"></span>
                      <span>{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 p-4">
          <p className="text-sm">
            <strong>🎯 Bottom Line:</strong> The Indian job market is evolving
            rapidly. Students who adapt quickly and build relevant skills will
            have the best opportunities. This guide shows you exactly how to
            position yourself for success.
          </p>
        </div>
      </div>
    </section>
  );
}
