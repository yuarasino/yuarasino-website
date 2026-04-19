import {
  type SvelteConfig,
  vitePreprocess,
} from "@sveltejs/vite-plugin-svelte";

const defineConfig = (config: SvelteConfig): SvelteConfig => config;

export default defineConfig({
  preprocess: vitePreprocess(),
});
