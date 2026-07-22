# Disputed rounds — reproduce them yourself

**Parameters (all fixed, as served):**
- client seed = Bitcoin block **779588** hash: `000000000000000000033ab71b5fa7edcafe388e5f49719f1de8e1f8d0670460`
  (mined 2023-03-06; see `blockchain/block_779588_VIP_clientseed.json`)
- nonce = `0`, cursor = `0`, edge = `0.98`
- `result = max(1, floor((0.98 / float) * 100) / 100)`,
  `float` = first 4 bytes of `HMAC-SHA256(serverSeed, "{clientSeed}:0:0")`

> **On the `0.98` constant — stated precisely.** The code winna.com supplied uses **`0.99`**, which yields
> 2.41x / 2.35x / 2.71x and does **not** match what was charged. The identical code at **`0.98`** reproduces
> **2.38x / 2.33x / 2.69x** exactly. So `0.98` is a **derived finding, not winna.com's confirmation of the
> code** — though winna.com separately stated the setting in writing: *"I'm almost 100% sure that your VIP
> Slide version was on a 98% RTP Setting"* (20 June) and *"on our own we actually did 98%"* (28 May).
> The structure of the formula — HMAC, nonce 0, cursor 0 — is winna.com's own, verbatim from the code it sent.

**Three revealed server seeds → the exact multipliers the player was charged:**

| Round id | Revealed server seed | Result |
|---|---|---|
| 1137912977 | `fd5c47777a3bdac3c1043c39502a925fa7b1012fb79c3682f138d90430988cc4` | 2.38x |
| 1137916722 | `604162685c66487f148ab53a1ae3f05418146276520df08d7f608adae623ac95` | 2.33x |
| 1137925965 | `933b74433ef7a3136db1c720e2d3e0bfe5f5bee58a7cabfc49eeebbe8010119c` | 2.69x |

All three landed **below** the player's ~3.5x–4x target — i.e. all losses.

`node verify_slide.js` reproduces these exactly (section B), and section E demonstrates how few attempts it
takes to find a server seed that produces a loss — or any specific result — against this fixed client seed.

---

## The method is provably correct — it reproduces Winna's own live bets

The same code that reproduces the disputed rounds also reproduces **Winna's current live public Slide bets
exactly**: bet **80030 → 39.08x** and bet **82857 → 2.79x** (section A). The formula and implementation are
therefore not in question — only what an operator could do with them.

## What a real pre-bet commitment looks like — and what the VIP had instead

On the **public** Slide, Winna publishes a hash-chain committing to the terminating hash
`890cb303b01ab53e…`. Each round's seed chains to that commitment **at a depth exactly equal to its round
number** — bet 80030 reaches it in exactly 80,030 hashes, bet 82857 in exactly 82,857 (section C). That is a
verifiable pre-bet commitment, and anyone can check it.

The three revealed **VIP** server seeds chain to **nothing** — not to each other, not to any published
commitment (the included script checks 2,000,000 hashes; a deeper run to 11,000,000 in both encodings also
found no link).

## How little work it takes to pick a losing seed

With the client seed fixed and the nonce pegged to 0, the result is a pure function of the server seed — so an
operator can keep generating seeds until one pays what it wants, then commit that seed's hash. Section E
measures exactly how easy that is:

| Player's target | Share of random server seeds that already LOSE |
|---|---|
| 3.0x | **67.3%** |
| 3.5x | **71.9%** |
| 4.0x | **75.6%** |

At his usual 3.5x–4x targets, roughly **three out of four** randomly generated seeds already lose. And each of
the three charged multipliers can be manufactured from scratch: **2.38x in 1,145 tries, 2.33x in 127 tries,
2.69x in 519 tries** — trivial work for a machine.
