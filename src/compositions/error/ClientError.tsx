import { defineComponent } from "~/utils/preact.ts";
import { Jumper } from "~/islands/error/Jumper.tsx";

export const ClientError = defineComponent(() => {
  return (
    <section>
      <h1>404 NOT FOUND</h1>
      <Jumper />
    </section>
  );
});
