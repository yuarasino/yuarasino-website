import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { SvgIcon } from "../components/SvgIcon.tsx";
import { ResponsiveContainer } from "../components/ResponsiveContainer.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page(({ state }) => {
  return (
    <main class="min-h-screen">
      <section>
        <ResponsiveContainer class="py-8">
          <h1 class="text-pink-500">{state.title}</h1>
          <p class="text-blue-500">{state.description}</p>
          <p>
            <SvgIcon
              src="/icons/chevron-double-down.svg"
              alt="コンテンツに移動する"
            />
          </p>
        </ResponsiveContainer>
      </section>
    </main>
  );
});
