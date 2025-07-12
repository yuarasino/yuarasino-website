import { page } from "fresh";
import { Hero } from "../components/sections/Hero.tsx";
import { define } from "../utils/define.ts";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title = "yuarasino-website";
    ctx.state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(function Home({ state }) {
  return (
    <main class="min-h-screen">
      <Hero />
      <h1 class="text-pink-500">{state.title}</h1>
      <p class="text-blue-500">{state.description}</p>
    </main>
  );
});
