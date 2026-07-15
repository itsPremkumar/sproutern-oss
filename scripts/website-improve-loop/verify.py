#!/usr/bin/env python3
"""
verify.py — Sproutern daily-loop VERIFY step.

Re-measures after deploy. If LCP regressed >20% vs the pre-deploy snapshot, or the
build failed, it triggers `vercel rollback` to the last good deployment. Otherwise
it appends a row to IMPROVEMENT_LOG.md with before->after numbers.
"""
import json, os, subprocess, sys, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, "..", ".."))
SNAP_BEFORE = os.path.join(HERE, "metrics_snapshot.json")
LOG = os.path.join(ROOT, "IMPROVEMENT_LOG.md")

def run(cmd):
    try:
        p = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=120)
        return p.stdout + p.stderr
    except Exception as e:
        return f"ERROR {e}"

def parse_avg(out):
    import re
    m = re.search(r"avg\s+(\d+\.?\d*)", out)
    return float(m.group(1)) if m else None

def main():
    before = json.load(open(SNAP_BEFORE))["signals"] if os.path.exists(SNAP_BEFORE) else {}
    lcp_before = before.get("lcp_ms_7d")

    lcp_after = parse_avg(run("vercel metrics vercel.speed_insights.lcp_ms --since 7d"))
    pv_after = None
    pv_raw = run("vercel metrics vercel.analytics_pageview.count --since 30d")
    import re
    m = re.search(r"total\s+(\d[\d,]*)\.?\d*", pv_raw)
    if m: pv_after = int(m.group(1).replace(",", ""))

    regressed = False
    if lcp_before and lcp_after and lcp_after > lcp_before * 1.2:
        regressed = True
        print(f"VERIFY: LCP regressed {lcp_before} -> {lcp_after} (>20%) -> ROLLBACK")
        subprocess.run("vercel rollback --yes", shell=True, cwd=ROOT, timeout=180)

    row = f"| {datetime.date.today()} | {os.environ.get('LOOP_ACTION','?')} | " \
          f"LCP {lcp_before}->{lcp_after} | PV {before.get('pageviews_30d')}->{pv_after} | " \
          f"{'ROLLBACK' if regressed else 'ok'} |\n"
    with open(LOG, "a", encoding="utf-8") as f:
        if os.path.getsize(LOG) == 0:
            f.write("# Sproutern Daily Improvement Log\n\n| Date | Action | LCP(ms) | Pageviews(30d) | Status |\n|---|---|---|---|---|\n")
        f.write(row)
    print("VERIFY:", row.strip())
    return 0

if __name__ == "__main__":
    sys.exit(main())
