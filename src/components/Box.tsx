import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export type BoxProps = {
  class?: JSX.IntrinsicElements["div"]["class"];
};

export const Box = defineComponent<BoxProps>((
  { class: class_, children },
) => {
  return (
    <div
      class={cn(
        class_,
      )}
    >
      {children}
    </div>
  );
});
