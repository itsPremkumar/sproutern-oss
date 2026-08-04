import { NextRequest, NextResponse } from 'next/server';

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Embeddable Widget API
 *
 * Generates embeddable HTML snippets that other websites can use.
 * Each embed includes a "Powered by Sproutern" link = free backlinks!
 *
 * Endpoints:
 *   GET /api/embed?type=salary&role=software-engineer&city=bangalore
 *   GET /api/embed?type=quiz&topic=javascript
 *   GET /api/embed?type=typing-test
 * ═════════════════════════════════════════════════════════════════════════════
 */

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'salary';
  const role = searchParams.get('role') || 'software-engineer';
  const city = searchParams.get('city') || 'bangalore';
  const topic = searchParams.get('topic') || 'general';

  let html = '';

  switch (type) {
    case 'salary':
      html = generateSalaryWidget(role, city);
      break;
    case 'quiz':
      html = generateQuizWidget(topic);
      break;
    case 'typing-test':
      html = generateTypingTestWidget();
      break;
    default:
      html = generateSalaryWidget(role, city);
  }

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Frame-Options': 'ALLOWALL',
    },
  });
}

function generateSalaryWidget(role: string, city: string): string {
  const roleTitle = role
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const cityTitle = city.charAt(0).toUpperCase() + city.slice(1);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 280px; }
.widget { background: white; border-radius: 16px; padding: 24px; max-width: 400px; box-shadow: 0 20px 60px rgba(0,0,0,.15); }
.title { font-size: 16px; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
.salary-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
.salary-row:last-of-type { border-bottom: none; }
.level { font-size: 13px; color: #666; }
.amount { font-size: 14px; font-weight: 600; color: #16a34a; }
.cta { display: block; text-align: center; margin-top: 16px; padding: 12px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; transition: transform .2s; }
.cta:hover { transform: scale(1.02); }
.powered { text-align: center; margin-top: 12px; font-size: 11px; color: #999; }
.powered a { color: #667eea; text-decoration: none; font-weight: 600; }
</style>
</head>
<body>
<div class="widget">
  <div class="title">💰 ${roleTitle} Salary in ${cityTitle} (2026)</div>
  <div class="salary-row"><span class="level">🎓 Fresher (0-2 yrs)</span><span class="amount">₹4-8 LPA</span></div>
  <div class="salary-row"><span class="level">👨‍💻 Mid (2-5 yrs)</span><span class="amount">₹8-20 LPA</span></div>
  <div class="salary-row"><span class="level">🏆 Senior (5+ yrs)</span><span class="amount">₹20-50 LPA</span></div>
  <div class="salary-row"><span class="level">🚀 FAANG Level</span><span class="amount">₹35-1.5 Cr</span></div>
  <a class="cta" href="https://sproutern.dpdns.org/tools/salary-calculator?role=${role}&city=${city}" target="_blank">🔍 Get Exact Salary →</a>
  <div class="powered">Powered by <a href="https://sproutern.dpdns.org" target="_blank">Sproutern</a></div>
</div>
</body>
</html>`;
}

function generateQuizWidget(topic: string): string {
  const topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); min-height: 300px; }
.widget { background: white; border-radius: 16px; padding: 24px; max-width: 400px; box-shadow: 0 20px 60px rgba(0,0,0,.15); }
.title { font-size: 16px; font-weight: 700; color: #1a1a2e; margin-bottom: 16px; }
.question { font-size: 14px; color: #333; margin-bottom: 16px; line-height: 1.5; }
.options { display: flex; flex-direction: column; gap: 8px; }
.option { padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 10px; cursor: pointer; font-size: 13px; transition: all .2s; }
.option:hover { border-color: #f5576c; background: #fff5f5; }
.cta { display: block; text-align: center; margin-top: 16px; padding: 12px; background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; }
.powered { text-align: center; margin-top: 12px; font-size: 11px; color: #999; }
.powered a { color: #f5576c; text-decoration: none; font-weight: 600; }
</style>
</head>
<body>
<div class="widget">
  <div class="title">🧠 Quick ${topicTitle} Quiz</div>
  <div class="question">Test your skills! Take the full ${topicTitle} assessment on Sproutern.</div>
  <a class="cta" href="https://sproutern.dpdns.org/skill-test?topic=${topic}" target="_blank">🚀 Start Free Assessment →</a>
  <div class="powered">Powered by <a href="https://sproutern.dpdns.org" target="_blank">Sproutern</a></div>
</div>
</body>
</html>`;
}

function generateTypingTestWidget(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 16px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); min-height: 250px; }
.widget { background: white; border-radius: 16px; padding: 24px; max-width: 400px; box-shadow: 0 20px 60px rgba(0,0,0,.15); text-align: center; }
.title { font-size: 18px; font-weight: 700; color: #1a1a2e; margin-bottom: 8px; }
.subtitle { font-size: 13px; color: #666; margin-bottom: 20px; }
.stats { display: flex; justify-content: center; gap: 20px; margin-bottom: 20px; }
.stat { text-align: center; }
.stat-num { font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #4facfe, #00f2fe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-label { font-size: 11px; color: #999; text-transform: uppercase; }
.cta { display: block; padding: 14px; background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 15px; transition: transform .2s; }
.cta:hover { transform: scale(1.03); }
.powered { margin-top: 12px; font-size: 11px; color: #999; }
.powered a { color: #4facfe; text-decoration: none; font-weight: 600; }
</style>
</head>
<body>
<div class="widget">
  <div class="title">⌨️ Free Typing Speed Test</div>
  <div class="subtitle">Test your WPM in 60 seconds</div>
  <div class="stats">
    <div class="stat"><div class="stat-num">60</div><div class="stat-label">Seconds</div></div>
    <div class="stat"><div class="stat-num">WPM</div><div class="stat-label">Measured</div></div>
    <div class="stat"><div class="stat-num">Free</div><div class="stat-label">Always</div></div>
  </div>
  <a class="cta" href="https://sproutern.dpdns.org/tools/typingspeedtest" target="_blank">🚀 Start Typing Test →</a>
  <div class="powered">Powered by <a href="https://sproutern.dpdns.org" target="_blank">Sproutern</a></div>
</div>
</body>
</html>`;
}
