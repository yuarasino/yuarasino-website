import { NAV_LINKS, SITE_NAME } from "~/consts.ts";
import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";
import { Layouter } from "~/components/Layouter.tsx";
import { Icon } from "~/components/Icon.tsx";
import closeIcon from "~/assets/icons/close.svg";

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
        "font-light leading-none",
        "text-white",
        "text-white",
        "transition-all transition-discrete duration-300",
        "-translate-x-full",
        "open:translate-x-0 open:starting:-translate-x-full",
        "backdrop:hidden",
      )}
      ref={menuRef}
    >
      <Layouter>
        <Layouter
          class={cn(
            "flex justify-between",
          )}
        >
          <Layouter>
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
                  "cursor-pointer",
                  "transition-opacity duration-300",
                  "hover:opacity-85",
                )}
                href="/"
                onClick={closeMenu}
              >
                {SITE_NAME}
              </a>
            </div>
          </Layouter>
          <Layouter>
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
                  "cursor-pointer",
                  "transition-opacity duration-300",
                  "hover:opacity-85",
                )}
                type="button"
                onClick={closeMenu}
              >
                <Icon
                  src={closeIcon}
                  alt="メニューを閉じる"
                />
              </button>
            </div>
          </Layouter>
        </Layouter>
        <Layouter
          class={cn(
            "mt-8",
          )}
        >
          <nav>
            <ul
              class={cn(
                "flex flex-col items-center",
                "gap-y-4",
              )}
            >
              {NAV_LINKS.map((
                { slug, name, href },
              ) => {
                return (
                  <li key={slug}>
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
                          "cursor-pointer",
                          "transition-opacity duration-300",
                          "hover:opacity-85",
                        )}
                        href={href}
                        onClick={closeMenu}
                      >
                        {name}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Layouter>
      </Layouter>
    </dialog>
  );
});
