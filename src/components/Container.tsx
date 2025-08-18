import { defineComponent } from "@/utils/preact.ts";
import { cn } from "@/utils/tailwind.ts";

export type ContainerProps = {
  class?: string;
};

export const Container = defineComponent<ContainerProps>((
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
