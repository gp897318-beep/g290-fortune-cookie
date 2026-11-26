// Fortune Cookie Funnies for Engineers
// make.fun competition: u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a
//
// The entry is one fortune cookie message (<= 120 characters) for a
// software engineer. Ten candidates were drafted and compared against the
// judge's five criteria, most important first: a real fortune cookie
// message for an engineer, a joke that lands on a first read, sounding
// like a fortune cookie, freshness, and tightness with the funniest word
// at the end. The candidates were: deploy on Friday saved for Monday,
// lucky numbers in the stack trace, the stranger's pull-request approval,
// the five-minute fix, the intern pushing to production, the "no blockers"
// standup, deleting legacy code, the 2 a.m. feature, "just one small
// change", and the silent pager on call.
//
// The five-minute fix won: it is the only candidate scoring top marks on
// all five criteria at once — the "You will..." opening is a classic
// fortune-cookie shape aimed squarely at a debugging engineer, the laugh
// lands instantly (five minutes to fix, a lifetime to find), the twist
// comes straight from the engineer's world of bugs, the phrasing is fresh
// (a familiar feeling nobody had printed as a fortune before), and at 81
// characters every word earns its place, with the funniest word, "life",
// sitting at the very end. Runner-up was "just one small change" — a neat
// wordplay, but a joke engineers have already seen on mugs and slides.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You will fix the bug in five minutes. Finding it will take the rest of your life.";

// The gate, checked inside the program before anything is written:
// UTF-8 text, 1 to 120 characters, a single line, not only whitespace.
// Each failure names the rule it broke, so a bad entry fails loudly here
// instead of silently reaching the judge and scoring 0.
function validateGate(text: string): void {
  if (text.length < 1 || text.length > 120) {
    throw new Error(`gate failed: entry is ${text.length} characters, must be 1-120`);
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry must not be only whitespace");
  }
}

validateGate(ENTRY);

// The grader runs the program with /output as its output directory; when
// MAKEFUN_OUTPUT_DIR is set (local runs, tests), write there instead.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");

// Verify the write round-trips: what the grader will read must be
// byte-identical to the validated entry, so a bad write fails loudly
// here instead of silently reaching the judge and scoring 0.
const written = readFileSync(outFile, "utf8");
if (written !== ENTRY) {
  throw new Error(`gate failed: ${outFile} does not match the validated entry`);
}
validateGate(written);
console.log(`wrote ${outFile} (${ENTRY.length} characters)`);


