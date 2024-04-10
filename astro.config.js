import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

/** @type {import("astro").AstroUserConfig} */
export default defineConfig({
  integrations: [tailwind()],
})
