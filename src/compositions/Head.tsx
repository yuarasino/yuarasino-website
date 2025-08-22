import { FRESH_GENERATOR, SITE_NAME, X_ACCOUNT } from "~/consts.ts";
import { defineComponent } from "~/utils/preact.ts";

import type { State } from "~/types.ts";

export type HeadProps = {
  state: State;
  url: URL;
};

export const Head = defineComponent<HeadProps>(({ state, url }) => {
  return (
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{state.title}</title>
      <meta name="description" content={state.description} />
      <meta name="generator" content={FRESH_GENERATOR} />
      {state.noIndex && <meta name="robots" content="noindex" />}
      {state.ogType && state.ogImage && (
        <>
          <meta property="og:type" content={state.ogType} />
          <meta property="og:url" content={url.href} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={state.title} />
          <meta property="og:description" content={state.description} />
          <meta property="og:image" content={state.ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={X_ACCOUNT} />
        </>
      )}
    </head>
  );
});
