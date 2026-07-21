# Winna VIP Slide — key evidence (verified)

*Focused on the disputed private **VIP Slide** (15–16 May 2026). Every quote below is verified verbatim
against the source record. Honest boundary throughout: we do **not** claim any specific spin was hand-picked
— we show the operator **could** select outcomes undetectably, and had motive and opportunity.*

---

## 1. Direct admissions, in Winna's own words

**1A. The model — Winna's owner, in writing (26 June).** *The crux.*
- *"for slide vip it used the limbo model but always with nonce at 0 … put his seeds and always keep nonce
  at 0 then you would correctly get the results."* → limbo model, **nonce pegged to 0**, per-bet server seed.
- *"a … correctly implemented provably fairness verification would always be having the client seed
  customizable, that's definitely correct."* → concedes the client seed **should** be player-changeable; the
  VIP's was not.
- *"both agree that PF itself worked — BUT … since he couldn't set his own client seed we could have given
  unfavorable seed pair."* → the **"could have" admission**; confirms the client seed was operator-fixed.

**1B. The RTP was an operator setting — owner.**
- 20 June: *"I'm almost 100% sure that your VIP Slide version was on a 98% RTP Setting."*
- 28 May: *"on our own we actually did 98% and not the 97.5% we had on [the provider]."* → Winna ran the
  Slide itself and set the RTP.

**1C. Public Slide has no nonce — owner, 14 June:** *"on slide there aren't nonces."* (The VIP used
limbo-with-nonce-0 — a different, weaker setup.)

**1D. Winna's own Bet Details UI — the disputed rounds (from screenshots):**

| Support ID | Bet | Target | Result | Payout | Date |
|---|---|---|---|---|---|
| 1137912977 | $800,000 | **3.50x** | 2.38x | $0 | 16.05.2026 |
| 1137916722 | $700,000 | **4x** | 2.33x | $0 | 16.05.2026 |

→ Winna's own interface proves the targets were 3.5–4x, all losses, tied to the exact seeds we reproduced.

---

## 2. Strong circumstantial: motive, opportunity, timeline

- **Risk structure (owner, 7 Mar):** *"80% them vs 20% us on all negative NGR; 40% them vs 60% us on all
  positive NGR."* → the bankroll provider carried most of the loss risk; that inverted when it exited.
- **Pre-planned exit (owner, 12 Mar):** *"May 1st as a realistic start date … we can take them ourselves."*
- **The exit (14 May):** the player's winnings triggered the clause that ended the partnership; from that day
  Winna carried its own risk. *(Confirmed by the former provider.)*
- **New Slide the same night (owner, 14 May 23:30):** *"ok good new slide almost live."*
- **The push (owner, 15 May 03:26):** *"extra 5% for slide for next 24 hours."*
- **After the loss:** the VIP Slide was removed (bet pages now error); a neutral engineer flagged the public
  Slide was reseeded **two days after** the disputed bets — *"very very strange."*
- **[redacted].** Publicly on the [redacted], **~$6.35M was
  deposited to [redacted] on 16 May 2026** (two transfers totaling ~$[redacted] at [redacted] and [redacted] UTC),
  and **[redacted] [redacted] from Winna's [redacted] into [redacted] at [redacted] UTC — ~45 minutes
  after the session** (tx `[redacted]`). The money went
  to, and stayed in, [redacted] — [redacted].
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
  could get to 10m downside on [the player] v quickly"* — which is why they used a bankroll provider to carry it.
  After the provider exited (14 May), Winna **self-booked** the game at those limits while he placed
  $700k–$800k bets and lost $6.35M — and on 28 May his Slide limit was cut to *"100k per spin."* An operator
  offering seven-figure bespoke limits on a *self-booked*, high-volatility game, then cutting them ~90% two
  weeks later, is consistent with a game whose downside the operator could control. *(Circumstantial
  inference — Winna could also frame the cut as managing a now-disputing, unprofitable player.)*

---

## The strongest five (what actually wins this)

1. **The written model admission** — limbo + nonce 0 + client seed not customizable + *"could have given
   unfavorable seed pair."* Winna concedes the exact defect.
2. **The confirmed motive/timeline** — the win triggered the bankroll exit (14 May); Winna took its own book
   and launched its own Slide that night; the player lost $6.35M into [redacted].
3. **Winna's own Bet Details UI** — 3.5–4x targets, results below, $0 payout, IDs matching the seeds.
4. **Independent corroboration** — ~1-in-5,000 statistically, a neutral engineer confirming "not provably
   fair," and the strange 2-days-after reseed.
5. **The 5% cashback push + exclusive access + removal** — the stacked timing around a private game only he
   could access.

---

## Keep the discipline (so it can't be discredited)
- The claim is **"could have + motive," never "they hand-picked each loss."**
- **Marketed as provably fair; not provably fair; refund the bets — unless you can prove otherwise.** That's
  the whole argument.
