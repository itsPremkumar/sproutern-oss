self.options = {
  domain: 'YOUR_MONETAG_DOMAIN.com',
  zoneId: 0, // Set your Monetag zone ID
};
self.lary = '';
importScripts('https://YOUR_MONETAG_DOMAIN.com/act/files/service-worker.min.js?r=sw');

/**
 * Sproutern Service Worker - Advanced Notifications & PWA
 * Unified service worker for FCM background notifications and PWA caching
 *
 * IMPORTANT: This is the single source of truth for service worker functionality.
 * Firebase Messaging requires this file to handle background push notifications.
 *
 * SECURITY: Firebase config is fetched from /api/config/firebase endpoint
 * which reads from environment variables. This prevents hardcoding sensitive values.
 */

// Import Firebase scripts for background message handling
importScripts(
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js',
);

// ============================================================================
// DYNAMIC FIREBASE CONFIGURATION
// ============================================================================

let firebaseConfig = null;
let messaging = null;
let firebaseInitialized = false;

/**
 * Fetch Firebase configuration from the API endpoint
 * This allows storing config in environment variables instead of hardcoding
 */
async function fetchFirebaseConfig() {
  if (firebaseConfig) {
    return firebaseConfig;
  }

  try {
    const baseUrl = self.location.origin || 'https://sproutern.dpdns.org';
    const response = await fetch(`${baseUrl}/api/config/firebase`, {
      cache: 'default', // Use browser cache
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Firebase config: ${response.status}`);
    }

    firebaseConfig = await response.json();
    console.log('[SW] Firebase config loaded from API');
    return firebaseConfig;
  } catch (error) {
    console.error('[SW] Error fetching Firebase config:', error);
    // Return null - Firebase features will be disabled but SW will still work for PWA
    return null;
  }
}

/**
 * Initialize Firebase with fetched config
 * Called during service worker activation and before handling push events
 */
async function initializeFirebase() {
  if (firebaseInitialized) {
    return messaging;
  }

  const config = await fetchFirebaseConfig();
  if (!config) {
    console.warn('[SW] Firebase config not available, messaging disabled');
    return null;
  }

  try {
    firebase.initializeApp(config);
    messaging = firebase.messaging();
    firebaseInitialized = true;
    console.log('[SW] Firebase initialized successfully');
    return messaging;
  } catch (error) {
    console.error('[SW] Failed to initialize Firebase:', error);
    return null;
  }
}

// Initialize Firebase and set up background message handler
initializeFirebase().then((messagingInstance) => {
  if (messagingInstance) {
    setupBackgroundMessageHandler(messagingInstance);
  }
});

// ============================================================================
// PWA CACHING CONFIGURATION - Enhanced with Workbox-style strategies
// ============================================================================

const CACHE_VERSION = 'v5.7.0';
const STATIC_CACHE = `sproutern-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `sproutern-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = `sproutern-images-${CACHE_VERSION}`;
const API_CACHE = `sproutern-api-${CACHE_VERSION}`;
const CACHE_NAME = STATIC_CACHE; // Keep for backward compatibility

// Cache expiration settings (in seconds)
const CACHE_EXPIRATION = {
  static: 30 * 24 * 60 * 60, // 30 days
  dynamic: 24 * 60 * 60, // 1 day
  images: 7 * 24 * 60 * 60, // 7 days
  api: 5 * 60, // 5 minutes
};

// Max entries per cache
const MAX_ENTRIES = {
  images: 100,
  dynamic: 50,
  api: 30,
};

// Critical resources to precache
const PRECACHE_URLS = [
  '/',
  '/offline',
  '/manifest.webmanifest',
  '/logo.jpg',
  '/notification-sounds/default.mp3',
];

// Notification channel configurations (mirrors TypeScript types)
const NOTIFICATION_CHANNELS = {
  urgent: {
    priority: 'high',
    vibrate: [200, 100, 200, 100, 200],
    requireInteraction: true,
  },
  updates: {
    priority: 'default',
    vibrate: [200, 100, 200],
    requireInteraction: true,
  },
  marketing: {
    priority: 'low',
    vibrate: [200],
    requireInteraction: false,
  },
  reminders: {
    priority: 'default',
    vibrate: [200, 100, 200],
    requireInteraction: true,
  },
  social: {
    priority: 'default',
    vibrate: [200],
    requireInteraction: false,
  },
};

// Default notification actions
const DEFAULT_ACTIONS = [
  {
    action: 'view',
    title: '👁️ View',
  },
  {
    action: 'snooze',
    title: '⏰ Snooze 1hr',
  },
  {
    action: 'dismiss',
    title: '✖️ Dismiss',
  },
];

// ============================================================================
// ANALYTICS TRACKING
// ============================================================================

/**
 * Track notification events for analytics
 * @param {string} eventType - Type of event (received, clicked, dismissed, snoozed)
 * @param {string} notificationId - Unique notification ID
 * @param {object} metadata - Additional metadata
 */
async function trackNotificationEvent(
  eventType,
  notificationId,
  metadata = {},
) {
  try {
    const baseUrl = self.location.origin || 'https://sproutern.dpdns.org';
    await fetch(`${baseUrl}/api/notifications/analytics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventType,
        notificationId,
        timestamp: Date.now(),
        userAgent: self.navigator?.userAgent || 'service-worker',
        ...metadata,
      }),
    });
  } catch (e) {
    // Silent fail - analytics shouldn't break notifications
    console.log('[SW] Analytics tracking failed (non-critical):', e.message);
  }
}

