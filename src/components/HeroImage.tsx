import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface HeroImageProps {
  class?: JSX.IntrinsicElements["img"]["class"];
  src: JSX.IntrinsicElements["img"]["src"];
  alt: JSX.IntrinsicElements["img"]["alt"];
}

export const HeroImage = (props: HeroImageProps) => {
  return (
    <img
      class={cn(
        "block",
        "w-full h-screen",
        "object-cover object-top",
        props.class,
      )}
      src={props.src}
      alt={props.alt}
    />
  );
};
