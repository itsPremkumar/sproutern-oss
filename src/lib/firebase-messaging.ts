'use client';

import { type Messaging } from 'firebase/messaging';
import { app } from './firebase';
import { doc, setDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { db, auth } from './firebase';
import type { NotificationHistoryItem } from '@/types/notification-types';

let messaging: Messaging | null = null;
let tokenRefreshInProgress = false;

// Constants for token management
const TOKEN_REFRESH_INTERVAL = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
const PENDING_OPERATIONS_KEY = 'fcm_pending_operations';
const TOKEN_TIMESTAMP_KEY = 'fcm_token_timestamp';

/**
 * Initialize Firebase Cloud Messaging
 * Should only be called on client-side
 */
export async function initializeMessaging(): Promise<Messaging | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!('Notification' in window)) {
    console.warn('This browser does not support notifications');
    return null;
  }

  if (!messaging) {
    try {
      const { getMessaging } = await import('firebase/messaging');
      messaging = getMessaging(app);
    } catch (error) {
      console.error('Failed to initialize Firebase Messaging:', error);
      return null;
    }
  }

  return messaging;
}

/**
 * Register the service worker if not already registered
 */
async function registerServiceWorker(): Promise<
  ServiceWorkerRegistration | undefined
> {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service workers are not supported');
    return undefined;
  }

  try {
    // Try to get existing registration first
    let swRegistration = await navigator.serviceWorker.getRegistration('/');

    if (!swRegistration) {
      // Register the unified service worker
      swRegistration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      console.log('✅ Service Worker registered successfully');
    }

    // Wait for the service worker to be ready
    await navigator.serviceWorker.ready;

    // Set up message listener for service worker communication
    setupServiceWorkerMessageHandler();

    return swRegistration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return undefined;
  }
}

/**
 * Set up message handler for service worker communication
 */
function setupServiceWorkerMessageHandler() {
  if (!navigator.serviceWorker.controller) return;

  navigator.serviceWorker.addEventListener('message', (event) => {
    const { type, notificationId, url, history } = event.data || {};

    switch (type) {
      case 'NOTIFICATION_CLICKED':
        console.log('Notification clicked:', notificationId, url);
        // Dispatch custom event for UI components to handle
        window.dispatchEvent(
          new CustomEvent('notification-clicked', {
            detail: { notificationId, url },
          }),
        );
        break;

      case 'PUSH_SUBSCRIPTION_CHANGED':
        console.log('Push subscription changed, refreshing token...');
        refreshFCMToken();
        break;

      case 'NOTIFICATION_HISTORY':
        window.dispatchEvent(
          new CustomEvent('notification-history-updated', {
            detail: { history },
          }),
        );
        break;
    }
  });
}

/**
 * Request notification permission and get FCM token
 * @returns FCM token or null if permission denied
 */
export async function requestNotificationPermission(): Promise<string | null> {
  const messagingInstance = await initializeMessaging();
  if (!messagingInstance) {
    return null;
  }

  try {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      console.log('Notification permission denied');
      return null;
    }

    // Get VAPID key from environment
    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

    if (!vapidKey) {
      console.error(
        'VAPID key not configured. Please add NEXT_PUBLIC_FIREBASE_VAPID_KEY to your environment variables.',
      );
      return null;
    }

    // Register the service worker
    const swRegistration = await registerServiceWorker();

    // Get FCM token
    const { getToken } = await import('firebase/messaging');
    const token = await getToken(messagingInstance, {
      vapidKey,
      serviceWorkerRegistration: swRegistration,
    });

    if (token) {
      console.log('FCM Token:', token);
      // Store token for logged-in users
      await saveTokenToFirestore(token);
      return token;
    }

    return null;
  } catch (error) {
    console.error('Error getting FCM token:', error);
    return null;
  }
}

/**
 * Refresh FCM token (called when push subscription changes or on expiration)
 * Exported so it can be called from other modules
 */
export async function refreshFCMToken(): Promise<void> {
  if (tokenRefreshInProgress) {
    console.log('Token refresh already in progress');
    return;
  }

  tokenRefreshInProgress = true;

  try {
    const messagingInstance = await initializeMessaging();
    if (!messagingInstance) return;

    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
    if (!vapidKey) return;

    const swRegistration = await navigator.serviceWorker.getRegistration('/');
    if (!swRegistration) return;

    // Delete old token first
    const oldToken = localStorage.getItem('fcm_token');
    if (oldToken) {
      try {
        const { deleteToken } = await import('firebase/messaging');
        await deleteToken(messagingInstance);
        await deleteOldTokenFromFirestore(oldToken);
      } catch (e) {
        console.log('Could not delete old token:', e);
      }
    }

    // Get new token
    const { getToken } = await import('firebase/messaging');
    const newToken = await getToken(messagingInstance, {
      vapidKey,
      serviceWorkerRegistration: swRegistration,
    });

    if (newToken) {
      console.log('FCM Token refreshed:', newToken);
      await saveTokenToFirestore(newToken);
    }
  } catch (error) {
    console.error('Error refreshing FCM token:', error);
  } finally {
    tokenRefreshInProgress = false;
  }
}

