export default {
  get: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  save: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};