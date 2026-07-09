'use client';

import { Eye, EyeOff, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestCase {
  input: string[];
  expectedOutput?: string;
  description?: string;
  isHidden?: boolean;
}

interface TestCasePreviewProps {
  testCases: TestCase[];
  showExpected?: boolean; // Whether to show expected output (hide for submission)
  maxVisible?: number;
}

export function TestCasePreview({
  testCases,
  showExpected = false,
  maxVisible = 3,
}: TestCasePreviewProps) {
  const visibleCases = testCases.slice(0, maxVisible);
  const hiddenCount = testCases.length - maxVisible;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <Eye className="h-4 w-4 text-muted-foreground" />
          Test Cases
        </h3>
        <span className="text-xs text-muted-foreground">
          {testCases.length} total
        </span>
      </div>

      <div className="space-y-2">
        {visibleCases.map((testCase, index) => (
          <div
            key={index}
            className={cn(
              'rounded-lg border p-3',
              testCase.isHidden
                ? 'border-dashed border-muted-foreground/30 bg-muted/30'
                : 'bg-card',
            )}
          >
            {testCase.isHidden ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>Hidden Test Case</span>
              </div>
            ) : (
              <div className="space-y-2 font-mono text-sm">
                {/* Description */}
                {testCase.description && (
                  <div className="text-xs text-muted-foreground">
                    {testCase.description}
                  </div>
                )}

                {/* Input */}
                <div className="flex gap-2">
                  <span className="w-16 shrink-0 text-muted-foreground">
                    Input:
                  </span>
                  <code className="rounded bg-muted px-2 py-0.5">
                    {testCase.input.join(', ')}
                  </code>
                </div>

                {/* Expected Output */}
                {showExpected && testCase.expectedOutput && (
                  <div className="flex gap-2">
                    <span className="w-16 shrink-0 text-muted-foreground">
                      Output:
                    </span>
                    <code className="rounded bg-green-100 px-2 py-0.5 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {testCase.expectedOutput}
                    </code>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Hidden Count */}
        {hiddenCount > 0 && (
          <div className="flex items-center gap-2 rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20 p-3 text-sm text-muted-foreground">
            <EyeOff className="h-4 w-4" />
            <span>
              +{hiddenCount} hidden test case{hiddenCount > 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
