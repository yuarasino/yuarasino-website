import { page } from "fresh";
import { define } from "../utils/fresh.ts";
import { cn } from "../utils/tailwind.ts";
import { Container } from "../components/Container.tsx";
import { Icon } from "../components/Icon.tsx";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = "yuarasino-website";
    state.description = "新篠ゆうのウェブサイト";
    return page();
  },
});

export default define.page(({ state }) => {
  return (
    <main>
      <section>
        <Container
          class={cn(
            "py-16",
          )}
        >
          <h1
            class={cn(
              "text-pink-500",
            )}
          >
            {state.title}
          </h1>
          <p
            class={cn(
              "text-blue-500",
            )}
          >
            {state.description}
          </p>
          <p
            class={cn(
              "text-slate-500",
            )}
          >
            <Icon
              src="/icons/bars-3.svg"
              alt="メニューを開く"
            />
            <Icon
              src="/icons/x-mark.svg"
              alt="メニューを閉じる"
            />
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
