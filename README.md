# @wonderboymusic/eslint-config

Shared [ESLint 9](https://eslint.org/) flat config for TypeScript, React, and Prettier.

## What's Included

- **TypeScript** — via [typescript-eslint](https://typescript-eslint.io/)
- **React** — [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react), [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- **JSX a11y** — [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- **Imports** — [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) with TypeScript resolver
- **Promises** — [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
- **Prettier** — [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) + [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- **Testing** — [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) and [eslint-plugin-vitest](https://github.com/vitest-dev/eslint-plugin-vitest) for test files

## Install

```sh
pnpm add -D @wonderboymusic/eslint-config
```

## Usage

Create an `eslint.config.js` (or `eslint.config.mjs`) in your project root:

```js
import config from '@wonderboymusic/eslint-config';

export default config;
```

To extend or override rules, spread the config into a new array:

```js
import config from '@wonderboymusic/eslint-config';

export default [
  ...config,
  {
    rules: {
      // your overrides
    },
  },
];
```

## License

MIT
