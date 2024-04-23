import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons"
import containerQueries from "@tailwindcss/container-queries"

const tailwindIcons = iconsPlugin({
  // managed by: https://icones.js.org/
  collections: getIconCollections(["fa6-solid", "fa6-brands"]),
})

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // managed by: https://fontsource.org/
        sans: ["'M PLUS 1 Variable'", "sans-serif"],
        ui: ["'Oxanium Variable'", "system-ui"],
      },
      colors: {
        // managed by: https://uicolors.app/
        primary: {
          50: "#fbf4f8",
          100: "#f9eaf3",
          200: "#f5d5e7",
          300: "#edb1d1",
          400: "#e284b4",
          500: "#d55f98",
          600: "#c24079",
          700: "#a72f60",
          800: "#8a2a50",
          900: "#742745",
          950: "#461125",
        },
        secondary: {
          50: "#f1f9fe",
          100: "#e1f2fd",
          200: "#bde5fa",
          300: "#78cdf6",
          400: "#40baf0",
          500: "#17a1e0",
          600: "#0a81bf",
          700: "#0a679a",
          800: "#0c5780",
          900: "#10496a",
          950: "#0b2e46",
        },
        tertiary: {
          50: "#fcf4f4",
          100: "#fae9e9",
          200: "#f5d6d8",
          300: "#edb4b8",
          400: "#e28a92",
          500: "#d15866",
          600: "#bd4155",
          700: "#9f3146",
          800: "#852c3f",
          900: "#73283b",
          950: "#3f121c",
        },
      },
    },
  },
  plugins: [containerQueries, tailwindIcons],
}
