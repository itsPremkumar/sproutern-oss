// src/app/api/auth/verify-otp/route.ts
import { NextResponse } from 'next/server';
import { verifyOtp } from '@/lib/otp';

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, message: 'Email and OTP are required' },
        { status: 400 },
      );
    }

    const result = await verifyOtp(email, otp);

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      // Use the message from verifyOtp, which could be 'Invalid OTP', 'OTP not found', etc.
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { success: false, message: 'An internal server error occurred.' },
      { status: 500 },
    );
  }
}
