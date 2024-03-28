import React from "react";
import Welcome from "./Components/Welcome";
import BorderWrapper from "./Components/BorderWrapper";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <>    
      {/* <BorderWrapper color="red">
        <Welcome program={"Data Science"} name="Max" />
      </BorderWrapper>
      <BorderWrapper color="green">
        <Welcome program={"Full Stack"} name="Alex" />
      </BorderWrapper> */}

      <Counter></Counter>
    </>
  );
}

export default App;
