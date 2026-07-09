import { Lightbulb, Target, TrendingUp } from 'lucide-react';

interface Tip {
  title: string;
  explanation: string;
  implementation: string[];
  expectedOutcome: string;
}

interface ExpertTipsProps {
  title?: string;
  tips: Tip[];
}

export function ExpertTips({
  title = 'Expert Tips from Industry Professionals',
  tips,
}: ExpertTipsProps) {
  return (
    <section className="not-prose my-10">
      <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
        <Lightbulb className="h-6 w-6 text-primary" />
        {title}
      </h2>

      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-950"
          >
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              💡 Tip #{index + 1}: {tip.title}
            </h3>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-semibold">Why it works:</p>
                <p className="text-sm text-muted-foreground">
                  {tip.explanation}
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold">How to implement:</p>
                <ul className="space-y-1">
                  {tip.implementation.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-yellow-600"></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900">
                <p className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-green-600" />
                  <strong>Expected outcome:</strong> {tip.expectedOutcome}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
