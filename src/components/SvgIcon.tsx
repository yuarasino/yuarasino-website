import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface SvgIconProps {
  class?: JSX.IntrinsicElements["span"]["class"];
  src: JSX.IntrinsicElements["img"]["src"];
  alt: JSX.IntrinsicElements["img"]["alt"];
}

export const SvgIcon = (props: SvgIconProps) => {
  return (
    <span
      class={cn(
        "block",
        "size-6",
        "bg-current",
        "mask-center mask-no-repeat mask-contain",
        props.class,
      )}
      role="img"
      aria-label={props.alt}
      style={{
        maskImage: `url(${props.src})`,
      }}
    />
  );
};
