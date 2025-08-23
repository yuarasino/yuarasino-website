import { define } from "~/utils/fresh.ts";
import { Navigator } from "~/islands/Navigator.tsx";

export default define.layout(({ Component }) => {
  return (
    <body>
      <Navigator />
      <Component />
    </body>
  );
});
