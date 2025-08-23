import { define } from "~/utils/fresh.ts";
import { Header } from "~/compositions/Header.tsx";

export default define.layout(({ Component }) => {
  return (
    <body>
      <Header />
      <Component />
    </body>
  );
});
