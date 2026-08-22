import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { adminDb } from '@/lib/firebase-admin';

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

export async function POST(request: Request) {
  try {
    const {
      internshipId,
      studentName,
      studentEmail,
      jobTitle,
      companyName,
      startupUserId,
    } = await request.json();

    if (
      !internshipId ||
      !studentName ||
      !studentEmail ||
      !jobTitle ||
      !companyName ||
      !startupUserId
    ) {
      return NextResponse.json(
        { success: false, message: 'Missing required information' },
        { status: 400 },
      );
    }

    // Ensure adminDb is initialized
    if (!adminDb) {
      console.error('Firebase Admin not initialized.');
      return NextResponse.json(
        { success: false, message: 'Server error: Database not initialized' },
        { status: 500 },
      );
    }

    // Ensure email service is configured
    const mailTransporter = getTransporter();
    if (!mailTransporter) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured.' },
        { status: 503 },
      );
    }

    // Fetch startup's email from Firestore
    const startupDoc = await adminDb
      .collection('users')
      .doc(startupUserId)
      .get();
    if (!startupDoc.exists) {
      console.error('Startup user not found for the provided ID.');
      return NextResponse.json(
        { success: false, message: 'Startup not found' },
        { status: 404 },
      );
    }
    const startupEmail = startupDoc.data()?.email;

    if (!startupEmail) {
      console.error('Startup user record has no email address.');
      return NextResponse.json(
        { success: false, message: 'Startup email not found' },
        { status: 404 },
      );
    }

    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME || 'Sproutern'}" <${process.env.MAIL_USER}>`,
      to: startupEmail,
      subject: `New Application for Your Internship: ${jobTitle} at ${companyName}`,
      html: `
                <p>Dear Startup,</p>
                <p>Good news! A student has applied for your internship posting:</p>
                <p><strong>Internship Title:</strong> ${jobTitle}</p>
                <p><strong>Company:</strong> ${companyName}</p>
                <p><strong>Applicant Name:</strong> ${studentName}</p>
                <p><strong>Applicant Email:</strong> ${studentEmail}</p>
                <p>Please log in to your dashboard to review their application and profile.</p>
                <p>Best regards,</p>
                <p>The Sproutern Team</p>
            `,
    };

    await mailTransporter.sendMail(mailOptions);

    console.log(
      `Application notification sent for internship ${internshipId}.`,
    );
    return NextResponse.json({
      success: true,
      message: 'Notification sent successfully.',
    });
  } catch (error) {
    console.error('Error sending application notification:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send notification.' },
      { status: 500 },
    );
  }
}
