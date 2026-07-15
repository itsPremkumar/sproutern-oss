# Sproutern Daily Autonomous Improvement Loop

End-to-end, free-plan-only, closed-loop system that improves `sproutern` every day
using Vercel signals as feedback. Documented & verified 2026-07-14.

## What it does (one change/day)
```
MEASURE  -> vercel metrics (pageviews 30d, LCP/CLS/FCP/TTFB/INP 7d) + vercel ls + vercel logs (5xx)
DECIDE   -> weakest free signal wins; 7-day rotation guarantees coverage
IMPROVE  -> ONE scoped, git-committed edit (content/SEO/speed/reliability/monetization)
BUILD    -> npm run build (keyless, --max-old-space-size=8192, timeout 540s)
DEPLOY   -> git push origin main -> Vercel auto-deploys
VERIFY   -> re-measure; if LCP regresses >20% -> vercel rollback; append IMPROVEMENT_LOG.md
```

## Files
```
scripts/website-improve-loop/
  measure.py     pull FREE Vercel signals -> metrics_snapshot.json
  decide.py      pick 1 action -> next_action.json
  improve.py     dispatch + git commit (content uses daily_content_writer.py)
  verify.py      re-measure + rollback + log
  loop.sh        bounded orchestrator (keyless build, auto-deploy)
scripts/daily_content_writer.py   human-quality post writer (>=800w guard, no future-date)
src/config/monetization.ts        all streams OFF by default (AdSense-safe)
src/components/monetization/      AffiliateStrip / SponsorCTA / UpiDonate (OFF until enabled)
IMPROVEMENT_LOG.md                before->after table
```

## Signal reality (Hobby plan)
- ✅ FREE: pageviews(30d), all Core Web Vitals(7d), vercel ls/logs/activity, rollback, config.
- 🔒 GATED (Observability Plus): requests/functions/firewall/AI-gateway. Infer via `vercel logs`.

## Run manually
```bash
cd /path/to/your/sproutern   # your local clone
bash scripts/website-improve-loop/loop.sh
```
Or step-by-step:
```bash
python scripts/website-improve-loop/measure.py
python scripts/website-improve-loop/decide.py
# for content_new: drop a human-quality body at scripts/website-improve-loop/_today_body.md
python scripts/website-improve-loop/improve.py
git push origin main
python scripts/website-improve-loop/verify.py
```

## Scheduling (Hermes cron)
```
cronjob create --schedule "0 3 * * *" --name "website-improvement-loop" \
  --prompt "Run the Sproutern daily loop: cd /path/to/your/sproutern && bash scripts/website-improve-loop/loop.sh.
   If action==content_new, author a 900-1500 word original, human-voiced post and write it to
   scripts/website-improve-loop/_today_body.md BEFORE running improve.py. Never future-date.
   Never full rewrite. If blocked, append to IMPROVEMENT_LOG.md and stop."
```

## Guardrails
- One change/day, reversible, git-committed. Private repo — never force-push/rewrite history.
- Build always keyless (ignoreBuildErrors; dummy NEXT_PUBLIC_FIREBASE_*).
- Auto-rollback on LCP regression >20% or build failure.
- No Observability Plus calls. No payout credentials in code (placeholders only).
