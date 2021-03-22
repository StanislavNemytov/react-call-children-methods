import { createRef } from "react";
import "./App.css";
import SomeComponent from "./Components/SomeComponent";
import ValidateComponent from "./Components/ValidateComponent";

function App() {
  const refFirstChild = createRef();
  return (
    <>
      <button
        onClick={() => {
          refFirstChild && refFirstChild.current.setNewText();
        }}
      >
        Click
      </button>
      <ValidateComponent ref={refFirstChild} key="valid 1">
        <SomeComponent key="some 1">
          <ValidateComponent key="valid 2" />
          <ValidateComponent key="valid 9" />
          <SomeComponent key="some 6">
            <SomeComponent key="some 7">
              <ValidateComponent key="valid 10" />
            </SomeComponent>
          </SomeComponent>
        </SomeComponent>

        <SomeComponent key="some 2" />

        <SomeComponent key="some 3">
          <ValidateComponent key="valid 3">
            <SomeComponent key="some 4">
              <SomeComponent key="some 5">
                <ValidateComponent key="valid 6" />
                <ValidateComponent key="valid 7" />
              </SomeComponent>
            </SomeComponent>
            <ValidateComponent key="valid 8" />
          </ValidateComponent>
        </SomeComponent>

        <ValidateComponent key="valid 4" />
        <ValidateComponent key="valid 5" />
      </ValidateComponent>
    </>
  );
}

export default App;
