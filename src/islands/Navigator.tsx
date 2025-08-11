import { useRef } from "preact/hooks";
import { defineComponent } from "../utils/preact.ts";
import { Header } from "../compositions/Header.tsx";
import { Menu } from "../compositions/Menu.tsx";

import type { TextLink } from "../utils/types.ts";

export const Navigator = defineComponent(() => {
  const textLinks: TextLink[] = [
    {
      label: "PROFILE",
      href: "/#profile",
    },
    {
      label: "ACTIVITIES",
      href: "/#activities",
    },
    {
      label: "RESUME",
      href: "/#resume",
    },
    {
      label: "WORKS",
      href: "/#works",
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "INFO",
      href: "/info",
    },
  ];

  const dialogRef = useRef<HTMLDialogElement>(null);
  const showDialog = () => {
    dialogRef.current?.showModal();
  };
  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <Header
        textLinks={textLinks}
        showDialog={showDialog}
      />
      <Menu
        textLinks={textLinks}
        closeDialog={closeDialog}
        dialogRef={dialogRef}
      />
    </>
  );
});
