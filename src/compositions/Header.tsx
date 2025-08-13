import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { Arranger } from "../components/Arranger.tsx";
import { Icon } from "../components/Icon.tsx";

export const Header = defineComponent(() => {
  const textLinks = [
    {
      label: "PROFILE",
      href: "/#profile",
    },
    {
      label: "ACTIVITIES",
      href: "/#activities",
    },
    {
      label: "RESUME",
      href: "/#resume",
    },
    {
      label: "WORKS",
      href: "/#works",
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "INFO",
      href: "/info",
    },
  ];

  return (
    <header
      class={cn(
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
                {textLinks.map((
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
              >
                <Icon
                  class={cn(
                    "size-6",
                  )}
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
