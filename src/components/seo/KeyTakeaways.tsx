import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface KeyTakeawaysProps {
  takeaways: string[];
  className?: string;
}

export function KeyTakeaways({ takeaways, className = '' }: KeyTakeawaysProps) {
  return (
    <div
      className={`key-takeaways my-8 rounded-lg border border-green-200 bg-green-50 p-6 ${className}`}
    >
      <h2 className="mb-4 text-xl font-bold text-green-900">Key Takeaways</h2>
      <ul className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <span className="text-gray-700">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
