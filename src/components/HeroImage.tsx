import { cltm } from "../utils/cltm.ts";

import type { JSX } from "preact";

export interface HeroImageProps {
  class?: JSX.IntrinsicElements["img"]["class"];
  src: JSX.IntrinsicElements["img"]["src"];
  alt: JSX.IntrinsicElements["img"]["alt"];
}

export const HeroImage = ({ class: class_, src, alt }: HeroImageProps) => {
  return (
    <img
      class={cltm(
        "h-screen w-full object-cover object-top",
        class_,
      )}
      src={src}
      alt={alt}
    />
  );
};
