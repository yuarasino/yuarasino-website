import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { SITE_TITLE } from "~/consts.ts";
import { ErrorArea } from "~/compositions/error/ErrorArea.tsx";
import { GameSection } from "~/compositions/error/GameSection.tsx";
import { define } from "~/utils/typing.ts";

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
      <main>
        <section>
          <GameSection />
          <ErrorArea
            title={title}
            description={description}
          />
        </section>
      </main>
    </>
  );
});
