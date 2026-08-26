/**
 * Pulls the Special Daily Yin-Yang (30x30) from puzzle-yin-yang.com and appends
 * it to src/data/yinyang.json.
 *
 *   npm run fetch:yinyang
 *
 * Used with the site creator's permission. The site only ever serves *today's*
 * special — `specid` and `day` parameters are ignored, and specific.php covers
 * only the regular sizes — so there is no archive to backfill from. The bank
 * therefore grows one puzzle per run, which is why this wants to run daily on a
 * schedule; see docs/yin-yang.md.
 *
 * Re-running on the same day is a no-op, so it is safe to call as often as you
 * like. One request per run.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parseClues, monoSquares } from '../utils/yinyang.ts';

const URL = 'https://www.puzzle-yin-yang.com/?size=15';
const AGENT = 'hyoseo.dev daily puzzle fetcher (contact hyoseo837@gmail.com)';
const OUT = path.join(process.cwd(), 'src/data/yinyang.json');

export interface Daily { n: number; clues: string; }
export type Bank = Record<string, Daily>;

/**
 * The site encodes a board as a run-length string: a lowercase letter is a run
 * of 1..26 empty cells ('a' = 1 ... 'z' = 26), and 'B' / 'W' is a single given
 * stone. Runs longer than 26 are written as consecutive letters.
 */
export function decodeTask(task: string, cells: number): string {
  let out = '';
  for (const ch of task) {
    if (ch === 'B' || ch === 'W') out += ch;
    else if (ch >= 'a' && ch <= 'z') out += '.'.repeat(ch.charCodeAt(0) - 96);
    else throw new Error(`unexpected character ${JSON.stringify(ch)} in task`);
  }
  if (out.length !== cells)
    throw new Error(`decoded ${out.length} cells, expected ${cells}`);
  return out;
}

const grab = (html: string, re: RegExp, what: string) => {
  const m = html.match(re);
  if (!m) throw new Error(`could not find ${what} in the page`);
  return m[1];
};

export function parsePage(html: string): { date: string; puzzle: Daily } {
  const ident = grab(html, /ident:\s*'([^']*)'/, 'ident');
  if (ident !== 'yin-yang.special.daily')
    throw new Error(`expected the daily special, got "${ident}"`);

  const width = Number(grab(html, /puzzleWidth:\s*(\d+)/, 'puzzleWidth'));
  const height = Number(grab(html, /puzzleHeight:\s*(\d+)/, 'puzzleHeight'));
  if (width !== height) throw new Error(`expected a square board, got ${width}x${height}`);

  const date = grab(html, /specialDate:\s*'([^']*)'/, 'specialDate');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`odd specialDate "${date}"`);

  const clues = decodeTask(grab(html, /var task = '([^']*)'/, 'task'), width * height);

  // The givens alone must not already break rule 3. Cheap, and it catches a
  // changed encoding far more reliably than a length check alone.
  const bad = monoSquares(width, parseClues(width, clues));
  if (bad.length) throw new Error(`the givens contain ${bad.length} single-colour 2x2 squares`);
  if (!clues.includes('B') || !clues.includes('W'))
    throw new Error('the givens are all one colour');

  return { date, puzzle: { n: width, clues } };
}

async function main() {
  const bank: Bank = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf-8')) : {};

  const res = await fetch(URL, { headers: { 'User-Agent': AGENT } });
  if (!res.ok) throw new Error(`${URL} returned ${res.status} ${res.statusText}`);

  const { date, puzzle } = parsePage(await res.text());

  if (bank[date]) {
    console.log(`☯️  ${date} is already in the bank (${Object.keys(bank).length} total) — nothing to do.`);
    return;
  }

  bank[date] = puzzle;
  const sorted: Bank = {};
  for (const key of Object.keys(bank).sort()) sorted[key] = bank[key];
  fs.writeFileSync(OUT, JSON.stringify(sorted, null, 1) + '\n');

  const given = puzzle.clues.length - (puzzle.clues.match(/\./g)?.length ?? 0);
  console.log(
    `☯️  Added ${date}: ${puzzle.n}x${puzzle.n}, ${given}/${puzzle.n ** 2} clues. ` +
    `Bank now holds ${Object.keys(sorted).length} puzzles.`
  );
}

// Only run when invoked directly, so the checks can import the parser.
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(`✗ ${err.message}`);
    process.exit(1);
  });
}
