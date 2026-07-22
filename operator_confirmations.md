# The operator's own written confirmations

These are the operator's own **written** statements — from its VIP host and from its written "final
determination." They establish the model from the operator's side, not the player's, and record how the
operator answered in writing when the client-seed problem was put to him. (Source screenshots available on
request; only the operator's own words are reproduced here, verbatim including typos.)

**On what the operator did and did not say.** The operator has *not* written that the game was not provably
fair — on 28 May 2026 he wrote the opposite: *"slide 10000% was and is provably fair."* What he **has** put
in writing are the specific design facts and possibilities set out below. The conclusion drawn from those
facts is **this analysis's**, not his. That is precisely why the demand is: **prove it was provably fair.**

## Confirming the model
- The operator confirmed the VIP Slide used the **per-bet hashed server seed** model (a fresh server seed
  each bet, hash shown before, revealed after) — not a pre-committed seed chain, and not the standard
  per-player model.
- It confirmed the **client seed was fixed** (to the 2023 block) and **not player-changeable**, and that the
  **nonce was 0**.

## The operator's written responses on the fixed client seed
- The operator's host, 3 July 2026: *"Now the question is if we choose pre (and post-bet) configurations
  that could have put you at a disadvantage, correct? That we agree on. With a fixed - and not publicly
  committed - client seed this could have happened."* — agreeing in writing that configurations putting the
  player at a disadvantage **could have been chosen**.
- The owner, 26 June 2026, on the standard: *"a 10000% correctly implemented provably fairness verficiation
  would always be having the client seed customizable , thats definitely correct"* [sic]. On the player's
  complaint: *"he has a point and its valid"*, *"its definitly not him just raging"* [sic]. He endorsed the
  standard in writing; whether the VIP Slide met it, he has never addressed in writing.
- Asked directly about the two safeguards (a client seed the operator can't grind against, **or** a
  pre-committed server-seed chain), the owner answered in writing, 3 July 2026: *"it was clear that the
  client:server seed pair is fixed and we didn't link to any public commitment."* — the fixed client seed and
  the absent public commitment, in his own words. That this leaves **neither** safeguard in place is the
  conclusion **this analysis** draws from those facts; the burden of showing otherwise is the operator's.

## The operator on knowing the outcomes — no seeding event was done
The operator's owner, in writing (28 May 2026), on the in-house Slide:

> *"the only thing we didn't do yet is the seeding event that stake did for example … with such a seeding
> event u won't be able to know the outcome of the rounds right now technically we would know the outcome of
> the rounds — but ofc couldn't adjust them."*

In the operator's own written words: **without the seeding event, they *would know the outcome of the
rounds.*** Their only stated defence is the unverifiable claim that they "couldn't adjust them" — precisely
the thing a valid pre-bet commitment would *prove*, and precisely the commitment that has never been produced.

## The operator's own published fairness standard
Winna's own published Slide fairness documentation (archived in [`docs/`](docs/)) states the standard the VIP
Slide had to meet. To rule out a chosen outcome, the client seed must be a **then-unmined future block** fixed
by a public seeding event, in Winna's own words:

> *"…choose a hash with favourable or unfavourable results, the below seeding event was conducted to select
> the hash of a then-unmined Bitcoin block."*

The VIP Slide's client seed was Bitcoin block **779588 — mined 6 March 2023, already public for three years**
when the 2026 game ran. An already-public block cannot demonstrate that the hash was not chosen for
favourable or unfavourable results.

## Built by a third party — and the commitment has never been produced
The operator's host, explaining why the client seed is a 2023 block (23–29 June 2026):

> *"these games were originally developed by a third-party development agency. Winna later acquired the
> codebase and reskinned the games under our own brand … Unfortunately, this acquisition happened quite some
> time ago and I haven't been able to reach the original developers yet."*

And in the final determination (2 July 2026): *"We continue our efforts to obtain the agency's original
documentation regarding the Bitcoin block … However, our determination does not depend on that documentation."*
→ The one document that could show the server seeds were committed *before* the bet has **not been produced**,
and the operator states it cannot reach the developers who would hold it.

## The written "final determination"
The operator's formal response denied the claim, while putting the material facts the case turns on onto the
record in its own words:
- that the client seed was fixed;
- that the disputed results reproduce from the revealed seeds; and
- that the VIP Slide **"relied on a different provable-fairness mechanism"** than the one described on its
  current public fairness page — in its exact words: *"We acknowledge your position that you were unable to
  rotate your client seed on the VIP Slide, and that this differs from the mechanism described on our current
  fairness page,"* adding that *"the game has since been disabled."*

### One claim in that letter is contradicted by Winna's own data
The determination argues that *"the identical VIP Slide configuration — the same fixed client seed setup —
applied during your winning play, including your session with net winnings of 6,399,135.85"* — i.e. that the
mechanism now disputed had already produced wins the player kept.

Winna's own API says otherwise. The 62 disputed rounds (15–16 May) carry **`gameIdentifier: "slide-vip"`**.
The player's winning Slide play the day before carries a **different** identifier — **`tequ_slider`**, the
third-party provider's game — while displaying under the same on-screen name, "Slide". The private
`slide-vip` build went live on 15 May and the disputed session was the only time it was played: **62 bets,
61 losses.** There was no winning session on that configuration.

The "identical configuration" the letter relies on is, by Winna's own game identifiers, not identical.

Its denial rests **solely** on *"we see no evidence that unfavourable seed pairs were assigned"* — i.e. it
does **not** dispute that outcome selection was *possible*, only that the player cannot *prove* it was carried
out. That inverts the standard: provable fairness means manipulation is *impossible and independently
verifiable*, not merely *unproven*.

The same letter **threatened legal action** if the player described the matter publicly using the word
"rigged." The player has throughout claimed only what is provable — that the game was not provably fair as
represented, and that the operator **could** have selected outcomes undetectably — not that specific outcomes
were hand-picked.
