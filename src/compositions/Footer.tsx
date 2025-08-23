import { SNS_LINKS } from "~/consts.ts";
import { defineComponent } from "~/utils/preact.ts";
import { cn } from "~/utils/tailwind.ts";
import { Container } from "~/components/Container.tsx";
import { Layouter } from "~/components/Layouter.tsx";
import { Icon } from "~/components/Icon.tsx";
import youtubeIcon from "~/assets/icons/youtube.svg";
import xtwitterIcon from "~/assets/icons/x-twitter.svg";
import githubIcon from "~/assets/icons/github.svg";

// deno-lint-ignore no-explicit-any
const SNS_ICONS: Record<string, any> = {
  "youtube": youtubeIcon,
  "x-twitter": xtwitterIcon,
  "github": githubIcon,
};

export const Footer = defineComponent(() => {
  return (
    <footer
      class={cn(
        "bg-slate-700",
        "font-light leading-none",
        "text-white",
      )}
    >
      <Container
        class={cn(
          "py-16",
        )}
      >
        <Layouter>
          <ul
            class={cn(
              "flex justify-center",
              "gap-x-8",
            )}
          >
            {SNS_LINKS.map((
              { slug, name, href },
            ) => {
              return (
                <li key={slug}>
                  <div
                    class={cn(
                      "bg-white",
                      "rounded-full",
                      "overflow-hidden",
                    )}
                  >
                    <a
                      class={cn(
                        "flex justify-center items-center",
                        "size-12",
                        "bg-white",
                        "text-slate-700",
                        "cursor-pointer",
                        "transition-opacity duration-300",
                        "hover:opacity-75",
                      )}
                      href={href}
                      target="_blank"
                    >
                      <Icon
                        src={SNS_ICONS[slug]}
                        alt={name}
                      >
                      </Icon>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </Layouter>
        <Layouter
          class={cn(
            "mt-16",
          )}
        >
          <p
            class={cn(
              "text-center",
            )}
          >
            &copy; 新篠ゆう All Rights Reserved.
          </p>
        </Layouter>
      </Container>
    </footer>
  );
});
