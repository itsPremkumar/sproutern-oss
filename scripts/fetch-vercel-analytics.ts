/**
 * Fetch Vercel Web Analytics summary for sproutern-oss.
 *
 * Usage:
 *   VERCEL_TOKEN=xxx tsx scripts/fetch-vercel-analytics.ts
 *
 * The token must be a Vercel personal access token with project read scope.
 * Add it as a secret / env var to the growth-report cron so the automated
 * Monday report can include real website visitor numbers alongside the
 * GitHub traffic stats already collected via `gh`.
 *
 * NOTE: The Vercel REST API for Web Analytics is not publicly documented with
 * a stable path across versions. This script targets the v1 analytics
 * timeseries endpoint; if Vercel changes it, update the URL below.
 */
const PROJECT_ID = 'prj_lOGMReMz2aZupnnpvS8tPbDv5iSz';
const TEAM_ID = 'team_VCIL8VdItVp2NA60DHJY3zAf';

async function fetchAnalytics(days = 7) {
  const token = process.env.VERCEL_TOKEN;
  if (!token) {
    console.error('VERCEL_TOKEN env var not set. Get one at vercel.com/account/tokens');
    process.exit(1);
  }

  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - days);

  const fmt = (d: Date) => d.toISOString().split('.')[0] + 'Z';

  const url =
    `https://api.vercel.com/v1/web/analytics/${PROJECT_ID}/timeseries` +
    `?teamId=${TEAM_ID}` +
    `&from=${fmt(from)}&to=${fmt(to)}&unit=day`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Vercel API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
  return data;
}

fetchAnalytics(7).catch((e) => {
  console.error('Failed to fetch analytics:', e);
  process.exit(1);
});
