import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface KnockoutText {
  class?: JSX.IntrinsicElements["div"]["class"];
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

export const KnockoutText = ({
  class: class_,
  tag: Tag = "div",
  text,
}: KnockoutText) => {
  return (
    <Tag
      class={cn(
        "px-[0.5em] py-[0.25em]",
        "bg-current",
        "text-white",
        class_,
      )}
    >
      {text}
    </Tag>
  );
};
