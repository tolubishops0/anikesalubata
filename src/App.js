import React, { useState } from "react";
import "./App.css";
import NavbBar from "./components/Navbar/NavbBar";
import Body from "./components/Navbar/Body";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <NavbBar handleMode={handleMode} />
      <Body darkMode={darkMode} />
    </div>
  );
}

export default App;
