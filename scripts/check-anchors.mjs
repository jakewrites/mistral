#!/usr/bin/env node
// Guardrail for the Recommendation component's anchors.
//
// docusaurus.config.ts sets onBrokenAnchors: 'ignore', because the #r1..#rN ids
// are rendered by a React component and the static anchor checker can't see them.
// That means a genuinely broken recommendations#rN link would slip through the
// build. This script restores the check: it asserts that every
// `recommendations#rN` link in docs/ points at a Recommendation id that actually
// exists in docs/exercise-1/recommendations.mdx.
//
// Usage: node scripts/check-anchors.mjs   (exits non-zero on a broken anchor)

import {readFileSync, readdirSync, statSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = join(root, 'docs');
const recsFile = join(docsDir, 'exercise-1', 'recommendations.mdx');

// 1. The ids the component actually renders: <Recommendation id="R1" ... /> -> r1
const defined = new Set(
  [...readFileSync(recsFile, 'utf8').matchAll(/id="(R\d+)"/g)].map((m) =>
    m[1].toLowerCase(),
  ),
);

// 2. Walk docs/ and collect every recommendations#rN reference with its location.
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const broken = [];
for (const file of walk(docsDir).filter((f) => /\.mdx?$/.test(f))) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/recommendations#(r\d+)/g)) {
      if (!defined.has(m[1])) {
        broken.push(`${file.replace(root + '/', '')}:${i + 1}  -> #${m[1]}`);
      }
    }
  });
}

if (broken.length) {
  console.error(
    `Broken recommendation anchors (defined: ${[...defined].sort().join(', ')}):`,
  );
  for (const b of broken) console.error('  ' + b);
  process.exit(1);
}

console.log(
  `check-anchors: OK. All recommendations#rN links resolve to {${[...defined]
    .sort()
    .join(', ')}}.`,
);
