import { cltw } from "../../utils/cltw.ts";
import { Icon } from "../parts/Icon.tsx";

import type { Signal } from "@preact/signals";
import type { JSX } from "preact";

export interface HeaderProps extends JSX.HTMLAttributes<HTMLElement> {
  open: Signal<boolean>;
}

export function Header({ open, class: class_, ...props }: HeaderProps) {
  const show = () => open.value = true;

  return (
    <header
      class={cltw(
        "fixed h-16 w-full",
        class_,
      )}
      {...props}
    >
      <div class="h-16 w-full px-4 flex justify-between items-center">
        <div class="font-bold text-2xl">YuArasino</div>
        <button
          class="sm:hidden size-8"
          type="button"
          onClick={show}
        >
          <Icon
            class="size-full"
            src="/icons/bars.svg"
            alt="メニュー"
          />
        </button>
      </div>
    </header>
  );
}
