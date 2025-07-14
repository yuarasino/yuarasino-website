import { page } from "fresh";
import { define } from "../utils/define.ts";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title = "yuarasino-website";
    ctx.state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main class="min-h-screen">
      <h1 class="text-pink-500">{state.title}</h1>
      <p class="text-blue-500">{state.description}</p>
    </main>
  );
});
