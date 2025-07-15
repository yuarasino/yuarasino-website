import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export const cltm = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
