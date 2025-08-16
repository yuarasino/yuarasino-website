import { defineConfig } from "astro/config";
import deno from "@deno/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [
      deno(),
    ],
  },
});
