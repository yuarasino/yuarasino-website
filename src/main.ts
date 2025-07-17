import { App, fsRoutes, staticFiles, trailingSlashes } from "fresh";

import type { State } from "./utils/fresh.ts";

export const app = new App<State>({ root: import.meta.url });
app.use(staticFiles());
app.use(trailingSlashes("never"));

await fsRoutes(app, {
  loadIsland: (path) => import(`./islands/${path}`),
  loadRoute: (path) => import(`./routes/${path}`),
});

if (import.meta.main) {
  await app.listen();
}
