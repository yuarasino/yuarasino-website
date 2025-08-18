import { page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = `INFO | ${siteName}`;
    state.description = "";
    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <main>
      <section>
        <h1>INFO</h1>
      </section>
    </main>
  );
});
