import { useSignalEffect } from "@preact/signals";
import { useRef } from "preact/hooks";
import { cltw } from "../../utils/cltw.ts";
import { Icon } from "../parts/Icon.tsx";

import type { Signal } from "@preact/signals";
import type { JSX } from "preact";

export interface MenuProps extends JSX.HTMLAttributes<HTMLDialogElement> {
  open: Signal<boolean>;
}

export function Menu({ open, class: class_, ...props }: MenuProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => open.value = false;

  useSignalEffect(() => {
    if (open.value) ref.current?.showModal();
    else ref.current?.close();
  });

  return (
    <dialog
      class={cltw(
        "menu sm:hidden",
        "fixed z-50 h-screen w-full max-h-screen max-w-full",
        "bg-blue-500 text-white",
        class_,
      )}
      ref={ref}
      {...props}
    >
      <div class="h-16 w-full px-4 flex justify-between items-center">
        <div class="font-bold text-2xl">YuArasino</div>
        <button
          class="size-8"
          type="button"
          autoFocus
          onClick={close}
        >
          <Icon
            class="size-8 bg-white"
            src="/icons/xmark.svg"
            alt="メニュー"
          />
        </button>
      </div>
    </dialog>
  );
}
