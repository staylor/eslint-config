import { ESLint } from 'eslint';

const eslint = new ESLint({ overrideConfigFile: './index.js' });

const samples = [
  {
    filePath: 'src/sample.tsx',
    code: [
      "import sibling from './sibling';",
      "import fs from 'node:fs';",
      '',
      'const unused = 1;',
      'export const list = [fs, sibling].map((item) => <li>{item}</li>);',
      '',
    ].join('\n'),
    expected: ['import-x/', 'react/', '@typescript-eslint/'],
  },
  {
    filePath: 'src/sample.test.ts',
    code: "import { test } from 'vitest';\n\ntest('works', () => {});\n",
    expected: ['vitest/'],
  },
];

let failed = false;

for (const { filePath, code, expected } of samples) {
  const [result] = await eslint.lintText(code, { filePath });
  const ruleIds = result.messages.map((message) => message.ruleId ?? '');

  // import-x reports an unloadable resolver as a lint message instead of throwing
  const broken = result.messages.filter(
    (message) => message.fatal || message.message.startsWith('Resolve error')
  );
  for (const { message } of broken) {
    console.error(`${filePath}: ${message}`);
    failed = true;
  }

  for (const prefix of expected) {
    if (!ruleIds.some((id) => id.startsWith(prefix))) {
      const reported = [...new Set(ruleIds)].join(', ') || 'nothing';
      console.error(`${filePath}: no ${prefix}* rule reported, got ${reported}`);
      failed = true;
    }
  }
}

process.exit(failed ? 1 : 0);
