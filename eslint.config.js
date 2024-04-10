import js from "@eslint/js"
import getGitignoreConfig from "eslint-config-flat-gitignore"
import prettierConfig from "eslint-config-prettier"
import astro from "eslint-plugin-astro"
import ts from "typescript-eslint"

const gitignoreConfig = getGitignoreConfig()

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  gitignoreConfig,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs["flat/jsx-a11y-recommended"],
  prettierConfig,
]
