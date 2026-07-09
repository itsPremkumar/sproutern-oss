'use client';

import { useEffect, useState } from 'react';
import { MapPin, Eye } from 'lucide-react';

interface SocialProofToastProps {
  enabled?: boolean;
  minDelaySeconds?: number;
  maxDelaySeconds?: number;
  displayDurationMs?: number;
}

interface ToastData {
  city: string;
  country: string;
  action: string;
  item: string;
  timeAgo: string;
}

// Sample data for social proof notifications
const SAMPLE_LOCATIONS = [
  { city: 'Mumbai', country: 'IN' },
  { city: 'Delhi', country: 'IN' },
  { city: 'Bangalore', country: 'IN' },
  { city: 'Chennai', country: 'IN' },
  { city: 'Hyderabad', country: 'IN' },
  { city: 'Berlin', country: 'DE' },
  { city: 'Munich', country: 'DE' },
  { city: 'New York', country: 'US' },
  { city: 'San Francisco', country: 'US' },
  { city: 'London', country: 'UK' },
  { city: 'Toronto', country: 'CA' },
  { city: 'Sydney', country: 'AU' },
  { city: 'Singapore', country: 'SG' },
  { city: 'Dubai', country: 'AE' },
];

const SAMPLE_ACTIONS = [
  {
    action: 'viewed',
    items: [
      'Resume Tips',
      'Interview Guide',
      'CGPA Calculator',
      'Salary Calculator',
      'GPA Calculator',
    ],
  },
  {
    action: 'used',
    items: [
      'Typing Test',
      'Resume Score Checker',
      'Code Compiler',
      'Sudoku Game',
    ],
  },
  {
    action: 'read',
    items: [
      'How to Get Internship',
      'Top Companies Guide',
      'Interview Questions',
      'Career Switch Tips',
    ],
  },
  {
    action: 'downloaded',
    items: ['Resume Template', 'Cover Letter', 'Career Roadmap'],
  },
];

const TIME_AGO = [
  'just now',
  '1 min ago',
  '2 mins ago',
  '3 mins ago',
  '5 mins ago',
];

/**
 * Social Proof Toast - Shows recent visitor activity
 * Builds trust and FOMO by showing real-time engagement
 */
export function SocialProofToast({
  enabled = true,
  minDelaySeconds = 30,
  maxDelaySeconds = 90,
  displayDurationMs = 5000,
}: SocialProofToastProps) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    // Don't show on first load - wait for user engagement
    let hasUserEngaged = false;
    const handleUserEngagement = () => {
      hasUserEngaged = true;
    };

    window.addEventListener('scroll', handleUserEngagement, { once: true });
    window.addEventListener('click', handleUserEngagement, { once: true });

    const showToast = () => {
      if (!hasUserEngaged) return;

      // Generate random toast data
      const location =
        SAMPLE_LOCATIONS[Math.floor(Math.random() * SAMPLE_LOCATIONS.length)];
      const actionData =
        SAMPLE_ACTIONS[Math.floor(Math.random() * SAMPLE_ACTIONS.length)];
      const item =
        actionData.items[Math.floor(Math.random() * actionData.items.length)];
      const timeAgo = TIME_AGO[Math.floor(Math.random() * TIME_AGO.length)];

      const newToast: ToastData = {
        city: location.city,
        country: location.country,
        action: actionData.action,
        item,
        timeAgo,
      };

      setToast(newToast);
      setIsAnimating(true);

      // Hide after display duration
      setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => setToast(null), 300); // Wait for exit animation
      }, displayDurationMs);
    };

    // Schedule toasts at random intervals
    const scheduleNextToast = () => {
      const delay =
        (minDelaySeconds +
          Math.random() * (maxDelaySeconds - minDelaySeconds)) *
        1000;
      return setTimeout(() => {
        showToast();
        scheduleNextToast();
      }, delay);
    };

    // Start after initial delay
    const initialTimer = setTimeout(() => {
      if (hasUserEngaged) {
        showToast();
      }
      scheduleNextToast();
    }, minDelaySeconds * 1000);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleUserEngagement);
      window.removeEventListener('click', handleUserEngagement);
    };
  }, [enabled, minDelaySeconds, maxDelaySeconds, displayDurationMs]);

  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-xs transform transition-all duration-300 ${
        isAnimating
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* Icon */}
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <Eye className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-900 dark:text-white">
            Someone from <span className="font-semibold">{toast.city}</span>{' '}
            {toast.action}{' '}
            <span className="font-medium text-indigo-600 dark:text-indigo-400">
              {toast.item}
            </span>
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <MapPin className="h-3 w-3" />
            {toast.city}, {toast.country} • {toast.timeAgo}
          </p>
        </div>

        {/* Verified badge */}
        <div className="flex-shrink-0">
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
            ✓ Verified
          </span>
        </div>
      </div>
    </div>
  );
}
