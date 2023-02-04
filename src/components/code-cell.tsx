import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';
import './code-cell.css';

const REACT_APP_INIT = `import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
  return <div>This is s ReactJS app</div>;
}

ReactDOM.render(<App/>, document.getElementById('root'));`;

const CodeCell = () => {
  const [code, setCode] = useState('');
  const [err, setErr] = useState('');
  const [input, setInput] = useState('');
  const [initialValue, setInitialValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      window.history.replaceState(null, '', `?data=${btoa(input)}`);
      const output = await bundle(input);
      if (output) {
        setCode(output.code);
        setErr(output.err);
      }
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    const codeFromUrlParamData = window.location.search.split('data=')[1];
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
    <div id="code-cell">
      <Resizable>
        <CodeEditor
          initialValue={initialValue}
          onChange={(value) => setInput(value)}
        />
      </Resizable>
      <Preview code={code} err={err} />
    </div>
  );
};

export default CodeCell;
