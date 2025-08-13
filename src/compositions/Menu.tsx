import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { navLinks } from "../consts.ts";
import { Arranger } from "../components/Arranger.tsx";
import { Icon } from "../components/Icon.tsx";

import type { RefObject } from "preact";

export type MenuProps = {
  menuRef: RefObject<HTMLDialogElement>;
  closeMenu: () => void;
};

export const Menu = defineComponent<MenuProps>((
  { menuRef, closeMenu },
) => {
  return (
    <dialog
      class={cn(
        "fixed inset-0 z-50",
        "h-full w-full max-h-full max-w-full",
        "bg-slate-700",
        "transition-all transition-discrete",
        "-translate-x-full",
        "open:translate-x-0 open:starting:-translate-x-full",
        "backdrop:hidden",
      )}
      ref={menuRef}
    >
      <Arranger>
        <Arranger
          class={cn(
            "flex justify-between",
          )}
        >
          <Arranger>
            <div
              class={cn(
                "bg-white",
              )}
            >
              <a
                class={cn(
                  "flex items-center",
                  "px-4",
                  "h-12",
                  "bg-slate-700",
                  "font-light",
                  "leading-none",
                  "text-white",
                  "transition-opacity",
                  "hover:opacity-75",
                )}
                href="/"
                onClick={closeMenu}
              >
                YUARASINO.NET
              </a>
            </div>
          </Arranger>
          <Arranger>
            <div
              class={cn(
                "bg-white",
              )}
            >
              <button
                class={cn(
                  "flex items-center",
                  "px-3",
                  "h-12",
                  "bg-slate-700",
                  "font-light",
                  "leading-none",
                  "text-white",
                  "transition-opacity",
                  "hover:opacity-75",
                )}
                type="button"
                onClick={closeMenu}
              >
                <Icon
                  class={cn(
                    "size-6",
                  )}
                  src="/icons/x-mark.svg"
                  alt="メニューを閉じる"
                />
              </button>
            </div>
          </Arranger>
        </Arranger>
        <Arranger
          class={cn(
            "mt-16",
          )}
        >
          <nav>
            <ul
              class={cn(
                "flex flex-col items-center",
                "gap-y-4",
              )}
            >
              {navLinks.map((
                { label, href },
              ) => {
                return (
                  <li
                    class={cn(
                      "bg-white",
                    )}
                    key={label}
                  >
                    <a
                      class={cn(
                        "flex items-center",
                        "px-4",
                        "h-12",
                        "bg-slate-700",
                        "font-light",
                        "leading-none",
                        "text-white",
                        "transition-opacity",
                        "hover:opacity-75",
                      )}
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Arranger>
      </Arranger>
    </dialog>
  );
});
