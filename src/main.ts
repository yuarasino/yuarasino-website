import { App, fsRoutes, staticFiles, trailingSlashes } from "fresh";
import { accessLogger } from "./utils/logger.ts";

import type { State } from "./utils/define.ts";

export const app = new App<State>({ root: import.meta.url });
app.use(staticFiles());
app.use(trailingSlashes("never"));
app.use(accessLogger);

await fsRoutes(app, {
  loadIsland: (path) => import(`./islands/${path}`),
  loadRoute: (path) => import(`./routes/${path}`),
});

if (import.meta.main) {
  await app.listen();
}
