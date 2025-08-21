import { FRESH_VERSION, SITE_NAME, TWITTER_SITE } from "~/consts.ts";
import { defineComponent } from "~/utils/preact.ts";

import type { State } from "~/types.ts";

export type HeadProps = {
  state: State;
  url: URL;
};

export const Head = defineComponent<HeadProps>(({ state, url }) => {
  const isHome = url.pathname === "/";
  const title = isHome ? SITE_NAME : `${state.title} | ${SITE_NAME}`;
  const generator = `Fresh v${FRESH_VERSION}`;
  const ogType = isHome ? "website" : "article";

  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={state.description} />
      <meta name="generator" content={generator} />
      {state.noIndex && <meta name="robots" content="noindex" />}
      {state.ogImage && (
        <>
          <meta property="og:type" content={ogType} />
          <meta property="og:url" content={url.href} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={state.description} />
          <meta property="og:image" content={state.ogImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={TWITTER_SITE} />
        </>
      )}
    </head>
  );
});
