import "./code-editor.css";
import "./syntax.css";
import React, { useState } from "react";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import codeShift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";

interface CodeEditorProps {
  editorRef: React.MutableRefObject<any>;
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ editorRef, onChange, initialValue }) => {
  const [shareButtonLabel, setShareButtonLabel] = useState("Share");

  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-share is-small is-primary is-light is-rounded"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareButtonLabel("Copied!");
          setTimeout(() => {
            setShareButtonLabel("Share");
          }, 1000);
        }}
      >
        {shareButtonLabel}
      </button>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        theme="dark"
        language="javascript"
        height="100%"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
