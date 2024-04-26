import js from "@eslint/js"
import gitignore from "eslint-config-flat-gitignore"
import prettierConfig from "eslint-config-prettier"
import astro from "eslint-plugin-astro"
import ts from "typescript-eslint"

const ignoreConfig = gitignore()

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ignoreConfig,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs["flat/jsx-a11y-recommended"],
  prettierConfig,
]
