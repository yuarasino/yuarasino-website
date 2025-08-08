import { cn } from "../utils/tailwind.ts";

import type { ComponentChildren, JSX } from "preact";

export interface ResponsiveContainerProps {
  class?: JSX.IntrinsicElements["div"]["class"];
  children?: ComponentChildren;
}

export const ResponsiveContainer = ({
  class: class_,
  children,
}: ResponsiveContainerProps) => {
  return (
    <div
      class={cn(
        "mx-auto px-8",
        "w-full md:w-(--breakpoint-md)",
        "lg:w-(--breakpoint-lg) xl:w-(--breakpoint-xl)",
        class_,
      )}
    >
      {children}
    </div>
  );
};
