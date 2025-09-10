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
