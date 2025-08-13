import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { navigationLinks } from "../consts.ts";
import { Arranger } from "../components/Arranger.tsx";
import { Icon } from "../components/Icon.tsx";

export type HeaderProps = {
  showMenu: () => void;
};

export const Header = defineComponent<HeaderProps>((
  { showMenu },
) => {
  return (
    <header
      class={cn(
        "fixed top-0 inset-x-0 z-40",
        "bg-slate-700",
      )}
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
              >
                YUARASINO.NET
              </a>
            </div>
          </Arranger>
          <Arranger
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
                {navigationLinks.map((
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
          <Arranger
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
                onClick={showMenu}
              >
                <Icon
                  src="/icons/bars-3.svg"
                  alt="メニューを開く"
                />
              </button>
            </div>
          </Arranger>
        </Arranger>
      </Arranger>
    </header>
  );
});
