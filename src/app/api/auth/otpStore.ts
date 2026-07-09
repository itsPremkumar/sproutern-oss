// src/app/api/auth/otpStore.ts
export interface OTPRecord {
  otp: string;
  expiresAt: number;
}
export const otpStore = new Map<string, OTPRecord>();
