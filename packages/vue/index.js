module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  }
}
