import React from 'react';

interface AISummaryProps {
  summary: string;
  className?: string;
}

export function AISummary({ summary, className = '' }: AISummaryProps) {
  return (
    <div
      className={`ai-summary my-6 rounded-lg border border-purple-200 bg-purple-50 p-4 ${className}`}
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <h2 className="mb-2 text-lg font-semibold text-purple-900">
        Quick Summary
      </h2>
      <p
        itemProp="abstract"
        className="leading-relaxed text-gray-700"
      >
        {summary}
      </p>
    </div>
  );
}
