import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "codemirror/lib/codemirror.css";

const Codemirror = dynamic(
  () => {
    import("codemirror/mode/xml/xml");
    return import("react-codemirror/lib/Codemirror");
  },
  { ssr: false }
);

export function CodeMirror() {
  const [text, setText] = useState("");
  return (
    <Codemirror
      value={text}
      options={{ mode: "xml", lineWrapping: true, lint: true }}
      onBeforeChange={(editor, data, value) => {
        setText(value);
      }}
    />
  );
}
