import { useState } from "react";

function ThemeToggle() {
  var stateArray = useState("light");
  var theme = stateArray[0];
  var setTheme = stateArray[1];

  function switchToDark() {
    setTheme("dark");
  }

  function switchToLight() {
    setTheme("light");
  }

  if (theme === "light") {
    return (
      <div style={{ backgroundColor: "white", color: "black", padding: "20px" }}>
        <h2>Light Mode</h2>
        <p>This is light theme</p>
        <button onClick={switchToDark}>Switch to Dark</button>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "#222", color: "white", padding: "20px" }}>
        <h2>Dark Mode</h2>
        <p>This is dark theme</p>
        <button onClick={switchToLight}>Switch to Light</button>
      </div>
    );
  }
}

export default ThemeToggle;
