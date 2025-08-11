import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { Container } from "../components/Container.tsx";
import { Icon } from "../components/Icon.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main>
      <section>
        <Container>
          <h1 class="text-pink-300">{state.title}</h1>
          <p class="text-blue-300">{state.description}</p>
          <p class="text-slate-500">
            <Icon
              src="/icons/chevron-double-down.svg"
              alt="コンテンツに進む"
            />
          </p>
        </Container>
      </section>
    </main>
  );
});
