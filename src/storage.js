/**
 * @name storageSet
 * @desc set localStorage or sessionStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 * @param  {String} storage localStorage|sessionStorage
 */
function storageSet(key, value, storage) {
  let val = value

  if (typeof val !== 'string') {
    val = JSON.stringify(val)
  }

  window[storage].setItem(key, val)
}

/**
 * @name storageGet
 * @desc get localStorage or sessionStorage
 * @param  {String} key
 * @param  {String} storage localStorage|sessionStorage
 * @return {Null|Boolean|String|Array|Object}
 */
function storageGet(key, storage) {
  let val = window[storage].getItem(key)

  if (!val) {
    val = window[storage][key] || null
  }

  try {
    val = JSON.parse(val)
  } catch (e) {
    // console.warn(storage, e)
  }

  return val
}

/**
 * @name localSet
 * @desc set localStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 */
export function localSet(key, value) {
  storageSet(key, value, 'localStorage')
}

/**
 * @name localGet
 * @desc get localStorage
 * @param  {String} key
 * @return {Null|Boolean|String|Array|Object}
 */
export function localGet(key) {
  return storageGet(key, 'localStorage')
}

/**
 * @name sessionSet
 * @desc set sessionStorage
 * @param  {String} key
 * @param  {Boolean|String|Array|Object} value
 */
export function sessionSet(key, value) {
  storageSet(key, value, 'sessionStorage')
}

/**
 * @name sessionGet
 * @desc get sessionStorage
 * @param  {String} key
 * @return {Null|Boolean|String|Array|Object}
 */
export function sessionGet(key) {
  return storageGet(key, 'sessionStorage')
}
