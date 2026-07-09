/**
 * Firebase Admin Messaging Service
 * Server-side utilities for sending FCM notifications
 */

import * as admin from 'firebase-admin';
import type {
  NotificationPayload,
  NotificationResult,
  MulticastNotificationResult,
  TopicSubscriptionResult,
} from '@/types/notification-types';

// Ensure Firebase Admin is initialized
if (!admin.apps.length) {
  try {
    // Try to use SERVICE_ACCOUNT_KEY if available (base64 encoded)
    const serviceAccountKey = process.env.SERVICE_ACCOUNT_KEY;

    if (serviceAccountKey) {
      const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString(
        'utf-8',
      );
      const serviceAccount = JSON.parse(decodedKey);

      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log('Firebase Admin initialized with service account key.');
    } else {
      // Fallback to application default credentials
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
      console.log(
        'Firebase Admin initialized with application default credentials.',
      );
    }
  } catch (error: any) {
    console.error('Firebase Admin initialization error:', error.message);
  }
}

// Get messaging instance
const messaging = admin.apps.length > 0 ? admin.messaging() : null;

/**
 * Base message payload structure (without target)
 */
interface BaseMessagePayload {
  notification: admin.messaging.Notification;
  data: { [key: string]: string };
  webpush: admin.messaging.WebpushConfig;
  android: admin.messaging.AndroidConfig;
  apns: admin.messaging.ApnsConfig;
}

/**
 * Build base FCM message payload from notification options
 */
function buildBasePayload(payload: NotificationPayload): BaseMessagePayload {
  // Use absolute URL for icons (required for Android notifications)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://sproutern.com';
  const iconUrl = payload.icon
    ? `${baseUrl}${payload.icon}`
    : `${baseUrl}/logo.jpg`;
  const badgeUrl = payload.badge
    ? `${baseUrl}${payload.badge}`
    : `${baseUrl}/logo.jpg`;

  return {
    notification: {
      title: payload.title,
      body: payload.body,
      imageUrl: payload.image ? `${baseUrl}${payload.image}` : undefined,
    },
    data: {
      ...payload.data,
      // Include click URL in data for service worker
      url: payload.link || '/',
      tag: payload.tag || 'sproutern-notification',
      requireInteraction: payload.requireInteraction ? 'true' : 'false',
    },
    webpush: {
      notification: {
        title: payload.title,
        body: payload.body,
        icon: iconUrl,
        badge: badgeUrl,
        tag: payload.tag || 'sproutern-notification',
        requireInteraction: payload.requireInteraction,
        silent: payload.silent,
      },
      fcmOptions: {
        link: payload.link || '/',
      },
    },
    android: {
      priority: 'high',
      notification: {
        title: payload.title,
        body: payload.body,
        icon: 'ic_notification',
        color: '#4F46E5',
        sound: payload.silent ? undefined : 'default',
        tag: payload.tag,
        imageUrl: payload.image ? `${baseUrl}${payload.image}` : undefined,
        clickAction: payload.link || 'FLUTTER_NOTIFICATION_CLICK',
      },
    },
    apns: {
      payload: {
        aps: {
          alert: {
            title: payload.title,
            body: payload.body,
          },
          sound: payload.silent ? undefined : 'default',
          badge: payload.badge ? parseInt(payload.badge) : undefined,
          mutableContent: true,
        },
      },
      fcmOptions: {
        imageUrl: payload.image,
      },
    },
  };
}

/**
 * Build FCM message for a specific device token
 */
function buildTokenMessage(
  payload: NotificationPayload,
  token: string,
): admin.messaging.TokenMessage {
  return {
    ...buildBasePayload(payload),
    token,
  };
}

/**
 * Build FCM message for a topic
 */
function buildTopicMessage(
  payload: NotificationPayload,
  topic: string,
): admin.messaging.TopicMessage {
  return {
    ...buildBasePayload(payload),
    topic,
  };
}

/**
 * Send notification to a single device
 */
export async function sendToDevice(
  token: string,
  payload: NotificationPayload,
): Promise<NotificationResult> {
  if (!messaging) {
    return {
      success: false,
      error: 'Firebase Messaging not initialized',
      errorCode: 'messaging/not-initialized',
    };
  }

  try {
    const message = buildTokenMessage(payload, token);
    const messageId = await messaging.send(message);

    return {
      success: true,
      messageId,
    };
  } catch (error: any) {
    console.error('Error sending notification to device:', error);
    return {
      success: false,
      error: error.message,
      errorCode: error.code,
    };
  }
}

/**
 * Send notification to multiple devices (up to 500)
 */
