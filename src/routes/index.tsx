import { page } from "fresh";
import { define } from "../utils/fresh.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main>
      <section>
        <h1 class="text-pink-300">{state.title}</h1>
        <p class="text-blue-300">{state.description}</p>
      </section>
    </main>
  );
});
