import { createDefine } from "fresh";

import type { AnyComponent } from "preact";
import type { State } from "~/types.ts";

export const define = createDefine<State>();

// deno-lint-ignore ban-types
export const defineComponent = <Props = {}>(
  component: AnyComponent<Props>,
): AnyComponent<Props> => {
  return component;
};
