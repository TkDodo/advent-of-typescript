const createRoute = <Route extends number | string>(author: string, route: Route) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route
}
