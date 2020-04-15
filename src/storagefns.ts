import { storageGet, storageSet, value } from './storage';

export function localGet(key: string): value {
  return storageGet(key, 'localStorage');
}

export function localSet(key: string, value: value): void {
  storageSet(key, value, 'localStorage');
}

export function sessionGet(key: string): value {
  return storageGet(key, 'sessionStorage');
}

export function sessionSet(key: string, value: value): void {
  storageSet(key, value, 'sessionStorage');
}
