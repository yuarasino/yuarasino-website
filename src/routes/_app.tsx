import { define } from "../utils/fresh.ts";
import { cn } from "../utils/tailwind.ts";

export default define.page(({ Component, state }) => {
  return (
    <html
      class={cn(
        "text-slate-900",
        "scroll-smooth",
      )}
      lang="ja"
    >
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
