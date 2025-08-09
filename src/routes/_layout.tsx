import { define } from "../utils/fresh.ts";
import { SiteHeader } from "../components/global/SiteHeader.tsx";

export default define.layout(({ Component }) => {
  return (
    <>
      <SiteHeader />
      <Component />
    </>
  );
});
