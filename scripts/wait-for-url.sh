#!/usr/bin/env bash
# Simple HTTP port/URL checker with timeout
set -euo pipefail

URL=${1:-http://localhost:6006}
NAME=${2:-Server}
MAX_WAIT=${3:-240}
INTERVAL=${4:-2}

echo "⏳ Waiting for ${NAME} at ${URL}..."

count=0
while ! curl -sSf "${URL}" >/dev/null 2>&1; do
  count=$((count + INTERVAL))
  if [ $count -ge $MAX_WAIT ]; then
    echo "❌ Timeout: ${NAME} did not respond after ${MAX_WAIT}s"
    exit 1
  fi
  sleep $INTERVAL
done

echo "✅ ${NAME} HTTP ready"
exit 0