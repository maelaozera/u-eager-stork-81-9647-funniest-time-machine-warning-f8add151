// Funniest Time Machine Warning Label — entry for make.fun
// Writes a single one-line warning label (120 characters or fewer)
// to /output/entry.txt, exactly as the kit requires.
import { mkdirSync, writeFileSync } from "node:fs";

const label =
  "WARNING: Do not change the past. You already did. That is why this label exists.";

// The gate only accepts 1 to 120 characters of non-whitespace text.
if (label.length < 1 || label.length > 120 || label.trim().length === 0) {
  throw new Error(`label must be 1-120 characters, got ${label.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
