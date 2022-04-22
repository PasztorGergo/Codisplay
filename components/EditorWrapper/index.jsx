import React from "react";
import { ConsoleWrapper } from "../ConsoleWrapper";
import { EditorPanel } from "../EditorPanel";

export function EditorWrapper() {
  return (
    <div className="EditorWrapper">
      <EditorPanel />
      <ConsoleWrapper />
    </div>
  );
}
