module.exports = {
  extends: [
    'plugin:react/recommended', // react-specific rules
    'plugin:react-hooks/recommended'
  ],
  env: {
    browser: 1
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
