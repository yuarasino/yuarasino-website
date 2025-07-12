import { Header } from "../components/sections/Header.tsx";
import { Menu } from "../components/sections/Menu.tsx";
import { useSignal } from "@preact/signals";

export function Navigator() {
  const open = useSignal<boolean>(false);

  return (
    <>
      <Header open={open} />
      <Menu open={open} />
    </>
  );
}
