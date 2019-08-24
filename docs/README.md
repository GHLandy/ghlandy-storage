# API

Import the storage tool first:

```javascript
import storage from '@ghlandy/storage'
```

This `storage` has four function, `localSet`, `localGet`, `sessionSet` and
`sessionGet` to manipulate browser's `localStorage` and `sessionStorage` with
serialization and deserialization.

## `localSet` and `localGet`

`localSet` stand for `localStorage.setItem`, will set value to `localStorage`.
`localSet` stand for `localStorage.getItem`, will get value from `localStorage`.

Normally, if you have call `localSet` to set a key, but straightly get a key using
`localSet`, it would return a `null`.

Examples:

```javascript
storage.localSet('bl', true)
storage.localGet('bl') // true

storage.localSet('str', 'this is a string.')
storage.localGet('str') // 'this is a string.'

storage.localSet('arr', [1, 2, 3, 4])
storage.localGet('arr') // [1, 2, 3, 4]

storage.localSet('obj', { a: 1, b: 2, c: 3 })
storage.localGet('obj') // { a: 1, b: 2, c: 3 }
```

## `sessionSet` and `sessionGet`

This two function is similar to the above mentioned, but set or get value from
`sessionStorage`, what you to do is change the function name correspondingly.
