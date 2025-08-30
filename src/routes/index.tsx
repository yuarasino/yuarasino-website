import { Head } from "fresh/runtime";
import { SITE_TITLE } from "~/consts.ts";
import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Container } from "~/components/Container.tsx";
import { Icon } from "~/components/Icon.tsx";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <main>
        <section>
          <Container class={cn("py-16")}>
            <h1 class={cn("text-pink-500")}>{SITE_TITLE}</h1>
            <p class={cn("text-slate-500")}>
              <Icon
                icon="icon-[material-symbols-light--keyboard-double-arrow-down]"
                label="コンテンツに進む"
              />
            </p>
          </Container>
        </section>
      </main>
    </>
  );
});
