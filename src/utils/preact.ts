import type { AnyComponent } from "preact";

// deno-lint-ignore ban-types
export const defineComponent = <Props = {}>(
  render: AnyComponent<Props>,
): AnyComponent<Props> => {
  return render;
};
