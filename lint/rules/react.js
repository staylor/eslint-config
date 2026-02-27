import { OFF, ERROR, WARN } from './constants.js';

export default {
  'react/display-name': WARN,
  'react/jsx-key': WARN,
  'react/jsx-no-comment-textnodes': WARN,
  'react/jsx-no-target-blank': WARN,
  'react/jsx-no-undef': ERROR,
  'react/jsx-no-useless-fragment': ERROR,
  'react/jsx-pascal-case': [WARN, { allowAllCaps: true, ignore: [] }],
  'react/no-danger-with-children': WARN,
  'react/no-typos': WARN,
  'react/no-unknown-property': ERROR,
  'react/react-in-jsx-scope': OFF,
  'react/style-prop-object': WARN,

  // react-hooks
  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
  'react-hooks/exhaustive-deps': WARN,
  'react-hooks/rules-of-hooks': ERROR,
};
