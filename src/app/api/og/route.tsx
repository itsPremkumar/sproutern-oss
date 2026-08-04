import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

// Using Node.js runtime for compatibility

/**
 * Dynamic Open Graph Image Generator
 * Creates professional OG images for social media sharing
 *
 * Usage: /api/og?title=Your+Title&description=Your+Description&type=blog
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters with defaults
    const title = searchParams.get('title') || 'Sproutern';
    const description =
      searchParams.get('description') ||
      'Launch Your Career with Startup Internships';
    const type = searchParams.get('type') || 'default'; // blog, tool, interview, default
    const category = searchParams.get('category') || '';

    // Color schemes based on type
    const colorSchemes = {
      blog: { primary: '#6366f1', secondary: '#818cf8', accent: '#c7d2fe' },
      tool: { primary: '#10b981', secondary: '#34d399', accent: '#a7f3d0' },
      interview: {
        primary: '#f59e0b',
        secondary: '#fbbf24',
        accent: '#fde68a',
      },
      default: { primary: '#6366f1', secondary: '#818cf8', accent: '#c7d2fe' },
    };

    const colors =
      colorSchemes[type as keyof typeof colorSchemes] || colorSchemes.default;

    return new ImageResponse(
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0f172a',
          padding: '60px',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
          }}
        />

        {/* Category badge */}
        {category && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                background: colors.primary,
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '18px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {category}
            </span>
          </div>
        )}

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize:
                title.length > 60
                  ? '48px'
                  : title.length > 40
                    ? '56px'
                    : '64px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              margin: 0,
              marginBottom: '24px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              style={{
                fontSize: '24px',
                color: '#94a3b8',
                lineHeight: 1.4,
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Footer with branding */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo and brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}
              >
                S
              </span>
            </div>
            <span style={{ color: 'white', fontSize: '28px', fontWeight: 700 }}>
              Sproutern
            </span>
          </div>

          {/* URL */}
          <span style={{ color: '#64748b', fontSize: '20px' }}>
            sproutern.dpdns.org
          </span>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${colors.primary}20, transparent)`,
          }}
        />
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
