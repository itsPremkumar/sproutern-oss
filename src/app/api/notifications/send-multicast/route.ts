/**
 * API Route: Send Notification to Multiple Devices
 * POST /api/notifications/send-multicast
 */

import { NextResponse } from 'next/server';
import { sendToMultipleDevices } from '@/lib/firebase-admin-messaging';
import { getNotificationTemplate } from '@/lib/notification-templates';
import type {
  SendMulticastRequest,
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
    const { tokens, title, body: messageBody } = body as SendMulticastRequest;

    if (!tokens || !Array.isArray(tokens) || tokens.length === 0) {
      return NextResponse.json(
        { success: false, error: 'At least one FCM token is required' },
        { status: 400 },
      );
    }

    if (tokens.length > 500) {
      return NextResponse.json(
        { success: false, error: 'Maximum 500 tokens allowed per request' },
        { status: 400 },
      );
    }

    if (!title || !messageBody) {
      return NextResponse.json(
        { success: false, error: 'Title and body are required' },
        { status: 400 },
      );
    }

    // Send notifications
    const result = await sendToMultipleDevices(tokens, {
      title,
      body: messageBody,
      icon: body.icon,
      image: body.image,
      link: body.link,
      tag: body.tag,
      data: body.data,
      requireInteraction: body.requireInteraction,
      silent: body.silent,
      badge: body.badge,
    });

    return NextResponse.json({
      success: result.success,
      successCount: result.successCount,
      failureCount: result.failureCount,
      failedTokens: result.failedTokens,
      message: `Sent to ${result.successCount}/${tokens.length} devices`,
    });
  } catch (error: any) {
    console.error('Error in multicast notification API:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}

/**
 * Handle template-based multicast notifications
 */
async function handleTemplateNotification(body: {
  tokens: string[];
  template: NotificationTemplate;
  templateData?: NotificationTemplateData;
}) {
  const { tokens, template, templateData } = body;

  if (!tokens || !Array.isArray(tokens) || tokens.length === 0) {
    return NextResponse.json(
      { success: false, error: 'At least one FCM token is required' },
      { status: 400 },
    );
  }

  if (tokens.length > 500) {
    return NextResponse.json(
      { success: false, error: 'Maximum 500 tokens allowed per request' },
      { status: 400 },
    );
  }

  // Get template payload
  const payload = getNotificationTemplate(template, templateData);

  // Send notifications
  const result = await sendToMultipleDevices(tokens, payload);

  return NextResponse.json({
    success: result.success,
    successCount: result.successCount,
    failureCount: result.failureCount,
    failedTokens: result.failedTokens,
    message: `${template} notification sent to ${result.successCount}/${tokens.length} devices`,
  });
}
