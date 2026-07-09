/**
 * API Route: Send Notification to Topic Subscribers
 * POST /api/notifications/send-topic
 */

import { NextResponse } from 'next/server';
import { sendToTopic } from '@/lib/firebase-admin-messaging';
import { getNotificationTemplate } from '@/lib/notification-templates';
import type {
  SendTopicRequest,
  NotificationTemplate,
  NotificationTemplateData,
} from '@/types/notification-types';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if using template
    if (body.template) {
      return handleTemplateNotification(body);
    }

    // Validate required fields
    const { topic, title, body: messageBody } = body as SendTopicRequest;

    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic name is required' },
        { status: 400 },
      );
    }

    if (!title || !messageBody) {
      return NextResponse.json(
        { success: false, error: 'Title and body are required' },
        { status: 400 },
      );
    }

    // Send notification to topic
    const result = await sendToTopic(topic, {
      title,
      body: messageBody,
      icon: body.icon,
      image: body.image,
      link: body.link,
      tag: body.tag,
      data: {
        ...body.data,
        // Include channel for service worker to categorize
        channel: body.channel || 'updates',
        // Stringify actions if provided
        actions: body.actions ? JSON.stringify(body.actions) : undefined,
        // Include priority
        priority: body.priority || 'default',
      },
      requireInteraction: body.requireInteraction,
      silent: body.silent,
      badge: body.badge,
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        messageId: result.messageId,
        message: `Notification sent to topic: ${topic}`,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: result.error,
        errorCode: result.errorCode,
      },
      { status: 500 },
    );
  } catch (error: any) {
    console.error('Error in topic notification API:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}

/**
 * Handle template-based topic notifications
 */
async function handleTemplateNotification(body: {
  topic: string;
  template: NotificationTemplate;
  templateData?: NotificationTemplateData;
}) {
  const { topic, template, templateData } = body;

  if (!topic) {
    return NextResponse.json(
      { success: false, error: 'Topic name is required' },
      { status: 400 },
    );
  }

  // Get template payload
  const payload = getNotificationTemplate(template, templateData);

  // Send notification
  const result = await sendToTopic(topic, payload);

  if (result.success) {
    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: `${template} notification sent to topic: ${topic}`,
    });
  }

  return NextResponse.json(
    {
      success: false,
      error: result.error,
      errorCode: result.errorCode,
    },
    { status: 500 },
  );
}
