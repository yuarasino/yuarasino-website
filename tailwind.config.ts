import type { Config } from "tailwindcss";

export default {
  content: [
    "src/{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans'", "'Noto Sans JP'", "sans-serif"],
    },
  },
} satisfies Config;
