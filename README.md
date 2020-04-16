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

A set of helpers deal with browser localStorage and sessionStorage, which used frequently. Using
this storage util, we can void serialization and deserialization of Array, Object, etc.

## Usage

```javascript
import { localGet, localSet, sessionGet, sessionSet } from '@ghlandy/storage';

localSet('key', { a: 1, b: 2 });
localGet('key'); // { a: 1, b: 2 }

sessionGet('key', { a: 1, b: 2 });
sessionSet('key'); // { a: 1, b: 2 }
```

**CAUTION: With version @2.x, there is no defualt export**

If you prefer default export style, just do:

```js
import * as storage from '@ghlandy/storage';
```

See [Usage Details Docs](http://storage.ghlandy.com) for api details.

## License

This tool is lecensed under the [MIT](https://github.com/GHLandy/ghlandy-storage/blob/master/LICENSE.md)
