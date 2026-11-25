const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// Frames sleep deprivation as an unresolved bug of adulthood.
fs.writeFileSync(path.join(outDir, 'entry.txt'), "Patch 6.0.1: Fixed bug where humans required 8 hours of sleep but only received 5; issue remains open, users keep calling it 'being an adult'.\n", 'utf8');
