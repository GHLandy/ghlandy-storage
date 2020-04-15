export type storage = 'localStorage' | 'sessionStorage';

/**
 * @name storageSet
 * @desc set localStorage or sessionStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 * @param  {String} storage localStorage|sessionStorage
 */
function storageSet(key: string, value: boolean | string | any[] | object, storage: storage): void {
  let val = value;

  if (typeof val !== 'string') {
    val = JSON.stringify(val);
  }

  window[storage].setItem(key, val);
}

/**
 * @name storageGet
 * @desc get localStorage or sessionStorage
 * @param  {String} key
 * @param  {String} storage localStorage|sessionStorage
 * @return {Null|Boolean|String|Array|Object}
 */
function storageGet(key: string, storage: storage): null | boolean | string | any[] | object {
  let val = window[storage].getItem(key);

  if (!val) {
    val = window[storage][key] || null;
  }

  try {
    val = JSON.parse(val as string);
  } catch (e) {
    // console.warn(storage, e)
  }

  return val;
}

/**
 * @name localSet
 * @desc set localStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 */
export function localSet(key: string, value: boolean | string | any[] | object): void {
  storageSet(key, value, 'localStorage');
}

/**
 * @name localGet
 * @desc get localStorage
 * @param  {String} key
 * @return {Null|Boolean|String|Array|Object}
 */
export function localGet(key: string): null | boolean | string | any[] | object {
  return storageGet(key, 'localStorage');
}

/**
 * @name sessionSet
 * @desc set sessionStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 */
export function sessionSet(key: string, value: boolean | string | any[] | object): void {
  storageSet(key, value, 'sessionStorage');
}

/**
 * @name sessionGet
 * @desc get sessionStorage
 * @param  {String} key
 * @return {Null|Boolean|String|Array|Object}
 */
export function sessionGet(key: string): null | boolean | string | any[] | object {
  return storageGet(key, 'sessionStorage');
}
