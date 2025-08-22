import { defineConfig, searchForWorkspaceRoot } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  root: "src",
  plugins: [
    fresh(),
    tailwind(),
  ],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(Deno.cwd()),
      ],
    },
  },
});
