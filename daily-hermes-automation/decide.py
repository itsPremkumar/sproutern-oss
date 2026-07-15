#!/usr/bin/env python3
"""
decide.py — Sproutern daily-loop DECIDE step.

Reads metrics_snapshot.json and the 7-day rotation, picks ONE action for today.
Writes next_action.json consumed by improve.py / verify.py.

Action types:
  content_new      -> write one human-quality post (daily_content_writer.py)
  content_fresh    -> run content-freshness.ts on stale posts
  speed            -> lazy-load / next-image pass on a route
  seo              -> fix typo-dupe / add trust pages
  reliability      -> fix top 5xx from logs
  monetization     -> wire one OFF-by-default strip into top page

Priority: weakest free signal wins; rotation guarantees coverage.
"""
import json, os, sys, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
SNAP = os.path.join(HERE, "metrics_snapshot.json")
ACTION = os.path.join(HERE, "next_action.json")

ROTATION = ["content_new", "speed", "content_fresh", "seo", "reliability", "monetization", "report"]

# Thresholds (free-signal driven)
LCP_GOOD = 1200.0  # ms

def main():
    if not os.path.exists(SNAP):
        print("DECIDE: no snapshot; defaulting to content_new"); action = "content_new"
    else:
        snap = json.load(open(SNAP))
        s = snap["signals"]
        lcp = s.get("lcp_ms_7d") or 9999
        action = None
        # Hard signal override: bad LCP beats rotation
        if lcp > LCP_GOOD:
            action = "speed"
        # 5xx present -> reliability
        elif s.get("recent_5xx") and len(s.get("recent_5xx", "").strip()) > 5:
            action = "reliability"
        if not action:
            day = datetime.datetime.now().weekday()  # 0=Mon
            action = ROTATION[day % len(ROTATION)]

    # Topic bank for content_new (human-voiced, original)
    topics = {
        "content_new": {
            "slug": "career-switch-to-tech-without-degree",
            "title": "How I Switched to a Tech Career Without a CS Degree",
            "category": "Career Guide",
            "keywords": "career switch to tech, non-cs to software, tech career without degree, self taught developer",
        },
        "content_fresh": {"script": "content-freshness.ts", "arg": "--dry-run"},
        "speed": {"route": "src/app/page.tsx", "note": "next/image + lazy-load above-fold"},
        "seo": {"note": "fix doneate typo-dupe; add trust pages"},
        "reliability": {"note": "fix top 5xx from vercel logs"},
        "monetization": {"note": "wire AffiliateStrip into top page (OFF by default)"},
        "report": {"note": "measure + append IMPROVEMENT_LOG.md"},
    }

    out = {"action": action, "detail": topics.get(action, {}), "decided_at": datetime.datetime.now().isoformat()}
    json.dump(out, open(ACTION, "w"), indent=2)
    print("DECIDE:", action)
    print(json.dumps(out, indent=2))

if __name__ == "__main__":
    sys.exit(main())
