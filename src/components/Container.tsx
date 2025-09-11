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
        "mx-auto",
        "px-2.5 md:px-5 lg:px-7.5 xl:px-10",
        "w-full md:w-160 lg:w-240 xl:w-320",
        class_,
      )}
    >
      {children}
    </div>
  );
});
