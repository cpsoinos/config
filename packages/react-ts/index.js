module.exports = {
  extends: [
    '@cpsoinos/eslint-config-typescript',
    'plugin:react/recommended', // react-specific rules
    'plugin:react-hooks/recommended',
    'prettier', // must be last
  ],
  env: {
    browser: 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
