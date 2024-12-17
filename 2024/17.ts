const compose = <A,B,C,Result>(f: (input: A) => B, g: (input: B) => C, h: (input: C) => Result) => (a: A) => (
  h(g(f(a)))
);

const upperCase = <T extends string>(x: T): Uppercase<T> => x.toUpperCase() as Uppercase<T>;
const lowerCase = <T extends string>(x: T): Lowercase<T> => x.toLowerCase() as Lowercase<T>;

type FirstChar<T extends string> = T extends `${infer First}${infer _Rest}` ? First : never;
const firstChar = <const T extends string>(x: T): FirstChar<T> => x[0] as FirstChar<T>;
const firstItem = <T extends Array<any>>(x: T): T[0] => x[0];
const makeTuple = <T>(x: T): [T] => [x];
const makeBox = <T>(value: T): { value: T} => ({ value });
