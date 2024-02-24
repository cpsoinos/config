# @cpsoinos/eslint-config

A shared set of opinionated configuration files.

## Installation

With `npm`:

```
npm install @cpsoinos/eslint-config-typescript --save-dev
```

With `yarn`:

```
yarn add @cpsoinos/eslint-config-typescript -D
```

With `pnpm`:

```
pnpm add @cpsoinos/eslint-config-typescript -D
```

### Configure `.eslintrc.js`

```js
module.exports = {
  extends: [
    '@cpsoinos/eslint-config-typescript', // or '@cpsoinos/eslint-config-react-ts'
  ],
}
```

## Publishing

This repository uses `changesets` to automatically publish changes to the NPM package registry on merge to main.
