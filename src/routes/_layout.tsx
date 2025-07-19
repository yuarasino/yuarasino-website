import { SiteHeader } from "../compositions/SiteHeader.tsx";
import { define } from "../utils/fresh.ts";

export default define.page(({ Component }) => {
  return (
    <body>
      <SiteHeader />
      <Component />
    </body>
  );
});
