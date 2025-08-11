import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export type ContainerProps = {
  class?: JSX.IntrinsicElements["div"]["class"];
};

export const Container = defineComponent<ContainerProps>((
  { class: class_, children },
) => {
  return (
    <div
      class={cn(
        "mx-auto",
        "w-full md:w-(--breakpoint-md)",
        "lg:w-(--breakpoint-lg) xl:w-(--breakpoint-xl)",
        class_,
      )}
    >
      {children}
    </div>
  );
});
