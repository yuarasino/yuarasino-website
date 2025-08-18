import { defineComponent } from "@/utils/preact.ts";
import { cn } from "@/utils/tailwind.ts";
import { Arranger } from "@/components/Arranger.tsx";
import { Icon } from "@/components/Icon.tsx";

export const Hero = defineComponent(() => {
  return (
    <div>
      <Arranger
        class={cn(
          "relative",
        )}
      >
        <Arranger>
          <picture>
            <source srcSet="/images/illust.avif" type="image/avif" />
            <img
              class={cn(
                "h-(--hero-height) w-full",
                "object-cover object-top",
              )}
              src="/images/illust.jpg"
              alt="新篠ゆうのイラスト"
              fetchPriority="high"
            />
          </picture>
        </Arranger>
        <Arranger
          class={cn(
            "absolute bottom-0 inset-x-0",
            "py-8",
          )}
        >
          <Arranger
            class={cn(
              "flex justify-center",
              "flex-col lg:flex-row",
              "items-center lg:items-start",
              "mb-12 gap-y-4",
            )}
          >
            <Arranger
              class={cn(
                "flex justify-end",
                "flex-1",
              )}
            >
              <p
                class={cn(
                  "py-2 px-4",
                  "bg-pink-300",
                  "font-light",
                  "text-4xl md:text-5xl",
                  "lg:text-4xl xl:text-5xl",
                  "tracking-widest leading-none",
                  "text-white",
                )}
              >
                WELCOME TO
              </p>
            </Arranger>
            <Arranger
              class={cn(
                "flex justify-start",
                "flex-1",
              )}
            >
              <h1
                class={cn(
                  "py-2 px-4",
                  "bg-blue-300",
                  "font-light",
                  "text-4xl md:text-5xl",
                  "lg:text-4xl xl:text-5xl",
                  "tracking-widest leading-none",
                  "text-white",
                )}
              >
                YUARASINO.NET
              </h1>
            </Arranger>
          </Arranger>
          <Arranger
            class={cn(
              "flex justify-center",
            )}
          >
            <div
              class={cn(
                "text-white",
                "drop-shadow-lg drop-shadow-black",
              )}
            >
              <Icon
                class={cn(
                  "size-12",
                  "animate-bounce",
                )}
                src="/icons/scroll.svg"
                alt="コンテンツに進む"
              />
            </div>
          </Arranger>
        </Arranger>
      </Arranger>
    </div>
  );
});
