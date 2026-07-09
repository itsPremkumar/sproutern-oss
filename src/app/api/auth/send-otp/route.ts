// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { storeOtp } from '@/lib/otp';

// // This is a placeholder for your actual transporter configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
//     tls: {
//         rejectUnauthorized: false,
//     },
// });

// function generateOTP(): string {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// }

// export async function POST(request: Request) {
//     try {
//         const { email } = await request.json();

//         if (!email) {
//             return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
//         }

//         const otp = generateOTP();
//         const expiryMinutes = Number(process.env.OTP_EXPIRY_MINUTES) || 5;

//         await storeOtp(email, otp, expiryMinutes);

//         await transporter.sendMail({
//             from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_USER}>`,
//             to: email,
//             subject: '🔐 Your OTP Code',
//             text: `Your OTP is: ${otp}. It expires in ${expiryMinutes} minutes.`,
//         });

//         console.log(`✅ OTP sent to ${email}: ${otp}`);
//         return NextResponse.json({ success: true, message: 'OTP sent successfully.' });

//     } catch (error) {
//         console.error('Error sending OTP:', error);
//         return NextResponse.json({ success: false, message: 'Failed to send OTP.' }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { storeOtp } from '@/lib/otp';

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    return null;
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  return transporter;
}

// Generate a 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 },
      );
    }

    const otp = generateOTP();
    const expiryMinutes = Number(process.env.OTP_EXPIRY_MINUTES) || 5;

    // Store OTP in your DB/cache
    await storeOtp(email, otp, expiryMinutes);

    // HTML email template
    const htmlContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4CAF50;">Welcome to Sproutern! 🎉</h2>
                <p>We’re excited to have you on board.</p>
                <p>To continue, please use the One-Time Password (OTP) below to verify your email address:</p>
                <div style="background-color: #f4f4f4; padding: 10px; border-radius: 6px; display: inline-block; font-size: 20px; font-weight: bold;">
                    ${otp}
                </div>
                <p>This OTP will expire in <strong>${expiryMinutes} minutes</strong>.</p>
                <p>If you did not request this, please ignore this email.</p>
                <br/>
                <p>Best regards,<br/>The Sproutern Team</p>
            </div>
        `;

    // Send email
    const mailTransporter = getTransporter();
    if (!mailTransporter) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured.' },
        { status: 503 },
      );
    }

    await mailTransporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Sproutern'}" <${process.env.MAIL_USER}>`,
      to: email,
      subject: 'Welcome to Sproutern - Your OTP Code',
      text: `Welcome to Sproutern!\n\nYour OTP is: ${otp}\nIt expires in ${expiryMinutes} minutes.\n\nIf you did not request this, please ignore this email.`,
      html: htmlContent,
    });

    console.log(`OTP sent to ${email}: ${otp}`);
    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully.',
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send OTP.' },
      { status: 500 },
    );
  }
}
