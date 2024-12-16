type Excuse<T extends Record<string, string>> = {
  new (excuses: T): { [K in keyof T]: `${Extract<K, string>}: ${T[K]}` }[keyof T];
};
