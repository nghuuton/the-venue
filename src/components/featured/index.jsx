import React from "react";
import Carrousel from "./Carrousel";

export default function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Arina Grande</div>
      </div>
    </div>
  );
}
