/**
 * API Route: Send Scheduled Notification
 * POST /api/notifications/send-scheduled
 *
 * Schedules a notification to be sent at a specific time.
 * Note: For production, use a proper job queue (e.g., Cloud Tasks, Bull Queue)
 */

import { NextResponse } from 'next/server';
import { sendToTopic } from '@/lib/firebase-admin-messaging';
import type { ScheduledNotificationRequest } from '@/types/notification-types';

// In-memory store for scheduled notifications (for demo purposes)
// In production, use a database or job queue service
const scheduledNotifications: Map<
  string,
  {
    request: ScheduledNotificationRequest;
    timeoutId: NodeJS.Timeout;
    scheduledFor: Date;
  }
> = new Map();

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ScheduledNotificationRequest;

    // Validate required fields
    const { topic, title, body: messageBody, scheduledTime } = body;

    if (!topic) {
      return NextResponse.json(
        {
          success: false,
          error: 'Topic is required for scheduled notifications',
        },
        { status: 400 },
      );
    }

    if (!title || !messageBody) {
      return NextResponse.json(
        { success: false, error: 'Title and body are required' },
        { status: 400 },
      );
    }

    if (!scheduledTime) {
      return NextResponse.json(
        { success: false, error: 'scheduledTime is required' },
        { status: 400 },
      );
    }

    // Parse scheduled time
    let scheduledDate: Date;
    if (typeof scheduledTime === 'number') {
      scheduledDate = new Date(scheduledTime);
    } else {
      scheduledDate = new Date(scheduledTime);
    }

    // Validate scheduled time is in the future
    const now = new Date();
    const delayMs = scheduledDate.getTime() - now.getTime();

    if (delayMs <= 0) {
      return NextResponse.json(
        { success: false, error: 'scheduledTime must be in the future' },
        { status: 400 },
      );
    }

    // Limit max delay to 7 days for in-memory scheduling
    const maxDelayMs = 7 * 24 * 60 * 60 * 1000; // 7 days
    if (delayMs > maxDelayMs) {
      return NextResponse.json(
        {
          success: false,
          error:
            'scheduledTime cannot be more than 7 days in the future. Use a proper job queue for longer delays.',
        },
        { status: 400 },
      );
    }

    // Generate unique ID
    const notificationId = `scheduled-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

    // Schedule the notification
    const timeoutId = setTimeout(async () => {
      console.log(`Sending scheduled notification: ${notificationId}`);

      try {
        await sendToTopic(topic, {
          title,
          body: messageBody,
          icon: body.icon,
          image: body.image,
          link: body.link,
          tag: body.tag || notificationId,
          data: {
            ...body.data,
            scheduled: 'true',
            scheduledFor: scheduledDate.toISOString(),
          },
          requireInteraction: body.requireInteraction,
          silent: body.silent,
        });

        console.log(`Scheduled notification sent: ${notificationId}`);
      } catch (error) {
        console.error(
          `Failed to send scheduled notification: ${notificationId}`,
          error,
        );
      } finally {
        scheduledNotifications.delete(notificationId);
      }
    }, delayMs);

    // Store the scheduled notification
    scheduledNotifications.set(notificationId, {
      request: body,
      timeoutId,
      scheduledFor: scheduledDate,
    });

    return NextResponse.json({
      success: true,
      notificationId,
      scheduledFor: scheduledDate.toISOString(),
      message: `Notification scheduled for ${scheduledDate.toISOString()}`,
    });
  } catch (error: any) {
    console.error('Error scheduling notification:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}

/**
 * GET: List all scheduled notifications
 */
export async function GET() {
  const scheduled = Array.from(scheduledNotifications.entries()).map(
    ([id, data]) => ({
      id,
      topic: data.request.topic,
      title: data.request.title,
      body: data.request.body,
      scheduledFor: data.scheduledFor.toISOString(),
    }),
  );

  return NextResponse.json({
    success: true,
    count: scheduled.length,
    notifications: scheduled,
  });
}

/**
 * DELETE: Cancel a scheduled notification
 */
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const notificationId = searchParams.get('id');

    if (!notificationId) {
      return NextResponse.json(
        { success: false, error: 'Notification ID is required' },
        { status: 400 },
      );
    }

    const scheduled = scheduledNotifications.get(notificationId);
    if (!scheduled) {
      return NextResponse.json(
        { success: false, error: 'Scheduled notification not found' },
        { status: 404 },
      );
    }

    // Cancel the timeout
    clearTimeout(scheduled.timeoutId);
    scheduledNotifications.delete(notificationId);

    return NextResponse.json({
      success: true,
      message: 'Scheduled notification cancelled',
    });
  } catch (error: any) {
    console.error('Error cancelling scheduled notification:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}
