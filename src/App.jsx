import React, { useState } from "react";
import Welcome from "./Components/Welcome";
import BorderWrapper from "./Components/BorderWrapper";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [isCounterVisible, setVisible] = useState(true)
  return (
    <>    
      {/* <BorderWrapper color="red">
        <Welcome program={"Data Science"} name="Max" />
      </BorderWrapper>
      <BorderWrapper color="green">
        <Welcome program={"Full Stack"} name="Alex" />
      </BorderWrapper> */}

      {isCounterVisible && <Counter />}
      <button onClick={() => setVisible(!isCounterVisible)}>hide/show</button>
    </>
  );
}

export default App;