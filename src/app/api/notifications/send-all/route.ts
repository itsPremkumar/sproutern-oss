/**
 * API Route: Send Notification to ALL Users
 * POST /api/notifications/send-all
 *
 * Fetches all FCM tokens from Firestore and sends notification to all users
 */

import { NextResponse } from 'next/server';
import * as admin from 'firebase-admin';
import { sendToMultipleDevices } from '@/lib/firebase-admin-messaging';
import { getNotificationTemplate } from '@/lib/notification-templates';
import type {
  NotificationPayload,
  NotificationTemplate,
  NotificationTemplateData,
} from '@/types/notification-types';

// Ensure Firebase Admin is initialized
if (!admin.apps.length) {
  try {
    const serviceAccountKey = process.env.SERVICE_ACCOUNT_KEY;

    if (serviceAccountKey) {
      const decodedKey = Buffer.from(serviceAccountKey, 'base64').toString(
        'utf-8',
      );
      const serviceAccount = JSON.parse(decodedKey);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } else {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    }
  } catch (error: any) {
    console.error('Firebase Admin initialization error:', error.message);
  }
}

const db = admin.apps.length > 0 ? admin.firestore() : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Fetch all FCM tokens from Firestore
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'Database not initialized' },
        { status: 500 },
      );
    }

    const tokensSnapshot = await db.collection('fcmTokens').get();

    if (tokensSnapshot.empty) {
      return NextResponse.json(
        { success: false, error: 'No FCM tokens found in database' },
        { status: 404 },
      );
    }

    // Extract all tokens
    const tokens: string[] = [];
    tokensSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.token) {
        tokens.push(data.token);
      }
    });

    if (tokens.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No valid FCM tokens found' },
        { status: 404 },
      );
    }

    // Build notification payload
    let payload: NotificationPayload;

    if (body.template) {
      // Use template
      payload = getNotificationTemplate(
        body.template as NotificationTemplate,
        body.templateData as NotificationTemplateData,
      );
    } else {
      // Use custom payload
      if (!body.title || !body.body) {
        return NextResponse.json(
          { success: false, error: 'Title and body are required' },
          { status: 400 },
        );
      }

      payload = {
        title: body.title,
        body: body.body,
        icon: body.icon,
        image: body.image,
        link: body.link,
        tag: body.tag,
        data: body.data,
        requireInteraction: body.requireInteraction,
        silent: body.silent,
        badge: body.badge,
      };
    }

    // Send to all tokens in batches of 500
    const batchSize = 500;
    let totalSuccess = 0;
    let totalFailure = 0;
    const allFailedTokens: string[] = [];

    for (let i = 0; i < tokens.length; i += batchSize) {
      const batch = tokens.slice(i, i + batchSize);
      const result = await sendToMultipleDevices(batch, payload);

      totalSuccess += result.successCount;
      totalFailure += result.failureCount;

      if (result.failedTokens) {
        allFailedTokens.push(...result.failedTokens);
      }
    }

    // Optionally clean up invalid tokens
    if (allFailedTokens.length > 0) {
      console.log(`Found ${allFailedTokens.length} invalid tokens to clean up`);
      // You could delete these from Firestore here
    }

    return NextResponse.json({
      success: totalSuccess > 0,
      totalUsers: tokens.length,
      successCount: totalSuccess,
      failureCount: totalFailure,
      message: `Notification sent to ${totalSuccess}/${tokens.length} users`,
      failedTokensCount: allFailedTokens.length,
    });
  } catch (error: any) {
    console.error('Error in send-all notification API:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}
