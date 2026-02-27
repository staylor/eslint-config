import { ERROR } from './constants.js';

export default {
  'import-x/first': ERROR,
  'import-x/no-amd': ERROR,
  'import-x/no-duplicates': ERROR,
  'import-x/no-webpack-loader-syntax': ERROR,
  'import-x/order': [
    ERROR,
    {
      'newlines-between': 'always',
      alphabetize: { order: 'asc' },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '~/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '#*',
          group: 'internal',
        },
        {
          pattern: '#*/**',
          group: 'internal',
        },
      ],
    },
  ],
};
