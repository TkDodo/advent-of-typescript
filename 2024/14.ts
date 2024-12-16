type PerfReview<T> = T extends AsyncGenerator<infer Yield> ? Yield : never;
