# Sproutern-Hermes — Money Streams Setup

Zero-investment monetization, built on the existing ad/affiliate engine.

## What's already implemented
| Stream | File | Active when |
|---|---|---|
| Affiliate links (footer + home) | `src/config/monetization.ts` | Always (edit URLs) |
| Sponsored tool placements | `src/config/monetization.ts` | Add to `sponsoredTools` |
| Donations (UPI) | `src/app/donate` | Set `NEXT_PUBLIC_UPI_ID` |
| AdSense display ads | `src/components/adsence.tsx` | `NEXT_PUBLIC_ADSENSE_REVIEW_MODE=false` + real IDs |
| Ezoic / Monetag | `src/components/ads/*` | Real IDs + review mode off |

## Activate affiliate links (day 1, no approval needed)
Edit `src/config/monetization.ts` → replace the placeholder `url` values in
`affiliates` with YOUR tracking links from Impact.com / PartnerStack / Amazon
Associates. They render site-wide (footer + home) immediately.

## Activate donations
Set in Vercel → Environment Variables (or `.env.local`):
`NEXT_PUBLIC_UPI_ID=you@paytm`

## Activate display ads (ONLY after AdSense approves)
1. Get AdSense approval (site must have real content + required pages).
2. In Vercel env vars set:
   - `NEXT_PUBLIC_ADSENSE_REVIEW_MODE=false`
   - `NEXT_PUBLIC_ADSENSE_ACCOUNT=ca-pub-XXXX`
   - `NEXT_PUBLIC_GOOGLE_ADSENSE_SLOT_ID=XXXX`
3. Redeploy. Ads appear automatically.

## Deploy (Vercel, free)
- Push this repo to GitHub → Vercel imports it → auto-deploys.
- Build command: `npm run build` (auto-detected).
- No paid services required. Firebase/Genkit are optional.

## Notes
- Keep `NEXT_PUBLIC_ADSENSE_REVIEW_MODE=true` until AdSense approves — flipping
  it early causes rejection.
- All affiliate links use `rel="sponsored noopener noreferrer"` (FTC/SEO safe).
