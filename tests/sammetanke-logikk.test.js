// Kjør: node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');
const ST = require('../sammetanke/logikk.js');
const SPORSMAL = require('../sammetanke/sporsmal.js');

const A = (text) => ({ text: ST.clean(text), norm: ST.normalize(ST.clean(text)) });

test('normalisering ignorerer store bokstaver, mellomrom og avsluttende tegn', () => {
  for (const s of ['Kaffe', ' kaffe ', 'kaffe!', 'KAFFE...', '«kaffe»', 'kaffe ?']) assert.equal(ST.normalize(s), 'kaffe');
  assert.equal(ST.normalize('  varm   kakao '), 'varm kakao');
  assert.equal(ST.normalize('Æbleskiver'), 'æbleskiver');
  assert.equal(ST.normalize('!!!'), '');
  assert.notEqual(ST.normalize('kaffe'), ST.normalize('kafe'));
});

test('ett poeng per annen spiller med samme svar', () => {
  const parts = ['ole', 'tommy', 'einar', 'aleks'];
  const ans = { ole: A('lader'), tommy: A('Lader!'), einar: A(' lader '), aleks: A('tannbørste') };
  const r = ST.scoreRound(parts, ans);
  assert.deepEqual(r.points, { ole: 2, tommy: 2, einar: 2, aleks: 0 });
  assert.equal(r.full, false);
  assert.equal(r.rematch, true);
  assert.equal(r.groups[0].text, 'lader');
  assert.deepEqual(r.groups[0].pids, ['ole', 'tommy', 'einar']);
});

test('full klaff gir ett ekstra poeng og ingen omkamp', () => {
  const r = ST.scoreRound(['a', 'b', 'c'], { a: A('Kaffe'), b: A('kaffe!'), c: A(' kaffe ') });
  assert.equal(r.full, true);
  assert.equal(r.rematch, false);
  assert.deepEqual(r.points, { a: 3, b: 3, c: 3 });
});

test('manglende svar gir aldri treff og hindrer full klaff', () => {
  const r = ST.scoreRound(['a', 'b', 'c'], { a: A('øl'), b: A('Øl') });
  assert.equal(r.full, false);
  assert.deepEqual(r.missing, ['c']);
  assert.deepEqual(r.points, { a: 1, b: 1, c: 0 });
  assert.equal(r.rematch, false, 'bare ett distinkt svar gir ingen omkamp');
  const none = ST.scoreRound(['a', 'b'], {});
  assert.deepEqual(none.points, { a: 0, b: 0 });
  assert.equal(none.full, false);
});

test('omkamp: enighet gir bonus, bytte til hverandres svar oppdages', () => {
  const parts = ['ole', 'tommy'];
  const ans = { ole: A('kaffe'), tommy: A('øl') };
  const swap = ST.scoreRematch(parts, ans, { ole: 'øl', tommy: 'kaffe' });
  assert.equal(swap.unanimous, false);
  assert.deepEqual(swap.bonus, { ole: 0, tommy: 0 });
  assert.deepEqual(swap.swaps, [['ole', 'tommy']]);
  assert.ok(swap.moves.every(m => m.switched));
  const agree = ST.scoreRematch(parts, ans, { ole: 'kaffe', tommy: 'kaffe' });
  assert.equal(agree.unanimous, true);
  assert.deepEqual(agree.bonus, { ole: 1, tommy: 1 });
  const missing = ST.scoreRematch(['a', 'b', 'c'], { a: A('x'), b: A('y'), c: A('x') }, { a: 'x', c: 'x' });
  assert.equal(missing.unanimous, false, 'alle som startet runden må velge');
});

test('poengsum regnes fra loggen og blir lik uansett hvor ofte den regnes ut', () => {
  const log = [
    { points: { a: 2, b: 2, c: 0 }, bonus: { a: 1, b: 1, c: 1 } },
    { points: { a: 0, b: 1, c: 1 }, bonus: {} },
  ];
  assert.deepEqual(ST.totals(['a', 'b', 'c'], log), { a: 3, b: 4, c: 2 });
  assert.deepEqual(ST.totals(['a', 'b', 'c'], log), ST.totals(['a', 'b', 'c'], log));
});

test('delt seier og tankevenn', () => {
  const s = ST.standings([{ pid: 'a', name: 'Ole' }, { pid: 'b', name: 'Tommy' }, { pid: 'c', name: 'Einar' }], { a: 5, b: 5, c: 2 });
  assert.deepEqual(s.map(p => p.place), [1, 1, 3]);
  const log = [{ groups: [{ pids: ['a', 'b'] }] }, { groups: [{ pids: ['a', 'b', 'c'] }] }, { groups: [{ pids: ['a', 'c'] }] }];
  assert.deepEqual(ST.bestBuddies('b', log), { n: 2, who: ['a'] });
  assert.deepEqual(ST.bestBuddies('a', log).who.sort(), ['b', 'c']);
});

test('spørsmålsbanken: minst 40, unike, fem uten gjentakelse per spill', () => {
  assert.ok(SPORSMAL.length >= 40);
  assert.equal(new Set(SPORSMAL).size, SPORSMAL.length);
  for (let i = 0; i < 200; i++) {
    const d = ST.drawQuestions(SPORSMAL.length, 5, []);
    assert.equal(new Set(d).size, 5);
  }
  const first = ST.drawQuestions(SPORSMAL.length, 5, []);
  const second = ST.drawQuestions(SPORSMAL.length, 5, first);
  assert.equal(second.filter(i => first.includes(i)).length, 0, 'spill igjen gir nye spørsmål');
});
