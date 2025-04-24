#!/bin/bash

CHANGELOG="/Users/danielreis/labs/tracker/CHANGELOG.md"
TEMP_FILE="/Users/danielreis/labs/tracker/CHANGELOG.md.tmp"

# Extract all version headers and store them in order
grep -E "^## \[[0-9]+\.[0-9]+\.[0-9]+\]" "$CHANGELOG" | 
while read -r line; do
    if [[ $line =~ \[([0-9]+\.[0-9]+\.[0-9]+)\] ]]; then
        echo "${BASH_REMATCH[1]}"
    fi
done | sort -rV > versions.txt

# Update table of contents with all versions
awk '
BEGIN {
    while ((getline ver < "versions.txt") > 0) {
        versions[++count] = ver
    }
    in_toc = 0
}
/^## Table of Contents/ {
    print
    print "- [Unreleased](#unreleased)"
    for (i = 1; i <= count; i++) {
        ver = versions[i]
        link = ver
        gsub(/\./, "", link)
        print "- [" ver "](#" link ") - Updates and improvements"
    }
    in_toc = 1
    next
}
/^##[^#]/ {
    if (in_toc) {
        in_toc = 0
        print ""
    }
    print
    next
}
!in_toc {
    print
}' "$CHANGELOG" > "$TEMP_FILE"

mv "$TEMP_FILE" "$CHANGELOG"
rm versions.txt

