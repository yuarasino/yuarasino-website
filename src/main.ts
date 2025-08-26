import { App, staticFiles, trailingSlashes } from "fresh";

import type { State } from "~/types.ts";

export const app = new App<State>()
  .use(staticFiles())
  .use(trailingSlashes("never"))
  .fsRoutes();
