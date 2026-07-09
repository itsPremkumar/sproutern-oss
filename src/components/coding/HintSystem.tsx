'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HintSystemProps {
  hints: string[];
  xpPenalty?: number;
  onHintUsed?: (hintIndex: number) => void;
}

export function HintSystem({
  hints,
  xpPenalty = 5,
  onHintUsed,
}: HintSystemProps) {
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [pendingHintIndex, setPendingHintIndex] = useState<number | null>(null);

  const totalPenalty = revealedHints.length * xpPenalty;
  const nextHintIndex = revealedHints.length;
  const hasMoreHints = nextHintIndex < hints.length;

  const handleRevealHint = (index: number) => {
    if (revealedHints.includes(index)) return;

    // Show warning for first hint
    if (!showWarning && revealedHints.length === 0) {
      setShowWarning(true);
      setPendingHintIndex(index);
      return;
    }

    revealHint(index);
  };

  const revealHint = (index: number) => {
    setRevealedHints((prev) => [...prev, index]);
    setShowWarning(false);
    setPendingHintIndex(null);
    onHintUsed?.(index);
  };

  const cancelWarning = () => {
    setShowWarning(false);
    setPendingHintIndex(null);
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Lightbulb className="h-4 w-4 text-yellow-500" />
          <span>Hints</span>
          <span className="text-muted-foreground">
            ({revealedHints.length}/{hints.length})
          </span>
        </div>
        {totalPenalty > 0 && (
          <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600 dark:bg-red-900/30 dark:text-red-400">
            -{totalPenalty} XP
          </span>
        )}
      </div>

      {/* Warning Modal */}
      {showWarning && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="mb-2 flex items-center gap-2 font-medium text-yellow-800 dark:text-yellow-200">
            <AlertTriangle className="h-4 w-4" />
            XP Penalty Warning
          </div>
          <p className="mb-3 text-sm text-yellow-700 dark:text-yellow-300">
            Each hint costs <strong>-{xpPenalty} XP</strong>. Are you sure you
            want to reveal a hint?
          </p>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={cancelWarning}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={() => revealHint(pendingHintIndex!)}
              className="bg-yellow-600 hover:bg-yellow-700"
            >
              Reveal Hint (-{xpPenalty} XP)
            </Button>
          </div>
        </div>
      )}

      {/* Revealed Hints */}
      {revealedHints.map((hintIndex) => (
        <div
          key={hintIndex}
          className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20"
        >
          <div className="mb-1 text-xs font-medium text-blue-600 dark:text-blue-400">
            Hint {hintIndex + 1}
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {hints[hintIndex]}
          </p>
        </div>
      ))}

      {/* Reveal Next Hint Button */}
      {hasMoreHints && !showWarning && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleRevealHint(nextHintIndex)}
          className="w-full gap-2"
        >
          <Eye className="h-4 w-4" />
          Reveal Hint {nextHintIndex + 1} (-{xpPenalty} XP)
        </Button>
      )}

      {/* All Hints Used */}
      {!hasMoreHints && (
        <div className="text-center text-xs text-muted-foreground">
          All hints revealed
        </div>
      )}
    </div>
  );
}
