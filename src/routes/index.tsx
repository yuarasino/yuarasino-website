import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { SvgIcon } from "../components/SvgIcon.tsx";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title = "YuArasino.net";
    ctx.state.description =
      "バーチャル美少女プログラマー/麻雀VTuber 新篠ゆうのウェブサイトです。";
    return page();
  },
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main class="min-h-screen">
      <h1 class="text-pink-500">{state.title}</h1>
      <p class="text-blue-500">{state.description}</p>
      <p>
        <SvgIcon
          class="text-slate-500"
          src="/icons/angles-down.svg"
          alt="スクロール"
        />
      </p>
    </main>
  );
});
