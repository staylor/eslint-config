import { fixupPluginRules } from '@eslint/compat';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import ignores from './lint/ignores.js';
import overrides from './lint/overrides.js';
import coreRules from './lint/rules/core.js';
import importRules from './lint/rules/import.js';
import reactRules from './lint/rules/react.js';
import typescriptRules from './lint/rules/typescript.js';
import reactSettings from './lint/settings/react.js';

const createConfig = (config) => ({
  ...config,
  files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
  ignores,
});

export default defineConfig(
  globalIgnores(ignores),
  importPlugin.flatConfigs.typescript,
  jsxA11y.flatConfigs.recommended,
  promise.configs['flat/recommended'],
  prettier,
  ...tseslint.configs.recommended.map(createConfig),
  createConfig({
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
      },
    },
    plugins: {
      // eslint-plugin-react 7.37.5 calls context methods that ESLint 10 removed;
      // drop the wrapper once a release declares ESLint 10 support.
      react: fixupPluginRules(react),
      'react-hooks': reactHooks,
    },
    settings: {
      ...reactSettings,
    },
    rules: {
      ...coreRules,
      ...importRules,
      ...reactRules,
      ...typescriptRules,
    },
  }),
  ...overrides
);
