#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 \"commit message\""
  exit 1
}

if [ "$#" -ne 1 ]; then
  usage
fi

message="$1"

if [ -z "$message" ]; then
  usage
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" != "master" ]; then
  echo "Error: must be on 'master' (currently on '$branch')"
  exit 1
fi

echo "Fetching origin..."
git fetch origin

echo "Pulling with fast-forward only..."
git pull --ff-only origin master

echo "Running data integrity check..."
npm run test

git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit. Working tree clean."
  exit 0
fi

git commit -m "$message"

echo "Pushing to origin/master..."
git push origin master

echo "Done."