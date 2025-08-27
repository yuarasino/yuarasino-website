import { defineComponent } from "~/utils/typing.ts";
import { cn } from "~/utils/styling.ts";

type Props = {
  class?: string;
};

export const Container = defineComponent<Props>((
  { class: class_, children },
) => {
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
});
