import base from '@cpsoinos/eslint-flat-configs/base'

export default [
  ...base,
  {
    ignores: ['.husky', '.nx', 'packages/*/dist/*'],
  },
]
