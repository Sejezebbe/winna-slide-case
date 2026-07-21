#!/usr/bin/env node
/*
 * Winna "Slide" / VIP Slide — reproducible verification.
 * Formulas taken verbatim from Winna's live code + help-center docs.
 *
 *   PUBLIC Slide:  result = max(1, (2^32/(int+1)) * 0.965)               // 96.5% RTP, no nonce
 *                  int = first 4 bytes of HMAC_SHA256(serverSeed, clientSeed)
 *   Limbo (= VIP): result = max(1, floor((edge/float) * 100)/100)        // documented 0.99; VIP ran 0.98
 *                  float = first 4 bytes of HMAC_SHA256(serverSeed, `${clientSeed}:${nonce}:${cursor}`)
 *
 * Sections C/D are the decisive part: Winna's seed-chain commitment.
 * Run:  node verify_slide.js
 */
const crypto = require('crypto');
const sha256 = s => crypto.createHash('sha256').update(s).digest('hex');

function slidePublic(serverSeed, clientSeed) {
  const int = crypto.createHmac('sha256', serverSeed).update(clientSeed).digest().readUInt32BE(0);
  return Math.max(1, Math.floor(((0x100000000 / (int + 1)) * 0.965) * 100) / 100);
}
function limbo(serverSeed, clientSeed, nonce = 0, cursor = 0, edge = 0.99) {
  const buf = crypto.createHmac('sha256', serverSeed).update(`${clientSeed}:${nonce}:${cursor}`).digest();
  let f = 0; for (let i = 0; i < 4; i++) f += buf[i] / 256 ** (i + 1);
  return Math.max(1, Math.floor((edge / f) * 100) / 100);
}
// chain helper: hash `seed` forward up to `n` times, return #iterations to reach `target` (or null)
function reach(seed, target, n, mode = 'utf8') {
  let cur = seed;
  for (let k = 1; k <= n; k++) {
    cur = mode === 'utf8' ? sha256(cur) : crypto.createHash('sha256').update(Buffer.from(cur, 'hex')).digest('hex');
    if (cur === target) return k;
  }
  return null;
}

const VIP = '000000000000000000033ab71b5fa7edcafe388e5f49719f1de8e1f8d0670460';   // block 779588, mined 2023-03-06
const PUB = '0000000000000000000053bdde6de8d188d43677e7706544932b08a78965aa6f';   // block 950020, mined 2026-05-19
const PUB_TERMINATING = '890cb303b01ab53e1827558ecefe03e6f145d40589c9cc0d13cf1d785d68642a'; // public seeding-event commitment
const DISPUTED = [
  { id: '1137912977', seed: 'fd5c47777a3bdac3c1043c39502a925fa7b1012fb79c3682f138d90430988cc4', charged: 2.38 },
  { id: '1137916722', seed: '604162685c66487f148ab53a1ae3f05418146276520df08d7f608adae623ac95', charged: 2.33 },
  { id: '1137925965', seed: '933b74433ef7a3136db1c720e2d3e0bfe5f5bee58a7cabfc49eeebbe8010119c', charged: 2.69 },
];
const PUBLIC_BETS = [
  { id: '80030', seed: '4e52031e0ff6ec51fdea9ff41afba0c5296f9dba08c52b14d4e644724e446abf', shown: 39.08 },
  { id: '82857', seed: 'e9d75ffa5fcf261d78583141350c368ac003255ee4e454799a7cf1a5ca4d4d40', shown: 2.79 },
];

console.log('=== A. Public Slide formula validated on live bets (method is correct) ===');
for (const b of PUBLIC_BETS) {
  const r = slidePublic(b.seed, PUB);
  console.log(`  bet ${b.id}: ${r.toFixed(2)}x vs ${b.shown}x  -> ${r === b.shown ? 'MATCH' : 'NO'}`);
}

console.log('\n=== B. Disputed VIP rounds reproduce under Limbo @ 98% (data is internally consistent) ===');
for (const b of DISPUTED) {
  const l98 = limbo(b.seed, VIP, 0, 0, 0.98);
  console.log(`  ${b.id}: ${l98.toFixed(2)}x vs charged ${b.charged.toFixed(2)}x  -> ${l98 === b.charged ? 'MATCH' : 'NO'}`);
}
console.log('  (Reproduction is necessary but NOT sufficient — it shows the numbers are self-consistent,');
console.log('   not that the seeds were committed before the bet. Section C tests that.)');

