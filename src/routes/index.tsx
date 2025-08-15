import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { Hero } from "../compositions/index/Hero.tsx";
import { About } from "../compositions/index/About.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page(() => {
  return (
    <main>
      <section>
        <Hero />
        <About />
      </section>
    </main>
  );
});
