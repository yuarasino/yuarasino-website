import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { Box } from "../components/Box.tsx";
import { Icon } from "../components/Icon.tsx";

import type { TextLink } from "../utils/types.ts";

export type HeaderProps = {
  textLinks: TextLink[];
  showDialog: () => void;
};

export const Header = defineComponent<HeaderProps>((
  { textLinks, showDialog },
) => {
  return (
    <header
      class={cn(
        "fixed top-0 inset-x-0 z-40",
      )}
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
            >
              YUARASINO.NET
            </a>
          </div>
        </Box>
        <Box
          class={cn(
            "hidden lg:block",
          )}
        >
          <nav>
            <ul
              class={cn(
                "flex",
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
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Box>
        <Box
          class={cn(
            "block lg:hidden",
          )}
        >
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
              onClick={showDialog}
            >
              <Icon
                class={cn(
                  "size-[1.875rem]",
                )}
                src="/icons/bars-3.svg"
                alt="メニューを開く"
              />
            </button>
          </div>
        </Box>
      </Box>
    </header>
  );
});
