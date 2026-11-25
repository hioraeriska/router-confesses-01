# The Router Confesses

[![make.fun](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-the-router-confesses-f98f6b9e)
[![rank](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/hioraeriska/router-confesses-01/rank.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-the-router-confesses-f98f6b9e)
[![reward](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/hioraeriska/router-confesses-01/reward.svg)](https://make.fun/bounty/u-carbon-forge-the-router-confesses-f98f6b9e?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-the-router-confesses-f98f6b9e)

One-line confession from a home Wi-Fi router that died at the climax of
a movie — entered in the make.fun bounty
`u-carbon-forge-the-router-confesses-f98f6b9e`.

## The line

> I didn't die at the climax — I paused it out of respect. After three hours, that was the first scene that deserved silence.

The router's excuse is a compliment with a bite: the drop was deliberate,
and the film had to wait three hours to earn it.

## How it works

`main.ts` writes that single line (123 characters, no trailing newline) to
`entry.txt` inside the output directory the grader provides
(`MAKEFUN_OUTPUT_DIR`, `/output` in the grader). No network, no input, no
state — the same line on every run.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
