# Winna VIP Slide — surrounding context & motive (dated, sourced)

*The circumstantial timeline for the disputed **private VIP Slide** (15–16 May 2026), separate from the
cryptographic proof. Every quote is verified against the chat record. To be clear: this shows the operator
**could** control outcomes and had the **motive** and **opportunity** to — it does not claim a specific spin
was hand-picked.*

## The timeline

**1. Someone else carried the player's risk — until they didn't.**
Winna ran on a third-party bankroll provider. Under that arrangement the provider carried the large majority
of downside risk and took only a minority share of the upside → while it was in place, a large player loss
was **mostly the provider's money**, and Winna had little to gain from it. Winna had also planned
for months to drop the provider and self-fund (owner, 12 Mar: *"May 1st as a realistic start date … once this
[VC] money hits, we can take them ourselves"*).

**2. The player's large winnings end the partnership (14 May).**
The player's mid-May winnings triggered a contractual clause, and the bankroll partnership **ended on 14 May.**
From that moment Winna was on its **own book** — now a large player loss was **Winna's own retained gain.**

**3. That same night, a new in-house Slide goes live.**
Owner, **14 May 23:30:** *"ok good new slide almost live."* → Winna's own self-booked Slide (no provider fee)
launches the very night the provider exited.

**4. The player is limited on the *public* Slide.**
He tried a normal public-Slide bet ($77,777 @ 4x) and was **rejected** — a bet that would have won — and was
steered elsewhere.

**5. A private game appears — effectively private to him.**
A private, account-gated **"VIP Slide"** was provisioned to his account (first bets 15 May) — a weakened version
with the provable-fairness safeguards removed (fixed, already-public 2023 client seed; nonce pegged to 0; see
the technical package).

**6. He is actively pushed onto it.**
Owner, **15 May 03:26:** *"cashback reset … extra 5% for slide for next 24 hours"* — a time-boxed,
Slide-specific incentive hours before the session.

**7. The loss.**
Across **62 bets on 15–16 May** he lost **61 of 62** — ~$10.5M wagered, **~$9.6M net to Winna.** His own
deposited money lost was **$6,345,857.66** (the restitution figure); the net-to-house figure is larger only
because he also played through and lost cashback/site bonuses he'd been credited. Winna's own Bet Details UI
shows his targets were 3.5x–4x (e.g. a $800k bet at target 3.50x returning 2.38x; a $700k bet at target 4x
returning 2.33x) — all losses.

**8. [redacted] ~45 minutes after the session.**
On-chain, 

**9. The game disappears — and the public Slide is quietly reseeded two days later.**
The VIP Slide was **removed the day after** the losses (its bet pages now error). A neutral provably-fair
engineer flagged that Winna published a **reseeding of the *public* Slide on 18 May — two days after the
disputed bets**: *"Why did they do it exactly 2 days after your bets is very very strange"* (the reseed
schedule otherwise would not have been due for years).

**10. When the fairness data was requested, the account glitched.**
On 13 June, right after the fairness data was first requested, the account went unreachable for ~1 hour;
Winna's own staff attributed it to the **devs having "updated something"** at that exact moment.

**11. Then weeks of delay and shifting explanations.**
The fairness data was first requested in mid-June and still not fully produced weeks later. And Winna's
account of *how* the VIP Slide was provably fair kept changing — first suggesting the per-player "Limbo"
model, then a "seeding event," before confirming the per-bet hashed-server-seed model (nonce 0, fixed client
seed). Meanwhile the public Slide is implemented *correctly* (future block + committed hash-chain) — so this
is not a case of an operator that doesn't understand provable fairness.

**12. They kept blaming the partner who had already left.**
Even after 14 May, Winna repeatedly cited the (departed) bankroll provider as the reason for limits, withheld
bonuses, and delays.

**13. After the dispute, the operator cut off contact.**
On **3 July 2026** the player reported that the operator's host **blocked him and deleted messages** (*"He
blocked me and deleted messages"*) — after the game had already been removed and the public Slide reseeded.

## Why it matters, in one line

Winna ended the arrangement where **someone else** covered the player's action, launched its own Slide the
same night, closed the fair game he was winning on, opened a private game effectively provisioned to him alone with the
fairness safeguards stripped out, pushed him onto it with a 24-hour cashback, took **~$9.6M into its own
pocket**, then deleted the game and reseeded the public one two days later — all inside roughly 72 hours.

## Independent corroboration
- A **neutral provably-fair engineer** reviewed the model and confirmed it was not provably fair (and flagged
  the suspicious reseed).
- An **independent statistical analysis** of the actual 62 bets put the loss run at **~1 in 5,000** under fair
  play.

*(Pairs with the technical package: the mechanism proof shows the operator **could** pick every outcome
undetectably; this timeline shows the motive, the opportunity, and the push. Neither claims a specific result
was hand-picked — that needs the operator's server logs, which a regulator can compel.)*
