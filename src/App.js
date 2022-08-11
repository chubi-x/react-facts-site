import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import reactFacts from "./data/reactfacts";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className={`App`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={darkMode ? "main-dark" : ""}>
        <h1>Fun facts about React</h1>
        <ul>
          {reactFacts.map((fact) => (
            <li key={reactFacts.indexOf(fact)}>{fact}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

