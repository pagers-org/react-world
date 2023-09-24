const LocalStorage = {
  get(key: string): string | null {
    return localStorage.getItem(key);
  },

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

const ParseGetLocalStorage = (key: string) => {
  JSON.parse(LocalStorage.get(key));
};

export { LocalStorage, ParseGetLocalStorage };
