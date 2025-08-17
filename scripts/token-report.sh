#!/usr/bin/env zsh
# For each token in tmp-token-scan/used_tokens.txt, find where it's declared and where it's used in design-system/src
set -euo pipefail
workspace_dir="$(cd "$(dirname "$0")/.." && pwd)"
src_dir="$workspace_dir/design-system/src"
used_file="$workspace_dir/tmp-token-scan/used_tokens.txt"
out_dir="$workspace_dir/tmp-token-report"
mkdir -p "$out_dir"

while read -r token; do
  token_clean=$(echo "$token" | sed 's/^--//')
  # find declarations
  decls=$(grep -nR --exclude-dir=assets -E "^\s*--$token_clean\s*:|^\s*--$token_clean\s*:\s" "$src_dir" || true)
  # find usages
  usages=$(grep -nR --exclude-dir=assets -E "var\(--$token_clean\b" "$src_dir" || true)
  echo "TOKEN: $token" > "$out_dir/$token_clean.txt"
  echo "DECLARATIONS:" >> "$out_dir/$token_clean.txt"
  if [ -n "$decls" ]; then
    echo "$decls" >> "$out_dir/$token_clean.txt"
  else
    echo "(none)" >> "$out_dir/$token_clean.txt"
  fi
  echo "" >> "$out_dir/$token_clean.txt"
  echo "USAGES:" >> "$out_dir/$token_clean.txt"
  if [ -n "$usages" ]; then
    echo "$usages" >> "$out_dir/$token_clean.txt"
  else
    echo "(none)" >> "$out_dir/$token_clean.txt"
  fi

done < "$used_file"

printf "Report generated in %s\n" "$out_dir"
exit 0
