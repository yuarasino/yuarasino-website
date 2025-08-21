import { page } from "fresh";
import { define } from "~/utils/fresh.ts";
import { cn } from "~/utils/tailwind.ts";

export const handler = define.handlers(({ state }) => {
  state.title = "yuarasino-website";
  return page();
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main>
      <section>
        <h1 class={cn("text-pink-500")}>{state.title}</h1>
      </section>
    </main>
  );
});
