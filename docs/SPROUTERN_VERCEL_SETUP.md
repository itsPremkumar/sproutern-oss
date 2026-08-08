# Sproutern — Vercel Deployment & Setup (Verified)

> This documents the **actual, verified** Vercel setup for the Sproutern project.
> For the generic MCP guide, see `VERCEL_MCP_SETUP.md`.
> Replace the `<PLACEHOLDER>` values with your own account details — no real
> credentials or personal identifiers are stored in this repo.

## Account & project

| Item | Value |
|---|---|
| Vercel CLI | v55.0.0 (installed) |
| Logged-in user | `<your-vercel-username>` |
| Team slug | `<your-team-slug>` |
| Team name | `<your-team-name>` |
| GitHub repo | `<your-github-user>/sproutern-oss` (branch `master`) |
| Vercel project | `sproutern` |
| Production URL | `https://<project>-<team-slug>.vercel.app` |
| Auto-deploy | ✅ pushes to `master` trigger a production build |
| Web Analytics | ✅ enabled (`@vercel/analytics` in deps) |

## OpenCode MCP (separate from Hermes)

OpenCode's config at `~/.config/opencode/opencode.json` registers the
Vercel MCP (`✓ connected`):

```json
{
  "mcp": {
    "vercel": { "type": "remote", "url": "https://mcp.vercel.com", "enabled": true }
  }
}
```

`opencode mcp list` → `✓ vercel connected`.

> Hermes does NOT use OpenCode MCP. Hermes manages Vercel via the Vercel CLI
> directly from the terminal.

## Environment variables set on Vercel

These were added via `vercel env add` (Production env):

| Var | Value | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://<project>-<team-slug>.vercel.app` | Fixes sitemaps/feeds/canonical to the real domain |
| `NEXT_PUBLIC_ADSENSE_REVIEW_MODE` | `true` | Keeps ads OFF until AdSense approval (AdSense-safe) |

## Environment variables STILL UNSET (action required)

Set these in Vercel Dashboard → Project → Settings → Environment Variables,
or via `vercel env add <NAME> production`:

| Var | What to put | Why |
|---|---|---|
| `NEXT_PUBLIC_UPI_ID` | your UPI handle (e.g. `name@bank`) | Enables the Donate page |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID (free tier) | Saves newsletter subs (Vercel FS is read-only) |
| `NEXT_PUBLIC_EZOIC_VERIFICATION` | Ezoic verify code (optional) | Enables Ezoic if chosen over AdSense |
| `NEXT_PUBLIC_ADSENSE_ACCOUNT` | `ca-pub-XXXXXXXX` | Only after AdSense approval |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT_ID` | slot id | Only after AdSense approval |

Then flip `NEXT_PUBLIC_ADSENSE_REVIEW_MODE` to `false` once approved.

## Affiliate / product IDs to replace in `src/config/monetization.ts`

These are placeholders — replace `YOURID` / `YOURTAG` with your real tracking IDs:

- `amazon` → `https://www.amazon.in/?tag=YOURTAG-21` (Amazon Associates)
- `unacademy` → `https://unacademy.com/goal/?ref=YOURID`
- `cashkaro` → `https://www.cashkaro.com/?ref=YOURID`
- `skillshare` → `https://skl.sh/YOURID`
- `fiverr` → `https://www.fiverr.com/?ref=YOURID`
- `upwork` → `https://www.upwork.com/?ref=YOURID`

Digital products (`digitalProducts[]`) and sponsored tools (`sponsoredTools[]`)
are commented out — uncomment and fill in your Gumroad/Razorpay links.

## Useful commands (run from repo root after `vercel link`)

```bash
vercel ls sproutern --limit 5 --scope <your-team-slug>          # deployments
vercel env ls                                                  # list env vars
vercel metrics vercel.analytics_pageview.count --since 30d \
  --granularity 1d --project sproutern --prod --scope <your-team-slug>
vercel metrics vercel.analytics_pageview.count --since 30d \
  --group-by request_path --limit 10 --project sproutern --prod --scope <your-team-slug>
```

## Build notes (local)

- `next build` takes ~9–12 min on this machine; run in background.
- Requires dummy Firebase env vars (no real keys) + `NEXT_PUBLIC_ADSENSE_REVIEW_MODE=true`.
- `next.config.ts` disables type-check (`ignoreBuildErrors`) to avoid native OOM
  during `tsc` on low-RAM machines. Keep it.
