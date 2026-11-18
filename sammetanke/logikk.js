/* Samme Tanke – ren spillogikk uten DOM og nettverk.
   Brukes av nettleseren (window.ST) og av testene i Node (module.exports). */
(function(root){
"use strict";

const MAX_LEN = 30;

/* Sammenligning: ignorer store/små bokstaver, ekstra mellomrom,
   avsluttende tegnsetting og anførselstegn rundt svaret. */
function normalize(s){
  return String(s == null ? '' : s)
    .normalize('NFC')
    .toLocaleLowerCase('nb')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^["'«»“”„‘’]+/, '')
    .replace(/[\s.,!?;:…"'«»“”„‘’)]+$/, '')
    .trim();
}
/* Teksten som vises: original, men uten ekstra mellomrom og kuttet til maks lengde. */
function clean(s){
  return String(s == null ? '' : s).replace(/\s+/g, ' ').trim().slice(0, MAX_LEN);
}

/* Grupperer førsteforsøket.
   participants: pid-er som startet runden (i fast rekkefølge)
   answers: { pid: {text, norm} } – bare de som låste svar
   Returnerer grupper (størst først), poeng per spiller og om det ble full klaff. */
function scoreRound(participants, answers){
  const byKey = new Map();
  for(const pid of participants){
    const a = answers[pid];
    if(!a || !a.norm) continue;
    if(!byKey.has(a.norm)) byKey.set(a.norm, []);
    byKey.get(a.norm).push(pid);
  }
  const groups = [...byKey.entries()].map(([key, pids]) => ({
    key, pids, text: displayText(pids.map(p => answers[p].text)), points: pids.length - 1
  }));
  groups.sort((a, b) => b.pids.length - a.pids.length || a.text.localeCompare(b.text, 'nb'));
  const missing = participants.filter(p => !answers[p] || !answers[p].norm);
  const points = {};
  for(const pid of participants) points[pid] = 0;
  for(const g of groups) for(const pid of g.pids) points[pid] = g.points;
  const full = participants.length >= 2 && missing.length === 0 && groups.length === 1;
  if(full) for(const pid of participants) points[pid] += 1;
  return { groups, missing, points, full, rematch: groups.length >= 2 };
}
/* Mest brukte skrivemåte i gruppen; ved likhet den første. */
function displayText(texts){
  const count = new Map();
  let best = texts[0], bestN = 0;
  for(const t of texts){
    const n = (count.get(t) || 0) + 1; count.set(t, n);
    if(n > bestN){ best = t; bestN = n; }
  }
  return best;
}

/* Omkampen. picks: { pid: key } – bare de som valgte.
   Bonus bare hvis ALLE som startet runden valgte samme alternativ. */
function scoreRematch(participants, answers, picks){
  const chosen = participants.map(p => picks[p]).filter(Boolean);
  const unanimous = participants.length >= 2 && chosen.length === participants.length && chosen.every(k => k === chosen[0]);
  const moves = participants.map(pid => {
    const from = answers[pid] && answers[pid].norm ? answers[pid].norm : null;
    const to = picks[pid] || null;
    return { pid, from, to, switched: !!(from && to && from !== to) };
  });
  /* Par som byttet til hverandres svar. */
  const swaps = [];
  for(let i = 0; i < moves.length; i++) for(let j = i + 1; j < moves.length; j++){
    const a = moves[i], b = moves[j];
    if(a.switched && b.switched && a.to === b.from && b.to === a.from) swaps.push([a.pid, b.pid]);
  }
  const bonus = {};
  for(const pid of participants) bonus[pid] = unanimous ? 1 : 0;
  return { unanimous, key: unanimous ? chosen[0] : null, bonus, moves, swaps };
}

/* Poengsummen regnes alltid ut fra rundeloggen, så ingen hendelse kan telle to ganger. */
function totals(pids, log){
  const t = {};
  for(const pid of pids) t[pid] = 0;
  for(const r of log){
    for(const [pid, n] of Object.entries(r.points || {})) if(pid in t) t[pid] += n;
    for(const [pid, n] of Object.entries(r.bonus || {})) if(pid in t) t[pid] += n;
  }
  return t;
}

/* Hvem matchet du oftest med i førsteforsøket? */
function matchCounts(log){
  const m = {};
  for(const r of log) for(const g of r.groups || []) for(const a of g.pids) for(const b of g.pids){
    if(a === b) continue;
    (m[a] = m[a] || {})[b] = (m[a][b] || 0) + 1;
  }
  return m;
}
function bestBuddies(pid, log){
  const row = matchCounts(log)[pid] || {};
  let n = 0, who = [];
  for(const [b, c] of Object.entries(row)){
    if(c > n){ n = c; who = [b]; } else if(c === n) who.push(b);
  }
  return { n, who };
}

/* Rangering med delte plasser. */
function standings(players, scores){
  const list = players.map(p => ({ ...p, score: scores[p.pid] || 0 }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'nb'));
  let place = 0, prev = null;
  list.forEach((p, i) => { if(p.score !== prev) place = i + 1; prev = p.score; p.place = place; });
  return list;
}

/* Trekk n unike spørsmål, helst blant dem som ikke er brukt i rommet før. */
function drawQuestions(total, n, used, rnd = Math.random){
  const usedSet = new Set(used || []);
  let pool = [...Array(total).keys()].filter(i => !usedSet.has(i));
  if(pool.length < n) pool = [...Array(total).keys()];
  for(let i = pool.length - 1; i > 0; i--){
    const j = Math.floor(rnd() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}

const api = { MAX_LEN, normalize, clean, scoreRound, scoreRematch, totals, matchCounts, bestBuddies, standings, drawQuestions };
if(typeof module !== 'undefined' && module.exports) module.exports = api;
else root.ST = api;
})(typeof window !== 'undefined' ? window : globalThis);
