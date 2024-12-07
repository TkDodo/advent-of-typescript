const createRoute = <
  const Route extends string[]
>(
  author: string,
  route: Route
) => ({
  author,
  route,
  createdAt: Date.now(),
});
