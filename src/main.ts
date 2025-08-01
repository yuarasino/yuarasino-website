import { App, staticFiles, trailingSlashes } from "fresh";
import { accessLogger } from "./middlewares/accessLogger.ts";

import type { State } from "./utils/fresh.ts";

export const app = new App<State>();
app.use(staticFiles());
app.use(trailingSlashes("never"));
app.use(accessLogger);

app.fsRoutes();
