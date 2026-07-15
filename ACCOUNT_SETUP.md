# Sproutern — Account Setup & Configuration Guide

> Complete, credential-free setup for running Sproutern on the **free plan only**
> (Vercel Hobby + Firebase free tier), plus the daily autonomous improvement loop.
>
> ⚠️ **No secrets in this repo.** Every key/token/credential is a placeholder. Fill your
> own values in a local `.env.local` (git-ignored) — never commit real values.

---

## 1. Prerequisites

- Node.js 18+ (20+ recommended)
- npm / yarn
- Git
- A GitHub account (free)
- A Vercel account (free Hobby plan)
- A Firebase project (free Spark plan)
- (Optional) Python 3.11+ for the daily improvement loop
- (Optional) [OmniRoute](https://github.com/diegosouzapw/OmniRoute) for free AI content generation

---

## 2. Clone & install

```bash
git clone https://github.com/itsPremkumar/sproutern-open-source.git
cd sproutern-open-source
npm install        # or: yarn
```

---

## 3. Environment variables

Copy the example and fill in **your own** values locally:

```bash
cp .env.example .env.local     # .env.local is git-ignored — safe for real values
```

Required keys (get these from your own Firebase/Vercel dashboards — **placeholders shown**):

```env
# --- Firebase (Project Settings → General → Your apps → Web app config) ---
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_web_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# --- Firebase Admin (server) — from a service account JSON. NEVER commit the JSON. ---
# Store the whole JSON as a single-line env var in Vercel, or use a local file that is git-ignored.
FIREBASE_ADMIN_CREDENTIALS={"type":"service_account", "...": "REDACTED"}

# --- Site ---
NEXT_PUBLIC_SITE_URL=https://your-deployment.vercel.app

# --- AdSense (keep review mode until approved) ---
NEXT_PUBLIC_ADSENSE_REVIEW_MODE=true
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX   # optional, blank until approved
```

> 🔒 **Security:** `.env`, `.env.local`, `service-account.json`, and any `*-adminsdk*.json`
> are git-ignored on purpose. Do **not** remove them from `.gitignore`. In production, set
> these as **Vercel Environment Variables** (Project → Settings → Environment Variables),
> not in the repo.

---

## 4. Firebase setup (free Spark plan)

1. Create a project at <https://console.firebase.google.com> (free).
2. Add a **Web app** → copy the config into `NEXT_PUBLIC_FIREBASE_*` above.
3. Enable **Firestore** (production mode) — rules live in `firestore.rules`.
4. Enable **Storage** if used — rules in `storage.rules`.
5. (Server) Create a **service account** (Project Settings → Service Accounts →
   Generate new private key). Keep the JSON **local/secret**; feed it via env var.
6. Deploy rules (optional):
   ```bash
   npx firebase deploy --only firestore:rules,storage
   ```

---

## 5. Vercel setup (free Hobby plan)

1. Push the repo to GitHub.
2. Import it at <https://vercel.com/new> → connect the GitHub repo.
3. Add the env vars from step 3 in **Project → Settings → Environment Variables**.
4. Deploy — every `git push` to the default branch auto-deploys.
5. Enable **Web Analytics** (Project → Analytics) — `@vercel/analytics` is already in
   `package.json`. This powers the daily loop's free signals.

### Vercel CLI (for the loop / metrics)

```bash
npm install -g vercel@latest    # v55+ needed for `vercel metrics`
vercel login
vercel whoami
vercel switch                   # pick your team/personal scope
```

> The daily loop only uses **free Hobby signals**: pageviews (30d), Core Web Vitals (7d),
> `vercel ls`, `vercel logs`, `vercel rollback`. It never calls paid Observability-Plus metrics.

For the full AI-assisted deployment/log workflow, see **[VERCEL_MCP_SETUP.md](./VERCEL_MCP_SETUP.md)**.

---

## 6. Run locally

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (keyless-safe; uses dummy Firebase if envs absent)
npm run start    # serve the production build
```

---

## 7. Daily autonomous improvement loop

The repo ships a free-plan, closed-loop system that improves the site **one safe change per day**
using Vercel signals as feedback. Full details in **[DAILY_LOOP.md](./DAILY_LOOP.md)**.

```
MEASURE → DECIDE → IMPROVE → BUILD → DEPLOY → VERIFY (auto-rollback on regression)
```

Files:
- `scripts/website-improve-loop/` — `measure.py`, `decide.py`, `improve.py`, `verify.py`, `loop.sh`
- `scripts/daily_content_writer.py` — human-quality post writer (≥800-word guard, no future-dating)
- `IMPROVEMENT_LOG.md` — before→after audit trail
- `daily-hermes-automation/` — mirror copy of the loop scripts + notes

Run it:

```bash
cd /path/to/your/sproutern
bash scripts/website-improve-loop/loop.sh
```

Schedule it daily (Hermes cron example):

```bash
cronjob create --schedule "0 3 * * *" --name "sproutern-daily-loop" \
  --prompt "Run the Sproutern daily loop: cd /path/to/your/sproutern && bash scripts/website-improve-loop/loop.sh.
   If action==content_new, author a 900-1500 word original, human-voiced post and write it to
   scripts/website-improve-loop/_today_body.md BEFORE running improve.py. Never future-date.
   Never full rewrite. If blocked, append to IMPROVEMENT_LOG.md and stop."
```

### Free AI for content (optional)

Point the content step at a **free** model via [OmniRoute](https://github.com/diegosouzapw/OmniRoute)
(single endpoint, Tier-A free providers) so content generation costs **$0**. See the zero-investment
stack docs for the free provider catalog.

---

## 8. Guardrails (built in)

- **One change/day**, reversible, git-committed. Never force-push / rewrite history.
- **Keyless build** always succeeds (dummy `NEXT_PUBLIC_FIREBASE_*` if envs absent).
- **Auto-rollback** on LCP regression > 20% or build failure.
- **AdSense-safe**: monetization components are OFF by default; keep `ADSENSE_REVIEW_MODE=true`
  until approved; never future-date posts.
- **No credentials in code** — placeholders only; real values live in git-ignored env / Vercel.

---

## 9. Cost = $0

| Component | Service | Cost |
| --- | --- | --- |
| Hosting / deploy | Vercel Hobby | Free |
| Database / auth | Firebase Spark | Free |
| Analytics signals | Vercel Web Analytics | Free |
| AI content (optional) | OmniRoute free providers | Free |
| Domain (optional) | DigitalPlat FreeDomain / `*.vercel.app` | Free |

See the zero-investment company blueprint for the full free-stack mapping.
