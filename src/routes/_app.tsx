import { page } from "fresh";
import { define } from "../fresh/define.ts";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title ??= "yuarasino-website";
    ctx.state.description ??= "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(({ Component, state }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title}</title>
        <meta name="description" content={state.description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
