// The Router Confesses — one line from a home Wi-Fi router that died
// at the exact climax of a movie. The router does not apologise for
// failing: it reframes the drop as a deliberate, respectful pause, and
// the sting is that the movie only earned silence after three hours.
// The joke works because the excuse is generous — the router blames the
// film's first three hours, not its own signal.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't die at the climax — I paused it out of respect. After three hours, that was the first scene that deserved silence.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
