import { tailwind } from "@fresh/plugin-tailwind";

import { Builder } from "fresh/dev";

const builder = new Builder({ root: import.meta.dirname });
tailwind(builder);

if (Deno.args.includes("build")) {
  await builder.build();
} else {
  await builder.listen(() => import("./main.ts"));
}
