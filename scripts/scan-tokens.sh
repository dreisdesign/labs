#!/usr/bin/env zsh
# Scans design-system/src for used CSS variables (var(--name)) and declared variables (--name:)
# Outputs a list of used tokens, declared tokens, and missing tokens (used but not declared).
set -euo pipefail
workspace_dir="$(cd "$(dirname "$0")/.." && pwd)"
src_dir="$workspace_dir/design-system/src"
out_dir="$workspace_dir/tmp-token-scan"
mkdir -p "$out_dir"

# Find used tokens via var(--token
grep -rho --exclude-dir=assets -E "var\(--[a-zA-Z0-9_-]+" "$src_dir" \
  | sed -E 's/var\(//' \
  | sed -E 's/[,)].*$//' \
  | sort -u > "$out_dir/used_tokens.txt"

# Normalize tokens to remove leading whitespace
sed -i '' -E 's/^\s+//' "$out_dir/used_tokens.txt" || true

# Find declared tokens (lines starting with --token: in css/html/md under src)
grep -rho --exclude-dir=assets -E "^\s*--[a-zA-Z0-9_-]+\s*:" "$src_dir" \
  | sed -E 's/^\s*//' \
  | sed -E 's/\s*:\s*$//' \
  | sort -u > "$out_dir/declared_tokens.txt"

sed -i '' -E 's/^\s+//' "$out_dir/declared_tokens.txt" || true

# Produce list of tokens used but not declared (strip leading --)
awk '{gsub(/^--/,""); print}' "$out_dir/used_tokens.txt" > "$out_dir/used_tokens_nodash.txt"
awk '{gsub(/^--/,""); print}' "$out_dir/declared_tokens.txt" > "$out_dir/declared_tokens_nodash.txt"

comm -23 "$out_dir/used_tokens_nodash.txt" "$out_dir/declared_tokens_nodash.txt" > "$out_dir/missing_tokens.txt" || true

# Apply whitelist filtering if available. Whitelist entries may be exact tokens
# (without leading --) or prefix entries ending with '*' to match token prefixes.
whitelist_file="$workspace_dir/scripts/token-whitelist.txt"
if [ -f "$whitelist_file" ]; then
  awk '{print}' "$out_dir/missing_tokens.txt" > "$out_dir/missing_tokens_unfiltered.txt"
  > "$out_dir/missing_tokens.txt"
  while IFS= read -r w || [ -n "$w" ]; do
    # Strip comments and whitespace
    w_clean=$(echo "$w" | sed -E 's/#.*$//' | sed -E 's/\s+$//' | sed -E 's/^\s+//')
    [ -z "$w_clean" ] && continue
    if echo "$w_clean" | grep -q '\*$'; then
      prefix=$(echo "$w_clean" | sed 's/\*$//')
      # Copy all non-matching lines to new missing list
      grep -v "^$prefix" "$out_dir/missing_tokens_unfiltered.txt" > "$out_dir/missing_tokens_tmp.txt" || true
      mv "$out_dir/missing_tokens_tmp.txt" "$out_dir/missing_tokens_unfiltered.txt"
    else
      # exact token match (strip leading -- if present in file)
      esc=$(echo "$w_clean" | sed 's/^--//')
      grep -v "^$esc$" "$out_dir/missing_tokens_unfiltered.txt" > "$out_dir/missing_tokens_tmp.txt" || true
      mv "$out_dir/missing_tokens_tmp.txt" "$out_dir/missing_tokens_unfiltered.txt"
    fi
  done < "$whitelist_file"
  mv "$out_dir/missing_tokens_unfiltered.txt" "$out_dir/missing_tokens.txt"
fi

# Summary
printf "Scan complete. Results in %s\n" "$out_dir"
printf "Used tokens: %d\n" "$(wc -l < "$out_dir/used_tokens.txt")"
printf "Declared tokens: %d\n" "$(wc -l < "$out_dir/declared_tokens.txt")"
printf "Missing tokens (used but not declared): %d\n" "$(wc -l < "$out_dir/missing_tokens.txt")"

printf "\nMissing tokens (sample):\n"
head -n 200 "$out_dir/missing_tokens.txt" || true

exit 0
