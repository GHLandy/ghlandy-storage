# @ghlandy/storage

A set of helper deal with browser localStorage and sessionStorage, which used
frequently.

## Usage

```javascript
import storage from '@ghlandy/storage'

storage.localSet('key', { a: 1, b: 2 })
storage.localGet('key') // { a: 1, b: 2 }
```

See [Docs](./docs/README.md) for api details.

## License

This tool is lecensed under the [MIT](./LICENSE.md)
