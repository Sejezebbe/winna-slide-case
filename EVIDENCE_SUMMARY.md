# Winna VIP Slide — key evidence (verified)

*Focused on the disputed private **VIP Slide** (15–16 May 2026). Every quote below is verified verbatim
against the source record. To be precise: this does **not** claim any specific spin was hand-picked — it
shows the operator **could** select outcomes undetectably, and had the motive and opportunity to.*

---

## The core finding: it fits neither way to be provably fair

A game can be provably fair in exactly **one of two ways**, and needs only one of them:

1. **The player can change their client seed** (player-controlled, or a then-unmined future block) — so the
   operator cannot know what result a server seed will produce, and cannot grind it; **or**
2. **The server seeds are locked into a public, pre-committed hash-chain** — so the operator cannot freely
   choose which server seed to serve.

**The VIP Slide had neither.** The client seed was fixed to an already-public **2023** Bitcoin block the
player could not change (fails #1), *and* the revealed server seeds chain to **no** committed value (fails
#2). With no safeguard of either kind, the result was a pure function of an operator-generated server seed
the operator could compute and select in advance, undetectably. Everything below documents this — much of it
in Winna's own words.

---

## 1. Direct written admissions, in Winna's own words

**1A. The model — Winna's owner, in writing (26 June).** *The crux.*
- *"for slide vip it used the limbo model but always with nonce at 0 … put his seeds and always keep nonce
  at 0 then you would correctly get the results."* → limbo model, **nonce pegged to 0**, per-bet server seed.
- *"a 10000% correctly implemented provably fairness verficiation would always be having the client seed
  customizable , thats definitely correct."* [sic] → concedes the client seed **should** be player-changeable;
  the VIP's was not.
- *"so form my understanding: - both agree that PF itself worked - BUT he claims since he couldn't set his own
  client seed we could have given unfvaorable seed pair"* [sic] — answered, in the next message:
  *"which i guess is true BUT: - showed [the player] sims of that day which show that overall that seed pair
  was right at RTP - there are some other sites where u currently can't change your seed pair …"* [sic].
  → the **"could have" admission**: he restated the complaint and endorsed it — *with* qualifications, which
  are set out and answered in [`operator_confirmations.md`](operator_confirmations.md). The endorsement
  confirms the client seed was operator-fixed; the qualifications go to whether the capability was used,
  which is not what is claimed here.

**1B. The RTP was an operator setting — owner.**
- 20 June: *"I'm almost 100% sure that your VIP Slide version was on a 98% RTP Setting."*
- 28 May: *"on our own we actually did 98% and not the 97.5% we had on [the provider]."* → Winna ran the
  Slide itself and set the RTP.
- 3 Mar: *"we could get slide at 1% edge btw"* → the house edge itself was a dial the operator could set.

**1C. Public Slide has no nonce — owner, 14 June:** *"on slide there aren't nonces."* (The VIP used
limbo-with-nonce-0 — a different, weaker setup.)

**1D. Winna's own Bet Details UI — the disputed rounds (from screenshots):**

| Support ID | Bet | Target | Result | Payout | Date |
|---|---|---|---|---|---|
| 1137912977 | $800,000 | **3.50x** | 2.38x | $0 | 16.05.2026 |
| 1137916722 | $700,000 | **4x** | 2.33x | $0 | 16.05.2026 |

→ Winna's own interface proves the targets were 3.5–4x, all losses, tied to the exact seeds we reproduced.

**1E. The operator knew the outcomes — owner, 28 May.** *"the only thing we didn't do yet is the seeding event
… technically we would know the outcome of the rounds — but ofc couldn't adjust them."* → concedes that,
without the seeding event, the operator **would know** each round's outcome; the only defence offered is the
unverifiable *"couldn't adjust them."*

---

## 2. Strong circumstantial: motive, opportunity, timeline

- **Risk structure (owner, 7 Mar):** under the bankroll arrangement the provider carried the large majority of
  negative NGR and took only a minority share of positive NGR → it bore most of the loss risk, and Winna had
  correspondingly little to gain from a large player loss. That inverted when the provider exited.
- **Pre-planned exit (owner, 12 Mar):** *"May 1st as a realistic start date … we can take them ourselves."*
- **The exit (14 May):** the player's winnings triggered the clause that ended the bankroll arrangement; from
  that day Winna carried its own risk.
- **New Slide the same night (owner, 14 May 23:30):** *"ok good new slide almost live."*
- **The push (owner, 15 May 03:26):** *"extra 5% for slide for next 24 hours."*
- **After the loss:** the VIP Slide was removed (bet pages now error); a neutral engineer flagged the public
  Slide was reseeded **two days after** the disputed bets — *"very very strange."*
- **[redacted].** Publicly on the [redacted], **
  > **On the two loss figures:** the **$6,345,857.66** is the player's **deposited own money** lost — the
  > restitution figure. The larger "net to the house" figure (~$9.6M) is bigger only because he also played
  > through and lost **cashback / site bonuses** he'd been credited (not his own out-of-pocket money).
- **Interference on the fairness request (13 June):** account unreachable ~1 hour immediately after the
  fairness data was requested; staff attributed it to the devs *"updat[ing] something."*
- **Independent statistical corroboration:** a simulation of the actual 62 bets puts the loss run at
  **~1 in 5,000** under fair play.

### Further supporting facts

- **They implement provable fairness *correctly* on the public Slide.** The public Slide uses a then-unmined
  future block as the client seed plus a published committed hash-chain — the disputed VIP version had
  neither. Winna demonstrably knows how to do it right; the VIP build stripped both safeguards.
- **The VIP failed Winna's *own published* standard.** Winna's own Slide fairness page (archived in the repo)
  requires the client seed to be the hash of a *"then-unmined Bitcoin block,"* fixed by a seeding event so the
  operator did not *"choose a hash with favourable or unfavourable results."* The VIP's client seed was an
  already-public 2023 block — so it failed Winna's own written rule, not merely an abstract PF principle.
- **Shifting accounts of the fairness model.** Winna first pointed to a per-player "Limbo" model, then to a
  "seeding event," before confirming the per-bet hashed-server-seed model with nonce 0 and a fixed client
  seed — an operator that could not keep its story straight about its own game's fairness.
- **Weeks to produce the fairness data.** It was first requested in mid-June and still not fully produced
  weeks later. For a working provably-fair game, the commitment is a single page an operator can produce at
  once.
- **Gated and specially provisioned for him.** The VIP Slide was a private, *high-limit* version. On 15 May
  — hours before the session — Winna whitelisted his account to access it, in the operator's own words:
  *"[redacted] [redacted],"* *"[redacted],"* *"can whitelist
  ur ID."* So the ~$3M-limit Slide was bespoke to him, not a public offering.
- **A known, predictable target range.** He always targets a **minimum of ~3x, mostly 3.5x–4x.** His targets
  were therefore known in advance; against a fixed, already-public client seed, a known target band is all
  that is needed to pre-select server seeds that land just short of it. *(Inference.)*
- **The self-booked limits — bespoke, then slashed.** He was given a bespoke ~$3M Slide limit (whitelisted to
  his ID on 15 May). The owner had acknowledged the risk of this exposure — *"if we have 3m swings on slide we
  could get to 10m downside on [the player] quickly"* — which is why they used a bankroll provider to carry it.
  After the provider exited (14 May), Winna **self-booked** the game at those limits while he placed
  $700k–$800k bets and lost $6.35M — and on 28 May his Slide limit was cut to *"100k per spin."* An operator
  offering seven-figure bespoke limits on a *self-booked*, high-volatility game, then cutting them ~90% two
  weeks later, is consistent with a game whose downside the operator could control. *(Circumstantial — noted
  as an inference, not proof.)*

---

## The case in five points

1. **Winna's own written admission** — limbo model + nonce pegged to 0 + client seed not customizable +
   *"could have given unfvaorable seed pair"* [sic] — answered *"which i guess is true BUT…"* (qualified in
   the same message; see [`operator_confirmations.md`](operator_confirmations.md)). Winna confirms each of
   these design facts in writing.
2. **The timeline** — the player's win ended the bankroll arrangement (14 May); Winna took its own book and
   launched its own Slide that night; the player lost $6.35M on Winna's own book.
3. **Winna's own Bet Details UI** — 3.5–4x targets, results below, $0 payout, IDs matching the revealed seeds.
4. **Independent corroboration** — a simulation putting the loss at ~1 in 5,000 under fair play, an
   independent engineer confirming "not provably fair," and the public Slide reseeded two days after.
5. **The setup** — a private game effectively provisioned to him alone, pushed with a Slide-specific cashback,
   removed the day after the loss.

---

## What this does and does not claim

- It claims the operator **could** have selected outcomes undetectably, and had the motive and opportunity —
  established by Winna's own confirmed design and its own words. It does **not** claim any specific spin was
  hand-picked; that would require Winna's internal server logs, which only a regulator can compel.
- The demand is simple: the game was **marketed as provably fair; it was not.** Prove otherwise — produce a
  valid pre-bet commitment the revealed seeds verify against, plus the server-generation logs — **or refund
  the bets.**
