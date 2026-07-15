#!/usr/bin/env python3
"""
measure.py — Sproutern daily-loop MEASURE step.

Pulls the FREE Vercel signals (Hobby plan) and writes a JSON snapshot the
decide/verify steps consume. No Observability-Plus metrics are called.

Outputs: metrics_snapshot.json
"""
import json, os, subprocess, datetime, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SNAP = os.path.join(HERE, "metrics_snapshot.json")

def run(cmd):
    try:
        p = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=120)
        return p.stdout + p.stderr
    except Exception as e:
        return f"ERROR: {e}"

def metric(name, since):
    return run(f'vercel metrics {name} --since {since}')

def parse_total(out):
    # crude: grab line with 'total' and a number
    m = re.search(r"total\s+(\d[\d,]*)\.?\d*", out)
    return int(m.group(1).replace(",", "")) if m else None

def parse_avg(out):
    m = re.search(r"avg\s+(\d+\.?\d*)", out)
    return float(m.group(1)) if m else None

def main():
    snap = {"measured_at": datetime.datetime.now().isoformat(), "plan": "hobby", "signals": {}}

    # Traffic (30d)
    pv = metric("vercel.analytics_pageview.count", "30d")
    snap["signals"]["pageviews_30d"] = parse_total(pv)

    # Core Web Vitals (7d window on hobby)
    for v in ["lcp", "fcp", "cls", "ttfb", "inp"]:
        m = metric(f"vercel.speed_insights.{v}_ms", "7d")
        snap["signals"][f"{v}_ms_7d"] = parse_avg(m)

    # Deploy status (latest)
    ls = run("vercel ls")
    snap["signals"]["deployments_raw"] = ls[:500]

    # 5xx from logs (free on hobby) — last production deploy
    logs = run("vercel logs --limit 200 2>&1 | grep -iE ' 5[0-9][0-9] ' | tail -20")
    snap["signals"]["recent_5xx"] = logs.strip()[:800]

    with open(SNAP, "w", encoding="utf-8") as f:
        json.dump(snap, f, indent=2)
    print("MEASURE: wrote", SNAP)
    print(json.dumps(snap["signals"], indent=2))

if __name__ == "__main__":
    sys.exit(main())
