import { cltw } from "../../utils/cltw.ts";

import type { JSX } from "preact";

export interface HeroProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export function Hero({ class: class_, ...props }: HeroProps) {
  return (
    <div
      class={cltw(
        "h-screen w-full",
        class_,
      )}
      {...props}
    >
      <img
        class="h-screen w-full object-cover object-top"
        src="/images/hero.webp"
        alt="新篠ゆうのヒーローイメージ"
      />
    </div>
  );
}
