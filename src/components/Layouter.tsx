import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";

export type LayouterProps = {
  class?: string;
};

export const Layouter = defineComponent<LayouterProps>((
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
