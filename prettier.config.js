/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-astro-organize-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
