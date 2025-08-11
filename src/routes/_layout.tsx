import { define } from "../utils/fresh.ts";
import { Navigator } from "../islands/Navigator.tsx";

export default define.page(({ Component }) => {
  return (
    <>
      <Navigator />
      <Component />
    </>
  );
});
