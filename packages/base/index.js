module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['unused-imports'],
  extends: [
    'standard', // https://standardjs.com style guide
    'eslint:recommended',
    'plugin:import-x/recommended',
    'plugin:yml/standard',
    'plugin:markdown/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
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
    '!.vscode',
  ],
  rules: {
    // change to standardjs.com rules: prefer *no* space btw named function and argument parens
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-console': 'off',
    'no-process-env': 0,
    'no-var': 'error', // use let or const instead of var
    camelcase: 'off',

    'unused-imports/no-unused-imports': 'error',

    // import
    'import-x/order': [
      'warn',
      {
        alphabetize: { order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import-x/newline-after-import': 'error',
    'import-x/no-useless-path-segments': 'error',
  },
}
