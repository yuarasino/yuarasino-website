import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export function cltw(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
