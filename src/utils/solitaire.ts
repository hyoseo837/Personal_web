/**
 * Rules for the Shenzhen solitaire at /games/solitaire, ported from
 * src/games/Solitaire/solitaireGame.js in hyoseo837/ddanzt.
 *
 * Piles are stored top-first: pile[0] is the exposed, playable card.
 * Rows 0-7 are the tableau, rows 8-10 the free cells.
 */

export type Card = { shape: string; number: number };

export interface Game {
  board: Card[][];
  /** Highest number sent to the holder, per suit. */
  completed: number[];
  /** Per free cell: the cat colour gathered into it, or null while it's usable. */
  spent: (string | null)[];
  /** The mouse has left for the middle holder. */
  flower: boolean;
}

export const SUITS = ['a', 'b', 'c'];
export const CATS = ['x', 'y', 'z'];
export const SPECIAL = [...CATS, 'bonus'];

export function deal(): Game {
  const deck: Card[] = [];
  for (const shape of SUITS)
    for (let n = 1; n <= 9; n++) deck.push({ shape, number: n });
  for (let i = 0; i < 4; i++)
    for (const shape of CATS) deck.push({ shape, number: i });
  deck.push({ shape: 'bonus', number: 0 });

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  const board: Card[][] = Array.from({ length: 11 }, () => []);
  deck.forEach((card, i) => board[i % 8].push(card));
  return { board, completed: [0, 0, 0], spent: [null, null, null], flower: false };
}

export const tops = (g: Game): (Card | null)[] => g.board.map((pile) => pile[0] ?? null);

export const isWon = (g: Game): boolean => tops(g).every((c) => c === null);

/** A run reads top-down: numbers ascend by one and suits must alternate. */
export function isSelectable(run: Card[]): boolean {
  if (run.length === 1) return true;
  if (run.some((c) => SPECIAL.includes(c.shape))) return false;
  return run.every(
    (c, i) =>
      i === run.length - 1 ||
      (c.shape !== run[i + 1].shape && c.number === run[i + 1].number - 1)
  );
}

/** Moves `count` cards off the top of `from` onto `to`. Returns whether it happened. */
export function move(g: Game, from: number, count: number, to: number): boolean {
  if (from === to) return false;
  const run = g.board[from].slice(0, count);
  if (run.length !== count || !count) return false;

  if (to >= 8) {
    // A cell takes exactly one card, and only if nothing — card or gathered
    // cats — already sits in it.
    if (count !== 1 || g.board[to].length || g.spent[to - 8] !== null) return false;
    g.board[to] = run;
    g.board[from] = g.board[from].slice(count);
    return true;
  }

  if (g.board[to].length) {
    const bottom = run[run.length - 1]; // the highest card of the run
    const target = g.board[to][0];
    if (SPECIAL.includes(bottom.shape) || SPECIAL.includes(target.shape)) return false;
    if (bottom.shape === target.shape) return false;
    if (bottom.number !== target.number - 1) return false;
  }
  g.board[to] = [...run, ...g.board[to]];
  g.board[from] = g.board[from].slice(count);
  return true;
}

export const catsExposed = (g: Game, shape: string): boolean =>
  tops(g).filter((c) => c && c.shape === shape).length === 4;

/** Gathers all four cats of `shape` into a free cell. Returns whether it happened. */
export function collect(g: Game, shape: string): boolean {
  if (!catsExposed(g, shape)) return false;
  const t = tops(g);
  const next = g.board.map((pile, i) =>
    t[i] && t[i]!.shape === shape ? pile.slice(1) : pile
  );
  const cell = [8, 9, 10].find((i) => !next[i].length && g.spent[i - 8] === null);
  // The original dropped the cats on the floor when every cell was taken.
  if (cell === undefined) return false;
  g.board = next;
  g.spent[cell - 8] = shape;
  return true;
}

/**
 * Row of the next card that leaves on its own, or -1. A number only goes up
 * once no card still on the table could need it as a landing spot.
 */
export function nextAuto(g: Game): number {
  const t = tops(g);
  for (let i = 0; i < 11; i++) {
    const c = t[i];
    if (!c) continue;
    if (c.shape === 'bonus') return i;
    const s = SUITS.indexOf(c.shape);
    if (
      s !== -1 &&
      c.number === g.completed[s] + 1 &&
      c.number <= Math.max(Math.min(...g.completed) + 1, 2)
    )
      return i;
  }
  return -1;
}

/** Applies the move `nextAuto` found. */
export function sendUp(g: Game, row: number): void {
  const c = g.board[row].shift()!;
  if (c.shape === 'bonus') g.flower = true;
  else g.completed[SUITS.indexOf(c.shape)] += 1;
}

/** Sending a card up by hand: one card, right suit, next in sequence. */
export function toFoundation(g: Game, row: number, count: number, shape: string): boolean {
  const s = SUITS.indexOf(shape);
  const run = g.board[row].slice(0, count);
  if (run.length !== 1 || run[0].shape !== shape) return false;
  if (run[0].number !== g.completed[s] + 1) return false;
  g.board[row] = g.board[row].slice(1);
  g.completed[s] += 1;
  return true;
}
