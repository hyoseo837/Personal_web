#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<USAGE
Usage: ./encode-demo.sh <input-file> <project-id> [--start SEC] [--duration SEC]

  <input-file>    Path to your raw recording (mov, mp4, mkv, webm, anything ffmpeg reads)
  <project-id>    Matches an id in src/data/projects.ts (e.g. ww-extension)
  --start SEC     Optional: start the clip at this many seconds in (default: 0)
  --duration SEC  Optional: clip duration in seconds (default: entire input)

Examples:
  ./encode-demo.sh ~/Downloads/raw.mov ww-extension
  ./encode-demo.sh raw.mov ww-extension --start 3 --duration 8

Output: public/projects/<project-id>.webm
  - VP9 codec, audio stripped (autoplay loops are muted anyway)
  - Scaled to max 1280px wide, aspect ratio preserved
  - CRF 32 (good balance of size and quality for screen recordings)
USAGE
  exit 1
}

if [ "$#" -lt 2 ]; then
  usage
fi

input="$1"
project_id="$2"
shift 2

start=0
duration=""

while [ "$#" -gt 0 ]; do
  case "$1" in
    --start)    start="$2"; shift 2 ;;
    --duration) duration="$2"; shift 2 ;;
    -h|--help)  usage ;;
    *)          echo "Error: unknown flag '$1'"; usage ;;
  esac
done

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg not found. Install it first:"
  echo "  sudo apt install ffmpeg     # Debian/Ubuntu/WSL"
  echo "  brew install ffmpeg         # macOS"
  exit 1
fi

if [ ! -f "$input" ]; then
  echo "Error: input file not found: $input"
  exit 1
fi

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
out_dir="$script_dir/public/projects"
out_file="$out_dir/$project_id.webm"

mkdir -p "$out_dir"

duration_args=()
if [ -n "$duration" ]; then
  duration_args=(-t "$duration")
fi

echo "Encoding $input → $out_file"
echo "  start=${start}s  duration=${duration:-full}"

ffmpeg -y -hide_banner -loglevel warning -stats \
  -ss "$start" \
  "${duration_args[@]}" \
  -i "$input" \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libvpx-vp9 \
  -crf 32 \
  -b:v 0 \
  -row-mt 1 \
  -threads 0 \
  -an \
  "$out_file"

size_bytes="$(stat -c%s "$out_file" 2>/dev/null || stat -f%z "$out_file")"
size_mb="$(awk "BEGIN {printf \"%.2f\", $size_bytes / 1024 / 1024}")"

cat <<DONE

✓ Wrote $out_file ($size_mb MB)

Next: add to src/data/projects.ts on the matching project entry:

    media: {
      type: 'video',
      src: '/projects/$project_id.webm',
    },
DONE
