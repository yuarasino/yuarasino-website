import { MenuDialog } from "../islands/MenuDialog.tsx";
import { cltm } from "../utils/cltm.ts";

export const SiteHeader = () => {
  return (
    <header
      class={cltm(
        "fixed inset-0 z-40",
        "h-16 w-full",
      )}
    >
      <div
        class={cltm(
          "flex justify-between items-center",
          "h-16 w-full p-4",
        )}
      >
        <a class="block" href="/">
          <span class="font-bold text-2xl">YuArasino</span>
        </a>
        <MenuDialog />
      </div>
    </header>
  );
};
