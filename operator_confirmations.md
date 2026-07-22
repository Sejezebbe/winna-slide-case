# The operator's own written confirmations

These are the operator's own statements — from its VIP host and from its written "final determination."
They establish the model and the flaw from the operator's side, not the player's. (Source screenshots are
available on request; only the operator's own words are reproduced here.)

## Confirming the model
- The operator confirmed the VIP Slide used the **per-bet hashed server seed** model (a fresh server seed
  each bet, hash shown before, revealed after) — not a pre-committed seed chain, and not the standard
  per-player model.
- It confirmed the **client seed was fixed** (to the 2023 block) and **not player-changeable**, and that the
  **nonce was 0**.

## Conceding the flaw
The operator's host, in writing:
- *"With a fixed — and not publicly committed — client seed, this could have happened"* — agreeing that
  configurations putting the player at a disadvantage could have been chosen.
- Agreed that a correctly implemented provably-fair game **"would always have the client seed customisable,"**
  and that the fixed client seed was **"still an issue."**
- Agreed with the two-safeguard analysis (either a client seed the operator can't grind against, **or** a
  pre-committed server-seed chain) — and that the VIP Slide had **neither**.

## The operator knew the outcomes — no seeding event was done
The operator's owner, in writing (28 May 2026), on the in-house Slide:

> *"the only thing we didn't do yet is the seeding event that stake did for example … with such a seeding
> event u won't be able to know the outcome of the rounds right now technically we would know the outcome of
> the rounds — but ofc couldn't adjust them."*

This is the case in the operator's own words: **without the seeding event, they *would know the outcome of the
rounds.*** Their only stated defence is the unverifiable claim that they "couldn't adjust them" — precisely
the thing a valid pre-bet commitment would *prove*, and precisely the commitment that has never been produced.

## The operator's own published fairness standard
Winna's own published Slide fairness documentation (archived in [`docs/`](docs/)) states the standard the VIP
Slide had to meet — and didn't. To rule out a chosen outcome, the client seed must be a **then-unmined future
block** fixed by a public seeding event, in Winna's own words:

> *"…choose a hash with favourable or unfavourable results, the below seeding event was conducted to select
> the hash of a then-unmined Bitcoin block."*

The VIP Slide's client seed was Bitcoin block **779588 — mined 6 March 2023, already public for three years**
when the 2026 game ran. It fails Winna's own written rule on its face: an already-public block cannot prove
the hash wasn't chosen for favourable or unfavourable results.

## Built by a third party — and the commitment was never produced
The operator's host, explaining why the client seed is a 2023 block (23–29 June 2026):

> *"these games were originally developed by a third-party development agency. Winna later acquired the
> codebase and reskinned the games under our own brand … Unfortunately, this acquisition happened quite some
> time ago and I haven't been able to reach the original developers yet."*

And in the final determination (2 July 2026): *"We continue our efforts to obtain the agency's original
documentation regarding the Bitcoin block … However, our determination does not depend on that documentation."*
→ The one document that could prove the server seeds were committed *before* the bet has **never been
produced**, and the operator concedes it cannot reach the developers who would hold it.

## The written "final determination"
The operator's formal response denied the claim but **conceded every material fact**:
- that the client seed was fixed;
- that the disputed results reproduce from the revealed seeds; and
- that the implementation **"relied on a different mechanism"** than the one described on its current
  public fairness page — in its exact words: *"We acknowledge your position that you were unable to rotate
  your client seed on the VIP Slide, and that this differs from the mechanism described on our current
  fairness page,"* adding that *"the game has since been disabled."*

Its denial rests **solely** on *"we see no evidence that unfavourable seed pairs were assigned"* — i.e. it
does **not** dispute that outcome selection was *possible*, only that the player cannot *prove* it was carried
out. That inverts the standard: provable fairness means manipulation is *impossible and independently
verifiable*, not merely *unproven*.

The same letter **threatened legal action** if the player described the matter publicly using the word
"rigged." The player has throughout claimed only what is provable — that the game was not provably fair and
the operator had full control — not that specific outcomes were hand-picked.
