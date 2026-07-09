/**
 * Notification Templates
 * Pre-built notification templates for common use cases
 */

import type {
  NotificationPayload,
  NotificationTemplate,
  NotificationTemplateData,
} from '@/types/notification-types';

/**
 * Generate notification payload from template
 */
export function getNotificationTemplate(
  template: NotificationTemplate,
  data: NotificationTemplateData = {},
): NotificationPayload {
  const templates: Record<NotificationTemplate, NotificationPayload> = {
    welcome: {
      title: '🎉 Welcome to Sproutern!',
      body: data.userName
        ? `Hey ${data.userName}! Your journey to career success starts here. Explore internships, resources, and more!`
        : 'Your journey to career success starts here. Explore internships, resources, and more!',
      icon: '/logo.jpg',
      link: '/dashboard',
      tag: 'welcome',
      data: {
        type: 'welcome',
        action: 'open_dashboard',
      },
    },

    new_internship: {
      title: '🚀 New Internship Opportunity!',
      body:
        data.jobTitle && data.companyName
          ? `${data.jobTitle} at ${data.companyName} - Apply now before it's gone!`
          : 'A new internship matching your profile is available. Check it out!',
      icon: '/logo.jpg',
      image: '/images/internship-banner.jpg',
      link: data.link || '/internships',
      tag: 'new_internship',
      requireInteraction: true,
      data: {
        type: 'new_internship',
        action: 'view_internship',
      },
    },

    application_received: {
      title: '📩 New Application Received!',
      body:
        data.userName && data.jobTitle
          ? `${data.userName} has applied for ${data.jobTitle}. Review their profile now!`
          : 'You have received a new internship application. Review it now!',
      icon: '/logo.jpg',
      link: data.link || '/dashboard/applications',
      tag: 'application_received',
      requireInteraction: true,
      data: {
        type: 'application_received',
        action: 'view_application',
      },
    },

    application_status: {
      title: getApplicationStatusTitle(data.status),
      body: getApplicationStatusBody(data),
      icon: '/logo.jpg',
      link: data.link || '/dashboard/my-applications',
      tag: 'application_status',
      requireInteraction: true,
      data: {
        type: 'application_status',
        status: data.status || 'updated',
        action: 'view_status',
      },
    },

    new_blog: {
      title: '📚 New Article Published!',
      body: data.blogTitle
        ? `Check out: "${data.blogTitle}" - Enhance your knowledge today!`
        : 'A new article has been published. Read it now!',
      icon: '/logo.jpg',
      link: data.link || '/blog',
      tag: 'new_blog',
      data: {
        type: 'new_blog',
        action: 'read_blog',
      },
    },

    announcement: {
      title: '📢 Sproutern Announcement',
      body: data.message || 'We have an important update for you!',
      icon: '/logo.jpg',
      link: data.link || '/',
      tag: 'announcement',
      requireInteraction: true,
      data: {
        type: 'announcement',
        action: 'view_announcement',
      },
    },
  };

  return templates[template];
}

/**
 * Get title based on application status
 */
function getApplicationStatusTitle(status?: string): string {
  const titles: Record<string, string> = {
    accepted: '🎉 Application Accepted!',
    rejected: '😔 Application Update',
    shortlisted: "⭐ You've Been Shortlisted!",
    interview: '📅 Interview Scheduled!',
    under_review: '👀 Application Under Review',
  };
  return titles[status || ''] || '📋 Application Status Update';
}

/**
 * Get body based on application status and data
 */
function getApplicationStatusBody(data: NotificationTemplateData): string {
  const { status, jobTitle, companyName } = data;
  const jobInfo =
    jobTitle && companyName ? ` for ${jobTitle} at ${companyName}` : '';

  const bodies: Record<string, string> = {
    accepted: `Congratulations! Your application${jobInfo} has been accepted! 🎉`,
    rejected: `Unfortunately, your application${jobInfo} was not selected. Keep trying!`,
    shortlisted: `Great news! You've been shortlisted${jobInfo}. Stay tuned for next steps!`,
    interview: `You have an interview scheduled${jobInfo}. Check the details now!`,
    under_review: `Your application${jobInfo} is being reviewed. We'll update you soon!`,
  };

  return (
    bodies[status || ''] ||
    `Your application${jobInfo} status has been updated.`
  );
}

/**
 * Template topics for subscriptions
 */
export const NOTIFICATION_TOPICS = {
  /** All users - for global announcements */
  ALL_USERS: 'all_users',
  /** Students - for internship updates */
  STUDENTS: 'students',
  /** Startups - for platform updates */
  STARTUPS: 'startups',
  /** New internships notifications */
  NEW_INTERNSHIPS: 'new_internships',
  /** Blog updates */
  BLOG_UPDATES: 'blog_updates',
  /** Feature announcements */
  FEATURE_UPDATES: 'feature_updates',
} as const;

export type NotificationTopic =
  (typeof NOTIFICATION_TOPICS)[keyof typeof NOTIFICATION_TOPICS];
