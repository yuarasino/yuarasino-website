import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export interface HeroImageProps {
  class?: JSX.IntrinsicElements["img"]["class"];
  src: JSX.IntrinsicElements["img"]["src"];
  alt: JSX.IntrinsicElements["img"]["alt"];
}

export const HeroImage = ({
  class: class_,
  src,
  alt,
}: HeroImageProps) => {
  return (
    <img
      class={cn(
        "w-full h-screen",
        "object-cover object-top",
        class_,
      )}
      src={src}
      alt={alt}
      fetchPriority="high"
    />
  );
};
