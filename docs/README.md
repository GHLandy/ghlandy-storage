# @ghlandy/storage usage details

This `storage` has four function as mentioned above to manipulate browser's `localStorage` and `sessionStorage` with serialization and deserialization of `Array` and `Object`, etc.

## import the storage tool

```javascript
import { localGet, localSet, sessionGet, sessionSet } from '@ghlandy/storage';
// Or
import * as storage from '@ghlandy/storage';
```

## `localGet` and `localSet` pair

`localSet` stands for `localStorage.setItem`, will set value to `localStorage`.
`localSet` stands for `localStorage.getItem`, will get value from `localStorage`.

Normally, if you have not call `localSet` to set a key, but straightly get a key using `localSet`,
it would return a `null`.

Examples:

```javascript
// have not set a key by calling: localSet('key', 'value')
storage.localGet('key'); // null

storage.localSet('bl', true);
storage.localGet('bl'); // true

storage.localSet('bl2', false);
storage.localGet('bl2'); // false

storage.localSet('number', 123);
storage.localGet('number'); // 123

storage.localSet('strigify_number', '123');
storage.localGet('strigify_number'); // '123'

storage.localSet('str', 'this is a string.');
storage.localGet('str'); // 'this is a string.'

storage.localSet('arr', [1, 2, 3, 4]);
storage.localGet('arr'); // [1, 2, 3, 4]

storage.localSet('obj', { a: 1, b: 2, c: 3 });
storage.localGet('obj'); // { a: 1, b: 2, c: 3 }
```

## `sessionGet` and `sessionSet` pair

This pair function is similar to the above mentioned, but set or get value making use of
`sessionStorage`, what you to do is change the function name correspondingly.
