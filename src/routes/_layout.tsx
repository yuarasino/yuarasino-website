import { define } from "~/utils/fresh.ts";
import { Navigator } from "~/islands/Navigator.tsx";
import { Footer } from "~/compositions/Footer.tsx";

export default define.layout(({ Component }) => {
  return (
    <body>
      <Navigator />
      <Component />
      <Footer />
    </body>
  );
});