/**
 * Schedule a snoozed notification for later
 * @param {object} notificationData - Original notification data
 * @param {number} snoozeTime - Time to show notification again (epoch ms)
 */
async function scheduleSnoozeNotification(notificationData, snoozeTime) {
  try {
    // Store snoozed notification in IndexedDB
    const db = await openDatabase();
    const transaction = db.transaction('snoozed', 'readwrite');
    const store = transaction.objectStore('snoozed');

    store.put({
      id: `snooze-${Date.now()}`,
      originalData: notificationData,
      snoozeUntil: snoozeTime,
      createdAt: Date.now(),
    });

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });

    console.log(
      '[SW] Notification snoozed until:',
      new Date(snoozeTime).toLocaleString(),
    );
  } catch (error) {
    console.error('[SW] Failed to schedule snooze:', error);
  }
}

/**
 * Check and show any snoozed notifications that are due
 */
async function checkSnoozedNotifications() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('snoozed', 'readwrite');
    const store = transaction.objectStore('snoozed');

    const request = store.openCursor();
    const now = Date.now();

    request.onsuccess = async (event) => {
      const cursor = event.target.result;
      if (cursor) {
        const snoozedItem = cursor.value;
        if (snoozedItem.snoozeUntil <= now) {
          // Show the notification
          const data = snoozedItem.originalData;
          await showNotificationWithRetry(data.title || 'Snoozed Reminder', {
            body: data.body || 'You snoozed this notification',
            icon: data.icon || `${self.location.origin}/logo.jpg`,
            tag: `snooze-reminder-${Date.now()}`,
            data: data,
            actions: DEFAULT_ACTIONS,
          });
          // Remove from snoozed store
          store.delete(cursor.primaryKey);
        }
        cursor.continue();
      }
    };
  } catch (error) {
    console.error('[SW] Failed to check snoozed notifications:', error);
  }
}

/**
 * Show notification with retry logic
 * @param {string} title - Notification title
 * @param {object} options - Notification options
 * @param {number} retries - Number of retries left
 */
async function showNotificationWithRetry(title, options, retries = 3) {
  try {
    await self.registration.showNotification(title, options);
    return true;
  } catch (error) {
    console.error('[SW] Notification display failed:', error);

    if (retries > 0) {
      console.log(
        `[SW] Retrying notification display (${retries} attempts left)`,
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return showNotificationWithRetry(title, options, retries - 1);
    }

    // Final fallback: Store for later display
    try {
      await storeFailedNotification({ title, options, failedAt: Date.now() });
    } catch (e) {
      console.error('[SW] Could not store failed notification:', e);
    }

    return false;
  }
}

/**
 * Store failed notification for later retry
 */
async function storeFailedNotification(notification) {
  try {
    const db = await openDatabase();
    const transaction = db.transaction('failed', 'readwrite');
    const store = transaction.objectStore('failed');

    store.put({
      id: `failed-${Date.now()}`,
      ...notification,
    });

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error('[SW] Failed to store failed notification:', error);
  }
}

// ============================================================================
// SERVICE WORKER LIFECYCLE EVENTS
// ============================================================================

// Install event - precache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('[SW] Precaching complete');
      })
      .catch((error) => {
        console.error('[SW] Precaching failed:', error);
      }),
  );

  // Skip waiting to activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter(
              (name) => name.startsWith('sproutern-') && name !== CACHE_NAME,
            )
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            }),
        );
      })
      .then(() => {
        console.log('[SW] Old caches cleared');
      }),
  );

  // Claim all clients immediately
  self.clients.claim();
});

