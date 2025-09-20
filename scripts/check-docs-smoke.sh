#!/usr/bin/env bash
set -euo pipefail

LOG=/tmp/labs-smoke.log
BASE=${1:-http://localhost:8000}

echo "Starting labs-smoke at $(date) against $BASE" > "$LOG"

# Paths to validate under the docs server
PATHS=(
  "/design-system/utils/date-format.js"
  "/design-system/components/labs-list-item.js"
  "/design-system/components/labs-icon.js"
  "/tracker/js/main.js"
)

# Wait for the server root to respond (timeout after 20s)
WAIT=20
count=0
until curl -sSf "$BASE/" >/dev/null 2>&1; do
  count=$((count+1))
  if [ $count -ge $WAIT ]; then
    echo "ERROR: $BASE did not respond after ${WAIT}s" >> "$LOG"
    exit 1
  fi
  sleep 1
done
echo "Server reachable at $BASE" >> "$LOG"

for p in "${PATHS[@]}"; do
  if curl -sSf -o /dev/null "$BASE${p}"; then
    echo "OK: ${p}" >> "$LOG"
  else
    echo "MISSING: ${p}" >> "$LOG"
  fi
done

echo "labs-smoke finished at $(date)" >> "$LOG"

exit 0
#!/usr/bin/env bash
# Simple smoke test for local docs server
set -euo pipefail

BASE_URL=${1:-http://localhost:8000}

check() {
  local url="$1"
  printf "Checking %s... " "$url"
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url" || true)
  if [ "$code" = "200" ]; then
    printf "OK (200)\n"
    return 0
  else
    printf "FAIL (%s)\n" "$code"
    return 1
  fi
}

echo "Running docs smoke checks against $BASE_URL"
all_ok=0
check "$BASE_URL/today-list/" || all_ok=1
check "$BASE_URL/design-system/styles/main.css" || all_ok=1
check "$BASE_URL/design-system/components/labs-checkbox.js" || all_ok=1
check "$BASE_URL/today-list/today-list-demo.js" || all_ok=1

if [ $all_ok -eq 0 ]; then
  echo "SMOKE TEST: PASS"
  exit 0
else
  echo "SMOKE TEST: FAIL - one or more endpoints returned non-200"
  exit 2
fi
