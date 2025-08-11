import { join } from "@std/path";
import { Builder } from "fresh/dev";
import { tailwind } from "@fresh/plugin-tailwind";

const builder = new Builder({
  root: join(Deno.cwd(), "src"),
  outDir: join(Deno.cwd(), "_fresh"),
});
tailwind(builder);

if (Deno.args.includes("build")) {
  await builder.build();
} else {
  await builder.listen(() => import("./main.ts"));
}
