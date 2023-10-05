const LocalStorage = {
  get(key: string): string | null {
    return global.window.localStorage.getItem(key);
  },

  set(key: string, value: string) {
    global.window.localStorage.setItem(key, value);
  },

  remove(key: string) {
    global.window.localStorage.removeItem(key);
  },

  clear() {
    global.window.localStorage.clear();
  },
};

const ParseGetLocalStorage = (key: string) => {
  JSON.parse(LocalStorage.get(key));
};

export { LocalStorage, ParseGetLocalStorage };
