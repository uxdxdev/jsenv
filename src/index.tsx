import React from "react";
import ReactDOM from "react-dom";
import CodeCell from "./components/code-cell";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "./styles.css";

const App = () => {
  return <CodeCell />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
