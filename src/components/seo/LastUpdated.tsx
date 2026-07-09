import React from 'react';
import { Calendar, User } from 'lucide-react';

interface LastUpdatedProps {
  date: string;
  reviewedBy?: string;
  className?: string;
}

export function LastUpdated({
  date,
  reviewedBy = 'Sproutern Editorial Team',
  className = '',
}: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className={`last-updated my-6 border-l-4 border-purple-500 py-2 pl-4 text-sm text-gray-600 ${className}`}
    >
      <div className="mb-1 flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        <span>
          <strong>Last Updated:</strong> {formattedDate}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <User className="h-4 w-4" />
        <span>
          <strong>Reviewed By:</strong> {reviewedBy}
        </span>
      </div>
    </div>
  );
}
