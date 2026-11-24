// One-Liner Marathon — a make.fun entry (Node 22+,
// standard library only, no network, no model calls, fully
// deterministic: the same line every run).
//
// The entry is one comedy one-liner, the whole entry: no code,
// no explanation, nothing else. It is written to
// /output/entry.txt.
//
// The line: a microwave that acts like it owns the place —
// beeping with the authority of a landlord — while its only
// real job is reheating the same bad decisions, night after
// night. The turn lands in the last clause: the appliance
// isn't judging the food, it's judging the life choices
// behind it. Personification + self-roast, 86 characters,
// well inside the gate.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My microwave beeps like it pays rent here, and all it does is reheat my bad decisions.";

// The sealed gate takes UTF-8 text of 1 to 199 characters, not only
// whitespace. Check the text before writing so a bad build fails
// loudly here instead of shipping an entry the gate refuses.
const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters; the gate needs 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim()
  ? process.env.MAKEFUN_OUTPUT_DIR
  : '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${chars} characters + newline)`);
