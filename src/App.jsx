import React from "react";
import "./App.css";
import ReducerExample from "./Components/ReducerExample/ReducerExample";

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
      {/* <InputBox /> */}
      {/* <InputHooks />  */} {/* function based approach with Hooks */}
      <ReducerExample />
    </>
  );
}

export default App;
