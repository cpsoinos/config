# @coreyander/eslint-config

A shared set of opinionated configuration files.

## Installation

With `npm`:

```
npm install @coreyander/eslint-config-typescript --save-dev
```

With `yarn`:

```
yarn add @coreyander/eslint-config-typescript -D
```

With `pnpm`:

```
pnpm add @coreyander/eslint-config-typescript -D
```

### Configure `.eslintrc.js`

```js
module.exports = {
  extends: [
    '@coreyander/eslint-config-typescript' // or '@coreyander/eslint-config-react-ts'
  ]
}
```

## Publishing

This repository uses `changesets` to automatically publish changes to the NPM package registry on merge to main.
