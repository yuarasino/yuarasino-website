import type { Config } from "tailwindcss";

export default {
  content: [
    "src/{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans JP'", "sans-serif"],
      ui: ["'Ubuntu Sans'", "'Noto Sans JP'", "system-ui"],
      mono: ["'Noto Sans Mono'", "'Noto Sans JP'", "monospace"],
    },
  },
} satisfies Config;
