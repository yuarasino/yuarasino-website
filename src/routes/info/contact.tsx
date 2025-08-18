import { page } from "fresh";
import { define } from "@/utils/fresh.ts";
import { siteName } from "@/consts.ts";

export const handler = define.handlers({
  GET: ({ state }) => {
    state.title = `CONTACT | ${siteName}`;
    state.description = "";
    state.robots = "noindex, nofollow";
    return page();
  },
});

export default define.page<typeof handler>(() => {
  return (
    <main>
      <section>
        <h1>CONTACT</h1>
      </section>
    </main>
  );
});
