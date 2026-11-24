import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I asked an AI to write my dating profile; it called me 'a low-maintenance project with high ongoing costs.'";

const charCount = [...LINE].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`Entry line must be 1-280 characters, got ${charCount}.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be whitespace only.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry line must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
