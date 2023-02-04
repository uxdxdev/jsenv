import React, { useEffect, useState } from "react";
import bundler from "../bundler";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  // debounce the bundling of user defined code
  useEffect(() => {
    const timeout = setTimeout(async () => {
      const output = await bundler(input);
      setError(output.error);
      setCode(output.code);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Resizable direction="horizontal">
        <CodeEditor
          initialValue={`import React from 'react';
            import ReactDOM from 'react-dom';
            
            const App = ()=>{
              return <div>This is s ReactJS app</div>;
            }
            
            ReactDOM.render(<App/>, document.getElementById('root'));`}
          onChange={(value) => setInput(value)}
        />
      </Resizable>

      <Preview code={code} error={error} />
    </div>
  );
};

export default CodeCell;
