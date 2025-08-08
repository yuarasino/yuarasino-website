import { cn } from "../../utils/tailwind.ts";
import { HeroImage } from "../HeroImage.tsx";
import { KnockoutText } from "../KnockoutText.tsx";
import { SvgIcon } from "../SvgIcon.tsx";

export const HeroArea = () => {
  return (
    <div
      class={cn(
        "relative",
      )}
    >
      <HeroImage
        src="/images/illust.webp"
        alt="新篠ゆうのイラスト"
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
            "tracking-widest",
            "text-4xl md:text-5xl",
            "lg:text-4xl xl:text-5xl",
          )}
        >
          <div
            class={cn(
              "flex justify-end",
              "flex-1",
            )}
          >
            <KnockoutText
              class={cn(
                "bg-pink-300",
              )}
              tag="p"
              text="WELCOME TO"
            />
          </div>
          <div
            class={cn(
              "flex justify-start",
              "flex-1",
            )}
          >
            <KnockoutText
              class={cn(
                "bg-blue-300",
              )}
              tag="h1"
              text="YUARASINO.NET"
            />
          </div>
        </div>
        <div
          class={cn(
            "flex justify-center items-center",
            "drop-shadow-lg drop-shadow-black",
          )}
        >
          <SvgIcon
            class={cn(
              "size-12",
              "text-white",
              "animate-bounce",
            )}
            src="/icons/chevron-double-down.svg"
            alt="コンテンツに進む"
          />
        </div>
      </div>
    </div>
  );
};
