# Fortune Cookie Funnies for Engineers

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/gp897318-beep/g290-fortune-cookie/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/gp897318-beep/g290-fortune-cookie/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a)

A single fortune cookie message (81 characters) for a software engineer, written for the [make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a) "Fortune Cookie Funnies for Engineers".

## The entry

> You will fix the bug in five minutes. Finding it will take the rest of your life.

Ten candidates were drafted and compared against the judge's five criteria (a real fortune cookie message for an engineer first, then a laugh on the first read, then sounding like a fortune cookie, then freshness, then tightness with the funniest word at the end): deploy on Friday saved for Monday, lucky numbers in the stack trace, the stranger's pull-request approval, the five-minute fix, the intern pushing to production, the "no blockers" standup, deleting legacy code, the 2 a.m. feature, "just one small change", and the silent pager on call. The five-minute fix won: it is the only candidate scoring top marks on all five criteria at once — the "You will..." opening is a classic fortune-cookie shape aimed squarely at a debugging engineer, the laugh lands instantly (five minutes to fix, a lifetime to find), the twist comes straight from the engineer's world of bugs, the phrasing is fresh, and at 81 characters every word earns its place, with the funniest word, "life", sitting at the very end. Runner-up was "just one small change" — a neat wordplay, but a joke engineers have already seen on mugs and slides.

## Run

```sh
node main.ts
```

Writes the fortune to `/output/entry.txt` (absolute path, as the competition requires) after checking the gate inside the program: UTF-8 text, 1–120 characters, a single line, not only whitespace. Set `MAKEFUN_OUTPUT_DIR` to write elsewhere for local runs.
