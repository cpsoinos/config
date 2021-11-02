# @primarykids/prettier-config

A shared configuration file for [Prettier](https://prettier.io/).

## Installation

These packages are published to Github's package registry. A personal access token (PAT) is needed in order to install them into a project.
See [Authenticating with a personal access token](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

### Install with yarn

```bash
yarn add @primarykids/prettier-config -D
```

### Configuration

There are several options for configuring Prettier in your application. One is as a key in `package.json`:

```
{
  "name": "my-cool-library",
  "version": "9000.0.1",
  "prettier": "@primarykids/prettier-config"
}
```

If you don’t want to use `package.json`, you can use any of the supported extensions to export a string, e.g. `.prettierrc.json`:

```json
"@primarykids/prettier-config"
```

For more configuration options, see [Pretter's documentation on sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations).
