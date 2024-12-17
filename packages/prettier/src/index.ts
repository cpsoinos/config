import type { Config } from 'prettier'

const config = {
  arrowParens: 'always',
  semi: false,
  singleQuote: true,
  printWidth: 100,
  vueIndentScriptAndStyle: true,
} satisfies Config

export default config
