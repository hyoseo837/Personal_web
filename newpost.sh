#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 \"Post title\" <category>"
  echo "  category: TIL | brain-dumps | dev-log | tech-news"
  exit 1
}

if [ "$#" -ne 2 ]; then
  usage
fi

title="$1"
category="$2"

case "$category" in
  TIL|brain-dumps|dev-log|tech-news) ;;
  *)
    echo "Error: unknown category '$category'"
    usage
    ;;
esac

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
posts_dir="$script_dir/src/content/posts/$category"

if [ ! -d "$posts_dir" ]; then
  echo "Error: posts directory not found: $posts_dir"
  exit 1
fi

slug="$(echo "$title" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')"

if [ -z "$slug" ]; then
  echo "Error: could not derive a slug from title: $title"
  exit 1
fi

file_path="$posts_dir/$slug.md"

if [ -e "$file_path" ]; then
  echo "Error: file already exists: $file_path"
  exit 1
fi

today="$(date +%Y-%m-%d)"

cat > "$file_path" <<EOF
---
title: "$title"
date: $today
category: "$category"
topic: ""
area: ""
tags: []
summary: ""
related: []
---
Start writing your post here...

EOF

echo "Created: $file_path"
