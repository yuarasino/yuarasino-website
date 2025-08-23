import { useRef } from "preact/hooks";
import { defineComponent } from "~/utils/preact.ts";
import { Header } from "~/compositions/Header.tsx";
import { Menu } from "~/compositions/Menu.tsx";

export const Navigator = defineComponent(() => {
  const menuRef = useRef<HTMLDialogElement>(null);
  const showMenu = () => {
    menuRef.current?.showModal();
  };
  const closeMenu = () => {
    menuRef.current?.close();
  };

  return (
    <>
      <Header
        showMenu={showMenu}
      />
      <Menu
        menuRef={menuRef}
        closeMenu={closeMenu}
      />
    </>
  );
});
