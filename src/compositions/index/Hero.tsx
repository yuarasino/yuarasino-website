import { asset } from "fresh/runtime";
import { defineComponent } from "../../utils/preact.ts";
import { cn } from "../../utils/tailwind.ts";
import { Box } from "../../components/Box.tsx";
import { Icon } from "../../components/Icon.tsx";

export const Hero = defineComponent(() => {
  return (
    <div
      class={cn(
        "relative",
      )}
    >
      <Box>
        <img
          class={cn(
            "h-screen w-full",
            "object-cover object-top",
          )}
          src={asset("/images/illust.webp")}
          alt="新篠ゆうのイラスト"
        />
      </Box>
      <Box
        class={cn(
          "absolute bottom-0 inset-x-0 ",
          "py-8",
        )}
      >
        <Box
          class={cn(
            "flex justify-center items-center",
            "flex-col lg:flex-row",
            "mb-12 gap-y-4",
          )}
        >
          <Box
            class={cn(
              "flex justify-end",
              "flex-1",
            )}
          >
            <p
              class={cn(
                "p-[0.25em]",
                "bg-pink-300",
                "font-light",
                "text-4xl md:text-5xl",
                "lg:text-4xl xl:text-5xl",
                "tracking-widest leading-none",
                "text-white",
              )}
            >
              WELCOME&nbsp;TO
            </p>
          </Box>
          <Box
            class={cn(
              "flex justify-start",
              "flex-1",
            )}
          >
            <h1
              class={cn(
                "p-[0.25em]",
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
          </Box>
        </Box>
        <Box
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
              src="/icons/chevron-double-down.svg"
              alt="コンテンツに進む"
            />
          </div>
        </Box>
      </Box>
    </div>
  );
});
