import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";

export default define.page(({ Component }) => {
  return (
    <html
      class={cn(
        "touch-manipulation",
      )}
    >
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
