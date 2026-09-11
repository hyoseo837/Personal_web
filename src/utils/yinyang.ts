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
 * The cells on the straight line from `from` to `to`, excluding `from`. Pointer
 * samples during a fast drag land several cells apart, so the board fills the
 * gap between two samples rather than leaving holes in a stroke.
 */
export function line(n: number, from: number, to: number): number[] {
  const r1 = (to / n) | 0;
  const c1 = to % n;
  const r0 = (from / n) | 0;
  const c0 = from % n;
  const steps = Math.max(Math.abs(r1 - r0), Math.abs(c1 - c0)) || 1;
  const out: number[] = [];
  for (let k = 1; k <= steps; k++) {
    const r = r0 + Math.round(((r1 - r0) * k) / steps);
    const c = c0 + Math.round(((c1 - c0) * k) / steps);
    out.push(r * n + c);
  }
  return out;
}

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
    const c = i % n;
    let j = i - n;
    if (i >= n && !seen[j] && (g[j] === colour || g[j] === UNKNOWN)) { seen[j] = 1; queue.push(j); }
    j = i + n;
    if (j < N && !seen[j] && (g[j] === colour || g[j] === UNKNOWN)) { seen[j] = 1; queue.push(j); }
    j = i - 1;
    if (c > 0 && !seen[j] && (g[j] === colour || g[j] === UNKNOWN)) { seen[j] = 1; queue.push(j); }
    j = i + 1;
    if (c < n - 1 && !seen[j] && (g[j] === colour || g[j] === UNKNOWN)) { seen[j] = 1; queue.push(j); }
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
  const N = n * n;
  const seen = new Uint8Array(N);
  const queue = [i];
  seen[i] = 1;
  for (let head = 0; head < queue.length; head++) {
    const cur = queue[head];
    const c = cur % n;
    let j = cur - n;
    if (cur >= n && !seen[j] && g[j] === colour) { seen[j] = 1; queue.push(j); }
    j = cur + n;
    if (j < N && !seen[j] && g[j] === colour) { seen[j] = 1; queue.push(j); }
    j = cur - 1;
    if (c > 0 && !seen[j] && g[j] === colour) { seen[j] = 1; queue.push(j); }
    j = cur + 1;
    if (c < n - 1 && !seen[j] && g[j] === colour) { seen[j] = 1; queue.push(j); }
  }
  return queue.sort((a, b) => a - b);
}

/**
 * How many separate groups `colour` is currently in. The win condition wants
 * this at 1 for each colour, so it doubles as a distance-to-solved readout.
 *
 * One flood fill over the whole board rather than groupAt() per group, and the
 * neighbour tests are written out rather than going through a closure — this
 * runs on every repaint while dragging, so both cost real frames.
 */
export function groupCount(n: number, g: Int8Array, colour: number): number {
  const N = n * n;
  const seen = new Uint8Array(N);
  const stack: number[] = [];
  let count = 0;
  for (let s = 0; s < N; s++) {
    if (g[s] !== colour || seen[s]) continue;
    count++;
    seen[s] = 1;
    stack.push(s);
    while (stack.length) {
      const i = stack.pop()!;
      const c = i % n;
      let j = i - n;
      if (i >= n && !seen[j] && g[j] === colour) { seen[j] = 1; stack.push(j); }
      j = i + n;
      if (j < N && !seen[j] && g[j] === colour) { seen[j] = 1; stack.push(j); }
      j = i - 1;
      if (c > 0 && !seen[j] && g[j] === colour) { seen[j] = 1; stack.push(j); }
      j = i + 1;
      if (c < n - 1 && !seen[j] && g[j] === colour) { seen[j] = 1; stack.push(j); }
    }
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
