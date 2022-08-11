import React from "react";
import logo from "../images/logo192.png";
export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className={darkMode ? "dark" : ""}>
      <div className="nav-container">
        <div className="logo-header">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <h1>ReactFacts</h1>
        </div>
        <div className="dark-mode-toggle-container">
          <span className={"toggler-light"}>Light</span>
          <div className={"toggle-slider-container"} onClick={toggleDarkMode}>
            <div className={"toggle-slider"}></div>
          </div>
          <span className={"toggler-dark"}>Dark</span>
        </div>
      </div>
    </nav>
  );
}
