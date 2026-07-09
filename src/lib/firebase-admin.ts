import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
    console.log('Firebase Admin SDK initialized successfully.');
  } catch (error: any) {
    console.error('Firebase Admin SDK initialization error:', error.message);
    console.error(
      'Ensure GOOGLE_APPLICATION_CREDENTIALS is set in .env.local for local development.',
    );
  }
}

const adminDb = admin.apps.length > 0 ? admin.firestore() : null;
const adminAuth = admin.apps.length > 0 ? admin.auth() : null;
const adminStorage = admin.apps.length > 0 ? admin.storage() : null;

export { adminDb, adminAuth, adminStorage };