/**
 * Validate and refresh token if expired (should be called periodically)
 * Checks if token is older than 7 days and refreshes it
 */
export async function validateAndRefreshToken(): Promise<void> {
  const token = getCurrentToken();
  if (!token) {
    console.log('No token to validate');
    return;
  }

  const lastRefresh = localStorage.getItem(TOKEN_TIMESTAMP_KEY);
  const now = Date.now();

  if (!lastRefresh || now - parseInt(lastRefresh) > TOKEN_REFRESH_INTERVAL) {
    console.log('Token is stale, refreshing...');
    await refreshFCMToken();
  } else {
    console.log('Token is still valid');
  }
}

/**
 * Process any pending operations that failed previously
 * Call this on app startup to retry failed subscriptions/unsubscriptions
 */
export async function processPendingOperations(): Promise<void> {
  const pendingOps = localStorage.getItem(PENDING_OPERATIONS_KEY);
  if (!pendingOps) return;

  try {
    const operations: Array<{
      type: string;
      payload: Record<string, string>;
      timestamp: number;
    }> = JSON.parse(pendingOps);

    const remainingOps: typeof operations = [];

    for (const op of operations) {
      // Skip operations older than 7 days
      if (Date.now() - op.timestamp > TOKEN_REFRESH_INTERVAL) {
        console.log('Skipping stale operation:', op.type);
        continue;
      }

      let success = false;

      if (op.type === 'subscribe') {
        success = await subscribeToTopic(op.payload.topic);
      } else if (op.type === 'unsubscribe') {
        success = await unsubscribeFromTopic(op.payload.topic);
      }

      if (!success) {
        remainingOps.push(op);
      } else {
        console.log(
          `✅ Pending ${op.type} operation succeeded for topic:`,
          op.payload.topic,
        );
      }
    }

    if (remainingOps.length > 0) {
      localStorage.setItem(
        PENDING_OPERATIONS_KEY,
        JSON.stringify(remainingOps),
      );
    } else {
      localStorage.removeItem(PENDING_OPERATIONS_KEY);
    }
  } catch (error) {
    console.error('Error processing pending operations:', error);
  }
}

/**
 * Queue a failed operation for later retry
 */
function queueFailedOperation(
  type: string,
  payload: Record<string, string>,
): void {
  try {
    const pendingOps = localStorage.getItem(PENDING_OPERATIONS_KEY);
    const operations: Array<{
      type: string;
      payload: Record<string, string>;
      timestamp: number;
    }> = pendingOps ? JSON.parse(pendingOps) : [];

    // Prevent duplicates
    const exists = operations.some(
      (op) => op.type === type && op.payload.topic === payload.topic,
    );

    if (!exists) {
      operations.push({ type, payload, timestamp: Date.now() });
      localStorage.setItem(PENDING_OPERATIONS_KEY, JSON.stringify(operations));
      console.log(`Queued ${type} operation for retry:`, payload.topic);
    }
  } catch (error) {
    console.error('Error queuing failed operation:', error);
  }
}

/**
 * Delete old token from Firestore
 */
async function deleteOldTokenFromFirestore(token: string): Promise<void> {
  const user = auth.currentUser;
  const docId = user?.uid || `anonymous_${token.substring(0, 20)}`;

  try {
    const tokenRef = doc(db, 'fcmTokens', docId);
    await deleteDoc(tokenRef);
    console.log('Old token deleted from Firestore');
  } catch (error) {
    console.error('Error deleting old token:', error);
  }
}

/**
 * Save FCM token to Firestore for all users (logged-in and anonymous)
 * Also subscribes user to the 'all_users' topic for broadcast notifications
 */
async function saveTokenToFirestore(token: string): Promise<void> {
  // Always save to localStorage as backup with timestamp
  localStorage.setItem('fcm_token', token);
  localStorage.setItem(TOKEN_TIMESTAMP_KEY, Date.now().toString());

  const user = auth.currentUser;
  const docId = user?.uid || `anonymous_${token.substring(0, 20)}`;

  try {
    // Save token to Firestore fcmTokens collection
    const tokenRef = doc(db, 'fcmTokens', docId);
    await setDoc(
      tokenRef,
      {
        token,
        userId: user?.uid || null,
        email: user?.email || null,
        isAnonymous: !user,
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp(),
        platform: getPlatformInfo(),
        userAgent: navigator.userAgent,
        lastActive: serverTimestamp(),
      },
      { merge: true },
    );

    console.log('✅ FCM Token saved to Firestore');

    // Auto-subscribe to all_users topic for broadcast notifications
    await subscribeToAllUsersTopic(token);
  } catch (error) {
    console.error('Error saving FCM token to Firestore:', error);
  }
}

