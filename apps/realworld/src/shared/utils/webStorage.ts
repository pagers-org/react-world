import { match } from 'ts-pattern';

export enum StorageKey {
  userToken = 'u',
}

StorageKey.userToken === 'u';

class WebStorage {
  private localStorage;
  constructor() {
    if (typeof window !== 'undefined') {
      this.localStorage = window.localStorage;
    }
  }

  setItem(key: StorageKey, value: any) {
    if (!this.localStorage) {
      return;
    }
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: StorageKey.userToken): string | null;
  getItem(key: StorageKey) {
    if (!this.localStorage) {
      return null;
    }
    const stringifyItem = this.localStorage.getItem(key);

    return match({ stringifyItem, key })
      .with({ stringifyItem: null }, () => null)
      .with({ key: StorageKey.userToken }, () => JSON.parse(stringifyItem!))
      .exhaustive();
  }
  removeItem(key: StorageKey) {
    if (!this.localStorage) {
      return;
    }
    this.localStorage.removeItem(key);
  }
}

const webStorage = new WebStorage();

export default webStorage;
