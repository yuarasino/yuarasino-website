import type { Config } from "tailwindcss";

export default {
  content: [
    "src/{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "'Noto Sans JP'", "sans-serif"],
      mono: ["'Noto Sans Mono'", "'Noto Sans JP'", "monospace"],
    },
  },
} satisfies Config;
