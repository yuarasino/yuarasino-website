import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { HeroImage } from "../components/HeroImage.tsx";

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
      <div>
        <HeroImage
          src="/images/illust.webp"
          alt="新篠ゆうのイラスト"
        />
      </div>
      <h1 class="text-pink-500">{state.title}</h1>
      <p class="text-blue-500">{state.description}</p>
    </main>
  );
});
