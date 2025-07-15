import { useRef } from "preact/hooks";
import { SvgIcon } from "../components/SvgIcon.tsx";
import { cltm } from "../utils/cltm.ts";

export const MenuDialog = () => {
  const menuRef = useRef<HTMLDialogElement>(null);
  const showMenu = () => {
    menuRef.current?.showModal();
  };
  const closeMenu = () => {
    menuRef.current?.close();
  };

  return (
    <div class="md:hidden">
      <button
        class="block size-8"
        type="button"
        onClick={showMenu}
      >
        <SvgIcon class="size-full" src="/icons/bars.svg" alt="メニューを開く" />
      </button>
      <dialog
        class={cltm(
          "fixed inset-0 z-50 backdrop:hidden",
          "h-full w-full max-h-full max-w-full",
          "bg-blue-500 text-white",
          "transition-all transition-discrete",
          "-translate-x-full open:translate-x-0 starting:open:-translate-x-full",
        )}
        ref={menuRef}
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
          <button
            class="block size-8"
            type="button"
            onClick={closeMenu}
          >
            <SvgIcon
              class="size-full bg-white"
              src="/icons/xmark.svg"
              alt="メニューを閉じる"
            />
          </button>
        </div>
      </dialog>
    </div>
  );
};
