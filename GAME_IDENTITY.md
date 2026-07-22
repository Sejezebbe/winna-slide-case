# Three different games, one name: "Slide"

Winna's own systems distinguish **three separate games** that are all presented to the player as **"Slide"**,
with the **same display name and the same thumbnail image**. The disputed session was played on one of them.

## Winna's own game list

Winna's `/recently-games` endpoint, for the account in question, returns these three entries — reproduced
verbatim from the response:

| identifier | partner | thumbnail | display name |
|---|---|---|---|
| `slide` | `OUR_GAME` | `…/1774583199442/slide_v2.avif` | Slide |
| `slide-vip` | `OUR_GAME` | `…/1774583199442/slide_v2.avif` | Slide |
| `tequ_slider` | `HUB88` | `…/1774583199442/slide_v2.avif` | Slide |

Three distinct game identifiers. One display name. One image. Two are Winna's own in-house builds
(`OUR_GAME`); one is delivered through the HUB88 aggregator (`tequ_slider` — the third-party provider's
slider).

## Anyone can verify this — no account required

Winna's bet-info endpoint answers **without authentication**. For any bet ID, it returns the
`gameIdentifier` that actually served the round:

```
https://api2.winna.com/v2/bet/info?id=<betId>
```

**A disputed round (15–16 May) → `"gameIdentifier": "slide-vip"`**
```
https://api2.winna.com/v2/bet/info?id=fdcedeb7-c2ab-4300-9e31-214978632a4f   ($100,000, 15 May 01:38 UTC)
https://api2.winna.com/v2/bet/info?id=af4d915f-4046-4740-a0fa-7102102c7dd9   ($800,000, 16 May 14:50 UTC)
```

**A round from the day before (14 May) → `"gameIdentifier": "tequ_slider"`**
```
https://api2.winna.com/v2/bet/info?id=a13cfccc-4e9e-4dca-acd8-815b02e5e3b8   ($100,000, 14 May 12:41 UTC)
```

Same on-screen game. Different engine underneath.

## What this establishes — and what it does not

**Established by the game list and the bet records:**
- Three separate games existed under the single name "Slide", visually identical to the player.
- The **62 disputed rounds** (15–16 May) were served by **`slide-vip`**, an in-house build.
- The rounds the day before (14 May), on which the player was **winning**, were served by **`tequ_slider`**,
  the third-party provider's game.
- A player had no way to tell, from the interface, that the game had been switched.

**Not established by this document alone:** that `slide-vip` was not provably fair. That conclusion rests on
the separate technical record — a client seed fixed to an already-public 2023 Bitcoin block, the nonce pegged
to 0, and revealed server seeds that chain to no published commitment. See
[`TECHNICAL_ASSESSMENT.md`](TECHNICAL_ASSESSMENT.md) and [`SEEDS.md`](SEEDS.md).

**Also relevant:** for the `slide-vip` rounds, `bet/info` returns `"multiplier": null` and
`"replay_url": null` — the bet record exists, the result and replay do not. Rounds on the provider's game
from the same period still have working replays.

Every disputed round, with its Support ID and bet link:
[`vip_slide_session_bets.csv`](vip_slide_session_bets.csv).
