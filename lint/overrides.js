import testingLibrary from 'eslint-plugin-testing-library';
import vitest from 'eslint-plugin-vitest';

import { legacyPlugin } from './legacy.js';
import { OFF } from './rules/constants.js';
import testingLibraryRules from './rules/testing-library.js';
import vitestRules from './rules/vitest.js';


export default [
  {
    files: ['**/*.{js,cjs,json}'],
    rules: {
      '@typescript-eslint/no-require-imports': OFF,
      '@typescript-eslint/no-unused-expressions': OFF,
    },
  },
  {
    // Rules specifically for our tests
    files: ['**/*.test.*'],
    plugins: {
      'testing-library': legacyPlugin('eslint-plugin-testing-library', 'testing-library'),
      vitest,
    },
    rules: {
      ...testingLibrary.configs.dom.rules,
      ...testingLibrary.configs.react.rules,
      ...testingLibraryRules,
      ...vitest.configs.all.rules,
      ...vitestRules,
    },
  },
  {
    files: ['vitest.setup.ts', '**/*.test.{tsx,ts}', '**/tests/**/*.{tsx,ts}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': OFF,
      '@typescript-eslint/no-explicit-any': OFF,
    },
  },
  {
    files: ['**/*.test.tsx', '**/*.test.ts'],
    rules: {
      'testing-library/no-await-sync-events': OFF,
      'testing-library/prefer-user-event': OFF,
      'testing-library/render-result-naming-convention': OFF,
    },
  },
];
