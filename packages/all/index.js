const detect = require('./util/detect');

const extendConfig = ['@coreyander/eslint-config-typescript', 'prettier']

try {
  if (detect('react')) {
    extendConfig.splice(1, 1, '@coreyander/eslint-config-react')
  }
  if (detect('vue')) {
    extendConfig.splice(1, 1, '@coreyander/eslint-config-vue')
  }
} catch (err) {
  // ignore
}

module.exports = {
  extends: extendConfig
}