export async function sendToMultipleDevices(
  tokens: string[],
  payload: NotificationPayload,
): Promise<MulticastNotificationResult> {
  if (!messaging) {
    return {
      success: false,
      successCount: 0,
      failureCount: tokens.length,
    };
  }

  // Validate token count
  if (tokens.length > 500) {
    return {
      success: false,
      successCount: 0,
      failureCount: tokens.length,
      results: [
        { success: false, error: 'Maximum 500 tokens allowed per request' },
      ],
    };
  }

  try {
    const basePayload = buildBasePayload(payload);

    const response = await messaging.sendEachForMulticast({
      tokens,
      notification: basePayload.notification,
      data: basePayload.data,
      webpush: basePayload.webpush,
      android: basePayload.android,
      apns: basePayload.apns,
    });

    const failedTokens: string[] = [];
    const results = response.responses.map((resp, idx) => {
      if (!resp.success && resp.error) {
        // Track failed tokens for cleanup
        const errorCode = resp.error.code;
        if (
          errorCode === 'messaging/invalid-registration-token' ||
          errorCode === 'messaging/registration-token-not-registered'
        ) {
          failedTokens.push(tokens[idx]);
        }
        return {
          success: false,
          error: resp.error.message,
        };
      }
      return {
        success: true,
        messageId: resp.messageId,
      };
    });

    return {
      success: response.successCount > 0,
      successCount: response.successCount,
      failureCount: response.failureCount,
      results,
      failedTokens,
    };
  } catch (error: any) {
    console.error('Error sending multicast notification:', error);
    return {
      success: false,
      successCount: 0,
      failureCount: tokens.length,
      results: [{ success: false, error: error.message }],
    };
  }
}

/**
 * Send notification to a topic
 */
export async function sendToTopic(
  topic: string,
  payload: NotificationPayload,
): Promise<NotificationResult> {
  if (!messaging) {
    return {
      success: false,
      error: 'Firebase Messaging not initialized',
      errorCode: 'messaging/not-initialized',
    };
  }

  try {
    // Sanitize topic name (alphanumeric, underscores, hyphens only)
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9_-]/g, '_');
    const message = buildTopicMessage(payload, sanitizedTopic);
    const messageId = await messaging.send(message);

    return {
      success: true,
      messageId,
    };
  } catch (error: any) {
    console.error('Error sending notification to topic:', error);
    return {
      success: false,
      error: error.message,
      errorCode: error.code,
    };
  }
}

/**
 * Subscribe a device to a topic
 */
export async function subscribeToTopic(
  token: string,
  topic: string,
): Promise<TopicSubscriptionResult> {
  if (!messaging) {
    return {
      success: false,
      error: 'Firebase Messaging not initialized',
    };
  }

  try {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9_-]/g, '_');
    const response = await messaging.subscribeToTopic([token], sanitizedTopic);

    return {
      success: response.successCount > 0,
      successCount: response.successCount,
      failureCount: response.failureCount,
    };
  } catch (error: any) {
    console.error('Error subscribing to topic:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Unsubscribe a device from a topic
 */
export async function unsubscribeFromTopic(
  token: string,
  topic: string,
): Promise<TopicSubscriptionResult> {
  if (!messaging) {
    return {
      success: false,
      error: 'Firebase Messaging not initialized',
    };
  }

  try {
    const sanitizedTopic = topic.replace(/[^a-zA-Z0-9_-]/g, '_');
    const response = await messaging.unsubscribeFromTopic(
      [token],
      sanitizedTopic,
    );

    return {
      success: response.successCount > 0,
      successCount: response.successCount,
      failureCount: response.failureCount,
    };
  } catch (error: any) {
    console.error('Error unsubscribing from topic:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

/**
 * Send data-only message (silent push for background processing)
 */
export async function sendDataOnlyMessage(
  token: string,
  data: Record<string, string>,
): Promise<NotificationResult> {
  if (!messaging) {
    return {
      success: false,
      error: 'Firebase Messaging not initialized',
      errorCode: 'messaging/not-initialized',
    };
  }

  try {
    const message: admin.messaging.Message = {
      token,
      data,
      android: {
        priority: 'high',
      },
      apns: {
        payload: {
          aps: {
            contentAvailable: true,
          },
        },
      },
      webpush: {
        headers: {
          Urgency: 'high',
        },
      },
    };

    const messageId = await messaging.send(message);

    return {
      success: true,
      messageId,
    };
  } catch (error: any) {
    console.error('Error sending data-only message:', error);
    return {
      success: false,
      error: error.message,
      errorCode: error.code,
    };
  }
}
