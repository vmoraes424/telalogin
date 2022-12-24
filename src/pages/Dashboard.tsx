import React from "react";
import "./Dashboard.css";
import { SignOut } from "../firebase";

export default function Dashboard() {
  return (
    <>
      <nav>
        <div className="esq">
          <h1>Dashboard</h1>
        </div>
        <div className="dir">
          <p>{localStorage.getItem("nome")}</p>
          <button className="sair" onClick={SignOut}>
            Sair
          </button>
        </div>
      </nav>
    </>
  );
}
