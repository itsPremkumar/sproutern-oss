import { db } from './firebase'; // Your Firebase Firestore instance
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';

// Import Firebase Admin SDK Auth module
import { getAuth as getAdminAuth } from 'firebase-admin/auth'; // Ensure firebase-admin is installed and initialized properly

interface OtpData {
  otp: string;
  expiresAt: Timestamp;
  verified: boolean;
  attempts?: number;
}

const OTP_COLLECTION = 'otps';
const MAX_OTP_ATTEMPTS = 5;

export async function storeOtp(
  email: string,
  otp: string,
  expiryMinutes: number,
): Promise<void> {
  const expiresAt = new Date(Date.now() + expiryMinutes * 60000);
  const otpDocRef = doc(db, OTP_COLLECTION, email);

  await setDoc(otpDocRef, {
    otp,
    expiresAt: Timestamp.fromDate(expiresAt),
    verified: false,
  });
  // NOTE: OTP is intentionally NOT logged (was previously logged in plaintext — leak risk).
  console.log(`[OTP Store] OTP stored for ${email} (value omitted from logs).`);
}

export async function verifyOtp(
  email: string,
  otp: string,
): Promise<{ success: boolean; message: string }> {
  const otpDocRef = doc(db, OTP_COLLECTION, email);
  const otpDocSnap = await getDoc(otpDocRef);

  if (!otpDocSnap.exists()) {
    return {
      success: false,
      message: 'OTP not found or has expired. Please request again.',
    };
  }

  const storedData = otpDocSnap.data() as OtpData;

  if (Timestamp.now().toMillis() > storedData.expiresAt.toMillis()) {
    await deleteDoc(otpDocRef);
    console.log(
      `[OTP Store] Expired OTP deleted during verification.`,
    );
    return {
      success: false,
      message: 'OTP has expired. Please request a new one.',
    };
  }

  if (storedData.verified) {
    return {
      success: false,
      message: 'This OTP has already been used for verification.',
    };
  }

  // Brute-force protection: after MAX_OTP_ATTEMPTS wrong entries the OTP is
  // destroyed and the requester must start over (CodeQL user-controlled bypass).
  const attempts = (storedData.attempts ?? 0) + 1;
  if (storedData.otp !== otp) {
    if (attempts >= MAX_OTP_ATTEMPTS) {
      await deleteDoc(otpDocRef);
      return {
        success: false,
        message: 'Too many incorrect attempts. Please request a new OTP.',
      };
    }
    await updateDoc(otpDocRef, { attempts });
    return { success: false, message: 'Invalid OTP. Please try again.' };
  }

  await updateDoc(otpDocRef, { verified: true });
  return { success: true, message: 'OTP verified successfully.' };
}

// import { db } from './firebase'; // Your Firebase Firestore instance
// import { doc, setDoc, getDoc, deleteDoc, Timestamp, updateDoc } from 'firebase/firestore';

// // Import Firebase Admin SDK Auth module
// import { getAuth as getAdminAuth } from 'firebase-admin/auth'; // Ensure firebase-admin is installed and initialized properly

// interface OtpData {
//   otp: string;
//   expiresAt: Timestamp;
//   verified: boolean;
// }

// const OTP_COLLECTION = 'otps';

// export async function storeOtp(email: string, otp: string, expiryMinutes: number): Promise<void> {
//   const expiresAt = new Date(Date.now() + expiryMinutes * 60000);
//   const otpDocRef = doc(db, OTP_COLLECTION, email);

//   await setDoc(otpDocRef, {
//     otp,
//     expiresAt: Timestamp.fromDate(expiresAt),
//     verified: false,
//   });
//   console.log(`[OTP Store] Stored OTP for ${email}: ${otp}, expires at ${expiresAt.toLocaleTimeString()}`);
// }

// export async function verifyOtp(email: string, otp: string): Promise<{ success: boolean; message: string }> {
//   const otpDocRef = doc(db, OTP_COLLECTION, email);
//   const otpDocSnap = await getDoc(otpDocRef);

//   if (!otpDocSnap.exists()) {
//     return { success: false, message: 'OTP not found or has expired. Please request again.' };
//   }

//   const storedData = otpDocSnap.data() as OtpData;

//   if (Timestamp.now().toMillis() > storedData.expiresAt.toMillis()) {
//     await deleteDoc(otpDocRef);
//     console.log(`[OTP Store] Expired OTP for ${email} deleted during verification.`);
//     return { success: false, message: 'OTP has expired. Please request a new one.' };
//   }

//   if (storedData.verified) {
//     return { success: false, message: 'This OTP has already been used for verification.' };
//   }

//   if (storedData.otp !== otp) {
//     return { success: false, message: 'Invalid OTP. Please try again.' };
//   }

//   await updateDoc(otpDocRef, { verified: true });
//   console.log(`[OTP Store] OTP verified for ${email}. Marked as verified.`);
//   return { success: true, message: 'OTP verified successfully.' };
// }

// export async function resetPasswordWithOtp(email: string, otp: string, newPassword: string): Promise<{ success: boolean; message: string }> {
//   const otpDocRef = doc(db, OTP_COLLECTION, email);
//   const otpDocSnap = await getDoc(otpDocRef);

//   if (!otpDocSnap.exists()) {
//     return { success: false, message: 'OTP not found. Please verify your email first.' };
//   }

//   const storedData = otpDocSnap.data() as OtpData;

//   if (Timestamp.now().toMillis() > storedData.expiresAt.toMillis()) {
//     await deleteDoc(otpDocRef);
//     console.log(`[OTP Store] Expired OTP for ${email} deleted during password reset attempt.`);
//     return { success: false, message: 'OTP has expired. Please request a new one.' };
//   }

//   if (!storedData.verified) {
//     return { success: false, message: 'OTP not pre-verified. Please verify your OTP first.' };
//   }

//   if (storedData.otp !== otp) {
//     return { success: false, message: 'Invalid OTP provided for reset. Please ensure correct OTP.' };
//   }

//   // --- ACTUAL PASSWORD RESET LOGIC (USING FIREBASE AUTH ADMIN SDK) ---
//   try {
//     const adminAuth = getAdminAuth(); // Get the Firebase Admin Auth instance
//     const userRecord = await adminAuth.getUserByEmail(email); // Get user by email

//     // Update the user's password
//     await adminAuth.updateUser(userRecord.uid, { password: newPassword });
//     console.log(`[Firebase Auth] Password updated for user: ${email}`);

//   } catch (authError: any) {
//     console.error("Firebase Auth password update failed:", authError);
//     // You might want to delete the OTP even on a password update failure to prevent retries with same OTP
//     await deleteDoc(otpDocRef);
//     return { success: false, message: `Failed to update password: ${authError.message}` };
//   }
//   // --- END ACTUAL PASSWORD RESET LOGIC ---

//   // Finally, delete the OTP document now that the password reset is complete
//   await deleteDoc(otpDocRef);
//   console.log(`[OTP Store] OTP for ${email} deleted after successful password reset.`);

//   return { success: true, message: 'Password has been successfully reset.' };
// }
