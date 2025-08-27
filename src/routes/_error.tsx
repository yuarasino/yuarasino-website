import { HttpError } from "fresh";
import { Head } from "fresh/runtime";
import { define } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";
import { Container } from "~/components/Container.tsx";

export default define.page(({ error }) => {
  const is404 = error instanceof HttpError && error.status === 404;
  const pageTitle = is404 ? "404 Not Found" : "500 Internal Server Error";

  return (
    <>
      <Head>
        <title>{pageTitle} | yuarasino-website</title>
      </Head>
      <main>
        <section>
          <Container class={cn("py-16")}>
            <h1>{pageTitle}</h1>
          </Container>
        </section>
      </main>
    </>
  );
});
