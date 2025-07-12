import { cltw } from "../../utils/cltw.ts";

import type { JSX } from "preact";

export interface IconProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  src: JSX.ImgHTMLAttributes<HTMLImageElement>["src"];
  alt: JSX.ImgHTMLAttributes<HTMLImageElement>["alt"];
}

export function Icon({ src, alt, class: class_, ...props }: IconProps) {
  return (
    <span
      class={cltw(
        "inline-block size-4 bg-black",
        class_,
      )}
      style={{
        maskPosition: "center center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskImage: `url('${src}')`,
      }}
      role="img"
      aria-label={alt}
      {...props}
    />
  );
}
