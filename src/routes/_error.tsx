import { HttpError, page } from "fresh";
import { SITE_NAME } from "~/consts.ts";
import { define } from "~/utils/fresh.ts";
import { ClientError } from "~/compositions/error/ClientError.tsx";
import { ServerError } from "~/compositions/error/ServerError.tsx";

export const handler = define.handlers(({ state }) => {
  state.title = `ERROR | ${SITE_NAME}`;
  state.description = "エラー発生しました。";
  state.noIndex = true;
  return page();
});

export default define.page(({ Component, error }) => {
  const isClientError = (error instanceof HttpError) &&
    (400 <= error.status && error.status < 500);
  return (
    <main>
      {isClientError ? <ClientError /> : <ServerError />}
    </main>
  );
});
