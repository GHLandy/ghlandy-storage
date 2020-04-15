# @ghlandy/storage

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![codecov][codecov-image]][codecov-url]

[npm-image]: https://img.shields.io/npm/v/@ghlandy/storage.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@ghlandy/storage
[codecov-image]: https://codecov.io/gh/GHLandy/ghlandy-storage/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/GHLandy/ghlandy-storage
[travis-image]: https://travis-ci.org/GHLandy/ghlandy-storage.svg?branch=master
[travis-url]: https://travis-ci.org/GHLandy/ghlandy-storage

A set of helper deal with browser localStorage and sessionStorage, which used
frequently.

## Usage

```javascript
import storage from '@ghlandy/storage';

storage.localSet('key', { a: 1, b: 2 });
storage.localGet('key'); // { a: 1, b: 2 }
```

See [Docs](./docs/README.md) for api details.

## License

This tool is lecensed under the [MIT](./LICENSE.md)
