import { CheckCircle, MapPin, Clock, IndianRupee, Target } from 'lucide-react';

interface CaseStudyProps {
  name: string;
  city: string;
  college: string;
  year: string;
  challenge: string[];
  strategy: string[];
  results: {
    outcome: string;
    timeline?: string;
    achievement?: string;
  }[];
  timeline: string;
  investment: string;
  keyTakeaway: string;
}

export function IndianCaseStudy({
  name,
  city,
  college,
  year,
  challenge,
  strategy,
  results,
  timeline,
  investment,
  keyTakeaway,
}: CaseStudyProps) {
  return (
    <section className="not-prose my-10 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
        <Target className="h-6 w-6 text-blue-600" />
        Real Success Story: How {name} from {city} Succeeded
      </h2>

      {/* Background */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Background:</h3>
        <p className="text-sm">
          {name} was a {year} year student at {college} facing significant
          challenges in their career journey.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{city}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🎓 {college}</span>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">The Challenge:</h3>
        <ul className="space-y-2">
          {challenge.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Strategy */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">The Strategy:</h3>
        <ul className="space-y-2">
          {strategy.map((step, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">The Results:</h3>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm"
            >
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>
                <strong>{result.outcome}</strong>
                {result.timeline && ` (${result.timeline})`}
                {result.achievement && ` - ${result.achievement}`}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Summary Stats */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-2 rounded-lg bg-white/50 p-3 dark:bg-black/20">
          <Clock className="h-4 w-4 text-blue-600" />
          <div>
            <p className="text-xs text-muted-foreground">Timeline</p>
            <p className="text-sm font-semibold">{timeline}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/50 p-3 dark:bg-black/20">
          <IndianRupee className="h-4 w-4 text-blue-600" />
          <div>
            <p className="text-xs text-muted-foreground">Investment</p>
            <p className="text-sm font-semibold">{investment}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-white/50 p-3 dark:bg-black/20">
          <Target className="h-4 w-4 text-blue-600" />
          <div>
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <p className="text-sm font-semibold">100%</p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="rounded-lg bg-green-100 p-4 dark:bg-green-900">
        <p className="text-sm">
          <strong>Key Takeaway:</strong> {keyTakeaway}
        </p>
      </div>
    </section>
  );
}
