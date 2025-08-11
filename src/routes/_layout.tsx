import { define } from "../utils/fresh.ts";
import { Header } from "../compositions/Header.tsx";

export default define.page(({ Component }) => {
  return (
    <>
      <Header />
      <Component />
    </>
  );
});
