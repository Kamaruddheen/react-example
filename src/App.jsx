import React from "react";
import Welcome from "./Components/Welcome";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome program={"Full Stack"} name="Alex" />
        <Welcome program={"Data Science"} name="Max" />
      </header>
    </div>
  );
}

export default App;
