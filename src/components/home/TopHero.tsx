import { cn } from "../../utils/tailwind.ts";
import { HeroImage } from "../HeroImage.tsx";
import { SvgIcon } from "../SvgIcon.tsx";

export const TopHero = () => {
  return (
    <div class="relative">
      <HeroImage
        src="/images/yuarasino-illust.webp"
        alt="新篠ゆうのイラスト"
      />
      <div
        class={cn(
          "absolute inset-0",
          "bg-linear-to-b",
          "from-60% from-black/0",
          "to-70% to-black/30",
        )}
      >
        <div
          class={cn(
            "absolute inset-x-0 top-[75%] bottom-0",
            "flex flex-col justify-center items-center gap-2",
            "text-white text-2xl lg:text-4xl",
            "drop-shadow-md drop-shadow-blue-500",
          )}
        >
          <div>
            <span>{"Welcome to" + " "}</span>
            <h1 class="inline font-mono">YuArasino.net</h1>
          </div>
          <SvgIcon
            class="size-8 lg:size-12"
            src="/icons/angles-down.svg"
            alt="スクロール"
          />
        </div>
      </div>
    </div>
  );
};
