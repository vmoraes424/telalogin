import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { SignOut } from "../firebase";

export default function Perfil(props: any) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{props.img}</Popover.Trigger>
      <Popover.Content className="PopoverContent">
        <p>Olá, {localStorage.getItem("nome")}!</p>
        <button onClick={SignOut} className="btn_dentro">
          Sair
        </button>
      </Popover.Content>
    </Popover.Root>
  );
}
