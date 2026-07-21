# Disputed rounds — reproduce them yourself

**Parameters (all fixed, as served):**
- client seed = Bitcoin block **779588** hash: `000000000000000000033ab71b5fa7edcafe388e5f49719f1de8e1f8d0670460`
  (mined 2023-03-06; see `blockchain/block_779588_VIP_clientseed.json`)
- nonce = `0`, cursor = `0`, edge = `0.98`
- `result = max(1, floor((0.98 / float) * 100) / 100)`,
  `float` = first 4 bytes of `HMAC-SHA256(serverSeed, "{clientSeed}:0:0")`

**Three revealed server seeds → the exact multipliers the player was charged:**

| Round id | Revealed server seed | Result |
|---|---|---|
| 1137912977 | `fd5c47777a3bdac3c1043c39502a925fa7b1012fb79c3682f138d90430988cc4` | 2.38x |
| 1137916722 | `604162685c66487f148ab53a1ae3f05418146276520df08d7f608adae623ac95` | 2.33x |
| 1137925965 | `933b74433ef7a3136db1c720e2d3e0bfe5f5bee58a7cabfc49eeebbe8010119c` | 2.69x |

All three landed **below** the player's ~3.5x–4x target — i.e. all losses.

`node verify_slide.js` reproduces these exactly (section B), and section E demonstrates how few attempts it
takes to find a server seed that produces a loss — or any specific result — against this fixed client seed.