// ============================================================================
// FETCH EVENT - CACHING STRATEGIES
// ============================================================================

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Network first for HTML pages
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request).then((response) => {
            return response || caches.match('/offline');
          });
        }),
    );
    return;
  }

  // Cache first for static assets
  if (
    url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|avif|woff2?)$/)
  ) {
    event.respondWith(
      caches.match(request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(request).then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        });
      }),
    );
    return;
  }

  // Stale while revalidate for API calls
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, networkResponse.clone());
          });
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      }),
    );
    return;
  }

  // Default: network only
  event.respondWith(fetch(request));
});

// ============================================================================
// FIREBASE CLOUD MESSAGING - BACKGROUND NOTIFICATIONS
// ============================================================================

/**
 * Set up background message handler for Firebase Cloud Messaging
 * @param {object} messagingInstance - Firebase messaging instance
 */
function setupBackgroundMessageHandler(messagingInstance) {
  messagingInstance.onBackgroundMessage((payload) => {
    console.log('[SW] Background message received:', payload);

    // Extract notification data
    const notification = payload.notification || {};
    const data = payload.data || {};

    // Determine channel and get channel config
    const channel = data.channel || 'updates';
    const channelConfig =
      NOTIFICATION_CHANNELS[channel] || NOTIFICATION_CHANNELS.updates;

    // Build notification options
    const baseUrl = self.location.origin || 'https://sproutern.dpdns.org';
    const iconUrl = notification.icon || data.icon || `${baseUrl}/logo.jpg`;
    const badgeUrl = notification.badge || data.badge || `${baseUrl}/logo.jpg`;

    const notificationTitle = notification.title || data.title || 'Sproutern';
    const notificationOptions = {
      body: notification.body || data.body || 'You have a new notification',
      icon: iconUrl,
      badge: badgeUrl,
      image: notification.image || data.image,
      tag: data.tag || `sproutern-${channel}-${Date.now()}`,
      renotify: data.renotify === 'true',
      requireInteraction:
        data.requireInteraction === 'true' || channelConfig.requireInteraction,
      silent: data.silent === 'true',
      vibrate: channelConfig.vibrate,
      timestamp: data.timestamp ? parseInt(data.timestamp) : Date.now(),
      data: {
        url: data.url || data.link || notification.click_action || '/',
        channel: channel,
        notificationId: data.notificationId || `notif-${Date.now()}`,
        ...data,
      },
      actions: parseActions(data.actions) || DEFAULT_ACTIONS,
    };

    // Store notification in IndexedDB for history
    storeNotificationHistory({
      id: notificationOptions.data.notificationId,
      title: notificationTitle,
      body: notificationOptions.body,
      icon: iconUrl,
      image: notificationOptions.image,
      channel: channel,
      link: notificationOptions.data.url,
      data: data,
      receivedAt: new Date().toISOString(),
      isRead: false,
      isClicked: false,
    });

    // Track notification received
    trackNotificationEvent(
      'received',
      notificationOptions.data.notificationId,
      {
        channel: channel,
        title: notificationTitle,
      },
    );

    // Show the notification with retry logic
    return showNotificationWithRetry(notificationTitle, notificationOptions);
  });
}

/**
 * Parse actions from JSON string or array
 */
function parseActions(actionsData) {
  if (!actionsData) return null;

  try {
    if (typeof actionsData === 'string') {
      return JSON.parse(actionsData);
    }
    return actionsData;
  } catch (e) {
    console.error('[SW] Failed to parse actions:', e);
    return null;
  }
}

// ============================================================================
// PUSH EVENT - Fallback handler for direct push (non-FCM)
// ============================================================================

