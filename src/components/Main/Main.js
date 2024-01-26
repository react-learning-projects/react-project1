import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="main-section">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          porttitor lorem cursus, dictum erat eget, dignissim risus.{" "}
        </p>
      </div>
      <div className="main-section">
        <h3>Interests</h3>
        <p>
          Sed eu eros ex. Integer tristique dignissim nunc sed semper. Sed ut
          turpis accumsan, tempus augue ac, pulvinar augue.
        </p>
      </div>
    </div>
  );
}
