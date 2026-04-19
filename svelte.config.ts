import {
  type SvelteConfig,
  vitePreprocess,
} from "@sveltejs/vite-plugin-svelte";

function defineConfig(config: SvelteConfig) {
  return config;
}

export default defineConfig({
  preprocess: vitePreprocess(),
});
