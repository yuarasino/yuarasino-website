import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { Box } from "../components/Box.tsx";
import { Icon } from "../components/Icon.tsx";

import type { RefObject } from "preact";
import type { TextLink } from "../utils/types.ts";

export type MenuType = {
  textLinks: TextLink[];
  dialogRef: RefObject<HTMLDialogElement>;
  closeDialog: () => void;
};

export const Menu = defineComponent<MenuType>((
  { textLinks, dialogRef, closeDialog },
) => {
  return (
    <dialog
      class={cn(
        "fixed inset-0 z-50",
        "h-full w-full max-h-full max-w-full",
        "bg-slate-700",
        "-translate-x-full",
        "open:translate-x-0 open:starting:-translate-x-full",
        "transition-all transition-discrete",
        "backdrop:hidden",
      )}
      ref={dialogRef}
    >
      <Box
        class={cn(
          "flex justify-between",
        )}
      >
        <Box>
          <div
            class={cn(
              "bg-white",
            )}
          >
            <a
              class={cn(
                "flex items-center",
                "px-[0.5em]",
                "h-12",
                "bg-slate-700",
                "font-light",
                "text-xl",
                "tracking-widest leading-none",
                "text-white",
                "hover:opacity-85",
              )}
              href="/"
              onClick={closeDialog}
            >
              YUARASINO.NET
            </a>
          </div>
        </Box>
        <Box>
          <div
            class={cn(
              "bg-white",
            )}
          >
            <button
              class={cn(
                "flex items-center",
                "px-[0.5em]",
                "h-12",
                "bg-slate-700",
                "text-xl",
                "text-white",
                "hover:opacity-85",
              )}
              type="button"
              onClick={closeDialog}
            >
              <Icon
                class={cn(
                  "size-[1.875rem]",
                )}
                src="/icons/x-mark.svg"
                alt="メニューを閉じる"
              />
            </button>
          </div>
        </Box>
      </Box>
      <Box
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
            {textLinks.map((
              { label, href },
            ) => {
              return (
                <li
                  class={cn(
                    "bg-white",
                  )}
                >
                  <a
                    class={cn(
                      "flex items-center",
                      "px-[0.5em]",
                      "h-12",
                      "bg-slate-700",
                      "font-light",
                      "text-xl",
                      "tracking-widest leading-none",
                      "text-white",
                      "hover:opacity-85",
                    )}
                    href={href}
                    onClick={closeDialog}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Box>
    </dialog>
  );
});
