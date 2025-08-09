import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface HeadingText {
  class?: JSX.IntrinsicElements["div"]["class"];
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

export const HeadingText = ({
  class: class_,
  tag: Tag = "div",
  text,
}: HeadingText) => {
  return (
    <Tag
      class={cn(
        "relative",
        "after:absolute after:left-1/2 after:-bottom-4",
        "after:w-16 after:h-0",
        "after:border-t-[3px]",
        "after:-translate-x-1/2",
        class_,
      )}
    >
      {text}
    </Tag>
  );
};
