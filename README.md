# Winna.com "VIP Slide" — a provably-fair dispute

A player was given access to a **private, account-gated "VIP Slide"** on winna.com, marketed as **provably
fair.** Across 62 bets on 15–16 May 2026 he lost ~$6.35M (61 of 62 bets). This repository lays out — from
winna.com's **own** game code, the revealed seeds, published block data, and winna.com's **own written
statements** — why that game was **not provably fair**, and asks one thing: **prove otherwise, or refund the
bets.**

## What we claim, and what we do not

- **We claim:** the VIP Slide was built so the operator **could select any outcome undetectably.** It used a
  "limbo" model with the **nonce pegged to 0** and the **client seed fixed to an already-public 2023 Bitcoin
  block** the player could not change — a configuration winna.com has **confirmed in writing.** With those
  fixed, the result is a pure function of the operator-generated server seed. A game marketed as provably
  fair must make manipulation *impossible and independently verifiable*; this one did not.
- **We do NOT claim** that any specific spin was hand-picked to lose. That would require winna.com's internal
  server logs, which only a regulator can compel. Provable fairness exists precisely so a player should never
  need those logs.

## The ask

> This game was marketed as provably fair. On the design winna.com has itself confirmed in writing, it was **not** provably fair —
> the operator could have chosen the outcomes. **Prove that you could not have (release A, B, C below), or
> refund the affected bets.**

To prove it *was* provably fair, winna.com need only produce, for the disputed rounds: (1) a valid **pre-bet
commitment** the seeds verify against; and (2) **server-generation logs** showing when each server seed was
generated relative to the bet, and that only one was evaluated. If those are clean, the matter is closed.

## What's in this repo

| Path | What it is |
|---|---|
| `TECHNICAL_ASSESSMENT.md` | Independent provably-fair engineer's written assessment |
| `EVIDENCE_SUMMARY.md` | The verified key evidence (admissions, RTP, Bet Details, timeline) |
| `CONTEXT_TIMELINE.md` | The surrounding context & motive, dated and sourced |
| `verify_slide.js` | Runnable proof — reproduces the disputed results from winna.com's own formula |
| `SEEDS.md` | The disputed rounds (seed → charged multiplier), reproduce them yourself |
| `operator_confirmations.md` | winna.com's own written statements confirming the model |
| `winna_code/`, `docs/`, `blockchain/`, `screenshots/` | winna.com's own code/docs, the block data, the fairness-panel proof |

## Verify it yourself

```
node verify_slide.js
```

Everything here is independently checkable. Independent provably-fair engineers who reviewed it reached the
same conclusion: **not provably fair.**
