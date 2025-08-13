import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";
import { mediaLinks } from "../consts.ts";
import { Container } from "../components/Container.tsx";
import { Arranger } from "../components/Arranger.tsx";
import { Icon } from "../components/Icon.tsx";

export const Footer = defineComponent(() => {
  return (
    <footer
      class={cn(
        "bg-slate-700",
      )}
    >
      <Container
        class={cn(
          "py-16",
        )}
      >
        <Arranger
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
            {mediaLinks.map((
              { src, alt, href },
            ) => {
              return (
                <li
                  class={cn(
                    "bg-white",
                    "rounded-full",
                    "overflow-hidden",
                  )}
                  key={alt}
                >
                  <a
                    class={cn(
                      "flex justify-center items-center",
                      "size-12",
                      "bg-white",
                      "text-slate-700",
                      "transition-opacity",
                      "hover:opacity-75",
                    )}
                    href={href}
                    target="_blank"
                  >
                    <Icon
                      src={src}
                      alt={alt}
                    >
                    </Icon>
                  </a>
                </li>
              );
            })}
          </ul>
        </Arranger>
        <Arranger
          class={cn(
            "flex justify-center",
            "mt-16",
          )}
        >
          <div
            class={cn(
              "font-light",
              "leading-none",
              "text-center",
              "text-white",
            )}
          >
            <p>&copy; 2025 新篠ゆう</p>
          </div>
        </Arranger>
      </Container>
    </footer>
  );
});
