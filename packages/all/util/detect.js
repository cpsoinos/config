// Adapted from eslint-plugin-react/lib/util/version
const fs = require('fs')
const path = require('path')
const resolve = require('resolve')

function resolveBasedir(contextOrFilename) {
  if (contextOrFilename) {
    const filename =
      typeof contextOrFilename === 'string'
        ? contextOrFilename
        : contextOrFilename.getFilename()
    const dirname = path.dirname(filename)
    try {
      if (fs.statSync(filename).isFile()) {
        // dirname must be dir here
        return dirname
      }
    } catch (err) {
      // https://github.com/eslint/eslint/issues/11989
      if (err.code === 'ENOTDIR') {
        // virtual filename could be recursive
        return resolveBasedir(dirname)
      }
    }
  }
  return process.cwd()
}

// TODO, semver-major: remove context fallback
function detect(libName, context = null) {
  const basedir = resolveBasedir(context)

  try {
    const libPath = resolve.sync(libName, { basedir })
    const lib = require(libPath) // eslint-disable-line global-require, import/no-dynamic-require
    if (lib.version) {
      return lib.version
    }
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      return false
    }
    throw e
  }
}

module.exports = { detect }
