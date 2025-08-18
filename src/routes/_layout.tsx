import { define } from "@/utils/fresh.ts";
import { Header } from "@/compositions/Header.tsx";
import { cn } from "../utils/tailwind.ts";

export default define.layout(({ Component }) => {
  return (
    <div
      class={cn(
        "pt-12",
      )}
    >
      <Header />
      <Component />
    </div>
  );
});
