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

def run(cmd, timeout=60):
    try:
        p = subprocess.run(cmd, shell=True, capture_output=True, text=True, timeout=timeout)
        return p.stdout + p.stderr
    except Exception as e:
        return f"ERROR: {e}"

def metric_raw(name, since):
    # Retry up to 2x; Vercel CLI is occasionally flaky / rate-limited.
    out = run(f'vercel metrics {name} --since {since}', timeout=60)
    if "ERROR" in out or not out.strip():
        out = run(f'vercel metrics {name} --since {since}', timeout=60)
    return out

def parse_first_number(out):
    """Vercel metrics prints a header block ('> Metric: ...', '> Period: ...',
    '> Interval: ...', '> Units: ...', then a column-header row like
    '  total   avg   min   max', then a data row whose FIRST token is the value
    we want: for a sum metric it's the total, for an avg metric it's the avg.
    We skip header/column lines and read the first numeric token of the data row."""
    best = None
    for line in out.splitlines():
        s = line.strip()
        if not s:
            continue
        if s.startswith('>') or s.startswith('sparklines') or s.startswith('Vercel CLI'):
            continue
        # column-header row contains words like 'total'/'avg'/'min'/'max' but no raw big number alone
        if re.fullmatch(r'([A-Za-z]+\s+)+', s):
            continue
        # data row: grab first number (int or float, comma-grouped)
        m = re.search(r"(\d[\d,]*\.?\d*)", s)
        if m:
            best = float(m.group(1).replace(",", ""))
            break
    return best

def fetch_metric(name, since, prev=None):
    """Fetch a metric; on failure fall back to the previous snapshot value (continuity)."""
    val = parse_first_number(metric_raw(name, since))
    if val is None:
        return prev
    return val

def load_prev():
    try:
        return json.load(open(SNAP)).get("signals", {})
    except Exception:
        return {}

def main():
    prev = load_prev()

    snap = {"measured_at": datetime.datetime.now().isoformat(), "plan": "hobby", "signals": {}}

    # Traffic (30d) — fall back to previous value if Vercel CLI blips
    snap["signals"]["pageviews_30d"] = fetch_metric(
        "vercel.analytics_pageview.count", "30d", prev.get("pageviews_30d"))

    # Core Web Vitals (7d window on hobby)
    for v in ["lcp", "fcp", "cls", "ttfb", "inp"]:
        snap["signals"][f"{v}_ms_7d"] = fetch_metric(
            f"vercel.speed_insights.{v}_ms", "7d", prev.get(f"{v}_ms_7d"))

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
