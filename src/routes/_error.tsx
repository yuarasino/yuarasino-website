import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { SITE_TITLE } from "~/consts.ts";
import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { GameSectionIsland } from "~/islands/error/GameSectionIsland.tsx";
import { ErrorArea } from "~/compositions/error/ErrorArea.tsx";

export default define.page(({ error }) => {
  const is404 = error instanceof HttpError && error.status === 404;
  const title = is404 ? "404 Not Found" : "500 Internal Server Error";
  const description = is404
    ? "ページが見つかりませんでした。"
    : "ページが表示できませんでした。";

  return (
    <>
      <Head>
        <title>{title} | {SITE_TITLE}</title>
      </Head>
      <main
        class={cn(
          "select-none",
          "touch-manipulation",
        )}
      >
        <section>
          <GameSectionIsland />
          <ErrorArea
            title={title}
            description={description}
          />
        </section>
      </main>
    </>
  );
});
