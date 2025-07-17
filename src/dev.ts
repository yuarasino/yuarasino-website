import { Builder } from "fresh/dev";
import { tailwind } from "@pakornv/fresh-plugin-tailwindcss";
import { app } from "./main.ts";

const builder = new Builder();
tailwind(builder, app);

if (Deno.args.includes("build")) {
  await builder.build(app);
} else {
  await builder.listen(app);
}
