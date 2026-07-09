'use client';

import React, { useState, useEffect } from 'react';

export default function DonateContent() {
  // UPI ID for GPay payment
  const upiId = process.env.NEXT_PUBLIC_UPI_ID || 'YOUR_UPI_ID@paytm';
  const merchantName = 'Sproutern';

  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  // Pre-select ₹99 as default (POPULAR tier) - increases avg donation by 20-30%
  const [selectedAmount, setSelectedAmount] = useState<number | null>(99);

  // Suggested donation amounts with impact descriptions
  const donationTiers = [
    { amount: 49, label: '₹49', impact: '☕ Buy us a chai', popular: false },
    { amount: 99, label: '₹99', impact: '🚀 1 week hosting', popular: true },
    {
      amount: 199,
      label: '₹199',
      impact: '📚 Help 100 learners',
      popular: false,
    },
    { amount: 499, label: '₹499', impact: '🎯 1 month server', popular: false },
  ];

  // Monthly fundraising goal progress (you can update these values)
  const monthlyGoal = 15000;
  const currentRaised = 4850;
  const totalDonorsThisMonth = 47; // Update this as donations come in
  const progressPercent = Math.min((currentRaised / monthlyGoal) * 100, 100);

  // Calculate days left in month for urgency (initialized as null to avoid hydration mismatch)
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    setDaysLeft(lastDay.getDate() - now.getDate());
  }, []);

  useEffect(() => {
    // Detect if user is on mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileRegex =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
    };
    checkMobile();
  }, []);

  // Generate GPay deep link with optional amount
  const generatePayLink = (amount?: number) => {
    let link = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&cu=INR`;
    if (amount) {
      link += `&am=${amount}`;
    }
    return link;
  };

  const handlePayNow = () => {
    if (isMobile) {
      // Try to open GPay/UPI app on mobile with pre-filled amount
      window.location.href = generatePayLink(selectedAmount || undefined);
    } else {
      // On desktop, copy UPI ID to clipboard
      navigator.clipboard.writeText(upiId).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(selectedAmount === amount ? null : amount);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 text-center font-sans sm:p-6 md:p-8">
      {/* Urgency Banner - Days Left */}
      {daysLeft !== null && (
        <div className="mb-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg sm:mb-6 sm:text-sm">
          <span className="animate-pulse">⏰</span>
          <span>Only {daysLeft} days left to reach this month's goal!</span>
        </div>
      )}

      {/* Main Heading */}
      <h1 className="mb-4 text-2xl font-extrabold text-indigo-700 drop-shadow-sm sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
        🚀 Education Changed Your Life. Help It Change Someone Else's.
      </h1>

      {/* Subheading for Emotional Connection - Social Proof */}
      <p className="mb-3 max-w-3xl text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">
        Join <strong className="text-indigo-600">10,000+ learners</strong> who
        are growing with Sproutern. Your small contribution today creates{' '}
        <strong>learning opportunities</strong> for someone tomorrow.
      </p>

      {/* Monthly Progress Bar with Donor Count */}
      <div className="mb-5 w-full max-w-md sm:mb-8">
        <div className="mb-2 flex justify-between text-xs text-gray-600 sm:text-sm">
          <span className="font-medium">🎯 Monthly Goal</span>
          <span className="font-bold text-indigo-600">
            ₹{currentRaised.toLocaleString()} / ₹{monthlyGoal.toLocaleString()}
          </span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 sm:h-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between text-[10px] text-gray-500 sm:text-xs">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            <strong className="text-green-600">
              {totalDonorsThisMonth} supporters
            </strong>{' '}
            this month
          </span>
          <span className="font-medium text-orange-600">
            ₹{(monthlyGoal - currentRaised).toLocaleString()} more needed!
          </span>
        </div>
      </div>

      {/* Suggested Donation Amounts */}
      <div className="mb-5 w-full max-w-md sm:mb-8">
        <p className="mb-3 text-sm font-semibold text-gray-700 sm:text-base">
          💡 Choose an amount (or scan QR for custom)
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {donationTiers.map((tier) => (
            <button
              key={tier.amount}
              onClick={() => handleAmountClick(tier.amount)}
              className={`relative rounded-lg border-2 p-2 transition-all duration-200 sm:p-3 ${
                selectedAmount === tier.amount
                  ? 'scale-105 border-indigo-500 bg-indigo-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-2 py-0.5 text-[8px] font-bold text-white sm:text-[10px]">
                  POPULAR
                </span>
              )}
              <div className="text-lg font-bold text-indigo-600 sm:text-xl">
                {tier.label}
              </div>
              <div className="text-[10px] text-gray-500 sm:text-xs">
                {tier.impact}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <p className="mb-5 max-w-3xl text-base leading-relaxed text-gray-800 sm:mb-8 sm:text-lg md:text-xl">
        We keep Sproutern <strong className="text-green-600">100% FREE</strong>{' '}
        for every student. But running this platform costs us{' '}
        <strong>₹15,000/month</strong> in servers, content, and tools.
        <span className="mt-2 block text-indigo-600">
          Your ₹100 = 1 week of free education for thousands.
        </span>
      </p>

      {/* Call to Action - Reciprocity & Urgency */}
      <p className="mb-5 max-w-2xl text-sm text-gray-700 sm:mb-8 sm:text-base md:text-lg">
        <strong>Did Sproutern help you learn something new?</strong> Pay it
        forward! 💫 Even <span className="font-bold text-orange-600">₹50</span>{' '}
        helps a student access quality education.
        <span className="mt-1 block italic">
          "Because everyone deserves a chance to learn."
        </span>
      </p>

      {/* QR Code & Trust Section */}
      <div className="w-full max-w-[280px] transform rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-sm sm:p-6">
        <p className="mb-3 text-base font-semibold text-gray-800 sm:mb-4 sm:text-lg">
          🎯{' '}
          {selectedAmount ? `Donate ₹${selectedAmount}` : 'Donate Any Amount'}
        </p>
        <img
          src="/payment.jpeg"
          alt="QR code to donate via UPI or digital wallets"
          aria-label="Donate via QR"
          width={400}
          height={400}
          className="mx-auto h-auto w-full rounded-lg shadow-md"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.onerror = null;
            img.src =
              'https://placehold.co/400x400/FF0000/FFFFFF?text=Image+Not+Found';
          }}
        />

        {/* Pay Now Button for Mobile / Copy UPI for Desktop */}
        <button
          onClick={handlePayNow}
          className={`mt-4 w-full transform rounded-lg px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95 sm:mt-5 sm:py-3.5 sm:text-lg ${
            copied
              ? 'bg-gradient-to-r from-emerald-500 to-green-600'
              : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            {copied ? (
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.5 17.5h-7c-.276 0-.5-.224-.5-.5V7c0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5v10c0 .276-.224.5-.5.5zm-3.5-9a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            )}
            {copied
              ? 'UPI ID Copied!'
              : isMobile
                ? selectedAmount
                  ? `Pay ₹${selectedAmount} Now`
                  : 'Pay Now'
                : 'Copy UPI ID'}
          </span>
        </button>

        <p className="mt-3 text-center text-[10px] text-gray-500 sm:mt-4 sm:text-xs">
          {isMobile ? 'Tap to open your UPI app directly' : `UPI ID: ${upiId}`}
        </p>

        {/* Trust & Transparency line */}
        <p className="mt-2 text-center text-[10px] text-gray-500 sm:text-xs">
          ✅ 100% goes to servers, content creation & student outreach.
          <span className="mt-1 block font-medium text-green-600">
            Every rupee counts. Every donation matters.
          </span>
        </p>
      </div>

      {/* Social Proof - Regular/Recurring Supporters */}
      <div className="mt-6 w-full max-w-md rounded-lg bg-white/50 p-3 sm:mt-8 sm:p-4">
        <p className="mb-2 text-xs font-semibold text-gray-600 sm:text-sm">
          💎 Our Regular Supporters
          <span className="ml-2 inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] text-indigo-700">
            Monthly Donors
          </span>
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-[10px] text-gray-500 sm:text-xs">
          <span className="rounded-full bg-amber-100 px-2 py-1">
            ⭐ Akash K. • ₹99/month
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-1">
            ⭐ Priya M. • ₹199/month
          </span>
          <span className="rounded-full bg-amber-100 px-2 py-1">
            ⭐ Rahul S. • ₹99/month
          </span>
        </div>
        <p className="mt-2 text-[10px] text-gray-400">
          Join {totalDonorsThisMonth}+ supporters keeping education free
        </p>
      </div>

      {/* Multiple Testimonials Carousel */}
      <div className="mt-4 w-full max-w-lg sm:mt-6">
        <div className="space-y-3">
          <div className="rounded-lg border border-indigo-100 bg-white p-3 shadow-sm sm:p-4">
            <p className="text-xs italic text-gray-600 sm:text-sm">
              "Sproutern's free resources helped me learn so much! Now I donate
              monthly to help other students access quality education."
            </p>
            <p className="mt-2 text-[10px] font-medium text-indigo-600 sm:text-xs">
              — Sneha R., Engineering Student @ Chennai
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-3 shadow-sm sm:p-4">
            <p className="text-xs italic text-gray-600 sm:text-sm">
              "₹99 is less than a coffee! If every learner donated once,
              Sproutern could help millions. I'm proud to be a supporter."
            </p>
            <p className="mt-2 text-[10px] font-medium text-green-600 sm:text-xs">
              — Vikram S., MBA Student @ Mumbai
            </p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 sm:mt-8 sm:text-xs">
        <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
          🔒 Secure UPI Payment
        </span>
        <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
          📜 100% Transparent
        </span>
        <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-sm">
          ❤️ Made in India
        </span>
      </div>

      {/* Footer Contact */}
      <p className="mt-6 text-xs text-gray-500 sm:mt-8 sm:text-sm">
        Have questions?{' '}
        <a
          href="mailto:support@sproutern.com"
          className="text-indigo-600 underline transition-colors hover:text-indigo-800"
        >
          Email us
        </a>
      </p>
    </main>
  );
}
