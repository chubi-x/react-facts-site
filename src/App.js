import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import reactFacts from "./data/reactfacts";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  function darkModeTextSetter(bool, className, alternateClass = "") {
    return ` ${bool ? className : alternateClass}`;
  }
  return (
    <div className={`${darkModeTextSetter(darkMode, "main-dark")} App`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        darkModeTextSetter={darkModeTextSetter}
      />

      <main>
        <h1 className={`${darkMode ? "dark-mode-text" : ""}`}>
          Fun facts about React
        </h1>
        <ul>
          {reactFacts.map((fact) => (
            <li
              key={reactFacts.indexOf(fact)}
              className={`${darkMode ? "dark-mode-text" : ""}`}
            >
              {fact}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

