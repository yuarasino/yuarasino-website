import { App, staticFiles, trailingSlashes } from "fresh";
import { accessLogger } from "./middlewares/access_logger.ts";

import type { State } from "./utils/fresh.ts";

export const app = new App<State>();
app.use(staticFiles());
app.use(trailingSlashes("never"));
app.use(accessLogger);

app.fsRoutes();
