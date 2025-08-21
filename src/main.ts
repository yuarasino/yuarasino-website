import { App, staticFiles, trailingSlashes } from "fresh";

import type { State } from "~/types.ts";

export const app = new App<State>();
app.use(staticFiles());
app.use(trailingSlashes("never"));

app.fsRoutes();
