// eslint-disable-next-line @typescript-eslint/no-var-requires
const { testReactVersion } = require('eslint-plugin-react/lib/util/version')

const extendConfig = ['@coreyander/eslint-config-vue-ts', 'prettier']

try {
  const reactVersion = testReactVersion()
  if (reactVersion !== '999.999.999') {
    extendConfig.unshift('@coreyander/eslint-config-react-ts')
  }
} catch (err) {
  // ignore
}

module.exports = {
  extends: extendConfig
}
