const { testReactVersion } = require('eslint-plugin-react/lib/util/version')

const extendConfig = ['@coreyander/eslint-config-vue-ts', 'prettier']

const reactVersion = testReactVersion()

if (reactVersion !== '999.999.999') {
  extendConfig.unshift('@coreyander/eslint-config-react-ts')
}

module.exports = {
  extends: extendConfig
}
