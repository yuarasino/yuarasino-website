import { useRef } from "preact/hooks";
import { tw } from "../utils/tailwind.ts";
import { SvgIcon } from "../components/SvgIcon.tsx";

export const MenuDialog = () => {
  const menuRef = useRef<HTMLDialogElement>(null);
  const showMenu = () => {
    menuRef.current?.showModal();
  };
  const closeMenu = () => {
    menuRef.current?.close();
  };

  return (
    <div class="lg:hidden">
      <button
        type="button"
        class="block size-8 hover:opacity-70"
        onClick={showMenu}
      >
        <SvgIcon
          class="size-8"
          src="/icons/bars.svg"
          alt="メニューを開く"
        />
      </button>
      <dialog
        ref={menuRef}
        class={tw(
          "fixed inset-0 z-50",
          "backdrop:hidden",
          "h-full w-full max-h-full max-w-full",
          "bg-blue-500 text-white",
          "transition-all transition-discrete",
          "-translate-x-full",
          "open:translate-x-0 starting:open:-translate-x-full",
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
          <button
            type="button"
            class="block size-8 hover:opacity-70"
            onClick={closeMenu}
          >
            <SvgIcon
              class="size-8 bg-white"
              src="/icons/xmark.svg"
              alt="メニューを閉じる"
            />
          </button>
        </div>
      </dialog>
    </div>
  );
};
