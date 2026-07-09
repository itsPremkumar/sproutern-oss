/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Web Push Notification Service
 *
 * Implements Web Push API for re-engaging users with daily content updates.
 * Uses Firebase Cloud Messaging (FCM) — free for unlimited notifications.
 *
 * Features:
 * - Permission request with smart timing
 * - Daily content digest notifications
 * - New job alert notifications
 * - Re-engagement for inactive users
 * ═════════════════════════════════════════════════════════════════════════════
 */

// ── Types ──────────────────────────────────────────────────────────────────

interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  url?: string;
  tag?: string;
}

// ── Permission Management ──────────────────────────────────────────────────

export function isPushSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  );
}

export function getPermissionStatus(): NotificationPermission | 'unsupported' {
  if (!isPushSupported()) return 'unsupported';
  return Notification.permission;
}

/**
 * Smart permission request — waits for user engagement before asking.
 * Only asks after user has spent 30+ seconds on site and scrolled.
 */
export function initSmartPushPrompt(onGranted: () => void): void {
  if (!isPushSupported()) return;
  if (Notification.permission !== 'default') return;

  let hasScrolled = false;
  let timeOnSite = 0;

  const scrollHandler = () => {
    hasScrolled = true;
    window.removeEventListener('scroll', scrollHandler);
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });

  const interval = setInterval(() => {
    timeOnSite += 5;
    if (hasScrolled && timeOnSite >= 30) {
      clearInterval(interval);
      requestPushPermission().then((granted) => {
        if (granted) onGranted();
      });
    }
  }, 5000);

  // Cleanup after 5 minutes if not triggered
  setTimeout(() => {
    clearInterval(interval);
    window.removeEventListener('scroll', scrollHandler);
  }, 300000);
}

export async function requestPushPermission(): Promise<boolean> {
  if (!isPushSupported()) return false;

  try {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  } catch {
    return false;
  }
}

// ── Notification Display ────────────────────────────────────────────────────

export function showNotification(payload: NotificationPayload): void {
  if (Notification.permission !== 'granted') return;

  const notification = new Notification(payload.title, {
    body: payload.body,
    icon: payload.icon || '/icons/icon-192x192.png',
    badge: payload.badge || '/icons/icon-72x72.png',
    tag: payload.tag || 'sproutern-notification',
    data: { url: payload.url || '/' },
  });

  notification.onclick = () => {
    window.focus();
    if (payload.url) {
      window.location.href = payload.url;
    }
    notification.close();
  };
}

// ── Notification Templates ──────────────────────────────────────────────────

export function createJobAlertNotification(
  companyName: string,
  role: string,
): NotificationPayload {
  return {
    title: `🔔 ${companyName} is Hiring!`,
    body: `New ${role} positions available. Apply now before the deadline!`,
    url: `/companies/${companyName.toLowerCase().replace(/\s+/g, '-')}`,
    tag: 'job-alert',
  };
}

export function createDailyDigestNotification(
  topArticleTitle: string,
): NotificationPayload {
  return {
    title: `📰 Today on Sproutern`,
    body: topArticleTitle,
    url: '/blog',
    tag: 'daily-digest',
  };
}

export function createInterviewTipNotification(
  tip: string,
): NotificationPayload {
  return {
    title: `💡 Interview Tip of the Day`,
    body: tip,
    url: '/interview-experiences',
    tag: 'interview-tip',
  };
}

// ── Service Worker Registration ────────────────────────────────────────────

export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!isPushSupported()) return null;

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    return registration;
  } catch {
    console.error('Service Worker registration failed');
    return null;
  }
}

// ── Local Storage for Notification Preferences ─────────────────────────────

const PREFS_KEY = 'sproutern_notification_prefs';

interface NotificationPreferences {
  jobAlerts: boolean;
  dailyDigest: boolean;
  interviewTips: boolean;
  lastPrompted: string;
  subscribedAt: string | null;
}

export function getNotificationPrefs(): NotificationPreferences {
  if (typeof window === 'undefined') {
    return {
      jobAlerts: true,
      dailyDigest: true,
      interviewTips: true,
      lastPrompted: '',
      subscribedAt: null,
    };
  }
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* ignore */
  }
  return {
    jobAlerts: true,
    dailyDigest: true,
    interviewTips: true,
    lastPrompted: '',
    subscribedAt: null,
  };
}

export function setNotificationPrefs(
  prefs: Partial<NotificationPreferences>,
): void {
  if (typeof window === 'undefined') return;
  const current = getNotificationPrefs();
  localStorage.setItem(PREFS_KEY, JSON.stringify({ ...current, ...prefs }));
}