console.log('\n=== C. Seed-chain test (rules OUT the chain model; operator confirmed it was not a chain) ===');
console.log('Winna publishes a 10M-hash chain; each round seed = SHA256(next). The public seeding event');
console.log(`commits to terminating hash ${PUB_TERMINATING.slice(0, 16)}...`);
console.log('\n  Public Slide seeds chain to that commitment, at a depth equal to the round number:');
for (const b of PUBLIC_BETS) {
  const k = reach(b.seed, PUB_TERMINATING, Number(b.id) + 10);
  console.log(`    bet ${b.id}: reaches terminating hash in ${k === null ? 'NO LINK' : k + ' hashes'}  ${k === Number(b.id) ? '(= its round number ✓)' : ''}`);
}
console.log('\n  Disputed VIP seeds chain to NOTHING — not to each other, not to any commitment:');
const N = 2_000_000; // 11,000,000 verified offline; 2M here for runtime (a private ~40-bet game should link within tens)
let anyLink = false;
for (const a of DISPUTED) {
  const links = [];
  for (const b of DISPUTED) if (a.id !== b.id) for (const m of ['utf8', 'bytes']) { if (reach(a.seed, b.seed, N, m) !== null) { links.push(b.id); anyLink = true; } }
  for (const m of ['utf8', 'bytes']) if (reach(a.seed, PUB_TERMINATING, N, m) !== null) { links.push('pub-terminating'); anyLink = true; }
  console.log(`    seed ${a.id}: ${links.length ? 'links to ' + links.join(', ') : `no link within ${N.toLocaleString()} hashes`}`);
}

console.log('\n=== D. The per-player "Limbo" model is also ruled out (Winna\'s own fairness panel) ===');
{
  const unhashed = 'f2dd0d03db15cde4149e23a37f93dcdeb2dc847f64caa2d04fdc7c8778e3938c'; // revealed Limbo server seed
  const shown    = 'a4c539e6b6256eee29efd039cb2a2af8270551cb8e3d39cb3ad77e8b07ee21b7'; // its published commitment
  console.log(`  His real Limbo server seed hashes to its commitment: ${sha256(unhashed) === shown ? 'YES (per-seed model works for his other games)' : 'no'}`);
  console.log('  But the disputed Slide bets are ABSENT from his per-player history, and his nonce ran');
  console.log('  193 (Limbo, 16 May 11:53) -> 194 (Limbo, 17 May 13:39) across the entire ~40-bet Slide session');
  console.log('  => the Slide bets consumed ZERO per-player nonces => not the per-player Limbo model either.');
}

console.log('\n=== E. Grinding is trivial (why "fixed client seed + nonce 0" hands over control) ===');
{
  // With clientSeed + nonce fixed, result is a pure function of the operator-generated server seed.
  // Show: (i) how many random seeds lose at the player's typical targets, (ii) manufacturing exact results.
  const rnd = () => crypto.randomBytes(32).toString('hex');
  for (const target of [3.0, 3.5, 4.0]) {
    let lose = 0, T = 200000;
    for (let i = 0; i < T; i++) if (limbo(rnd(), VIP, 0, 0, 0.98) < target) lose++;
    console.log(`  at a ${target.toFixed(1)}x target: ${(100 * lose / T).toFixed(1)}% of random server seeds already LOSE`);
  }
  for (const b of DISPUTED) {                       // manufacture each charged result from scratch
    let tries = 0, s;
    do { s = rnd(); tries++; } while (limbo(s, VIP, 0, 0, 0.98) !== b.charged && tries < 5000);
    console.log(`  manufactured ${b.charged.toFixed(2)}x (a charged result) in ${tries} tries -> seed ${s.slice(0, 16)}…`);
  }
  console.log('  => an operator generating the server seed can pick a losing (or specific) one before committing its hash.');
}

console.log('\n=== F. Conclusion (confirmed model) ===');
console.log('  Winna confirmed the VIP used a PER-BET HASHED SERVER SEED model, with the NONCE FIXED AT 0 and');
console.log('  the CLIENT SEED FIXED to block 779588 (public since 2023). With nonce + client seed both fixed,');
console.log('  the result is a pure function of the server seed, which the operator generates and picks.');
console.log('  The pre-bet hash only locks the seed AFTER it is chosen; with a fixed, pre-known client seed the');
console.log('  operator can roll seeds, take one that loses, then commit its hash => full, undetectable control.');
console.log('  (Sections C/D are how the model was narrowed: not a chain, not per-player Limbo.)');
console.log('  => The VIP Slide was NOT provably fair.');
