import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintPluginImportX from 'eslint-plugin-import-x'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import { config as tsEslintConfig, configs as tsEslintConfigs } from 'typescript-eslint'

export const base: ReturnType<typeof tsEslintConfig> = tsEslintConfig(
  js.configs.recommended,
  tsEslintConfigs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tsEslintConfigs.disableTypeChecked],
  },

  {
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/string-content': [
        'error',
        {
          patterns: {
            /* eslint-disable unicorn/string-content */
            "'": '’',
            '\\.\\.\\.': '…',
            '^http:\\/\\/': '^https:\\/\\/',
          },
        },
      ],
    },
  },

  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],
    },
  },
  {
    settings: {
      'import/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

          // // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

          // // use <root>/path/to/folder/tsconfig.json
          // project: "path/to/folder",

          // // Multiple tsconfigs (Useful for monorepos)

          // // use a glob pattern
          // project: "packages/*/tsconfig.json",

          // // use an array
          // project: [
          //   "packages/module-a/tsconfig.json",
          //   "packages/module-b/tsconfig.json"
          // ],

          // // use an array of glob patterns
          // project: [
          //   "packages/*/tsconfig.json",
          //   "other-packages/*/tsconfig.json"
          // ]
        }),
      ],
    },
  },

  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    // This pattern is added after the default patterns, which are ["**/node_modules/", ".git/"].
    ignores: [
      '*.min.*',
      'CHANGELOG.md',
      'dist',
      'LICENSE*',
      'output',
      'coverage',
      'public',
      'temp',
      'packages-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      '__snapshots__',
      '!.github',
      '!.vitepress',
      '!.vscode',
    ],
  },
)
