import { define } from "~/utils/fresh.ts";
import { Head } from "~/compositions/Head.tsx";

export default define.page(({ Component, state, url }) => {
  return (
    <html lang="ja">
      <Head state={state} url={url} />
      <Component />
    </html>
  );
});
