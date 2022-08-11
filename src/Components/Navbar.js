import React from "react";
import logo from "../images/logo192.png";
export default function Navbar({
  darkMode,
  toggleDarkMode,
  darkModeTextSetter,
}) {
  return (
    <nav className={`${darkMode ? "nav-dark" : ""}`}>
      <div className="nav-container">
        <div className="logo-header">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <h1>ReactFacts</h1>
        </div>
        <div className="dark-mode-toggle-container">
          <span className={darkModeTextSetter(darkMode, "disabled")}>
            Light
          </span>
          <div
            className={`${
              darkMode ? "toggle-slider-container-dark" : ""
            } toggle-slider-container`}
            onClick={toggleDarkMode}
          >
            <div
              className={`${
                darkMode ? "toggle-slider-animate toggle-slider-dark" : ""
              } toggle-slider`}
            ></div>
          </div>
          <span
            className={darkModeTextSetter(
              !darkMode,
              "disabled",
              "dark-mode-text"
            )}
          >
            Dark
          </span>
        </div>
      </div>
    </nav>
  );
}
