type IsNaughtyOrNice<T extends string, NaughtyOrNice extends 'naughty' | 'nice' = 'naughty'> = 
  T extends `${infer First}${infer Rest}`
    ? IsNaughtyOrNice<Rest, NaughtyOrNice extends 'naughty' ? 'nice' : 'naughty'>
    : NaughtyOrNice;

type ParseInt<T extends string> = T extends `${infer Digit extends number}` ? Digit : never

type FormatNames<T extends Array<[string, string, string]>> = {
	[Key in keyof T]: {
		name: T[Key][0],
    count: ParseInt<T[Key][2]>,
		rating: IsNaughtyOrNice<T[Key][0]>
	}
};
