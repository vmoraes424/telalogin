import React from "react";
import "./Dashboard.css";
import { SignOut } from "../firebase";

export default function Dashboard(props: any) {
  return (
    <>
      <nav>
        <div className="esq">
          <h1>Dashboard</h1>
        </div>
        <div className="dir">
          <p>Olá, {localStorage.getItem("nome")}!</p>
          <img src={props.foto} alt="Foto" />
          <button className="sair" onClick={SignOut}>
            Sair
          </button>
        </div>
      </nav>
    </>
  );
}
