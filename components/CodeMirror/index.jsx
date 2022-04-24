import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import { useEditor } from "../../Hooks/EditorProvider";
import chakraUiTheme from "@chakra-ui/theme";

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
  const startColor = localStorage.getItem("startColor");
  const endColor = localStorage.getItem("endColor");
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
          span.cm-comment {
            color: ${chakraUiTheme.colors.gray[600]} !important;
          }
          span.cm-atom {
            color: ${startColor} !important;
            filter: hue-rotate(20deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-number {
            color: ${endColor} !important;
            filter: hue-rotate(40deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }

          span.cm-property,
          span.cm-attribute {
            color: ${startColor} !important;
            filter: hue-rotate(90deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-keyword {
            color: ${startColor} !important;
            filter: hue-rotate(180deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-string {
            color: ${endColor} !important;
            filter: hue-rotate(90deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }

          span.cm-variable {
            color: ${endColor} !important;
            filter: hue-rotate(110deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-variable-2 {
            color: ${endColor} !important;
            filter: hue-rotate(150deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-def {
            color: ${startColor} !important;
            filter: hue-rotate(310deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-bracket {
            color: ${startColor} !important;
            filter: hue-rotate(160deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-tag {
            color: ${startColor} !important;
            filter: hue-rotate(180deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-link {
            color: ${startColor} !important;
            filter: hue-rotate(200deg)
              ${darkMode ? "brightness(1.4)" : "brightness(1)"};
          }
          span.cm-error {
            background: ${startColor} !important;
            color: ${chakraUiTheme.colors.red[600]};
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
