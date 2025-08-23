import { page } from "fresh";
import { define } from "~/utils/fresh.ts";
import { cn } from "~/utils/tailwind.ts";
import { Container } from "~/components/Container.tsx";
import { Icon } from "~/components/Icon.tsx";
import scrollIcon from "~/assets/icons/scroll.svg";

export const handler = define.handlers(({ state }) => {
  state.title = "yuarasino-website";
  return page();
});

export default define.page<typeof handler>(({ state }) => {
  return (
    <main>
      <section>
        <Container class={cn("py-16")}>
          <h1 class={cn("text-pink-500")}>{state.title}</h1>
          <p class={cn("text-slate-500")}>
            <Icon
              src={scrollIcon}
              alt="コンテンツに進む"
            />
          </p>
        </Container>
      </section>
    </main>
  );
});
