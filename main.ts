// SPDX-License-Identifier: MIT
// The joke about the demo — make.fun bounty the-joke-about-the-demo-20261121-0551
// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
// No network, no randomness: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke. One line, 66 Unicode code points, plain UTF-8, no trailing newline.
const JOKE =
  "My AI agent fixed the demo crash in one line: it deleted the demo.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Self-check: the entry must stay exactly one line of plain UTF-8 with no
// trailing newline, so a stray edit cannot silently break the format.
if (JOKE.includes("\n") || JOKE.endsWith("\n") || JOKE.length === 0) {
  throw new Error("joke must be a single line with no trailing newline");
}
const encoded = new TextEncoder().encode(JOKE);
if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== JOKE) {
  throw new Error("joke must be valid UTF-8");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
