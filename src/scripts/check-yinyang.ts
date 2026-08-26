/**
 * Self-check for the Yin-Yang rules in src/utils/yinyang.ts, for the decoder in
 * fetch-yinyang.ts, and for the committed puzzle bank.
 * Run by `npm run test`. Plain asserts, no framework, no network.
 */
import assert from 'node:assert/strict';
import {
  BLACK, WHITE, UNKNOWN,
  at, parseClues, formatClues, monoSquares, unreachable, check,
} from '../utils/yinyang.ts';
import { decodeTask, parsePage } from './fetch-yinyang.ts';
import bank from '../data/yinyang.json' with { type: 'json' };

/** Grid from rows of 'B'/'W'/'.' — reads like the board looks. */
const g = (...rows: string[]) => parseClues(rows.length, rows.join(''));

console.log('☯️  Checking Yin-Yang rules...');

// ---- Reading and writing ----
{
  const grid = g('BW', 'WB');
  assert.equal(grid[at(2, 0, 0)], BLACK);
  assert.equal(grid[at(2, 0, 1)], WHITE);
  assert.equal(formatClues(grid), 'BWWB', 'round-trips');
  assert.equal(parseClues(2, 'B..W')[1], UNKNOWN, 'a dot is an empty cell');
}

// ---- Rule 3: no 2x2 of one colour ----
assert.deepEqual(monoSquares(2, g('BB', 'BB')), [3], 'an all-black square is flagged at its bottom-right');
assert.deepEqual(monoSquares(2, g('WW', 'WW')), [3], 'and an all-white one');
assert.deepEqual(monoSquares(2, g('BW', 'WB')), [], 'a checkerboard breaks no square rule');
assert.deepEqual(monoSquares(2, g('BB', 'B.')), [], 'an unfilled square is not yet a violation');
assert.deepEqual(
  monoSquares(3, g('BBB', 'BBB', 'WWW')).sort((a, b) => a - b), [4, 5],
  'both squares of a 2x3 black block are flagged');

// ---- Rules 1 and 2: connectivity ----
assert.deepEqual(unreachable(3, g('BBB', 'WWW', 'BBB'), BLACK).sort((a, b) => a - b), [6, 7, 8],
  'black split by a white wall');
assert.deepEqual(unreachable(3, g('BBB', 'BWW', 'BWW'), BLACK), [], 'an L of black is connected');
assert.deepEqual(unreachable(2, g('BW', 'WB'), BLACK), [3], 'diagonal black cells do not touch');
assert.deepEqual(unreachable(3, g('B..', '...', '..B'), BLACK), [],
  'unknown cells can still carry a connection, so nothing is ruled out yet');
assert.deepEqual(unreachable(3, g('BWB', 'WWW', 'WWW'), BLACK), [2],
  'a sealed-off black cell is unreachable');

// ---- The player's win check ----
{
  const done = check(3, g('BBB', 'BWW', 'BWW'));
  assert.equal(done.filled, true);
  assert.equal(done.solved, false, 'that white block is a 2x2 — not solved');
  assert.deepEqual(done.mono, [8]);
}
assert.equal(check(3, g('BBW', 'BWW', 'BBW')).solved, true,
  'both colours connected, no mono square');
{
  const partial = check(3, g('BB.', 'BWW', 'BWW'));
  assert.equal(partial.filled, false);
  assert.equal(partial.solved, false, 'an unfinished grid is never solved');
  assert.deepEqual(partial.splitBlack, [], 'connectivity is not judged until the grid is full');
}
assert.equal(check(2, g('BW', 'WB')).solved, false, 'a full checkerboard leaves both colours split');

/* --------------------------------------------------- the upstream decoder  */
// A lowercase letter is a run of 1..26 empty cells; B and W are single givens.

assert.equal(decodeTask('a', 1), '.', "'a' is one empty cell");
assert.equal(decodeTask('z', 26), '.'.repeat(26), "'z' is twenty-six");
assert.equal(decodeTask('za', 27), '.'.repeat(27), 'consecutive letters carry a longer run');
assert.equal(decodeTask('B', 1), 'B', 'a given passes straight through');
assert.equal(decodeTask('eBzaW', 5 + 1 + 27 + 1), `.....B${'.'.repeat(27)}W`,
  'runs and givens interleave');
assert.throws(() => decodeTask('aQ', 2), /unexpected character/, 'an unknown symbol is refused');
assert.throws(() => decodeTask('a', 9), /decoded 1 cells, expected 9/,
  'a length that disagrees with the declared board is refused');

// These guard my decoder against their page changing, not their puzzle: a page
// that no longer looks like the daily special must fail loudly rather than
// write nonsense into the bank.
const page = (over: Record<string, string> = {}) => {
  const f = { ident: 'yin-yang.special.daily', w: '2', h: '2', date: '2026-08-26', task: 'BWWB', ...over };
  return `var task = '${f.task}'; ident: '${f.ident}', puzzleWidth: ${f.w}, puzzleHeight: ${f.h}, specialDate: '${f.date}'`;
};
{
  const ok = parsePage(page());
  assert.equal(ok.date, '2026-08-26');
  assert.deepEqual(ok.puzzle, { n: 2, clues: 'BWWB' });
}
assert.throws(() => parsePage(page({ ident: 'yin-yang.specific.25x25-hard' })), /expected the daily special/);
assert.throws(() => parsePage(page({ w: '3' })), /square board/);
assert.throws(() => parsePage(page({ date: 'yesterday' })), /odd specialDate/);
assert.throws(() => parsePage(page({ task: 'BBBB' })), /single-colour 2x2/,
  'givens that already break rule 3 mean the decode drifted');
assert.throws(() => parsePage(page({ task: 'd' })), /all one colour/);
assert.throws(() => parsePage('nothing useful here'), /could not find/);

/* ------------------------------------------------------- the shipped bank  */

const entries = Object.entries(bank as Record<string, { n: number; clues: string }>);
assert.ok(entries.length, 'the bank has at least one puzzle — run `npm run fetch:yinyang`');

for (const [date, puzzle] of entries) {
  assert.match(date, /^\d{4}-\d{2}-\d{2}$/, `${date}: keyed by calendar date`);
  assert.ok(Number.isInteger(puzzle.n) && puzzle.n > 1, `${date}: sane board size`);
  assert.equal(puzzle.clues.length, puzzle.n ** 2, `${date}: clue string is n^2 long`);
  assert.match(puzzle.clues, /^[BW.]+$/, `${date}: only B, W and . appear`);

  const given = puzzle.clues.replace(/\./g, '').length;
  assert.ok(given > 0 && given < puzzle.n ** 2, `${date}: a sane number of clues`);

  // Givens are a subset of a valid solution, so they cannot contain a mono
  // square. One showing up means the stored board is corrupt.
  assert.deepEqual(monoSquares(puzzle.n, parseClues(puzzle.n, puzzle.clues)), [],
    `${date}: givens contain a single-colour 2x2`);
}

const sizes = [...new Set(entries.map(([, p]) => p.n))].map((n) => `${n}x${n}`).join(', ');
console.log(`   ${entries.length} daily puzzle(s) in the bank (${sizes}), decoder and rules verified`);
console.log('✅ Yin-Yang rules check passed!');
