module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  extends: [
    'standard', // https://standardjs.com style guide
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:yml/standard',
    'plugin:markdown/recommended'
  ],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  ignorePatterns: [
    '*.min.*',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  rules: {
    // change to standardjs.com rules: prefer *no* space btw named function and argument parens
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-console': 'off',
    'no-process-env': 0,
    'no-var': 'error', // use let or const instead of var
    camelcase: 'off',

    // import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-unresolved': 'off'
  },
  plugins: ['import']
}
