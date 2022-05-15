# @cpsoinos/prettier-config

A shared configuration file for [Prettier](https://prettier.io/).

## Installation

With `npm`:

```
npm install @cpsoinos/prettier-config --save-dev
```

With `yarn`:

```
yarn add @cpsoinos/prettier-config -D
```

With `pnpm`:

```
pnpm add @cpsoinos/prettier-config -D
```

### Configuration

There are several options for configuring Prettier in your application. One is as a key in `package.json`:

```
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@cpsoinos/prettier-config"
}
```

If you don’t want to use `package.json`, you can use any of the supported extensions to export a string, e.g. `.prettierrc.json`:

```json
"@cpsoinos/prettier-config"
```

For more configuration options, see [Pretter's documentation on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).
