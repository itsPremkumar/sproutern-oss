/**
 * API Route: Subscribe Device to Topic
 * POST /api/notifications/subscribe
 */

import { NextResponse } from 'next/server';
import { subscribeToTopic } from '@/lib/firebase-admin-messaging';
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

    // Subscribe to topic
    const result = await subscribeToTopic(token, topic);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `Successfully subscribed to topic: ${topic}`,
        successCount: result.successCount,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: result.error || 'Failed to subscribe to topic',
        failureCount: result.failureCount,
      },
      { status: 500 },
    );
  } catch (error: any) {
    console.error('Error in subscribe API:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}