/**
 * Subscribe token to all_users topic for broadcast notifications
 */
async function subscribeToAllUsersTopic(token: string): Promise<void> {
  try {
    const response = await fetch('/api/notifications/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        topic: 'all_users',
      }),
    });

    if (response.ok) {
      console.log('✅ Subscribed to all_users topic');
    } else {
      console.warn('Failed to subscribe to all_users topic');
    }
  } catch (error) {
    console.error('Error subscribing to topic:', error);
  }
}

/**
 * Subscribe to a specific notification topic
 * Queues the operation for retry if it fails
 */
export async function subscribeToTopic(topic: string): Promise<boolean> {
  const token = localStorage.getItem('fcm_token');
  if (!token) {
    console.error('No FCM token available');
    return false;
  }

  try {
    const response = await fetch('/api/notifications/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, topic }),
    });

    if (!response.ok) {
      // Queue for retry on failure
      queueFailedOperation('subscribe', { topic });
    }

    return response.ok;
  } catch (error) {
    console.error('Error subscribing to topic:', error);
    // Queue for retry on network error
    queueFailedOperation('subscribe', { topic });
    return false;
  }
}

/**
 * Unsubscribe from a notification topic
 * Queues the operation for retry if it fails
 */
export async function unsubscribeFromTopic(topic: string): Promise<boolean> {
  const token = localStorage.getItem('fcm_token');
  if (!token) {
    console.error('No FCM token available');
    return false;
  }

  try {
    const response = await fetch('/api/notifications/unsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, topic }),
    });

    if (!response.ok) {
      // Queue for retry on failure
      queueFailedOperation('unsubscribe', { topic });
    }

    return response.ok;
  } catch (error) {
    console.error('Error unsubscribing from topic:', error);
    // Queue for retry on network error
    queueFailedOperation('unsubscribe', { topic });
    return false;
  }
}

/**
 * Get platform information for token storage
 */
function getPlatformInfo(): string {
  const userAgent = navigator.userAgent;
  if (/Android/i.test(userAgent)) return 'android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
  if (/Windows/i.test(userAgent)) return 'windows';
  if (/Mac/i.test(userAgent)) return 'mac';
  if (/Linux/i.test(userAgent)) return 'linux';
  return 'unknown';
}

/**
 * Set up foreground message handler
 * @param callback Function to call when a message is received in foreground
 */
export async function onForegroundMessage(
  callback: (payload: any) => void,
): Promise<(() => void) | null> {
  const messagingInstance = await initializeMessaging();
  if (!messagingInstance) {
    return null;
  }

  const { onMessage } = await import('firebase/messaging');

  const unsubscribe = onMessage(messagingInstance, (payload) => {
    console.log('Foreground message received:', payload);
    callback(payload);
  });

  return unsubscribe;
}

/**
 * Check if notifications are supported in this browser
 */
export function isNotificationSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window
  );
}

/**
 * Get current notification permission status
 */
export function getNotificationPermissionStatus():
  | NotificationPermission
  | 'unsupported' {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return Notification.permission;
}

/**
 * Get notification history from Service Worker
 */
export async function getNotificationHistory(): Promise<
  NotificationHistoryItem[]
> {
  if (!('serviceWorker' in navigator)) {
    return [];
  }

  try {
    const registration = await navigator.serviceWorker.ready;

    return new Promise((resolve) => {
      const channel = new MessageChannel();

      channel.port1.onmessage = (event) => {
        if (event.data?.type === 'NOTIFICATION_HISTORY') {
          resolve(event.data.history || []);
        }
      };

      registration.active?.postMessage({ type: 'GET_NOTIFICATION_HISTORY' }, [
        channel.port2,
      ]);

      // Timeout after 3 seconds
      setTimeout(() => resolve([]), 3000);
    });
  } catch (error) {
    console.error('Error getting notification history:', error);
    return [];
  }
}

/**
 * Clear notification history
 */
export async function clearNotificationHistory(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    registration.active?.postMessage({ type: 'CLEAR_NOTIFICATION_HISTORY' });
  } catch (error) {
    console.error('Error clearing notification history:', error);
  }
}

/**
 * Mark a notification as read
 */
export async function markNotificationRead(
  notificationId: string,
): Promise<void> {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    registration.active?.postMessage({
      type: 'MARK_NOTIFICATION_READ',
      payload: { notificationId },
    });
  } catch (error) {
    console.error('Error marking notification as read:', error);
  }
}

/**
 * Mark all notifications as read
 */
export async function markAllNotificationsRead(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    registration.active?.postMessage({ type: 'MARK_ALL_READ' });
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
  }
}

/**
 * Get the current FCM token from localStorage
 */
export function getCurrentToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('fcm_token');
}
