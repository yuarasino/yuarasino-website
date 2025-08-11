import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { Container } from "../components/Container.tsx";
import { Box } from "../components/Box.tsx";
import { Icon } from "../components/Icon.tsx";

export const Footer = defineComponent(() => {
  const iconLinks = [
    {
      src: "/icons/youtube.svg",
      alt: "YouTube",
      href: "https://youtube.com/@yuarasino",
    },
    {
      src: "/icons/x-twitter.svg",
      alt: "X/Twitter",
      href: "https://x.com/yuarasino",
    },
    {
      src: "/icons/github.svg",
      alt: "GitHub",
      href: "https://github.com/yuarasino",
    },
  ];

  return (
    <footer
      class={cn(
        "py-16",
        "bg-slate-700",
      )}
    >
      <Container>
        <Box
          class={cn(
            "flex justify-center",
          )}
        >
          <ul
            class={cn(
              "flex",
              "gap-x-8",
            )}
          >
            {iconLinks.map((
              { src, alt, href },
            ) => {
              return (
                <li>
                  <a
                    class={cn(
                      "flex justify-center items-center",
                      "size-12 rounded-full",
                      "bg-white",
                      "text-slate-700",
                    )}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      class={cn(
                        "size-8",
                      )}
                      src={src}
                      alt={alt}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box
          class={cn(
            "flex justify-center",
            "mt-16",
          )}
        >
          <div
            class={cn(
              "tracking-widest",
              "text-center",
              "text-white",
            )}
          >
            <p>&copy;&nbsp;2025&nbsp;新篠ゆう</p>
          </div>
        </Box>
      </Container>
    </footer>
  );
});
