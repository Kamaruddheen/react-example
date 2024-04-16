import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Welcome from "./Components/Basics/Welcome";
import BorderWrapper from "./Components/Basics/BorderWrapper";
import Counter from "./Components/Basics/Counter";
import CounterHooks from "./Components/Basics/CounterHooks";
import InputBox from "./Components/Basics/Input/InputBox";

function App() {
  const [isCounterVisible, setVisible] = useState(true);
  return (
    <BrowserRouter>
      <div>
        <h1>React Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/props">Props</Link>
            </li>
            <li>
              <Link to="/hoc">HOC</Link>
            </li>
            <li>
              <Link to="/state-class-components">
                State basics with class components
              </Link>
            </li>
            <li>
              <Link to="/state-class-components-with-lifecycle">
                State basics with class components (Licycle of React)
              </Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/searching">Search functionality for persons</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route
          path="/props"
          element={<Welcome program={"Data Science"} name="Max" />}
        />
        <Route
          path="/hoc"
          element={
            <BorderWrapper color="red">
              <Welcome program={"Data Science"} name="Max" />
            </BorderWrapper>
          }
        />
        <Route path="/state-class-components" element={<Counter />} />
        <Route
          path="/state-class-components-with-lifecycle"
          element={
            isCounterVisible && (
              <>
                <Counter />
                <button onClick={() => setVisible(!isCounterVisible)}>
                  hide/show
                </button>
              </>
            )
          }
        />
        <Route path="/hooks" element={<CounterHooks />} />
        <Route path="/searching" element={<InputBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
