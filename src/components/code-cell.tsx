import { useState, useEffect, useRef } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";
import { Console } from "console-feed";
import prettier from "prettier";
import parser from "prettier/parser-babel";

import "./code-cell.css";

const REACT_APP_INIT = `import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// fonts
import WebFont from 'webfontloader';
// css-in-js
import styled, { ThemeProvider } from 'styled-components';
// Radix https://www.radix-ui.com/
import { blue, green } from '@radix-ui/colors';
import { FaceIcon } from '@radix-ui/react-icons';

// styled-components global styles don't work in the preview iframe
// so you need to set styles on the body directly
document.body.style = \`margin: 0; font-family: 'Atkinson Hyperlegible';\`;

WebFont.load({
  google: {
    families: ['Atkinson Hyperlegible'],
  },
});

const theme = {
  colors: {
    ...blue,
    ...green,
  },
};

const Title = styled.h1\`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
\`;

const Wrapper = styled.section\`  
  padding: 4em;
  background: papayawhip;
\`;

const Counter = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
\`;

const CountValue = styled.div\`
  font-size: 2em;
\`;

const Button = styled.button\`
  font-family: inherit;
  background-color: \${(props) => props.theme.colors.blue4};
  color: \${(props) => props.theme.colors.blue11};
  border-color: \${(props) => props.theme.colors.blue7};
  &:hover {
    background-color: \${(props) => props.theme.colors.green5};
    border-color: \${(props) => props.theme.colors.green8};
  }
\`;

const useCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return {
    count,
    increment,
  };
};

const Count = () => {
  const { count, increment } = useCounter();
  return (
    <Counter>
      <CountValue>{count}</CountValue>
      <Button onClick={() => {
          increment()
          console.log('button clicked');
        }
      }>Click me</Button>
    </Counter>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>
          Hello World!
          <FaceIcon />
        </Title>
        <Count />
      </Wrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`;

const formatEditorCode = (editorRef: React.MutableRefObject<any>) => {
  // get current value from editor
  const unformatted = editorRef.current.getModel().getValue();

  // format that value
  const formatted = prettier
    .format(unformatted, {
      parser: "babel",
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    })
    .replace(/\n$/, "");

  // set the formatted value back in the editor
  editorRef.current.setValue(formatted);
};

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [err, setErr] = useState("");
  const [input, setInput] = useState("");
  const [initialValue, setInitialValue] = useState("");
  const [logs, setLogs] = useState([]);
  const editorRef = useRef<any>();

  useEffect(() => {
    const timer = setTimeout(async () => {
      window.history.replaceState(null, "", `?data=${btoa(input)}`);
      setCode("");
      const output = await bundle(input);

      if (output) {
        setCode(output.code);
        setErr(output.err);
        formatEditorCode(editorRef);
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    const codeFromUrlParamData = window.location.search.split("data=")[1];
    if (codeFromUrlParamData) {
      const decodedCode = atob(codeFromUrlParamData);
      setInitialValue(decodedCode);
      setInput(decodedCode);
    } else {
      setInitialValue(REACT_APP_INIT);
      setInput(REACT_APP_INIT);
    }
  }, []);

  return (
    <>
      <div id="code-cell">
        <Resizable>
          <CodeEditor editorRef={editorRef} initialValue={initialValue} onChange={(value) => setInput(value)} />
        </Resizable>
        <Preview err={err} code={code} setLogs={setLogs} />
      </div>
      <div id="code-console">
        <Console logs={logs} variant="dark" />
      </div>
    </>
  );
};

export default CodeCell;
