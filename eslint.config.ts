import base from './packages/eslint-flat-configs/src/base'

export default [
  ...base,
  {
    ignores: ['.husky', '.nx', 'packages/*/dist/*'],
  },
]
