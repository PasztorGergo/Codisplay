import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

const Codemirror = dynamic(
  () => {
    import("codemirror/lib/codemirror.css");
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
