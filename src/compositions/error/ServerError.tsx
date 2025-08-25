import { defineComponent } from "~/utils/preact.ts";

export const ServerError = defineComponent(() => {
  return (
    <section>
      <h1>500 INTERNAL SERVER ERROR</h1>
    </section>
  );
});
