/**
 * FCM Notification Types
 * Complete type definitions for the notification backend system
 */

/**
 * Android-specific notification options
 */
export interface AndroidNotificationOptions {
  /** Notification channel ID for Android O+ */
  channelId?: string;
  /** Notification priority */
  priority?: 'min' | 'low' | 'default' | 'high' | 'max';
  /** Time-to-live in seconds */
  ttl?: number;
  /** Notification sound */
  sound?: string;
  /** Notification tag for grouping */
  tag?: string;
  /** Notification color (hex format) */
  color?: string;
  /** Click action for the notification */
  clickAction?: string;
}

/**
 * Web push notification options
 */
export interface WebPushNotificationOptions {
  /** Custom headers for web push */
  headers?: Record<string, string>;
  /** Time-to-live in seconds */
  ttl?: number;
  /** Urgency level */
  urgency?: 'very-low' | 'low' | 'normal' | 'high';
  /** Topic for grouping */
  topic?: string;
  /** FCM options for web */
  fcmOptions?: {
    /** Link to open when notification is clicked */
    link?: string;
  };
}

/**
 * APNS (iOS) notification options
 */
export interface ApnsNotificationOptions {
  /** Custom headers for APNS */
  headers?: Record<string, string>;
  /** Badge count */
  badge?: number;
  /** Sound file name */
  sound?: string;
  /** Content available flag for background updates */
  contentAvailable?: boolean;
  /** Mutable content for notification service extension */
  mutableContent?: boolean;
  /** Thread ID for grouping */
  threadId?: string;
  /** Category for action buttons */
  category?: string;
}

/**
 * Main notification payload structure
 */
export interface NotificationPayload {
  /** Notification title (required) */
  title: string;
  /** Notification body message (required) */
  body: string;
  /** Path to notification icon */
  icon?: string;
  /** Path to large image (displayed in expanded notification) */
  image?: string;
  /** Custom data payload (key-value pairs) */
  data?: Record<string, string>;
  /** URL to open when notification is clicked */
  link?: string;
  /** Unique tag for notification grouping/replacement */
  tag?: string;
  /** Whether notification requires user interaction to dismiss */
  requireInteraction?: boolean;
  /** Silent notification (no sound/vibration) */
  silent?: boolean;
  /** Notification badge text */
  badge?: string;
}

/**
 * Complete notification options including platform-specific settings
 */
export interface NotificationOptions extends NotificationPayload {
  /** Android-specific options */
  android?: AndroidNotificationOptions;
  /** Web push-specific options */
  webpush?: WebPushNotificationOptions;
  /** iOS/macOS-specific options */
  apns?: ApnsNotificationOptions;
}

/**
 * Request payload for sending to a single device
 */
export interface SendNotificationRequest extends NotificationPayload {
  /** FCM device token (required) */
  token: string;
}

/**
 * Request payload for sending to multiple devices
 */
export interface SendMulticastRequest extends NotificationPayload {
  /** Array of FCM device tokens (max 500) */
  tokens: string[];
}

/**
 * Request payload for sending to a topic
 */
export interface SendTopicRequest extends NotificationPayload {
  /** Topic name to send to (required) */
  topic: string;
}

/**
 * Request payload for topic subscription
 */
export interface TopicSubscriptionRequest {
  /** FCM device token */
  token: string;
  /** Topic name to subscribe/unsubscribe */
  topic: string;
}

/**
 * Response from sending a single notification
 */
export interface NotificationResult {
  /** Whether the operation was successful */
  success: boolean;
  /** Message ID if successful */
  messageId?: string;
  /** Error message if failed */
  error?: string;
  /** Error code if failed */
  errorCode?: string;
}

/**
 * Response from sending multicast notifications
 */
export interface MulticastNotificationResult {
  /** Whether the operation was successful overall */
  success: boolean;
  /** Number of successful sends */
  successCount: number;
  /** Number of failed sends */
  failureCount: number;
  /** Individual results for each token */
  results?: Array<{
    success: boolean;
    messageId?: string;
    error?: string;
  }>;
  /** Tokens that failed and should be removed */
  failedTokens?: string[];
}

/**
 * Response from topic subscription operations
 */
export interface TopicSubscriptionResult {
  /** Whether the operation was successful */
  success: boolean;
  /** Number of successful subscriptions */
  successCount?: number;
  /** Number of failed subscriptions */
  failureCount?: number;
  /** Error message if failed */
  error?: string;
}

/**
 * Pre-defined notification templates
 */
export type NotificationTemplate =
  | 'welcome'
  | 'new_internship'
  | 'application_received'
  | 'application_status'
  | 'new_blog'
  | 'announcement';

