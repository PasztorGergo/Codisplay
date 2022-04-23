import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/transparent.css";

const Codemirror = dynamic(
  () => {
    import("codemirror/mode/javascript/javascript");
    return import("react-codemirror/lib/Codemirror");
  },
  { ssr: false }
);

export function CodeMirror() {
  const [text, setText] = useState("");
  return (
    <Codemirror
      value={text}
      options={{
        mode: "javascript",
        lineWrapping: true,
        lint: true,
        theme: "transparent",
      }}
      onBeforeChange={(editor, data, value) => {
        setText(value);
      }}
    />
  );
}
