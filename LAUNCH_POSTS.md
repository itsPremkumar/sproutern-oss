# 🚀 Sproutern Launch Kit — Ready-to-Paste Posts

Everything below is copy-paste ready. Follow the sequence in `GO_LIVE.md`.
**Rule: one platform per day, reply to every comment within 24h for 2 weeks.**

---

## 1. Product Hunt (Tue–Thu, ~12:30 PT)

**Name:** Sproutern — Free career platform for students & freshers

**Tagline (≤60 chars):**
> 200+ free tools that get freshers hired

**Description:**
Sproutern is a free, open-source career platform built for students and
freshers — mostly in India, but useful anywhere.

- **200+ tools**: CGPA converter, salary calculators, resume checker, study planner — no signup, no paywall
- **180+ brain & prep games** for aptitude and interviews
- **Real interview experiences** from TCS, Infosys, Amazon, Citi and more
- **AI resume optimizer** + ATS keyword checker
- **Study-abroad guides** for US, UK, Germany, Canada

100% free forever. MIT-licensed on GitHub — fork it, self-host it, break it, fix it.

**First comment (maker comment):**
I kept watching first-gen students lose opportunities purely because they had no
network to tell them what to prepare. So I built the thing I wished existed:
every tool, guide, and real interview experience in one free place.
6 months of nights and weekends. It's fully open source because trust needs receipts.
Ask me anything — especially about surviving a 470KB homepage 🙂 (issue #4 is open!)

---

## 2. Hacker News ("Show HN", same day as PH, after PH settles)

**Title:**
> Show HN: I built an open-source career platform with 200+ free tools for freshers

**Post:**
Hi HN! I built Sproutern (https://sproutern.dpdns.org) — a free, open-source
career platform aimed at students and first-job seekers, originally for the
Indian market where placement prep advice is scattered across Telegram groups
and paywalled "courses."

What's inside:
- 200+ tools (calculators, converters, resume checks) — all client-side, no signup
- Real interview experiences contributed by students who went through the process
- An ATS resume optimizer
- Study-abroad guides (visa timelines, blocked accounts, WES evaluations)

Stack: Next.js 16 (app router), TypeScript, Tailwind, Firebase, Genkit AI.
MIT licensed: https://github.com/itsPremkumar/sproutern-oss

Hard lessons so far: shipping 500+ pages means canonical tags become your
entire SEO strategy (we just fixed a bug where 108 pages canonicaled to our
Vercel preview URL), and a 471KB homepage HTML will humble you fast.

Happy to answer questions about the stack, the SEO layer, or building for
students who have zero budget.

*(Drop the canonical-tag line only if it stays true at post time — check first.)*

---

## 3. Reddit — r/Btechtards (highest-intent audience)

**Title:**
> I made every placement-prep tool I wished existed in first year — free, no signup

**Body:**
Third-year here. Got tired of "free" CGPA converters that want your email,
placement blogs with zero real interview info, and ₹5000 courses teaching
aptitude you can practice for nothing.

So over the last few months I built **Sproutern** — everything in one place:

- CGPA↔percentage converter (Anna Univ / VTU style formulas)
- Salary breakdowns (what CTC actually means in-hand)
- **Real interview experiences** — TCS NQT, Infosys, Citi, Accenture (written by students who cleared them)
- Aptitude games that don't feel like homework
- Resume templates that pass ATS screens

No login. No premium tier. No ads blocking the calculator mid-tap (yet 😅).
Open source too, if anyone wants to contribute — good first issues are labeled:
https://github.com/itsPremkumar/sproutern-oss

Site: https://sproutern.dpdns.org

Roast it if you hate it — I'd rather fix real complaints than collect compliments.

**r/developersIndia variant:** same body, swap title →
> Built a free placement-prep site (200+ tools, real interview experiences) — no login, no paywall

**r/SideProject variant:** lead with the build story + open-source angle instead of student angle.

---

## 4. X / Twitter thread (1/7)

**1/** I built a free career platform for students — 200+ tools, 180+ games, real interview experiences from TCS/Infosys/Amazon.

No signup. No paywall. Open source. 🧵

**2/** The problem: first-gen students in India prep for placements using forwarded PDFs and ₹5k courses. Information shouldn't depend on your network.

**3/** What's inside 👇
• CGPA converters • Salary calculators • ATS resume checker
• Interview experiences written by students who cleared them
• Study-abroad guides (US/UK/DE/CA)

**4/** Everything runs client-side. Your data never leaves the browser for the core tools.

**5/** It's MIT licensed. Fork it, self-host it, use it in your portfolio:
github.com/itsPremkumar/sproutern-oss

**6/** Live: sproutern.dpdns.org — try the CGPA converter or read one TCS interview experience and tell me what's missing.

**7/** Next up: university-specific CGPA presets (#5) and a homepage diet from 471KB → <250KB (#4). Contributors welcome — issues are beginner-friendly by design.

---

## 5. dev.to article (canonical → your blog post)

**Title:** I built a free, open-source career platform with 200+ tools — here's the stack and what broke along the way

**Structure:**
1. Why: information gap for first-gen students (short, personal)
2. The stack: Next.js 16 app router, TS, Tailwind, Firebase, Genkit — why each
3. The 500-page problem: sitemaps ×11, canonical discipline, IndexNow wiring
   - war story: the vercel.app-canonical bug that silently deindexed 108 pages
4. Open source as a trust strategy for a "free" product
5. Numbers: traffic before/after indexing fix (update with real Vercel Analytics data before posting)
6. CTA: repo + live site + good-first-issues

Set **canonical_url** to the original blog post on sproutern.dpdns.org so SEO
credit flows to your domain, not dev.to.

---

## 6. LinkedIn (optional, recruiters + Indian ed community)

Built something I needed at 19: a completely free career platform for
students — 200+ tools, real placement interview experiences, zero signup.

Why free? Because the students who need guidance most can least afford it.

It's also fully open source — contributions welcome.
🔗 sproutern.dpdns.org · github.com/itsPremkumar/sproutern-oss

#OpenSource #Students #CareerDevelopment #NextJS
