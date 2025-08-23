import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";
import { Layouter } from "~/components/Layouter.tsx";

export type ContainerProps = {
  class?: string;
};

export const Container = defineComponent<ContainerProps>((
  { class: class_, children },
) => {
  return (
    <Layouter
      class={cn(
        "mx-auto px-8",
        "w-full md:w-(--breakpoint-md)",
        "lg:w-(--breakpoint-lg) xl:w-(--breakpoint-xl)",
        class_,
      )}
    >
      {children}
    </Layouter>
  );
});
