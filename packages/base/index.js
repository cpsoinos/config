module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'standard', // https://standardjs.com style guide
    'eslint:recommended',
    'plugin:jest/recommended', // rules for test files
    'prettier',
  ],
  env: {
    jest: true,
    'jest/globals': true, // allow jest globals in test files
  },
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
    'no-use-before-define': 'off',
  },
  plugins: ['jest', 'import', 'prettier'],
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
}