self.addEventListener('push', (event) => {
  console.log('[SW] Push event received:', event);

  // Firebase SDK should handle FCM messages via onBackgroundMessage
  // This is a fallback for any direct push notifications
  if (!event.data) {
    console.log('[SW] Push event has no data');
    return;
  }

  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = { body: event.data.text() };
  }

  // Check if this is an FCM message (has fcmMessageId)
  // If so, let Firebase SDK handle it
  if (data.fcmMessageId || data.from) {
    console.log('[SW] FCM message detected, letting Firebase SDK handle it');
    return;
  }

  // Handle non-FCM push notifications
  const baseUrl = self.location.origin || 'https://sproutern.dpdns.org';
  const channel = data.data?.channel || 'updates';
  const channelConfig =
    NOTIFICATION_CHANNELS[channel] || NOTIFICATION_CHANNELS.updates;

  const notificationTitle =
    data.notification?.title || data.title || 'Sproutern';
  const notificationOptions = {
    body: data.notification?.body || data.body || 'You have a new notification',
    icon: data.notification?.icon || `${baseUrl}/logo.jpg`,
    badge: `${baseUrl}/logo.jpg`,
    image: data.notification?.image,
    tag: data.data?.tag || `sproutern-${Date.now()}`,
    vibrate: channelConfig.vibrate,
    requireInteraction: channelConfig.requireInteraction,
    data: {
      url: data.data?.url || data.fcmOptions?.link || '/',
      ...data.data,
    },
    actions: DEFAULT_ACTIONS,
  };

  event.waitUntil(
    showNotificationWithRetry(notificationTitle, notificationOptions),
  );
});

// ============================================================================
// NOTIFICATION CLICK HANDLER
// ============================================================================

self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event);

  const notification = event.notification;
  const action = event.action;
  const notificationData = notification.data || {};

  // Close the notification
  notification.close();

  // Handle dismiss action
  if (action === 'dismiss') {
    console.log('[SW] Notification dismissed');
    // Update history to mark as read
    updateNotificationHistory(notificationData.notificationId, {
      isRead: true,
      isClicked: true,
    });
    trackNotificationEvent('dismissed', notificationData.notificationId);
    return;
  }

  // Handle snooze action
  if (action === 'snooze') {
    console.log('[SW] Notification snoozed');
    const snoozeTime = Date.now() + 3600000; // 1 hour from now
    updateNotificationHistory(notificationData.notificationId, {
      isRead: true,
    });
    trackNotificationEvent('snoozed', notificationData.notificationId, {
      snoozeUntil: snoozeTime,
    });
    event.waitUntil(
      scheduleSnoozeNotification(
        {
          title: notification.title,
          body: notification.body,
          icon: notification.icon,
          url: notificationData.url,
          channel: notificationData.channel,
          notificationId: `${notificationData.notificationId}-snoozed`,
        },
        snoozeTime,
      ),
    );
    return;
  }

  // Get URL to open
  const urlToOpen = notificationData.url || '/';

  // Update notification history
  updateNotificationHistory(notificationData.notificationId, {
    isRead: true,
    isClicked: true,
  });

  // Track click event
  trackNotificationEvent('clicked', notificationData.notificationId, {
    action: action || 'default',
    url: urlToOpen,
  });

  // Handle view action or default click
  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((windowClients) => {
        // Try to find an existing window and navigate
        for (const client of windowClients) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus().then((focusedClient) => {
              if (focusedClient && 'navigate' in focusedClient) {
                return focusedClient.navigate(urlToOpen);
              }
              return focusedClient;
            });
          }
        }

        // No existing window, open a new one
        if (clients.openWindow) {
          return clients.openWindow(urlToOpen);
        }
      })
      .then(() => {
        // Notify all clients about the click (for UI updates)
        return clients.matchAll({ type: 'window' }).then((windowClients) => {
          windowClients.forEach((client) => {
            client.postMessage({
              type: 'NOTIFICATION_CLICKED',
              notificationId: notificationData.notificationId,
              url: urlToOpen,
            });
          });
        });
      }),
  );
});

// ============================================================================
// NOTIFICATION CLOSE HANDLER
// ============================================================================

self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification closed without click:', event);

  const notificationData = event.notification.data || {};

  // Mark as read since user saw it
  updateNotificationHistory(notificationData.notificationId, { isRead: true });
});

// ============================================================================
// PUSH SUBSCRIPTION CHANGE HANDLER
// ============================================================================

self.addEventListener('pushsubscriptionchange', (event) => {
  console.log('[SW] Push subscription changed');

  event.waitUntil(
    // Notify all clients to refresh their FCM token
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      windowClients.forEach((client) => {
        client.postMessage({
          type: 'PUSH_SUBSCRIPTION_CHANGED',
        });
      });
    }),
  );
});

// ============================================================================
// MESSAGE HANDLER - Communication with main app
// ============================================================================

