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

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
