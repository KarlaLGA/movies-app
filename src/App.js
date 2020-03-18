import React from "react";
import "./App.css";

import Labels from "./components/layout/Labels";
import FormContainer from "./components/containers/FormContainer";

function App() {
  const styleHeader = {
    border: "3px solid black",
    margin: 20,
    padding: "1rem"
  };
  return (
    <div className="App">
      <h1 className="header" style={styleHeader}>
        React Movies App
      </h1>
      <FormContainer />
      <Labels />
    </div>
  );
}

export default App;
