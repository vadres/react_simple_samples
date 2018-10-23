import React from "react";
import ReactDOM from "react-dom";

import Permutation from "./permutation.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Permutation init="baa" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
