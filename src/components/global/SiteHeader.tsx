import { cn } from "../../utils/tailwind.ts";
import { KnockoutText } from "../KnockoutText.tsx";

export const SiteHeader = () => {
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
        "fixed inset-x-0 top-0 z-40",
      )}
    >
      <div
        class={cn(
          "flex justify-between",
          "text-lg",
        )}
      >
        <a
          class={cn(
            "block",
            "bg-white",
            "group",
          )}
          href="/"
        >
          <KnockoutText
            class={cn(
              "bg-pink-300",
              "group-hover:opacity-75",
            )}
            text="YUARASINO.NET"
          />
        </a>
        <nav
          class={cn(
            "hidden lg:flex",
          )}
        >
          {textLinks.map(({
            label,
            href,
          }) => (
            <a
              key={label}
              class={cn(
                "block",
                "bg-white",
                "group",
              )}
              href={href}
            >
              <KnockoutText
                class={cn(
                  "bg-blue-300",
                  "group-hover:opacity-75",
                )}
                text={label}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
