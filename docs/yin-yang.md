# Yin-Yang daily puzzle

`/games/yin-yang` plays the **Special Daily** 30×30 board from
[puzzle-yin-yang.com](https://www.puzzle-yin-yang.com), reproduced with the site
creator's permission.

## How the puzzle gets here

`npm run fetch:yinyang` requests `https://www.puzzle-yin-yang.com/?size=15`,
pulls three things out of the page — `task`, `puzzleWidth`/`puzzleHeight` and
`specialDate` — and appends the decoded board to `src/data/yinyang.json`, keyed
by that date. Re-running on the same day is a no-op, so it is safe to call as
often as you like. One request per run, with a contact address in the
user-agent.

The bank is committed data. Nothing is fetched at build time or in the browser.

### The encoding

`task` is a run-length string over the board read row by row:

| symbol | meaning |
| --- | --- |
| `a` … `z` | a run of 1 … 26 empty cells |
| `B` | one black given |
| `W` | one white given |

Runs longer than 26 are written as consecutive letters, so `za` is 27 empties.
`decodeTask` in `src/scripts/fetch-yinyang.ts` implements this, and
`check-yinyang.ts` tests it.

### Why there is no backfill

Only *today's* special is reachable. `?size=15` ignores both `specid` and `day`
and always returns the current date, and `specific.php` covers only the regular
sizes (0–14), not the specials. So the bank cannot be seeded in one go — it
grows one puzzle per day, which is why the fetch wants a schedule.

## The schedule

`.github/workflows/daily-yinyang.yml` runs the fetch twice a day, runs the
tests, and commits `src/data/yinyang.json` when it grew. It runs twice because
the site's midnight is not UTC and a duplicate fetch costs one request.

**If Cloudflare Pages already builds on push to the default branch, that commit
is all you need.** If it does not, add a Pages deploy hook URL as a repository
secret named `CLOUDFLARE_DEPLOY_HOOK`; the workflow's last step fires it when
the secret exists and skips when it does not.

Without a schedule the puzzle freezes at whatever your last deploy fetched. The
page handles that gracefully — it serves the newest board that is not in the
future and always prints the date that board actually came from — but it will
stop changing.

## What the site does and does not do

The page only ever **checks** a board, using the three published rules in
`src/utils/yinyang.ts`:

1. every black cell is orthogonally connected to every other black cell,
2. every white cell likewise,
3. no 2×2 area is a single colour.

There is no solver and no generator any more. Uniqueness is upstream's
guarantee; a 30×30 is well beyond what a plain backtracking solver will chew
through, and the game does not need one — `check` is O(n²) and runs on the
player's own grid.

The validation in `parsePage` is not second-guessing the puzzle. It guards the
*decoder* against the page changing shape: a given is always a subset of a valid
solution, so it can never contain a single-colour 2×2, and a decode that drifted
almost certainly would. Without those guards a changed encoding would write a
corrupt board into the bank instead of failing the fetch.

## Playing

- Click a cell to cycle it empty → black → white; right-click cycles back.
- Drag to paint a run of cells in one colour.
- <kbd>Z</kbd> undoes the last gesture — a whole drag comes back in one go.
- Progress is kept in `localStorage`, along with a solve count and a daily
  streak. A streak stands only if it was kept today or yesterday, and reloading
  a finished board cannot inflate it.
