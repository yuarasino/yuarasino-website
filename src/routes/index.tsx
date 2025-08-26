import { Head } from "fresh/runtime";
import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Icon } from "~/components/Icon.tsx";

export default define.page(() => {
  return (
    <>
      <Head>
        <title>yuarasino-website</title>
      </Head>
      <main>
        <section>
          <h1 class={cn("text-pink-500")}>yuarasino-website</h1>
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
