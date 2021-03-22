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
          refFirstChild && refFirstChild.current.validate();
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
              <ValidateComponent key="valid 11" />

              <SomeComponent key="some 8">
                <SomeComponent key="some 9">
                  <ValidateComponent key="valid 12" />
                </SomeComponent>
              </SomeComponent>
            </SomeComponent>
          </SomeComponent>
        </SomeComponent>

        <SomeComponent key="some 2" />

        <SomeComponent key="some 3">
          <ValidateComponent key="valid 3">
            <SomeComponent key="some 4">
              <SomeComponent key="some 5">
                <SomeComponent key="some 9">
                  <ValidateComponent key="valid 13" />
                </SomeComponent>
                <ValidateComponent key="valid 6" />
                <ValidateComponent key="valid 7" />
              </SomeComponent>
            </SomeComponent>
            <SomeComponent key="some 8">
              <ValidateComponent key="valid 12" />
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
