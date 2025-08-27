import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { define } from "~/utils/typing.ts";
import { ErrorArea } from "~/compositions/error/ErrorArea.tsx";
import { GameSection } from "~/compositions/error/GameSection.tsx";

export default define.page(({ error }) => {
  const is404 = error instanceof HttpError && error.status === 404;
  const title = is404 ? "404 Not Found" : "500 Internal Server Error";
  const description = is404
    ? "ページが見つかりませんでした。"
    : "ページが表示できませんでした。";

  return (
    <>
      <Head>
        <title>{title} | yuarasino-website</title>
      </Head>
      <main>
        <section>
          {is404 && <GameSection />}
          <ErrorArea
            title={title}
            description={description}
          />
        </section>
      </main>
    </>
  );
});
