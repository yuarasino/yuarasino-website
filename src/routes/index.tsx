import { page } from "fresh";

import { define } from "../fresh/define.ts";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title = "yuarasino-website";
    ctx.state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main className="min-h-screen">
      <h1 className="text-pink-500">{state.title}</h1>
      <p className="text-blue-500">{state.description}</p>
    </main>
  );
});
