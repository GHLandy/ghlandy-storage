import storage from '../src'

const STORE_TEST = [
  { key: 'boolean false', value: false },
  { key: 'boolean true', value: true },
  { key: 'string', value: 'just a string.' },
  { key: 'array', value: ['a', 1, { a: 1 }] },
  { key: 'object', value: { a: 1, b: 2 } },
]

describe('storage ...', () => {
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
  })

  // test localSet, localGet, sessionSet and sessionGet
  ;['local', 'session'].forEach(item => {
    STORE_TEST.forEach(test => {
      it(`${item}Set, ${item}Get ${test.key}`, () => {
        expect(storage[`${item}Get`]()).toBeNull()
        expect(storage[`${item}Get`](test.key)).toBeNull()

        storage[`${item}Set`](test.key, test.value)

        expect(storage[`${item}Get`](test.key)).toStrictEqual(test.value)
      })
    })
  })
})
