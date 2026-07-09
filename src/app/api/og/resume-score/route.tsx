import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic OpenGraph Image Generator — Pillar 4
//
// Uses Vercel's FREE @vercel/og library (built into Next.js) to dynamically
// create beautiful, shareable social media images.
//
// Usage:
//   /api/og/resume-score?score=92&role=SDE&company=Google
//   /api/og/resume-score?company=TCS&role=System%20Engineer
//
// 100% FREE: No external image APIs. Uses Edge Runtime.
// ─────────────────────────────────────────────────────────────────────────────

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // ── Read parameters ──────────────────────────────────────────────────────
  const score = searchParams.get('score') || '85';
  const role = searchParams.get('role') || 'Software Engineer';
  const company = searchParams.get('company') || 'Top MNC';
  const name = searchParams.get('name') || '';

  const scoreNum = Math.min(100, Math.max(0, parseInt(score, 10)));

  // ── Dynamic color based on score ─────────────────────────────────────────
  const scoreColor =
    scoreNum >= 90
      ? '#10b981' // green
      : scoreNum >= 70
        ? '#f59e0b' // amber
        : scoreNum >= 50
          ? '#f97316' // orange
          : '#ef4444'; // red

  const scoreEmoji =
    scoreNum >= 90
      ? '🔥'
      : scoreNum >= 70
        ? '✨'
        : scoreNum >= 50
          ? '💪'
          : '📈';

  const scoreLabel =
    scoreNum >= 90
      ? 'Excellent'
      : scoreNum >= 70
        ? 'Good'
        : scoreNum >= 50
          ? 'Needs Improvement'
          : 'Weak';

  // ── Generate Image ───────────────────────────────────────────────────────
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-100px',
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
        }}
      />

      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#a78bfa',
            letterSpacing: '-0.5px',
            display: 'flex',
          }}
        >
          ⚡ Sproutern AI Resume Score
        </div>
      </div>

      {/* Score Circle */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `6px solid ${scoreColor}`,
          background: 'rgba(255,255,255,0.03)',
          marginBottom: '20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            color: scoreColor,
            lineHeight: 1,
            display: 'flex',
          }}
        >
          {scoreNum}
        </div>
        <div
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '4px',
            display: 'flex',
          }}
        >
          / 100
        </div>
      </div>

      {/* Score Label */}
      <div
        style={{
          fontSize: '24px',
          fontWeight: 700,
          color: scoreColor,
          marginBottom: '8px',
          display: 'flex',
        }}
      >
        {scoreEmoji} {scoreLabel}
      </div>

      {/* Role & Company */}
      <div
        style={{
          fontSize: '20px',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '6px',
          display: 'flex',
        }}
      >
        Optimized for: {role} at {company}
      </div>

      {/* Name (if provided) */}
      {name && (
        <div
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          Analyzed for {name}
        </div>
      )}

      {/* CTA */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '20px',
          padding: '12px 28px',
          background: 'linear-gradient(135deg, #7c3aed, #6366f1)',
          borderRadius: '50px',
          fontSize: '18px',
          fontWeight: 700,
          color: 'white',
        }}
      >
        Check Your Score Free → sproutern.com
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.3)',
          display: 'flex',
        }}
      >
        Powered by AI • Free for Students • sproutern.com
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
