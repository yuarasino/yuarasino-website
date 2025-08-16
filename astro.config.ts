import { defineConfig } from "astro/config";
import deno from "@deno/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [
      deno(),
      tailwindcss(),
    ],
  },
});
