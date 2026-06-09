#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <number> \"Problem title\" [difficulty] [language]"
  echo "  number:     LeetCode problem number, e.g. 1 or 0001"
  echo "  title:      problem title, e.g. \"Two Sum\""
  echo "  difficulty: Easy | Medium | Hard   (default: Easy)"
  echo "  language:   solution code fence language, e.g. python, c, cpp (default: python)"
  echo
  echo "Example: $0 1 \"Two Sum\" Easy python"
  exit 1
}

if [ "$#" -lt 2 ] || [ "$#" -gt 4 ]; then
  usage
fi

number_raw="$1"
title="$2"
difficulty="${3:-Easy}"
language="${4:-python}"

# Normalize / validate the problem number.
if ! [[ "$number_raw" =~ ^[0-9]+$ ]]; then
  echo "Error: number must be a positive integer, got '$number_raw'"
  usage
fi
number_padded="$(printf '%04d' "$((10#$number_raw))")"
number_plain="$((10#$number_raw))"

# Validate difficulty (case-insensitive), then normalize capitalization.
case "$(echo "$difficulty" | tr '[:upper:]' '[:lower:]')" in
  easy)   difficulty="Easy" ;;
  medium) difficulty="Medium" ;;
  hard)   difficulty="Hard" ;;
  *)
    echo "Error: difficulty must be Easy, Medium, or Hard, got '$difficulty'"
    usage
    ;;
esac

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
posts_dir="$script_dir/src/content/posts/leetcode"
template="$posts_dir/_template.md"

if [ ! -f "$template" ]; then
  echo "Error: template not found: $template"
  exit 1
fi

# Slug derived from the title: lowercase, non-alphanumerics -> hyphens.
slug="$(echo "$title" \
  | tr '[:upper:]' '[:lower:]' \
  | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//')"

if [ -z "$slug" ]; then
  echo "Error: could not derive a slug from title: $title"
  exit 1
fi

# The on-site filename is zero-padded number + slug (matches existing posts).
file_path="$posts_dir/$number_padded-$slug.md"

if [ -e "$file_path" ]; then
  echo "Error: file already exists: $file_path"
  exit 1
fi

today="$(date +%Y-%m-%d)"

# Render the template. Use sed with a control char as delimiter to avoid
# clashing with slashes/spaces in the values.
sed \
  -e "s|__NUMBER__|$number_plain|g" \
  -e "s|__TITLE__|$title|g" \
  -e "s|__DATE__|$today|g" \
  -e "s|__TOPIC__|$difficulty|g" \
  -e "s|__TAGS__|\"$difficulty\"|g" \
  -e "s|__DIFFICULTY__|$difficulty|g" \
  -e "s|__LCSLUG__|$slug|g" \
  -e "s|__LANG__|$language|g" \
  "$template" > "$file_path"

echo "Created: $file_path"
echo "Open it and fill in the solution. Frontmatter 'topic' defaults to the difficulty - tweak it to the real algorithm category (e.g. \"Hash Table\", \"Dynamic Programming\")."
