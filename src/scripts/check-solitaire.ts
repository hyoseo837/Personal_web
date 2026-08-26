/**
 * Self-check for the solitaire rules in src/utils/solitaire.ts.
 * Run by `npm run test`. Plain asserts, no framework.
 */
import assert from 'node:assert/strict';
import {
  type Card, type Game,
  deal, tops, isWon, isSelectable, move, catsExposed, collect,
  nextAuto, sendUp, toFoundation,
} from '../utils/solitaire.ts';

const c = (shape: string, number = 0): Card => ({ shape, number });

/** A game with the given tableau/cell contents; everything else empty. */
const game = (piles: Record<number, Card[]>, over: Partial<Game> = {}): Game => ({
  board: Array.from({ length: 11 }, (_, i) => piles[i] ?? []),
  completed: [0, 0, 0],
  spent: [null, null, null],
  flower: false,
  ...over,
});

console.log('🃏 Checking solitaire rules...');

// ---- The deal ----
{
  const g = deal();
  const all = g.board.flat();
  assert.equal(all.length, 40, 'deck is 40 cards');
  assert.equal(all.filter((x) => x.shape === 'bonus').length, 1, 'one mouse');
  for (const s of ['x', 'y', 'z'])
    assert.equal(all.filter((x) => x.shape === s).length, 4, `four ${s} cats`);
  for (const s of ['a', 'b', 'c']) {
    const ns = all.filter((x) => x.shape === s).map((x) => x.number).sort((p, q) => p - q);
    assert.deepEqual(ns, [1, 2, 3, 4, 5, 6, 7, 8, 9], `suit ${s} runs 1-9`);
  }
  for (let i = 0; i < 8; i++) assert.equal(g.board[i].length, 5, 'tableau deals 5 each');
  for (let i = 8; i < 11; i++) assert.equal(g.board[i].length, 0, 'cells start empty');
}

// ---- Runs ----
assert.equal(isSelectable([c('a', 5)]), true, 'a lone card always lifts');
assert.equal(isSelectable([c('x')]), true, 'a lone cat lifts');
assert.equal(isSelectable([c('a', 4), c('b', 5)]), true, 'ascending, alternating suits');
assert.equal(isSelectable([c('a', 4), c('a', 5)]), false, 'same suit does not stack');
assert.equal(isSelectable([c('a', 4), c('b', 6)]), false, 'gap in the sequence');
assert.equal(isSelectable([c('b', 5), c('a', 4)]), false, 'descending is backwards');
assert.equal(isSelectable([c('x'), c('a', 2)]), false, 'cats never travel in a run');
assert.equal(
  isSelectable([c('a', 3), c('b', 4), c('c', 5)]), true, 'a three-card run');

// ---- Moving onto the tableau ----
{
  const g = game({ 0: [c('a', 4)], 1: [c('b', 5)] });
  assert.equal(move(g, 0, 1, 1), true, 'red 4 lands on blue 5');
  assert.deepEqual(g.board[0], []);
  assert.equal(g.board[1].length, 2);
  assert.equal(g.board[1][0].number, 4, 'the moved card is now exposed');
}
{
  const g = game({ 0: [c('a', 4)], 1: [c('a', 5)] });
  assert.equal(move(g, 0, 1, 1), false, 'same suit is refused');
  assert.equal(g.board[0].length, 1, 'a refused move changes nothing');
}
assert.equal(move(game({ 0: [c('a', 4)], 1: [c('b', 6)] }), 0, 1, 1), false, 'wrong number');
assert.equal(move(game({ 0: [c('a', 4)], 1: [c('x')] }), 0, 1, 1), false, 'nothing sits on a cat');
assert.equal(move(game({ 0: [c('x')], 1: [c('b', 5)] }), 0, 1, 1), false, 'a cat sits on nothing');
assert.equal(move(game({ 0: [c('a', 4)] }), 0, 1, 0), false, 'a move to itself is a no-op');
{
  const g = game({ 0: [c('a', 4)] });
  assert.equal(move(g, 0, 1, 3), true, 'any card fills an empty column');
  assert.deepEqual(g.board[3], [c('a', 4)]);
}
{
  // A run moves as one, matched on its lowest card (the bottom of the run).
  const g = game({ 0: [c('a', 3), c('b', 4)], 1: [c('c', 5)] });
  assert.equal(move(g, 0, 2, 1), true, 'run lands on the card above its bottom');
  assert.deepEqual(g.board[1].map((x) => x.number), [3, 4, 5]);
  assert.deepEqual(g.board[0], []);
}
assert.equal(
  move(game({ 0: [c('a', 3), c('b', 4)], 1: [c('c', 4)] }), 0, 2, 1), false,
  'the run is matched on its bottom card, not its top');
assert.equal(
  move(game({ 0: [c('a', 3)] }), 0, 2, 1), false, 'cannot lift more cards than the pile holds');

// ---- Free cells ----
{
  const g = game({ 0: [c('a', 4), c('b', 9)] });
  assert.equal(move(g, 0, 1, 8), true, 'a cell takes one card');
  assert.equal(move(g, 0, 1, 8), false, 'and only one');
  assert.equal(move(g, 0, 2, 9), false, 'a run never goes into a cell');
}
assert.equal(
  move(game({ 0: [c('a', 4)] }, { spent: ['x', null, null] }), 0, 1, 8), false,
  'a cell holding gathered cats is not a landing spot');

