import { OFF, ERROR, WARN } from './constants.js';

export default {
  '@typescript-eslint/no-explicit-any': OFF,

  // These rules are nice and we want to configure over the defaults
  '@typescript-eslint/no-use-before-define': [
    ERROR,
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  '@typescript-eslint/no-unused-expressions': [
    ERROR,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    WARN,
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],

  '@typescript-eslint/return-await': [ERROR, 'in-try-catch'],

  '@typescript-eslint/consistent-type-assertions': WARN,
  '@typescript-eslint/consistent-type-imports': WARN,
};
