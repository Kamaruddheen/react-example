import React from "react";
import "./App.css";
import Search from "./Components/TransitionExample/Search";

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
      {/* <ReducerExample2 /> */}
      <Search />
    </>
  );
}

export default App;
