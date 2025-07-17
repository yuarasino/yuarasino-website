import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export const tw = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};
