import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";

type Props = {
  class?: string;
  icon: string;
  label: string;
};

export const Icon = defineComponent<Props>((
  { class: class_, icon, label },
) => {
  return (
    <span
      class={cn(
        icon,
        class_,
      )}
      role="img"
      aria-label={label}
    />
  );
});
