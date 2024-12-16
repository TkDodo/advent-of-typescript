declare function DynamicParamsCurrying<T extends (...args: any) => any>(
	fn: T,
): CurriedFunction<Parameters<T>, ReturnType<T>>;

type CurriedFunction<Params extends Array<any>, Return> =
	  <T extends Partial<Params>>(
    ...args: T
  ) => T["length"] extends Params["length"]
    ? Return
    : T["length"] extends number
		  ? CurriedFunction<DropFirst<Params, T["length"]>, Return>
			: never;

type DropFirst<T extends Array<any>, Count extends number, Acc extends Array<any> = []> =
  Acc['length'] extends Count
    ? T
    : T extends [infer _, ...infer Rest]
      ? DropFirst<Rest, Count, [...Acc, _]>
      : T;
