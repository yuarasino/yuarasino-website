import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { Hero } from "../compositions/index/Hero.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <main>
      <section>
        <Hero />
      </section>
    </main>
  );
});
