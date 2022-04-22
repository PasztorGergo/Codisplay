import React from "react";
import { CodeMirror } from "../CodeMirror";

export function ConsoleWrapper() {
  return (
    <div className="ConsoleWrapper">
      <CodeMirror />
      <div className="background"></div>
    </div>
  );
}
