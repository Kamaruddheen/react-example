import React, { useState } from "react";
import Welcome from "./Components/Welcome";
import BorderWrapper from "./Components/BorderWrapper";
import "./App.css";
import Counter from "./Components/Counter";
import CounterHooks from "./Components/CounterHooks";
import InputBox from "./Components/Input/InputBox";

function App() {
  // const [isCounterVisible, setVisible] = useState(true)
  return (
    <>    
      {/* <BorderWrapper color="red">
        <Welcome program={"Data Science"} name="Max" />
      </BorderWrapper>
      <BorderWrapper color="green">
        <Welcome program={"Full Stack"} name="Alex" />
      </BorderWrapper> */}

      {/* {isCounterVisible && <Counter />} */}
      {/* <button onClick={() => setVisible(!isCounterVisible)}>hide/show</button> */}
      {/* <Counter /> */}
      {/* <CounterHooks /> */}

      <InputBox />
    </>
  );
}

export default App;
