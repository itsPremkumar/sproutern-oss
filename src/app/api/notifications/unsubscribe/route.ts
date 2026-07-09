/**
 * API Route: Unsubscribe Device from Topic
 * POST /api/notifications/unsubscribe
 */

import { NextResponse } from 'next/server';
import { unsubscribeFromTopic } from '@/lib/firebase-admin-messaging';
import type { TopicSubscriptionRequest } from '@/types/notification-types';

export async function POST(request: Request) {
  try {
    const { token, topic } = (await request.json()) as TopicSubscriptionRequest;

    // Validate required fields
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'FCM token is required' },
        { status: 400 },
      );
    }

    if (!topic) {
      return NextResponse.json(
        { success: false, error: 'Topic name is required' },
        { status: 400 },
      );
    }

    // Unsubscribe from topic
    const result = await unsubscribeFromTopic(token, topic);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `Successfully unsubscribed from topic: ${topic}`,
        successCount: result.successCount,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: result.error || 'Failed to unsubscribe from topic',
        failureCount: result.failureCount,
      },
      { status: 500 },
    );
  } catch (error: any) {
    console.error('Error in unsubscribe API:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}
