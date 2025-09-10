import { Head } from "fresh/runtime";
import { SITE_TITLE } from "~/consts.ts";
import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Icon } from "~/components/Icon.tsx";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <main>
        <section>
          <h1 class={cn("text-pink-500")}>{SITE_TITLE}</h1>
          <p class={cn("text-slate-500")}>
            <Icon
              icon="icon-[material-symbols-light--keyboard-double-arrow-down]"
              label="コンテンツに進む"
            />
          </p>
        </section>
      </main>
    </>
  );
});
