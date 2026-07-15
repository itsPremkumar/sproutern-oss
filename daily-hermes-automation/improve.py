#!/usr/bin/env python3
"""
improve.py — Sproutern daily-loop IMPROVE step.

Reads next_action.json and performs exactly ONE safe, git-committed change.
It never does a full rewrite. For content_new it delegates body authoring to the
agent at cron time (the cron prompt supplies the human-quality body file).

This script is the dispatch + git commit. The actual edits are small and scoped.
"""
import json, os, subprocess, sys, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
ACTION = os.path.join(HERE, "next_action.json")

def git(*args):
    return subprocess.run(["git", "-C", ROOT, *args], capture_output=True, text=True, timeout=120)

def main():
    if not os.path.exists(ACTION):
        print("IMPROVE: no action file; skipping"); return 0
    a = json.load(open(ACTION))
    action = a["action"]
    detail = a.get("detail", {})

    if action == "content_new":
        body = os.path.join(HERE, "_today_body.md")
        if not os.path.exists(body):
            print("IMPROVE: content_new but no _today_body.md supplied by agent; SKIP (no thin filler)")
            return 0
        slug = detail.get("slug", "daily-post")
        title = detail.get("title", "Daily Post")
        cat = detail.get("category", "Career Guide")
        kw = detail.get("keywords", "")
        r = subprocess.run([
            sys.executable, os.path.join(ROOT, "scripts", "daily_content_writer.py"),
            "--slug", slug, "--title", title, "--category", cat,
            "--keywords", kw, "--body-file", body
        ], capture_output=True, text=True, timeout=120)
        print(r.stdout, r.stderr)
        if r.returncode != 0:
            print("IMPROVE: content write rejected (thin/dup?) — abort"); return r.returncode

    elif action == "content_fresh":
        # Run the repo's freshness engine (keyless, no AI needed)
        r = subprocess.run(f"npx tsx scripts/content-freshness.ts --dry-run",
                           shell=True, cwd=ROOT, capture_output=True, text=True, timeout=300)
        print(r.stdout[-1500:], r.stderr[-800:])

    elif action in ("speed", "seo", "reliability", "monetization", "report"):
        # These are scaffolded; the agent performs the specific edit at cron time,
        # then this step just records intent + commits whatever changed.
        print(f"IMPROVE: action '{action}' -> agent performs scoped edit, then commit.")

    # Commit if anything changed
    st = git("status", "--short")
    if st.stdout.strip():
        msg = f"loop: {action} ({datetime.date.today().isoformat()})"
        git("add", "-A")
        git("commit", "-q", "-m", msg)
        print("IMPROVE: committed ->", msg)
    else:
        print("IMPROVE: nothing to commit")
    return 0

if __name__ == "__main__":
    sys.exit(main())
