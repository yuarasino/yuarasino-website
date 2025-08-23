import { define } from "~/utils/fresh.ts";
import { cn } from "~/utils/tailwind.ts";
import { Head } from "~/compositions/Head.tsx";

export default define.page(({ Component, state, url }) => {
  return (
    <html
      class={cn(
        "tracking-wider",
        "text-slate-900",
        "scroll-smooth scroll-pt-12",
      )}
      lang="ja"
    >
      <Head
        state={state}
        url={url}
      />
      <Component />
    </html>
  );
});
