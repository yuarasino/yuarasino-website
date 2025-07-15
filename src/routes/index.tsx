import { page } from "fresh";
import { SvgIcon } from "../components/SvgIcon.tsx";
import { HeroImage } from "../components/HeroImage.tsx";
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
      <p>
        <HeroImage
          class="block"
          src="/images/illust.webp"
          alt="新篠ゆうのイラスト"
        />
      </p>
      <h1 class="text-pink-500">{state.title}</h1>
      <p class="text-blue-500">{state.description}</p>
      <p>
        <SvgIcon
          class="bg-pink-500"
          src="/icons/bars.svg"
          alt="メニューを開く"
        />
        <SvgIcon
          class="bg-blue-500"
          src="/icons/xmark.svg"
          alt="メニューを閉じる"
        />
      </p>
    </main>
  );
});
