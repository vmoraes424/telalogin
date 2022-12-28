import React from "react";
import "./Dashboard.css";
import Perfil from "../components/Popover";

export default function Dashboard(props: any) {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="esq">
            <h1>Dashboard</h1>
          </div>
          <div className="dir">
            <Perfil img={<img src={props.foto} alt="Foto" />} />
          </div>
        </div>
      </nav>
    </>
  );
}
