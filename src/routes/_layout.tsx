import { define } from "@/utils/fresh.ts";
import { Navigator } from "@/islands/Navigator.tsx";
import { cn } from "@/utils/tailwind.ts";

export default define.layout(({ Component }) => {
  return (
    <div
      class={cn(
        "pt-12",
      )}
    >
      <Navigator />
      <Component />
    </div>
  );
});
