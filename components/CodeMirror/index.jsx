import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import { useEditor } from "../../Hooks/EditorProvider";

const Codemirror = dynamic(
  () => {
    import("codemirror/mode/javascript/javascript");
    return import("react-codemirror/lib/Codemirror");
  },
  { ssr: false }
);

export function CodeMirror() {
  const [text, setText] = useState("");
  const { darkMode } = useEditor();
  return (
    <>
      <style jsx global>
        {`
          .CodeMirror.cm-s-default {
            background: transparent;
            color: ${darkMode ? "#fefefe" : "initial"};
          }
          .CodeMirror-cursor {
            border-left: 1px solid ${darkMode ? "#fefefe" : "initial"};
          }
        `}
      </style>
      <Codemirror
        value={text}
        options={{
          mode: "javascript",
          lineWrapping: true,
          lint: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setText(value);
        }}
      />
    </>
  );
}