/**
 * Template data for dynamic content
 */
export interface NotificationTemplateData {
  /** User's display name */
  userName?: string;
  /** Internship/job title */
  jobTitle?: string;
  /** Company name */
  companyName?: string;
  /** Blog post title */
  blogTitle?: string;
  /** Application status */
  status?: string;
  /** Generic message content */
  message?: string;
  /** Custom link for the notification */
  link?: string;
}

/**
 * Notification channels for categorization
 */
export type NotificationChannel =
  | 'urgent'
  | 'updates'
  | 'marketing'
  | 'reminders'
  | 'social';

/**
 * Notification channel configuration
 */
export interface NotificationChannelConfig {
  id: NotificationChannel;
  name: string;
  description: string;
  defaultEnabled: boolean;
  sound?: string;
  vibrationPattern?: number[];
  priority: 'min' | 'low' | 'default' | 'high' | 'max';
}

/**
 * Notification action button
 */
export interface NotificationAction {
  /** Unique action identifier */
  action: string;
  /** Display title for the action button */
  title: string;
  /** Icon URL for the action (optional) */
  icon?: string;
}

/**
 * Extended notification payload with advanced features
 */
export interface AdvancedNotificationPayload extends NotificationPayload {
  /** Notification channel for categorization */
  channel?: NotificationChannel;
  /** Action buttons */
  actions?: NotificationAction[];
  /** Priority level */
  priority?: 'min' | 'low' | 'default' | 'high' | 'max';
  /** Renotify if tag exists */
  renotify?: boolean;
  /** Timestamp for the notification (epoch ms) */
  timestamp?: number;
}

/**
 * Notification history item for local storage
 */
export interface NotificationHistoryItem {
  /** Unique notification ID */
  id: string;
  /** Notification title */
  title: string;
  /** Notification body */
  body: string;
  /** Icon URL */
  icon?: string;
  /** Image URL */
  image?: string;
  /** Notification channel */
  channel?: NotificationChannel;
  /** Link to open */
  link?: string;
  /** Custom data */
  data?: Record<string, string>;
  /** When the notification was received (ISO string) */
  receivedAt: string;
  /** Whether the notification has been read */
  isRead: boolean;
  /** Whether the notification has been clicked */
  isClicked: boolean;
}

/**
 * Scheduled notification request
 */
export interface ScheduledNotificationRequest extends NotificationPayload {
  /** Topic to send to (required for scheduled) */
  topic: string;
  /** Scheduled send time (ISO 8601 format or epoch ms) */
  scheduledTime: string | number;
  /** Optional timezone for the scheduled time */
  timezone?: string;
}

/**
 * User notification preferences
 */
export interface NotificationPreferences {
  /** Master enable/disable for all notifications */
  enabled: boolean;
  /** Channel-specific preferences */
  channels: Record<NotificationChannel, boolean>;
  /** Sound enabled */
  soundEnabled: boolean;
  /** Vibration enabled */
  vibrationEnabled: boolean;
  /** Do not disturb settings */
  doNotDisturb: {
    enabled: boolean;
    startTime?: string; // HH:mm format
    endTime?: string; // HH:mm format
  };
}

/**
 * Default notification preferences
 */
export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  enabled: true,
  channels: {
    urgent: true,
    updates: true,
    marketing: true,
    reminders: true,
    social: true,
  },
  soundEnabled: true,
  vibrationEnabled: true,
  doNotDisturb: {
    enabled: false,
  },
};

/**
 * Notification channel configurations
 */
export const NOTIFICATION_CHANNELS: NotificationChannelConfig[] = [
  {
    id: 'urgent',
    name: 'Urgent',
    description: 'Critical alerts and time-sensitive notifications',
    defaultEnabled: true,
    priority: 'high',
    vibrationPattern: [200, 100, 200, 100, 200],
  },
  {
    id: 'updates',
    name: 'Updates',
    description: 'Application status updates and new opportunities',
    defaultEnabled: true,
    priority: 'default',
    vibrationPattern: [200, 100, 200],
  },
  {
    id: 'marketing',
    name: 'Promotions',
    description: 'Special offers and promotional content',
    defaultEnabled: true,
    priority: 'low',
    vibrationPattern: [200],
  },
  {
    id: 'reminders',
    name: 'Reminders',
    description: 'Deadline reminders and follow-ups',
    defaultEnabled: true,
    priority: 'default',
    vibrationPattern: [200, 100, 200],
  },
  {
    id: 'social',
    name: 'Social',
    description: 'Messages and social interactions',
    defaultEnabled: true,
    priority: 'default',
    vibrationPattern: [200],
  },
];
