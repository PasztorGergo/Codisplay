import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";

const Codemirror = dynamic(
  () => import("react-codemirror2").then((value) => value.Controlled),
  { ssr: false }
);

export function CodeMirror() {
  const [text, setText] = useState();
  return (
    <Codemirror
      value={text}
      options={{ mode: "xml", lineWrapping: true }}
      onBeforeChange={(editor, data, value) => {
        setText(value);
      }}
    />
  );
}
