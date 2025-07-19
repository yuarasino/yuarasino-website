import { tw } from "../utils/tailwind.ts";
import { MenuDialog } from "../islands/MenuDialog.tsx";

export const SiteHeader = () => {
  return (
    <header
      class={tw(
        "fixed inset-0 z-40",
        "h-16 w-full",
      )}
    >
      <div
        class={tw(
          "flex justify-between items-center",
          "h-16 w-full",
          "p-4",
        )}
      >
        <a
          href="/"
          class="block hover:opacity-70"
        >
          <span class="font-bold text-2xl">YuArasino</span>
        </a>
        <MenuDialog />
      </div>
    </header>
  );
};