self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);

  const { type, payload } = event.data || {};

  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;

    case 'GET_NOTIFICATION_HISTORY':
      getNotificationHistory().then((history) => {
        event.ports[0]?.postMessage({ type: 'NOTIFICATION_HISTORY', history });
      });
      break;

    case 'CLEAR_NOTIFICATION_HISTORY':
      clearNotificationHistory().then(() => {
        event.ports[0]?.postMessage({ type: 'NOTIFICATION_HISTORY_CLEARED' });
      });
      break;

    case 'MARK_NOTIFICATION_READ':
      if (payload?.notificationId) {
        updateNotificationHistory(payload.notificationId, { isRead: true });
      }
      break;

    case 'MARK_ALL_READ':
      markAllNotificationsRead().then(() => {
        event.ports[0]?.postMessage({ type: 'ALL_NOTIFICATIONS_READ' });
      });
      break;
  }
});

// ============================================================================
// BACKGROUND SYNC - Form submissions
// ============================================================================

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  const cache = await caches.open(CACHE_NAME);
  const requests = await cache.keys();

  for (const request of requests) {
    if (request.url.includes('/api/') && request.method === 'POST') {
      try {
        await fetch(request.clone());
        await cache.delete(request);
      } catch (error) {
        console.error('[SW] Sync failed:', error);
      }
    }
  }
}

// ============================================================================
// INDEXED DB - Notification History Storage
// ============================================================================

const DB_NAME = 'sproutern-notifications';
const DB_VERSION = 2; // Upgraded to support snoozed and failed stores
const STORE_NAME = 'history';
const MAX_HISTORY_ITEMS = 50;

/**
 * Open IndexedDB database
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // History store for notification history
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('receivedAt', 'receivedAt', { unique: false });
        store.createIndex('isRead', 'isRead', { unique: false });
      }

      // Snoozed store for snoozed notifications
      if (!db.objectStoreNames.contains('snoozed')) {
        const snoozedStore = db.createObjectStore('snoozed', { keyPath: 'id' });
        snoozedStore.createIndex('snoozeUntil', 'snoozeUntil', {
          unique: false,
        });
      }

      // Failed store for notifications that failed to display
      if (!db.objectStoreNames.contains('failed')) {
        const failedStore = db.createObjectStore('failed', { keyPath: 'id' });
        failedStore.createIndex('failedAt', 'failedAt', { unique: false });
      }
    };
  });
}

/**
 * Store notification in history
 */
async function storeNotificationHistory(notification) {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    // Add notification
    store.put(notification);

    // Clean up old notifications (keep only MAX_HISTORY_ITEMS)
    const index = store.index('receivedAt');
    const countRequest = store.count();

    countRequest.onsuccess = () => {
      const count = countRequest.result;
      if (count > MAX_HISTORY_ITEMS) {
        const deleteCount = count - MAX_HISTORY_ITEMS;
        let deleted = 0;

        index.openCursor().onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor && deleted < deleteCount) {
            store.delete(cursor.primaryKey);
            deleted++;
            cursor.continue();
          }
        };
      }
    };

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });

    console.log('[SW] Notification stored in history');
  } catch (error) {
    console.error('[SW] Failed to store notification:', error);
  }
}

/**
 * Update notification in history
 */
async function updateNotificationHistory(notificationId, updates) {
  if (!notificationId) return;

  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.get(notificationId);

    request.onsuccess = () => {
      const notification = request.result;
      if (notification) {
        Object.assign(notification, updates);
        store.put(notification);
      }
    };

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
  } catch (error) {
    console.error('[SW] Failed to update notification:', error);
  }
}

/**
 * Get all notifications from history
 */
async function getNotificationHistory() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const index = store.index('receivedAt');

    return new Promise((resolve, reject) => {
      const request = index.getAll();
      request.onsuccess = () => {
        // Return in reverse order (newest first)
        resolve(request.result.reverse());
      };
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('[SW] Failed to get notification history:', error);
    return [];
  }
}

/**
 * Clear all notification history
 */
async function clearNotificationHistory() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    store.clear();

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });

    console.log('[SW] Notification history cleared');
  } catch (error) {
    console.error('[SW] Failed to clear notification history:', error);
  }
}

/**
 * Mark all notifications as read
 */
async function markAllNotificationsRead() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.openCursor();

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        const notification = cursor.value;
        notification.isRead = true;
        cursor.update(notification);
        cursor.continue();
      }
    };

    await new Promise((resolve, reject) => {
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });

    console.log('[SW] All notifications marked as read');
  } catch (error) {
    console.error('[SW] Failed to mark all as read:', error);
  }
}

console.log('[SW] Sproutern Service Worker loaded successfully');
