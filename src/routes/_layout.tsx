import { define } from "~/utils/fresh.ts";

export default define.layout(({ Component }) => {
  return (
    <body>
      <Component />
    </body>
  );
});
