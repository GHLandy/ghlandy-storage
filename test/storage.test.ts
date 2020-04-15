/* eslint-disable @typescript-eslint/no-explicit-any */

import storage from '../src';

const STORE_TEST = [
  { key: 'boolean false', value: false },
  { key: 'boolean true', value: true },
  { key: 'number', value: 1 },
  { key: 'stringify number', value: '1' },
  { key: 'string', value: 'just a string.' },
  { key: 'array', value: ['a', 1, { a: 1 }] },
  { key: 'object', value: { a: 1, b: 2 } },
];

describe('storage ...', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  // test localSet, localGet, sessionSet and sessionGet
  ['local', 'session'].forEach(item => {
    STORE_TEST.forEach(test => {
      it(`${item}Set, ${item}Get ${test.key}`, () => {
        expect((storage as any)[`${item}Get`]()).toBeNull();
        expect((storage as any)[`${item}Get`](test.key)).toBeNull();
        (storage as any)[`${item}Set`](test.key, test.value);

        expect((storage as any)[`${item}Get`](test.key)).toStrictEqual(test.value);
      });
    });
  });
});
