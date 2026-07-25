# The disputed session — full accounting (15–16 May 2026)

Every figure below is taken from the operator's own account records (bet history + transaction history)
and is reproducible from [`vip_slide_session_bets.csv`](vip_slide_session_bets.csv).

## The game, in the operator's own data

Winna's own API labels the disputed rounds **`gameIdentifier: "slide-vip"`** — a distinct private build —
while displaying them as `gameName: "Slide"`. The bets from the day before (14 May) carry a *different*
identifier, **`tequ_slider`** (the third-party provider's slider). Same on-screen name, two different games.

## The session

| | |
|---|---|
| Bets | **62** (61 losses, 1 win) |
| First bet | 15 May 2026, 01:38:33 UTC — $100,000 |
| Last bet | 16 May 2026, 14:52:18 UTC — $30,108.94 |
| Largest bet | 16 May 2026, 14:50:35 UTC — $800,000 |
| Total wagered | **$10,522,325.36** |
| Total returned | **$900,000.00** (the single win, 6.00x on a $150,000 bet) |
| **Net to the house on this game** | **$9,622,325.36** |

Every bet — with its **Support ID** and a **live link to the bet page** — is listed in
[`vip_slide_session_bets.csv`](vip_slide_session_bets.csv).

## What it cost — and what is *not* claimed

| Item | Amount | Claimed? |
|---|---|---|
| Total lost in the session (casino + sports) | $9,584,532.04 | — |
| **Deposited during the session, and lost** | **$6,345,857.66** | **yes** |
| **Balance already in the account, consumed** | **$953,815.25** | **yes** |
| Lossback / bonuses credited (player-requested) | $2,284,859.13 | **no — excluded** |
| **Own money lost to this game** | **$7,299,672.91** | **the claim** |

**The bonuses are published here deliberately.** $2,284,859.13 of lossback was credited during the session
at the player's own request. It is **not** claimed, and never has been — only the player's own money is.
The demand figure of **$6,345,857.66** is the deposits alone; **$7,299,672.91** is that plus the
pre-existing balance the game consumed.

*Method: balance change across the session = deposits + bonuses − total losses. No withdrawals, tips, vault
moves or swaps occurred on 15–16 May, so the residual is the pre-existing balance drawn down. Totals include
both casino ($9,553,966.14) and sportsbook ($30,565.90) losses in the window.*

*Note on the two loss figures. Returns above are stated **gross of stake**. The `slide-vip` game alone is
**$9,622,325.36** net, which is larger than the casino-wide figure of $9,553,966.14 for the same window: the
difference is a residual of **+$68,359.22** net won on other casino games over those two days. The two
numbers measure different things and both are correct.*
