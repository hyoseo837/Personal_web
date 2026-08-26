/**
 * Yin-Yang (Shirokuro) rules, solver and presentation transforms.
 *
 * A solved grid is one where:
 *   1. every black cell is orthogonally connected to every other black cell,
 *   2. every white cell is orthogonally connected to every other white cell,
 *   3. no 2x2 area is a single colour.
 *
 * Puzzles arrive already made, from puzzle-yin-yang.com's Special Daily, so
 * nothing here solves or generates. These are just the rules, used to tell the
 * player how their board is doing.
 */

export const WHITE = 0;
export const BLACK = 1;
export const UNKNOWN = -1;

/** A clue string is row-major, one char per cell: 'B', 'W' or '.' for empty. */
export interface Puzzle {
  n: number;
  clues: string;
}

export const at = (n: number, r: number, c: number) => r * n + c;

export function parseClues(n: number, clues: string): Int8Array {
  const g = new Int8Array(n * n).fill(UNKNOWN);
  for (let i = 0; i < n * n; i++) {
    if (clues[i] === 'B') g[i] = BLACK;
    else if (clues[i] === 'W') g[i] = WHITE;
  }
  return g;
}

export const formatClues = (g: Int8Array): string =>
  Array.from(g, (v) => (v === BLACK ? 'B' : v === WHITE ? 'W' : '.')).join('');

/**
 * The 2x2 squares that are a single colour. Every 2x2 square is identified by
 * its bottom-right cell, which is what the solver relies on: filling row-major,
 * a square becomes checkable exactly when that cell is assigned.
 */
export function monoSquares(n: number, g: Int8Array): number[] {
  const bad: number[] = [];
  for (let r = 1; r < n; r++)
    for (let c = 1; c < n; c++) {
      const i = at(n, r, c);
      const v = g[i];
      if (v === UNKNOWN) continue;
      if (g[i - 1] === v && g[i - n] === v && g[i - n - 1] === v) bad.push(i);
    }
  return bad;
}

/**
 * Cells of `colour` that cannot be reached from the first one, travelling only
 * through cells that are already `colour` or still unknown. With no unknowns
 * left this is exact connectivity; with unknowns it is a necessary condition,
 * which is what makes it a sound pruning test.
 */
export function unreachable(n: number, g: Int8Array, colour: number): number[] {
  const N = n * n;
  const own: number[] = [];
  for (let i = 0; i < N; i++) if (g[i] === colour) own.push(i);
  if (own.length === 0) return [];

  const seen = new Uint8Array(N);
  const queue = [own[0]];
  seen[own[0]] = 1;
  for (let head = 0; head < queue.length; head++) {
    const i = queue[head];
    const r = (i / n) | 0;
    const c = i - r * n;
    const push = (j: number) => {
      if (seen[j] || (g[j] !== colour && g[j] !== UNKNOWN)) return;
      seen[j] = 1;
      queue.push(j);
    };
    if (r > 0) push(i - n);
    if (r < n - 1) push(i + n);
    if (c > 0) push(i - 1);
    if (c < n - 1) push(i + 1);
  }
  return own.filter((i) => !seen[i]);
}

/**
 * The connected group containing cell `i`, as a sorted list of cell indices —
 * or an empty list if that cell is still blank. Orthogonal only; diagonals do
 * not join, which is the whole point of rules 1 and 2.
 */
export function groupAt(n: number, g: Int8Array, i: number): number[] {
  const colour = g[i];
  if (colour === UNKNOWN) return [];
  const seen = new Uint8Array(n * n);
  const queue = [i];
  seen[i] = 1;
  for (let head = 0; head < queue.length; head++) {
    const cur = queue[head];
    const r = (cur / n) | 0;
    const c = cur - r * n;
    const push = (j: number) => {
      if (seen[j] || g[j] !== colour) return;
      seen[j] = 1;
      queue.push(j);
    };
    if (r > 0) push(cur - n);
    if (r < n - 1) push(cur + n);
    if (c > 0) push(cur - 1);
    if (c < n - 1) push(cur + 1);
  }
  return queue.sort((a, b) => a - b);
}

/**
 * How many separate groups `colour` is currently in. The win condition wants
 * this at 1 for each colour, so it doubles as a distance-to-solved readout.
 */
export function groupCount(n: number, g: Int8Array, colour: number): number {
  const N = n * n;
  const seen = new Uint8Array(N);
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (g[i] !== colour || seen[i]) continue;
    count++;
    for (const j of groupAt(n, g, i)) seen[j] = 1;
  }
  return count;
}

export interface Check {
  filled: boolean;
  mono: number[];
  splitBlack: number[];
  splitWhite: number[];
  solved: boolean;
}

/** What the board is doing wrong right now — drives the player's feedback. */
export function check(n: number, g: Int8Array): Check {
  const filled = !g.includes(UNKNOWN);
  const mono = monoSquares(n, g);
  const splitBlack = filled ? unreachable(n, g, BLACK) : [];
  const splitWhite = filled ? unreachable(n, g, WHITE) : [];
  return {
    filled,
    mono,
    splitBlack,
    splitWhite,
    solved: filled && !mono.length && !splitBlack.length && !splitWhite.length,
  };
}
