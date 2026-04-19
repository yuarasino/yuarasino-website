import type { Plugin, UserConfig } from "@commitlint/types";

const defineConfig = (config: UserConfig): UserConfig => config;
const definePlugin = (plugin: Plugin): Plugin => plugin;

const emojiPrefixPlugin = definePlugin({
  rules: {
    "emoji-prefix": ({ header }) => {
      const regex = /^\p{RGI_Emoji} /v;
      return [regex.test(header ?? ""), "An emoji prefix is required."];
    },
  },
});

export default defineConfig({
  plugins: [emojiPrefixPlugin],
  rules: {
    "emoji-prefix": [2, "always"],
  },
});
