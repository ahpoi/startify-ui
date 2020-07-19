export const getItem = (key: string) => {
  const jsonNull = "null";
  const value = JSON.parse(localStorage.getItem(key) || jsonNull);
  return value ?? null;
};

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const hasItem = (key: string) => {
  return !!localStorage.getItem(key);
};
