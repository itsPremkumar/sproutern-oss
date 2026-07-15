#!/usr/bin/env bash
# loop.sh — Sproutern daily-improvement orchestrator (Hobby plan, free-only).
# Bounded everywhere; keyless build; one change/day; auto-rollback on regression.
set -u
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT" || exit 1

PY="${PYTHON:-python}"
LOOP="$ROOT/scripts/website-improve-loop"

export NEXT_PUBLIC_ADSENSE_REVIEW_MODE=true
export NODE_OPTIONS="--max-old-space-size=8192"

# optional dummy firebase to satisfy keyless build
export NEXT_PUBLIC_FIREBASE_API_KEY=dummy NEXT_PUBLIC_FIREBASE_PROJECT_ID=dummy NEXT_PUBLIC_FIREBASE_APP_ID=dummy

echo "== [$(date -u +%FT%TZ)] MEASURE =="
timeout 200 "$PY" "$LOOP/measure.py" || echo "measure failed (non-fatal)"

echo "== DECIDE =="
timeout 120 "$PY" "$LOOP/decide.py" || { echo "decide failed"; exit 1; }
ACTION="$("$PY" -c "import json;print(json.load(open('$LOOP/next_action.json'))['action'])")"
export LOOP_ACTION="$ACTION"

echo "== IMPROVE ($ACTION) =="
timeout 300 "$PY" "$LOOP/improve.py" || echo "improve failed (non-fatal, will still build)"

echo "== BUILD (keyless, bounded) =="
rm -rf .next
timeout 540 "$PY" - <<'PYEOF' || echo "BUILD FAILED -> skip deploy"
import subprocess,sys
r=subprocess.run(["npm","run","build"],timeout=540)
sys.exit(r.returncode)
PYEOF
if [ $? -ne 0 ]; then echo "BUILD FAILED; abort deploy"; exit 2; fi

echo "== DEPLOY =="
timeout 180 git push origin main || { echo "push failed"; exit 3; }

echo "== VERIFY =="
timeout 200 "$PY" "$LOOP/verify.py" || echo "verify failed (non-fatal)"

echo "== DONE ($ACTION) =="
