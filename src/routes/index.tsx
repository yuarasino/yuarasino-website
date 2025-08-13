import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { cn } from "../utils/tailwind.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page(({ state }) => {
  return (
    <main>
      <section>
        <h1
          class={cn(
            "text-pink-500",
          )}
        >
          {state.title}
        </h1>
        <p
          class={cn(
            "text-blue-500",
          )}
        >
          {state.description}
        </p>
      </section>
    </main>
  );
});
