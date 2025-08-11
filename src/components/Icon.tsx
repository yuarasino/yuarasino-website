import { defineComponent } from "../utils/preact.ts";
import { cn } from "../utils/tailwind.ts";

import type { JSX } from "preact";

export type IconProps = {
  class?: JSX.IntrinsicElements["span"]["class"];
  src: JSX.IntrinsicElements["img"]["src"];
  alt: JSX.IntrinsicElements["img"]["alt"];
};

export const Icon = defineComponent<IconProps>((
  { class: class_, src, alt },
) => {
  return (
    <span
      class={cn(
        "inline-block",
        "size-6",
        "bg-current",
        "mask-center mask-no-repeat mask-contain",
        class_,
      )}
      role="img"
      aria-label={alt}
      style={{
        maskImage: `url(${src})`,
      }}
    />
  );
});
