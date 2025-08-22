import type { AnyComponent } from "preact";

// deno-lint-ignore ban-types
export const defineComponent = <Props = {}>(
  component: AnyComponent<Props>,
): AnyComponent<Props> => {
  return component;
};
