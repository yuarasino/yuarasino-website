import type { FunctionalComponent } from "preact";

// deno-lint-ignore ban-types
export const defineComponent = <Props = {}>(
  component: FunctionalComponent<Props>,
): FunctionalComponent<Props> => {
  return component;
};