// ---- Gathering cats ----
{
  const g = game({ 0: [c('x')], 1: [c('x')], 2: [c('x')], 3: [c('x'), c('a', 1)] });
  assert.equal(catsExposed(g, 'x'), true);
  assert.equal(collect(g, 'x'), true, 'four exposed cats gather');
  assert.equal(g.spent[0], 'x', 'they take the first usable cell');
  assert.deepEqual(g.board[3], [c('a', 1)], 'and uncover what was under them');
  assert.equal(tops(g).filter((t) => t && t.shape === 'x').length, 0, 'no cats left out');
}
assert.equal(
  collect(game({ 0: [c('x')], 1: [c('x')], 2: [c('x')] }), 'x'), false,
  'three cats are not enough');
{
  // A cat sitting in a cell counts as exposed, and frees that cell on the way out.
  const g = game({ 0: [c('x')], 1: [c('x')], 2: [c('x')], 8: [c('x')], 9: [c('a', 1)], 10: [c('b', 1)] });
  assert.equal(collect(g, 'x'), true, 'the cell-bound cat joins its own stack');
  assert.equal(g.spent[0], 'x');
}
{
  // The original ate the cats here; there is nowhere to put them.
  const g = game(
    { 0: [c('x')], 1: [c('x')], 2: [c('x')], 3: [c('x')], 9: [c('a', 1)], 10: [c('b', 1)] },
    { spent: ['y', null, null] }
  );
  assert.equal(collect(g, 'x'), false, 'no free cell means no gather');
  assert.equal(tops(g).filter((t) => t && t.shape === 'x').length, 4, 'the cats stay on the table');
}

// ---- Cards that leave on their own ----
assert.equal(nextAuto(game({ 3: [c('bonus')] })), 3, 'the mouse always leaves');
{
  const g = game({ 3: [c('bonus')] });
  sendUp(g, 3);
  assert.equal(g.flower, true, 'and lands in the middle holder');
  assert.deepEqual(g.board[3], []);
}
assert.equal(nextAuto(game({ 0: [c('a', 1)] })), 0, 'a 1 always goes up');
{
  const g = game({ 0: [c('a', 1)] });
  sendUp(g, 0);
  assert.deepEqual(g.completed, [1, 0, 0]);
}
assert.equal(
  nextAuto(game({ 0: [c('a', 2)] }, { completed: [1, 0, 0] })), 0,
  'a 2 goes up even with the other suits at zero');
assert.equal(
  nextAuto(game({ 0: [c('a', 3)] }, { completed: [2, 0, 0] })), -1,
  'a 3 waits: a blue or green 2 could still need it');
assert.equal(
  nextAuto(game({ 0: [c('a', 3)] }, { completed: [2, 2, 2] })), 0,
  'once the others are up to 2, the 3 follows');
assert.equal(
  nextAuto(game({ 0: [c('a', 5)] }, { completed: [1, 0, 0] })), -1,
  'out of sequence for its own suit');
assert.equal(nextAuto(game({ 0: [c('x')] })), -1, 'cats never leave on their own');
assert.equal(nextAuto(game({})), -1, 'an empty board has nothing to send');

// ---- Sending a card up by hand ----
{
  const g = game({ 0: [c('a', 4)] }, { completed: [3, 0, 0] });
  assert.equal(toFoundation(g, 0, 1, 'a'), true, 'the next card in the suit goes up');
  assert.deepEqual(g.completed, [4, 0, 0]);
  assert.deepEqual(g.board[0], []);
}
assert.equal(
  toFoundation(game({ 0: [c('a', 5)] }, { completed: [3, 0, 0] }), 0, 1, 'a'), false,
  'skipping a number is refused');
assert.equal(
  toFoundation(game({ 0: [c('a', 4)] }, { completed: [3, 0, 0] }), 0, 1, 'b'), false,
  'the wrong holder is refused');
assert.equal(
  toFoundation(game({ 0: [c('a', 3), c('b', 4)] }, { completed: [2, 0, 0] }), 0, 2, 'a'), false,
  'a run cannot go up');

// ---- Winning ----
assert.equal(isWon(game({})), true, 'a cleared table is a win');
assert.equal(isWon(game({}, { spent: ['x', 'y', 'z'] })), true, 'gathered cats do not block the win');
assert.equal(isWon(game({ 0: [c('a', 9)] })), false, 'one card left is not a win');

// ---- The pieces compose: a rigged board plays itself to a win ----
{
  // Three suits laid out in order, four cats a column, the mouse on its own.
  // Nothing here needs judgement — only that the auto-stacker, the gather and
  // the win check drive each other to an empty table.
  const g = game({
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => c('a', n)),
    1: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => c('b', n)),
    2: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => c('c', n)),
    3: [c('x'), c('y'), c('z')],
    4: [c('x'), c('y'), c('z')],
    5: [c('x'), c('y'), c('z')],
    6: [c('x'), c('y'), c('z')],
    7: [c('bonus')],
  });
  assert.equal(g.board.flat().length, 40, 'the rigged board is still a full deck');

  for (let step = 0; step < 200 && !isWon(g); step++) {
    const row = nextAuto(g);
    if (row !== -1) { sendUp(g, row); continue; }
    if (!['x', 'y', 'z'].some((shape) => collect(g, shape))) break;
  }

  assert.equal(isWon(g), true, 'the table clears');
  assert.deepEqual(g.completed, [9, 9, 9], 'all three suits reach 9');
  assert.equal(g.flower, true, 'the mouse left');
  assert.deepEqual(g.spent, ['x', 'y', 'z'], 'each cat colour took a cell');
}

console.log('✅ Solitaire rules check passed!');
