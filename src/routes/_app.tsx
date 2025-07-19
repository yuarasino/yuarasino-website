import { define } from "../utils/fresh.ts";

export default define.page(({ Component, state }) => {
  return (
    <html lang="ja" class="text-slate-900">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title}</title>
        <meta name="description" content={state.description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <Component />
    </html>
  );
});
