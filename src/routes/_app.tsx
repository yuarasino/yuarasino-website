import { define } from "~/utils/fresh.ts";

export default define.page(({ Component, state }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title}</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
