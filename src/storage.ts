export type value = null | number | string | boolean | any[] | object;

type storage = 'localStorage' | 'sessionStorage';

/**
 * @name storageGet localStorage.getItem or sessionStorage.getItem
 */
export function storageGet(key: string, storage: storage): value {
  let value = window[storage].getItem(key) as string;

  try {
    value = JSON.parse(value);
  } catch (e) {
    // console.warn(storage, e)
  }

  return value;
}

/**
 * @name storageSet localStorage.setItem or sessionStorage.setItem
 */
export function storageSet(key: string, value: value, storage: storage): void {
  if (typeof value !== 'string' || (typeof value === 'string' && !isNaN(Number(value)))) {
    value = JSON.stringify(value);
  }

  window[storage].setItem(key, value);
}
