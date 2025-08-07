import { cn } from "../../utils/tailwind.ts";
import { SvgIcon } from "../SvgIcon.tsx";

export const HeroArea = () => {
  return (
    <div
      class={cn(
        "relative",
      )}
    >
      <img
        class={cn(
          "w-full h-screen",
          "object-cover object-top",
        )}
        src="/images/illust.webp"
        alt="新篠ゆうのイラスト"
        fetchPriority="high"
      />
      <div
        class={cn(
          "absolute inset-x-0 bottom-0",
          "py-8",
        )}
      >
        <div
          class={cn(
            "flex justify-center items-center",
            "flex-col lg:flex-row",
            "mb-12 gap-y-4",
          )}
        >
          <div
            class={cn(
              "flex justify-end",
              "flex-1",
            )}
          >
            <div
              class={cn(
                "relative",
                "px-4 py-2",
                "bg-pink-300",
                "font-light tracking-widest",
                "text-4xl md:text-5xl",
                "lg:text-4xl xl:text-5xl",
                "text-white",
              )}
            >
              WELCOME&nbsp;TO
            </div>
          </div>
          <div
            class={cn(
              "flex justify-start",
              "flex-1",
            )}
          >
            <h1
              class={cn(
                "px-4 py-2",
                "bg-blue-300",
                "font-light tracking-widest",
                "text-4xl md:text-5xl",
                "lg:text-4xl xl:text-5xl",
                "text-white",
              )}
            >
              YUARASINO.NET
            </h1>
          </div>
        </div>
        <div
          class={cn(
            "flex justify-center items-center",
            "drop-shadow-lg drop-shadow-black/50",
          )}
        >
          <SvgIcon
            class={cn(
              "size-12",
              "text-white",
              "animate-bounce",
            )}
            src="/icons/angles-down.svg"
            alt="スクロールしてください"
          />
        </div>
      </div>
    </div>
  );
};
