import { page } from "fresh";
import { define } from "~/utils/fresh.ts";
import { cn } from "~/utils/tailwind.ts";
import { Game } from "~/islands/Game.tsx";

export const handler = define.handlers(({ state }) => {
  state.title = "HOME";
  state.description = "新篠ゆうのウェブサイト";
  return page();
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main>
      <section>
        <h1 class={cn("text-pink-500")}>{state.title}</h1>
        <Game />
      </section>
    </main>
  );
});
