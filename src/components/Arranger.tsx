import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";

type Props = {
  class?: string;
};

export const Arranger = defineComponent<Props>((
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
