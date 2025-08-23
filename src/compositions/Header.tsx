import { NAV_ITEMS, SITE_NAME } from "~/consts.ts";
import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";
import { Layouter } from "~/components/Layouter.tsx";
import { Icon } from "~/components/Icon.tsx";
import menuIcon from "~/assets/icons/menu.svg";

export const Header = defineComponent(() => {
  return (
    <header
      class={cn(
        "fixed top-0 inset-x-0 z-50",
        "bg-slate-700",
      )}
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
                  "font-light leading-none",
                  "text-white",
                  "cursor-pointer",
                  "transition-opacity",
                  "hover:opacity-85",
                )}
                href="/"
              >
                {SITE_NAME}
              </a>
            </div>
          </Layouter>
          <Layouter
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
                {NAV_ITEMS.map((
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
                            "font-light leading-none",
                            "text-white",
                            "cursor-pointer",
                            "transition-opacity",
                            "hover:opacity-85",
                          )}
                          href={href}
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
          <Layouter
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
                  "text-white",
                  "cursor-pointer",
                  "transition-opacity",
                  "hover:opacity-85",
                )}
                type="button"
              >
                <Icon
                  src={menuIcon}
                  alt="メニューを開く"
                />
              </button>
            </div>
          </Layouter>
        </Layouter>
      </Layouter>
    </header>
  );
});
