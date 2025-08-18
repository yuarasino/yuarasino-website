import { defineComponent } from "@/utils/preact.ts";
import { cn } from "@/utils/tailwind.ts";

export type ArrangerProps = {
  class?: string;
};

export const Arranger = defineComponent<ArrangerProps>((
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
