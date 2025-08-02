import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { TopHero } from "../components/home/TopHero.tsx";

export const handler = define.handlers({
  GET: (ctx) => {
    ctx.state.title = "YuArasino.net";
    ctx.state.description =
      "バーチャル美少女プログラマー/麻雀VTuber 新篠ゆうのウェブサイトです。";
    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <main>
      <TopHero />
    </main>
  );
});
